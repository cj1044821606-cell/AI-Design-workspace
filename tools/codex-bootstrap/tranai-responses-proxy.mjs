import { createServer } from "node:http";
import { randomUUID } from "node:crypto";
import { mkdirSync, appendFileSync, existsSync, readFileSync, writeFileSync } from "node:fs";
import { homedir } from "node:os";
import path from "node:path";

const HOST = process.env.TRANAI_PROXY_HOST || "127.0.0.1";
const PORT = Number(process.env.TRANAI_PROXY_PORT || "4317");
const TRANAI_BASE_URL =
  (
    process.env.TRANAI_BASE_URL ||
    "https://hk-intra-paas.transsion.com/tranai-proxy/v1"
  ).replace(/\/+$/, "");
const TRANAI_API_KEY =
  process.env.TRANAI_API_KEY || process.env.OPENAI_API_KEY || "";
const TRANAI_USER_NO = process.env.TRANAI_USER_NO || "";
const TRANAI_USER_NAME = process.env.TRANAI_USER_NAME || "";
const TRANAI_USER_DEPT_NAME = process.env.TRANAI_USER_DEPT_NAME || "";
const FALLBACK_MODEL = "gpt-5.4";
const MAX_FORWARD_CHARS = Number(process.env.TRANAI_PROXY_MAX_FORWARD_CHARS || "900000");
const MAX_OLD_MESSAGE_CHARS = Number(process.env.TRANAI_PROXY_MAX_OLD_MESSAGE_CHARS || "12000");
const MAX_OLD_TOOL_OUTPUT_CHARS = Number(process.env.TRANAI_PROXY_MAX_OLD_TOOL_OUTPUT_CHARS || "6000");
const MAX_OLD_TOOL_ARGS_CHARS = Number(process.env.TRANAI_PROXY_MAX_OLD_TOOL_ARGS_CHARS || "4000");
const RECENT_TURNS_TO_KEEP_FULL = Number(process.env.TRANAI_PROXY_RECENT_TURNS || "8");
const MIN_TURNS_TO_KEEP = Number(process.env.TRANAI_PROXY_MIN_TURNS || "4");
const SESSION_STATE_TTL_MS = Number(
  process.env.TRANAI_PROXY_SESSION_TTL_MS || `${6 * 60 * 60 * 1000}`,
);
const JSON_REQUEST_TIMEOUT_MS = Number(
  process.env.TRANAI_PROXY_JSON_TIMEOUT_MS || `${2 * 60 * 1000}`,
);
const STREAM_HEADER_TIMEOUT_MS = Number(
  process.env.TRANAI_PROXY_STREAM_HEADER_TIMEOUT_MS || `${45 * 1000}`,
);
const STREAM_IDLE_TIMEOUT_MS = Number(
  process.env.TRANAI_PROXY_STREAM_IDLE_TIMEOUT_MS || `${2 * 60 * 1000}`,
);
const STREAM_HEARTBEAT_MS = Number(
  process.env.TRANAI_PROXY_STREAM_HEARTBEAT_MS || `${10 * 1000}`,
);
const LOG_DIR =
  process.env.TRANAI_PROXY_LOG_DIR ||
  path.join(homedir(), ".codex", "log", "tranai-proxy");
const RESPONSE_STATE_FILE = path.join(LOG_DIR, "response-state.json");
const SESSION_STATE_FILE = path.join(LOG_DIR, "session-state.json");

mkdirSync(LOG_DIR, { recursive: true });

function loadStateMap(file) {
  try {
    if (!existsSync(file)) {
      return new Map();
    }

    const text = readFileSync(file, "utf8");
    if (!text.trim()) {
      return new Map();
    }

    const value = JSON.parse(text);
    if (!value || typeof value !== "object") {
      return new Map();
    }

    return new Map(Object.entries(value));
  } catch (error) {
    appendFileSync(
      path.join(LOG_DIR, "proxy.log"),
      `[${new Date().toISOString()}] state.load_error ${JSON.stringify({
        file,
        message: error instanceof Error ? error.message : String(error),
      })}\n`,
      "utf8",
    );
    return new Map();
  }
}

const responseState = loadStateMap(RESPONSE_STATE_FILE);
const sessionState = loadStateMap(SESSION_STATE_FILE);
const COMPATIBILITY_GUIDANCE_HEADER = "[Compatibility guidance]";
let persistTimer = null;

function nowIso() {
  return new Date().toISOString();
}

function logLine(message, payload) {
  const file = path.join(LOG_DIR, "proxy.log");
  const line =
    `[${nowIso()}] ${message}` +
    (payload === undefined ? "" : ` ${JSON.stringify(payload)}`) +
    "\n";
  appendFileSync(file, line, "utf8");
}

function persistStateMap(file, map) {
  writeFileSync(
    file,
    JSON.stringify(Object.fromEntries(map.entries()), null, 2),
    "utf8",
  );
}

function flushPersistedState() {
  if (persistTimer) {
    clearTimeout(persistTimer);
    persistTimer = null;
  }
  persistStateMap(RESPONSE_STATE_FILE, responseState);
  persistStateMap(SESSION_STATE_FILE, sessionState);
}

function schedulePersistState() {
  if (persistTimer) return;
  persistTimer = setTimeout(() => {
    persistTimer = null;
    flushPersistedState();
  }, 200);
}

