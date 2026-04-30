import type { AuditSession, AuditSessionBundle } from './audit-types';

async function parseJsonResponse<T>(response: Response): Promise<T> {
  const payload = await response.json().catch(() => null);
  if (!response.ok) {
    throw new Error(payload?.error ?? '请求失败');
  }
  return payload as T;
}

export async function fetchAuditSession(auditId: string) {
  const response = await fetch(`/api/audit/session/${encodeURIComponent(auditId)}`);
  return parseJsonResponse<AuditSessionBundle>(response);
}

export async function importAuditReport(report: AuditSession) {
  const response = await fetch('/api/audit/report', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(report),
  });
  return parseJsonResponse<AuditSessionBundle>(response);
}

export async function ignoreAuditIssue(auditId: string, issueId: string, ignoreSignature: string) {
  const response = await fetch('/api/audit/ignore', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ auditId, issueId, ignoreSignature }),
  });
  return parseJsonResponse<AuditSessionBundle>(response);
}

export async function applyAuditIssue(auditId: string, issueId: string, candidateId: string) {
  const response = await fetch('/api/audit/apply', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ auditId, issueId, candidateId }),
  });
  return parseJsonResponse<AuditSessionBundle>(response);
}

export async function restoreAuditCheckpoint(checkpointId: string) {
  const response = await fetch('/api/audit/restore-checkpoint', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ checkpointId }),
  });
  return parseJsonResponse<AuditSessionBundle>(response);
}