function sendJson(res, statusCode, payload) {
  res.writeHead(statusCode, {
    "content-type": "application/json; charset=utf-8",
    "access-control-allow-origin": "*",
  });
  res.end(JSON.stringify(payload));
}

function sendSseEvent(res, event) {
  res.write(`event: ${event.type}\n`);
  res.write(`data: ${JSON.stringify(event)}\n\n`);
}

function cloneJson(value) {
  return value == null ? value : JSON.parse(JSON.stringify(value));
}

function pruneExpiredState(map) {
  const cutoff = Date.now() - SESSION_STATE_TTL_MS;
  let changed = false;
  for (const [key, value] of map.entries()) {
    if (!value || typeof value !== "object") {
      map.delete(key);
      changed = true;
      continue;
    }
    if ((value.updated_at || 0) < cutoff) {
      map.delete(key);
      changed = true;
    }
  }
  return changed;
}

async function readJsonBody(req) {
  const chunks = [];
  for await (const chunk of req) {
    chunks.push(chunk);
  }
  const text = Buffer.concat(chunks).toString("utf8");
  return text ? JSON.parse(text) : {};
}

function stringifyContent(value) {
  if (value == null) return "";
  if (typeof value === "string") return value;
  if (Array.isArray(value)) {
    return value.map((part) => stringifyContent(part)).join("");
  }
  if (typeof value === "object") {
    if (typeof value.text === "string") return value.text;
    if (typeof value.content === "string") return value.content;
    if (typeof value.output === "string") return value.output;
    if (typeof value.input === "string") return value.input;
  }
  return JSON.stringify(value);
}

function clipText(text, maxChars, label = "truncated") {
  const value = String(text || "");
  if (!maxChars || value.length <= maxChars) return value;
  return `${value.slice(0, Math.max(0, maxChars))}\n...[${label}, original_length=${value.length}]`;
}

function estimateJsonSize(value) {
  try {
    return JSON.stringify(value).length;
  } catch {
    return 0;
  }
}

function encodeHeaderValue(value) {
  if (!value) return "";
  const text = String(value);
  try {
    return encodeURIComponent(decodeURIComponent(text));
  } catch {
    return encodeURIComponent(text);
  }
}

function buildUpstreamHeaders({ includeContentType = true } = {}) {
  const headers = {
    Authorization: `Bearer ${TRANAI_API_KEY}`,
  };

  if (includeContentType) {
    headers["Content-Type"] = "application/json";
  }
  if (TRANAI_USER_NO) {
    headers["x-user-no"] = TRANAI_USER_NO;
  }
  if (TRANAI_USER_NAME) {
    headers["x-user-name"] = encodeHeaderValue(TRANAI_USER_NAME);
  }
  if (TRANAI_USER_DEPT_NAME) {
    headers["x-user-dept-name"] = encodeHeaderValue(TRANAI_USER_DEPT_NAME);
  }

  return headers;
}

function isImageMarkerText(text) {
  const trimmed = String(text || "").trim();
  return trimmed === "<image>" || trimmed === "</image>";
}

function normalizeImageUrl(part) {
  if (!part || typeof part !== "object") return null;

  const source =
    part.type === "input_image" ? part.image_url : part.image_url || part.input_image;
  if (!source) return null;

  if (typeof source === "string") {
    return { url: source };
  }

  if (typeof source === "object" && typeof source.url === "string") {
    const image = { url: source.url };
    if (typeof source.detail === "string") {
      image.detail = source.detail;
    }
    return image;
  }

  return null;
}

function normalizeMessageContent(content, role) {
  if (typeof content === "string") return content;
  if (!Array.isArray(content)) return stringifyContent(content);

  const text = [];
  const rich = [];
  let hasImage = false;

  for (const part of content) {
    if (!part || typeof part !== "object") continue;

    if (part.type === "input_image" || part.type === "image_url") {
      const image = normalizeImageUrl(part);
      if (image && role === "user") {
        rich.push({ type: "image_url", image_url: image });
        hasImage = true;
      }
      continue;
    }

    let value = "";
    if (
      part.type === "input_text" ||
      part.type === "output_text" ||
      part.type === "text"
    ) {
      value = typeof part.text === "string" ? part.text : "";
    } else if (typeof part.content === "string") {
      value = part.content;
    } else {
      value = stringifyContent(part);
    }

    if (!value) continue;
    if (role === "user" && isImageMarkerText(value)) continue;

    text.push(value);
    if (role === "user") {
      rich.push({ type: "text", text: value });
    }
  }

  if (role === "user" && hasImage) {
    return rich;
  }

  return text.join("");
}

function compactRichUserContent(content, recent) {
  if (!Array.isArray(content)) return content;

  const next = [];
  let droppedImage = false;
  for (const part of content) {
    if (!part || typeof part !== "object") continue;

    if (part.type === "image_url") {
      if (recent) {
        next.push(part);
      } else {
        droppedImage = true;
      }
      continue;
    }

    if (part.type === "text") {
      next.push({
        ...part,
        text: recent ? String(part.text || "") : clipText(part.text || "", MAX_OLD_MESSAGE_CHARS, "older_text_omitted"),
      });
      continue;
    }

    next.push(part);
  }

  if (droppedImage) {
    next.push({ type: "text", text: "[Earlier image omitted to reduce request size]" });
  }

  return next;
}

function compactChatMessage(message, recent) {
  const next = cloneJson(message);
  if (!next || typeof next !== "object") return next;

  if (next.role === "tool") {
    next.content = recent
      ? String(next.content || "")
      : clipText(next.content || "", MAX_OLD_TOOL_OUTPUT_CHARS, "older_tool_output_omitted");
    return next;
  }

  if (next.role === "assistant" && Array.isArray(next.tool_calls)) {
    next.tool_calls = next.tool_calls.map((toolCall) => ({
      ...toolCall,
      function: {
        ...toolCall.function,
        arguments: recent
          ? String(toolCall.function?.arguments || "")
          : clipText(toolCall.function?.arguments || "", MAX_OLD_TOOL_ARGS_CHARS, "older_tool_arguments_omitted"),
      },
    }));
  }

  if (typeof next.content === "string") {
    next.content = recent
      ? next.content
      : clipText(next.content, MAX_OLD_MESSAGE_CHARS, "older_message_omitted");
    return next;
  }

  if (Array.isArray(next.content) && next.role === "user") {
    next.content = compactRichUserContent(next.content, recent);
  }

  return next;
}

function splitConversationTurns(messages) {
  const turns = [];
  let current = [];

  for (const message of messages) {
    if (message.role === "user" && current.length) {
      turns.push(current);
      current = [message];
      continue;
    }
    current.push(message);
  }

  if (current.length) {
    turns.push(current);
  }

  return turns;
}

function compactConversationMessages(messages) {
  const originalSize = estimateJsonSize(messages);
  if (originalSize <= MAX_FORWARD_CHARS) {
    return messages;
  }

  const prefix = [];
  let index = 0;
  while (index < messages.length && messages[index]?.role === "system") {
    prefix.push(messages[index]);
    index += 1;
  }

  const turns = splitConversationTurns(messages.slice(index));
  const recentStart = Math.max(0, turns.length - RECENT_TURNS_TO_KEEP_FULL);
  let workingTurns = turns.map((turn, turnIndex) =>
    turn.map((message) => compactChatMessage(message, turnIndex >= recentStart)),
  );

  let compacted = prefix.concat(...workingTurns);
  while (
    estimateJsonSize(compacted) > MAX_FORWARD_CHARS &&
    workingTurns.length > MIN_TURNS_TO_KEEP
  ) {
    workingTurns.shift();
    compacted = prefix.concat(...workingTurns);
  }

  if (estimateJsonSize(compacted) > MAX_FORWARD_CHARS) {
    workingTurns = workingTurns.map((turn) =>
      turn.map((message) => compactChatMessage(message, false)),
    );
    compacted = prefix.concat(...workingTurns);
  }

  while (
    estimateJsonSize(compacted) > MAX_FORWARD_CHARS &&
    workingTurns.length > 1
  ) {
    workingTurns.shift();
    compacted = prefix.concat(...workingTurns);
  }

  logLine("conversation.compacted", {
    original_size: originalSize,
    compacted_size: estimateJsonSize(compacted),
    total_turns: turns.length,
    kept_turns: workingTurns.length,
  });

  return compacted;
}

function stableMessageKey(message) {
  try {
    return JSON.stringify(message);
  } catch {
    return String(message?.role || "unknown");
  }
}

function commonPrefixLength(left, right) {
  const count = Math.min(left.length, right.length);
  let index = 0;
  while (index < count) {
    if (stableMessageKey(left[index]) !== stableMessageKey(right[index])) {
      break;
    }
    index += 1;
  }
  return index;
}

function buildCompatibilityGuidance(body) {
  const notes = [];
  const hasTools = Array.isArray(body.tools) && body.tools.length > 0;
  const verbosity = body.text?.verbosity;

  if (hasTools) {
    notes.push(
      "You are serving a Codex client through a compatibility proxy. Behave like an autonomous coding agent and continue working until the task is complete or you are genuinely blocked.",
    );
    notes.push(
      "After each tool result, either call the next needed tool immediately or provide the final answer.",
    );
    notes.push(
      "Do not stop at partial progress, single-step status updates, or wait for the user when the next action is already clear.",
    );
  }

  if (verbosity === "low") {
    notes.push(
      "Low verbosity means concise wording, not reduced initiative, fewer steps, or a partial solution.",
    );
  } else if (verbosity === "medium" || verbosity === "high") {
    notes.push(`Match the requested response verbosity of ${verbosity} while still finishing the task end-to-end.`);
  }

  if (!notes.length) return "";
  return `${COMPATIBILITY_GUIDANCE_HEADER}\n${notes.join(" ")}`;
}

function buildSystemInstruction(body) {
  const parts = [];
  if (body.instructions) {
    parts.push(String(body.instructions));
  }

  const guidance = buildCompatibilityGuidance(body);
  if (guidance) {
    parts.push(guidance);
  }

  return parts.filter(Boolean).join("\n\n");
}

function mapRole(role) {
  if (role === "developer") return "system";
  return role || "user";
}

function normalizeReasoningEffort(reasoning) {
  const effort =
    typeof reasoning === "string"
      ? reasoning
      : reasoning && typeof reasoning === "object"
        ? reasoning.effort
        : null;

  if (effort === "xhigh") return "high";
  if (effort === "minimal") return "minimal";
  if (effort === "low") return "low";
  if (effort === "medium") return "medium";
  if (effort === "high") return "high";
  return null;
}

function mapReasoningModel(model, reasoning) {
  if (!model || typeof model !== "string") return FALLBACK_MODEL;

  const byModel = {
    "gpt-5.4": "gpt-5.4",
    "gpt-5.2": "gpt-5.2-chat",
    "gpt-5.4-mini": "gpt-5.4",
    "gpt-5-mini": "gpt-5.4",
    "gpt-5.3-codex": "gpt-5.4",
  };

  return byModel[model] || FALLBACK_MODEL;
}

function normalizeFunctionTool(tool) {
  if (!tool || typeof tool !== "object") return null;
  if (tool.type !== "function") return null;

  if (tool.function) {
    return {
      type: "function",
      function: {
        name: tool.function.name,
        description: tool.function.description,
        parameters: tool.function.parameters || tool.function.input_schema || { type: "object" },
        strict: tool.function.strict,
      },
    };
  }

  return {
    type: "function",
    function: {
      name: tool.name,
      description: tool.description,
      parameters: tool.parameters || tool.input_schema || { type: "object" },
      strict: tool.strict,
    },
  };
}

function normalizeToolChoice(choice) {
  if (!choice) return undefined;
  if (typeof choice === "string") return choice;
  if (choice.type === "function" && choice.function?.name) {
    return { type: "function", function: { name: choice.function.name } };
  }
  if (choice.type === "function" && choice.name) {
    return { type: "function", function: { name: choice.name } };
  }
  return undefined;
}

function getSessionAnchor(body) {
  if (typeof body.prompt_cache_key === "string" && body.prompt_cache_key) {
    return `prompt:${body.prompt_cache_key}`;
  }

  const installationId = body.client_metadata?.["x-codex-installation-id"];
  if (typeof installationId === "string" && installationId) {
    const model = typeof body.model === "string" && body.model ? body.model : "gpt-5.4";
    return `install:${installationId}:model:${model}`;
  }

  return null;
}

function appendInputItems(base, body) {
  const items = body.input == null ? [] : Array.isArray(body.input) ? body.input : [body.input];
  for (const item of items) {
    if (typeof item === "string") {
      base.push({ role: "user", content: item });
      continue;
    }
    if (!item || typeof item !== "object") continue;

    if (item.type === "message" || item.role) {
      const role = mapRole(item.role || "user");
      base.push({
        role,
        content: normalizeMessageContent(item.content ?? item.text ?? item.input ?? "", role),
      });
      continue;
    }

    if (item.type === "function_call_output") {
      base.push({
        role: "tool",
        tool_call_id: item.call_id || item.id || randomUUID(),
        content: stringifyContent(item.output),
      });
      continue;
    }

    if (item.type === "function_call") {
      const toolCall = {
        id: item.call_id || item.id || `call_${randomUUID()}`,
        type: "function",
        function: {
          name: item.name,
          arguments:
            typeof item.arguments === "string"
              ? item.arguments
              : JSON.stringify(item.arguments || {}),
        },
      };

      const last = base[base.length - 1];
      if (
        last &&
        last.role === "assistant" &&
        Array.isArray(last.tool_calls) &&
        !last.content
      ) {
        last.tool_calls.push(toolCall);
      } else {
        base.push({
          role: "assistant",
          content: "",
          tool_calls: [toolCall],
        });
      }
      continue;
    }

    base.push({ role: "user", content: stringifyContent(item) });
  }
}

function buildNormalizedConversation(body) {
  const base = [];

  const systemInstruction = buildSystemInstruction(body);
  if (systemInstruction) {
    const systemMessage = { role: "system", content: systemInstruction };
    base.push(systemMessage);
  }

  appendInputItems(base, body);
  return base;
}

function buildConversationMessages(body) {
  const responsePruned = pruneExpiredState(responseState);
  const sessionPruned = pruneExpiredState(sessionState);
  if (responsePruned || sessionPruned) {
    schedulePersistState();
  }

  if (body.previous_response_id) {
    const base = cloneJson(responseState.get(body.previous_response_id)?.messages || []);

    const systemInstruction = buildSystemInstruction(body);
    if (systemInstruction) {
      const systemMessage = { role: "system", content: systemInstruction };
      const first = base[0];
      if (!first || first.role !== "system" || first.content !== systemMessage.content) {
        base.unshift(systemMessage);
      }
    }

    appendInputItems(base, body);
    return compactConversationMessages(base);
  }

  const normalized = buildNormalizedConversation(body);
  const anchor = getSessionAnchor(body);
  if (!anchor) {
    return compactConversationMessages(normalized);
  }

  const previous = sessionState.get(anchor);
  if (!previous?.raw_messages?.length) {
    const compacted = compactConversationMessages(normalized);
    sessionState.set(anchor, {
      raw_messages: cloneJson(normalized),
      forward_messages: cloneJson(compacted),
      updated_at: Date.now(),
    });
    schedulePersistState();
    return compacted;
  }

  const prefixLength = commonPrefixLength(previous.raw_messages, normalized);
  const suffix = normalized.slice(prefixLength);
  const shouldReuse =
    prefixLength >= Math.max(12, Math.floor(previous.raw_messages.length * 0.6)) &&
    suffix.length < normalized.length;

  const rebuilt = shouldReuse
    ? cloneJson(previous.forward_messages || []).concat(cloneJson(suffix))
    : normalized;
  const compacted = compactConversationMessages(rebuilt);

  sessionState.set(anchor, {
    raw_messages: cloneJson(normalized),
    forward_messages: cloneJson(compacted),
    updated_at: Date.now(),
  });
  schedulePersistState();

  if (shouldReuse) {
    logLine("conversation.session_reused", {
      anchor,
      prefix_length: prefixLength,
      previous_raw_count: previous.raw_messages.length,
      incoming_count: normalized.length,
      suffix_count: suffix.length,
    });
  }

  return compacted;
}

function buildChatRequest(body) {
  const requestedModel = typeof body.model === "string" ? body.model : "gpt-5.4";
  const model = mapReasoningModel(requestedModel, body.reasoning);
  const reasoningEffort = normalizeReasoningEffort(body.reasoning);
  const messages = buildConversationMessages(body);
  const tools = Array.isArray(body.tools)
    ? body.tools.map(normalizeFunctionTool).filter(Boolean)
    : undefined;

  const chatBody = {
    model,
    messages,
    stream: Boolean(body.stream),
  };

  if (chatBody.stream) {
    chatBody.stream_options = { include_usage: true };
  }

  if (tools?.length) chatBody.tools = tools;
  const toolChoice = tools?.length ? normalizeToolChoice(body.tool_choice) : undefined;
  if (toolChoice) chatBody.tool_choice = toolChoice;
  if (tools?.length && typeof body.parallel_tool_calls === "boolean") {
    chatBody.parallel_tool_calls = body.parallel_tool_calls;
  }
  if (typeof body.temperature === "number") {
    chatBody.temperature = body.temperature;
  }
  if (typeof body.top_p === "number") {
    chatBody.top_p = body.top_p;
  }
  if (typeof body.max_output_tokens === "number") {
    chatBody.max_completion_tokens = body.max_output_tokens;
  }
  if (typeof body.max_completion_tokens === "number") {
    chatBody.max_completion_tokens = body.max_completion_tokens;
  }
  if (reasoningEffort && typeof model === "string" && model.startsWith("gpt-5")) {
    chatBody.reasoning_effort = reasoningEffort;
  }
  if (typeof body.user === "string") {
    chatBody.user = body.user;
  }
  if (body.response_format && typeof body.response_format === "object") {
    chatBody.response_format = body.response_format;
  } else if (body.text?.format && typeof body.text.format === "object") {
    chatBody.response_format = body.text.format;
  }

  return { chatBody, messages, requestedModel, upstreamModel: model, reasoningEffort };
}

function makeResponseSkeleton(responseId, requestedModel) {
  return {
    id: responseId,
    object: "response",
    created_at: Math.floor(Date.now() / 1000),
    status: "completed",
    error: null,
    incomplete_details: null,
    instructions: null,
    metadata: {},
    model: requestedModel,
    output: [],
    parallel_tool_calls: true,
    temperature: 1,
    tool_choice: "auto",
    tools: [],
    top_p: 1,
    max_output_tokens: null,
    previous_response_id: null,
    reasoning: { effort: null, summary: null },
    output_text: "",
    usage: null,
  };
}

function makeAssistantMessage(text) {
  return {
    id: `msg_${randomUUID().replace(/-/g, "")}`,
    type: "message",
    status: "completed",
    role: "assistant",
    content: [
      {
        type: "output_text",
        text,
        annotations: [],
      },
    ],
  };
}

function makeFunctionCallItem(toolCall) {
  return {
    id: `fc_${randomUUID().replace(/-/g, "")}`,
    type: "function_call",
    status: "completed",
    call_id: toolCall.id || `call_${randomUUID().replace(/-/g, "")}`,
    name: toolCall.function?.name || "unknown",
    arguments: toolCall.function?.arguments || "",
  };
}

function translateUsage(usage) {
  if (!usage) return null;
  return {
    input_tokens: usage.prompt_tokens ?? 0,
    input_tokens_details: {
      cached_tokens: usage.prompt_tokens_details?.cached_tokens ?? 0,
    },
    output_tokens: usage.completion_tokens ?? 0,
    output_tokens_details: {
      reasoning_tokens: usage.completion_tokens_details?.reasoning_tokens ?? 0,
    },
    total_tokens: usage.total_tokens ?? 0,
  };
}

function updateConversationState(responseId, messages, assistantText, toolCalls) {
  const nextMessages = cloneJson(messages);
  if (toolCalls?.length) {
    nextMessages.push({
      role: "assistant",
      content: assistantText || "",
      tool_calls: toolCalls.map((toolCall) => ({
        id: toolCall.id,
        type: "function",
        function: {
          name: toolCall.function?.name || "unknown",
          arguments: toolCall.function?.arguments || "",
        },
      })),
    });
  } else {
    nextMessages.push({
      role: "assistant",
      content: assistantText || "",
    });
  }
  responseState.set(responseId, { messages: nextMessages, updated_at: Date.now() });
  schedulePersistState();
}

function createTimeoutError(message) {
  const error = new Error(message);
  error.name = "TimeoutError";
  return error;
}

async function issueChatCompletion(requestBody, { timeoutMs }) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => {
    controller.abort(createTimeoutError(`Upstream request timed out after ${timeoutMs}ms`));
  }, timeoutMs);

  try {
    const response = await fetch(`${TRANAI_BASE_URL}/chat/completions`, {
      method: "POST",
      headers: buildUpstreamHeaders(),
      body: JSON.stringify(requestBody),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);
    return { response, controller };
  } catch (error) {
    clearTimeout(timeoutId);
    throw error;
  }
}

function stripReasoningFields(requestBody) {
  const next = { ...requestBody };
  delete next.reasoning;
  delete next.reasoning_effort;
  return next;
}

function stripStreamOptions(requestBody) {
  const next = { ...requestBody };
  delete next.stream_options;
  return next;
}

async function fetchChatCompletion(body) {
  let requestBody = body;
  const timeoutMs = requestBody.stream ? STREAM_HEADER_TIMEOUT_MS : JSON_REQUEST_TIMEOUT_MS;
  let { response, controller } = await issueChatCompletion(requestBody, { timeoutMs });

  if (
    response.status === 400 &&
    requestBody.stream &&
    requestBody.stream_options?.include_usage
  ) {
    const text = await response.text();
    logLine("upstream.stream_options_fallback", {
      model: requestBody.model,
      status: response.status,
      body_preview: text.slice(0, 300),
    });

    requestBody = stripStreamOptions(requestBody);
    ({ response, controller } = await issueChatCompletion(requestBody, { timeoutMs }));
  }

  if (response.status === 400 && requestBody.reasoning_effort) {
    const text = await response.text();
    logLine("upstream.reasoning_fallback", {
      model: requestBody.model,
      status: response.status,
      body_preview: text.slice(0, 300),
    });

    requestBody = stripReasoningFields(requestBody);
    ({ response, controller } = await issueChatCompletion(requestBody, { timeoutMs }));
  }

  if (response.status === 403 && requestBody.model !== FALLBACK_MODEL) {
    const text = await response.text();
    logLine("upstream.model_fallback", {
      from: requestBody.model,
      to: FALLBACK_MODEL,
      status: response.status,
      body_preview: text.slice(0, 300),
    });

    requestBody = { ...requestBody, model: FALLBACK_MODEL };
    ({ response, controller } = await issueChatCompletion(requestBody, { timeoutMs }));

    if (
      response.status === 400 &&
      requestBody.stream &&
      requestBody.stream_options?.include_usage
    ) {
      const text = await response.text();
      logLine("upstream.stream_options_fallback", {
        model: requestBody.model,
        status: response.status,
        body_preview: text.slice(0, 300),
      });

      requestBody = stripStreamOptions(requestBody);
      ({ response, controller } = await issueChatCompletion(requestBody, { timeoutMs }));
    }

    if (response.status === 400 && requestBody.reasoning_effort) {
      const retryText = await response.text();
      logLine("upstream.reasoning_fallback", {
        model: requestBody.model,
        status: response.status,
        body_preview: retryText.slice(0, 300),
      });

      requestBody = stripReasoningFields(requestBody);
      ({ response, controller } = await issueChatCompletion(requestBody, { timeoutMs }));
    }
  }

  return { response, requestBody, controller };
}

async function forwardJsonChat(body) {
  const { response, requestBody } = await fetchChatCompletion(body);

  const text = await response.text();
  let json = null;
  try {
    json = text ? JSON.parse(text) : null;
  } catch {
    json = null;
  }

  return {
    ok: response.ok,
    status: response.status,
    text,
    json,
    requestBody,
  };
}

async function handleJsonResponse(body, res) {
  const { chatBody, messages, requestedModel, reasoningEffort } = buildChatRequest(body);
  const upstream = await forwardJsonChat({ ...chatBody, stream: false });
  if (!upstream.ok || !upstream.json) {
    sendJson(res, upstream.status || 502, {
      error: {
        message: upstream.text || "Upstream chat completion request failed",
      },
    });
    return;
  }

  const choice = upstream.json.choices?.[0] || {};
  const assistantText = choice.message?.content || "";
  const toolCalls = choice.message?.tool_calls || [];

  const responseId = `resp_${randomUUID().replace(/-/g, "")}`;
  const payload = makeResponseSkeleton(responseId, requestedModel);
  payload.reasoning.effort = reasoningEffort;
  payload.output = [];
  if (assistantText) payload.output.push(makeAssistantMessage(assistantText));
  for (const toolCall of toolCalls) {
    payload.output.push(makeFunctionCallItem(toolCall));
  }
  payload.output_text = assistantText;
  payload.usage = translateUsage(upstream.json.usage);

  updateConversationState(responseId, messages, assistantText, toolCalls);
  sendJson(res, 200, payload);
}

function parseSseLines(buffer) {
  const events = [];
  let start = 0;
  while (true) {
    const idx = buffer.indexOf("\n\n", start);
    if (idx === -1) break;
    const raw = buffer.slice(start, idx);
    start = idx + 2;
    const lines = raw.split(/\r?\n/);
    const dataLines = [];
    for (const line of lines) {
      if (line.startsWith("data:")) {
        dataLines.push(line.slice(5).trimStart());
      }
    }
    if (dataLines.length) {
      events.push(dataLines.join("\n"));
    }
  }
  return { events, rest: buffer.slice(start) };
}

async function handleStreamResponse(body, res) {
  const { chatBody, messages, requestedModel, reasoningEffort } = buildChatRequest(body);
  const { response: upstream, controller } = await fetchChatCompletion({
    ...chatBody,
    stream: true,
  });

  if (!upstream.ok || !upstream.body) {
    const text = await upstream.text();
    sendJson(res, upstream.status || 502, {
      error: { message: text || "Upstream streaming request failed" },
    });
    return;
  }

  const responseId = `resp_${randomUUID().replace(/-/g, "")}`;
  const createdAt = Math.floor(Date.now() / 1000);
  const responseTemplate = makeResponseSkeleton(responseId, requestedModel);
  responseTemplate.reasoning.effort = reasoningEffort;
  responseTemplate.created_at = createdAt;

  res.writeHead(200, {
    "content-type": "text/event-stream; charset=utf-8",
    "cache-control": "no-cache, no-transform",
    connection: "keep-alive",
    "access-control-allow-origin": "*",
  });

  const heartbeat = setInterval(() => {
    try {
      res.write(": keep-alive\n\n");
    } catch {}
  }, STREAM_HEARTBEAT_MS);

  let idleTimer = null;
  const resetIdleTimer = () => {
    if (idleTimer) clearTimeout(idleTimer);
    idleTimer = setTimeout(() => {
      controller.abort(
        createTimeoutError(`Upstream stream idle for more than ${STREAM_IDLE_TIMEOUT_MS}ms`),
      );
    }, STREAM_IDLE_TIMEOUT_MS);
  };
  const stopStreamTimers = () => {
    clearInterval(heartbeat);
    if (idleTimer) {
      clearTimeout(idleTimer);
      idleTimer = null;
    }
  };

  sendSseEvent(res, {
    type: "response.created",
    response: responseTemplate,
  });
  sendSseEvent(res, {
    type: "response.in_progress",
    response: { ...responseTemplate, status: "in_progress" },
  });

  const decoder = new TextDecoder();
  let buffer = "";
  let assistantText = "";
  const toolCalls = new Map();
  let messageItem = null;
  let messagePartAdded = false;
  let streamUsage = null;
  resetIdleTimer();

  try {
    for await (const chunk of upstream.body) {
      resetIdleTimer();
      buffer += decoder.decode(chunk, { stream: true });
      const parsed = parseSseLines(buffer);
      buffer = parsed.rest;

      for (const data of parsed.events) {
        if (data === "[DONE]") continue;

        let event;
        try {
          event = JSON.parse(data);
        } catch {
          continue;
        }

        if (event.usage) {
          streamUsage = event.usage;
        }

        const delta = event.choices?.[0]?.delta || {};

        if (typeof delta.content === "string" && delta.content.length) {
          if (!messageItem) {
            messageItem = makeAssistantMessage("");
            messageItem.status = "in_progress";
            messageItem.content[0].text = "";
            sendSseEvent(res, {
              type: "response.output_item.added",
              response_id: responseId,
              output_index: 0,
              item: messageItem,
            });
          }

          if (!messagePartAdded) {
            messagePartAdded = true;
            sendSseEvent(res, {
              type: "response.content_part.added",
              response_id: responseId,
              item_id: messageItem.id,
              output_index: 0,
              content_index: 0,
              part: { type: "output_text", text: "" },
            });
          }

          assistantText += delta.content;
          sendSseEvent(res, {
            type: "response.output_text.delta",
            response_id: responseId,
            item_id: messageItem.id,
            output_index: 0,
            content_index: 0,
            delta: delta.content,
          });
        }

        if (Array.isArray(delta.tool_calls)) {
          for (const toolDelta of delta.tool_calls) {
            const key = String(toolDelta.index ?? 0);
            const existing =
              toolCalls.get(key) ||
              {
                id: toolDelta.id || `call_${randomUUID().replace(/-/g, "")}`,
                type: "function",
                function: {
                  name: toolDelta.function?.name || "",
                  arguments: "",
                },
              };

            if (toolDelta.id) existing.id = toolDelta.id;
            if (toolDelta.function?.name) existing.function.name = toolDelta.function.name;
            if (typeof toolDelta.function?.arguments === "string") {
              existing.function.arguments += toolDelta.function.arguments;
            }

            const wasNew = !toolCalls.has(key);
            toolCalls.set(key, existing);

            if (wasNew) {
              const item = makeFunctionCallItem(existing);
              item.id = `fc_${key}_${randomUUID().replace(/-/g, "")}`;
              item.status = "in_progress";
              item.call_id = existing.id;
              item.name = existing.function.name || "unknown";
              item.arguments = "";
              existing._item = item;
              sendSseEvent(res, {
                type: "response.output_item.added",
                response_id: responseId,
                output_index: toolCalls.size - 1,
                item,
              });
            }

            sendSseEvent(res, {
              type: "response.function_call_arguments.delta",
              response_id: responseId,
              item_id: existing._item.id,
              output_index: Array.from(toolCalls.keys()).indexOf(key),
              delta: toolDelta.function?.arguments || "",
            });
          }
        }
      }
    }
  } catch (error) {
    stopStreamTimers();
    logLine("stream.error", {
      message: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : undefined,
    });
    sendSseEvent(res, {
      type: "response.failed",
      response: {
        ...responseTemplate,
        status: "failed",
        error: {
          message: error instanceof Error ? error.message : String(error),
        },
      },
    });
    res.end();
    return;
  }

  stopStreamTimers();

  const outputItems = [];
  let outputIndex = 0;

  if (messageItem) {
    messageItem.status = "completed";
    messageItem.content[0].text = assistantText;
    sendSseEvent(res, {
      type: "response.output_text.done",
      response_id: responseId,
      item_id: messageItem.id,
      output_index: outputIndex,
      content_index: 0,
      text: assistantText,
    });
    sendSseEvent(res, {
      type: "response.content_part.done",
      response_id: responseId,
      item_id: messageItem.id,
      output_index: outputIndex,
      content_index: 0,
      part: { type: "output_text", text: assistantText, annotations: [] },
    });
    sendSseEvent(res, {
      type: "response.output_item.done",
      response_id: responseId,
      output_index: outputIndex,
      item: messageItem,
    });
    outputItems.push({
      id: messageItem.id,
      type: "message",
      status: "completed",
      role: "assistant",
      content: [{ type: "output_text", text: assistantText, annotations: [] }],
    });
    outputIndex += 1;
  }

  for (const tool of toolCalls.values()) {
    const item = tool._item;
    item.status = "completed";
    item.arguments = tool.function.arguments;
    item.name = tool.function.name || "unknown";
    sendSseEvent(res, {
      type: "response.function_call_arguments.done",
      response_id: responseId,
      item_id: item.id,
      output_index: outputIndex,
      arguments: tool.function.arguments,
    });
    sendSseEvent(res, {
      type: "response.output_item.done",
      response_id: responseId,
      output_index: outputIndex,
      item,
    });
    outputItems.push({
      id: item.id,
      type: "function_call",
      status: "completed",
      call_id: tool.id,
      name: tool.function.name || "unknown",
      arguments: tool.function.arguments,
    });
    outputIndex += 1;
  }

  updateConversationState(
    responseId,
    messages,
    assistantText,
    Array.from(toolCalls.values()).map((tool) => ({
      id: tool.id,
      type: "function",
      function: {
        name: tool.function.name,
        arguments: tool.function.arguments,
      },
    })),
  );

  const completed = {
    ...responseTemplate,
    status: "completed",
    output: outputItems,
    output_text: assistantText,
  };
  if (streamUsage) {
    completed.usage = translateUsage(streamUsage);
  }
  sendSseEvent(res, {
    type: "response.completed",
    response: completed,
  });
  res.end();
}

async function handleResponses(req, res) {
  if (!TRANAI_API_KEY) {
    sendJson(res, 500, {
      error: { message: "TRANAI_API_KEY is not set" },
    });
    return;
  }

  const body = await readJsonBody(req);
  const { upstreamModel } = buildChatRequest(body);
  logLine("responses.request", {
    stream: Boolean(body.stream),
    model: body.model,
    upstream_model: upstreamModel,
    reasoning_effort: normalizeReasoningEffort(body.reasoning),
    verbosity: body.text?.verbosity || null,
    previous_response_id: body.previous_response_id || null,
    header_flags: {
      x_user_no: Boolean(TRANAI_USER_NO),
      x_user_name: Boolean(TRANAI_USER_NAME),
      x_user_dept_name: Boolean(TRANAI_USER_DEPT_NAME),
    },
    keys: Object.keys(body).sort(),
  });
  appendFileSync(
    path.join(LOG_DIR, `request-${Date.now()}.json`),
    JSON.stringify(body, null, 2),
    "utf8",
  );

  if (body.stream) {
    await handleStreamResponse(body, res);
  } else {
    await handleJsonResponse(body, res);
  }
}

async function handleModels(res) {
  const upstream = await fetch(`${TRANAI_BASE_URL}/models`, {
    headers: buildUpstreamHeaders({ includeContentType: false }),
  });
  const text = await upstream.text();
  res.writeHead(upstream.status, {
    "content-type": upstream.headers.get("content-type") || "application/json; charset=utf-8",
    "access-control-allow-origin": "*",
  });
  res.end(text);
}

process.on("beforeExit", flushPersistedState);
process.on("SIGINT", () => {
  flushPersistedState();
  process.exit(0);
});
process.on("SIGTERM", () => {
  flushPersistedState();
  process.exit(0);
});

const server = createServer(async (req, res) => {
  try {
    const url = new URL(req.url || "/", `http://${req.headers.host || `${HOST}:${PORT}`}`);

    if (req.method === "OPTIONS") {
      res.writeHead(204, {
        "access-control-allow-origin": "*",
        "access-control-allow-methods": "GET,POST,OPTIONS",
        "access-control-allow-headers": "content-type,authorization",
      });
      res.end();
      return;
    }

    if (req.method === "GET" && url.pathname === "/health") {
      sendJson(res, 200, {
        ok: true,
        host: HOST,
        port: PORT,
        upstream: TRANAI_BASE_URL,
        header_flags: {
          x_user_no: Boolean(TRANAI_USER_NO),
          x_user_name: Boolean(TRANAI_USER_NAME),
          x_user_dept_name: Boolean(TRANAI_USER_DEPT_NAME),
        },
      });
      return;
    }

    if (req.method === "GET" && url.pathname === "/v1/models") {
      await handleModels(res);
      return;
    }

    if (req.method === "POST" && url.pathname === "/v1/responses") {
      await handleResponses(req, res);
      return;
    }

    sendJson(res, 404, {
      error: { message: `Cannot ${req.method} ${url.pathname}` },
    });
  } catch (error) {
    logLine("proxy.error", {
      message: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : undefined,
    });
    sendJson(res, 500, {
      error: { message: error instanceof Error ? error.message : String(error) },
    });
  }
});

server.listen(PORT, HOST, () => {
  logLine("proxy.started", { host: HOST, port: PORT, upstream: TRANAI_BASE_URL });
  process.stdout.write(
    `TranAI Responses proxy listening on http://${HOST}:${PORT} -> ${TRANAI_BASE_URL}\n`,
  );
});
