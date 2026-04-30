import React, { useEffect, useMemo, useState } from 'react';
import { Check, EyeOff, Loader2, X } from 'lucide-react';
import { getRecommendedCandidate } from '../../catalog-operations/audit-registry';
import type { AuditIssue } from '../../catalog-operations/audit-types';

interface MarkerPlacement {
  issue: AuditIssue;
  x: number;
  y: number;
}

interface AuditOverlayLayerProps {
  issues: AuditIssue[];
  canvasRef: React.RefObject<HTMLDivElement>;
  contentRef: React.RefObject<HTMLDivElement>;
  scale: number;
  pan: { x: number; y: number };
  onIgnore: (issue: AuditIssue) => Promise<void>;
  onApply: (issue: AuditIssue, candidateId: string) => Promise<void>;
}

function findAnchorRoot(root: HTMLElement, issue: AuditIssue) {
  if (issue.location.spreadId) {
    const scoped = root.querySelector<HTMLElement>(`[data-spread-id="${issue.location.spreadId}"]`);
    if (scoped) root = scoped;
  }

  if (!issue.location.anchorLabel) return root;

  const wrappers = Array.from(root.querySelectorAll<HTMLElement>('.design-group-wrapper'));
  const matched = wrappers.find((wrapper) => {
    const label = wrapper.querySelector('.design-group-label');
    return label?.textContent?.includes(issue.location.anchorLabel ?? '') ?? false;
  });

  return matched ?? root;
}

function findTextTarget(root: HTMLElement, query: string, occurrenceIndex = 0) {
  const elements = Array.from(root.querySelectorAll<HTMLElement>('p, span, td, th, h1, h2, h3, h4, h5, h6, div, li'));
  const matches = elements
    .filter((element) => (element.textContent ?? '').includes(query))
    .sort((left, right) => left.textContent!.length - right.textContent!.length);

  return matches[occurrenceIndex] ?? matches[0] ?? null;
}

export default function AuditOverlayLayer({
  issues,
  canvasRef,
  contentRef,
  scale,
  pan,
  onIgnore,
  onApply,
}: AuditOverlayLayerProps) {
  const [placements, setPlacements] = useState<MarkerPlacement[]>([]);
  const [hoveredIssueId, setHoveredIssueId] = useState<string | null>(null);
  const [pinnedIssueId, setPinnedIssueId] = useState<string | null>(null);
  const [selectedCandidates, setSelectedCandidates] = useState<Record<string, string>>({});
  const [busyIssueId, setBusyIssueId] = useState<string | null>(null);

  useEffect(() => {
    const updatePlacements = () => {
      if (!canvasRef.current || !contentRef.current) return;

      const canvasRect = canvasRef.current.getBoundingClientRect();
      const nextPlacements: MarkerPlacement[] = [];

      for (const issue of issues) {
        const anchorRoot = findAnchorRoot(contentRef.current, issue);
        const targetQuery = issue.location.textQuery || issue.currentValue;
        const target = targetQuery
          ? findTextTarget(anchorRoot, targetQuery, issue.location.occurrenceIndex ?? 0)
          : anchorRoot;

        if (!target) continue;

        const targetRect = target.getBoundingClientRect();
        nextPlacements.push({
          issue,
          x: targetRect.right - canvasRect.left + 6,
          y: targetRect.top - canvasRect.top - 6,
        });
      }

      setPlacements(nextPlacements);
    };

    updatePlacements();

    const resizeObserver = new ResizeObserver(updatePlacements);
    if (canvasRef.current) resizeObserver.observe(canvasRef.current);
    if (contentRef.current) resizeObserver.observe(contentRef.current);
    window.addEventListener('resize', updatePlacements);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', updatePlacements);
    };
  }, [issues, canvasRef, contentRef, scale, pan]);

  const recommendedMap = useMemo(
    () =>
      Object.fromEntries(
        issues.map((issue) => [issue.issueId, selectedCandidates[issue.issueId] ?? getRecommendedCandidate(issue)?.candidateId]),
      ),
    [issues, selectedCandidates],
  );

  return (
    <div className="absolute inset-0 z-[70] pointer-events-none print:hidden">
      {placements.map(({ issue, x, y }) => {
        const isExpanded = hoveredIssueId === issue.issueId || pinnedIssueId === issue.issueId;
        const selectedCandidateId = recommendedMap[issue.issueId];

        return (
          <div
            key={issue.issueId}
            className="absolute pointer-events-auto"
            style={{ left: x, top: y }}
            onMouseEnter={() => setHoveredIssueId(issue.issueId)}
            onMouseLeave={() => setHoveredIssueId((current) => (current === issue.issueId && pinnedIssueId !== issue.issueId ? null : current))}
          >
            <button
              onClick={() => {
                setPinnedIssueId((current) => (current === issue.issueId ? null : issue.issueId));
                setHoveredIssueId(issue.issueId);
              }}
              className="w-3 h-3 rounded-full bg-[#E60027]/75 ring-2 ring-white/80 shadow-sm hover:bg-[#E60027] transition-colors"
              title={issue.message}
            />

            {isExpanded ? (
              <div className="absolute left-4 top-0 w-[340px] rounded-2xl border border-red-100 bg-white shadow-2xl p-4 flex flex-col gap-3">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-red-500 font-bold">{issue.issueType}</div>
                    <div className="text-sm font-bold text-neutral-900 mt-1">{issue.message}</div>
                  </div>
                  <button
                    onClick={() => {
                      setPinnedIssueId((current) => (current === issue.issueId ? null : current));
                      setHoveredIssueId((current) => (current === issue.issueId ? null : current));
                    }}
                    className="text-neutral-400 hover:text-neutral-700"
                    title="关闭"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <div className="text-xs text-neutral-500 leading-relaxed">{issue.why}</div>

                <div className="rounded-xl bg-neutral-50 border border-neutral-200 p-3">
                  <div className="text-[11px] text-neutral-500 font-bold mb-1">原文</div>
                  <div className="text-sm text-neutral-800 break-words">{issue.currentValue}</div>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="text-[11px] text-neutral-500 font-bold">候选修复</div>
                  {issue.candidates.map((candidate) => {
                    const isSelected = selectedCandidateId === candidate.candidateId;
                    return (
                      <button
                        key={candidate.candidateId}
                        onClick={() => setSelectedCandidates((current) => ({ ...current, [issue.issueId]: candidate.candidateId }))}
                        className={`text-left rounded-xl border px-3 py-2 transition-colors ${
                          isSelected
                            ? 'border-[#E60027] bg-red-50'
                            : 'border-neutral-200 bg-white hover:bg-neutral-50'
                        }`}
                      >
                        <div className="text-sm font-medium text-neutral-900">{candidate.label}</div>
                        <div className="text-xs text-neutral-600 mt-1 break-words">{candidate.value}</div>
                        {candidate.explanation ? (
                          <div className="text-[11px] text-neutral-500 mt-1">{candidate.explanation}</div>
                        ) : null}
                      </button>
                    );
                  })}
                </div>

                <div className="flex items-center justify-between gap-3 pt-1">
                  <button
                    onClick={async () => {
                      setBusyIssueId(issue.issueId);
                      try {
                        await onIgnore(issue);
                        setPinnedIssueId((current) => (current === issue.issueId ? null : current));
                        setHoveredIssueId((current) => (current === issue.issueId ? null : current));
                      } finally {
                        setBusyIssueId(null);
                      }
                    }}
                    disabled={busyIssueId === issue.issueId}
                    className="px-3 py-2 rounded-xl border border-neutral-200 text-xs font-medium text-neutral-700 hover:bg-neutral-50 flex items-center gap-2 disabled:opacity-60"
                  >
                    {busyIssueId === issue.issueId ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <EyeOff className="w-3.5 h-3.5" />}
                    忽略同类问题
                  </button>
                  <button
                    onClick={async () => {
                      if (!selectedCandidateId) return;
                      setBusyIssueId(issue.issueId);
                      try {
                        await onApply(issue, selectedCandidateId);
                        setPinnedIssueId((current) => (current === issue.issueId ? null : current));
                        setHoveredIssueId((current) => (current === issue.issueId ? null : current));
                      } finally {
                        setBusyIssueId(null);
                      }
                    }}
                    disabled={busyIssueId === issue.issueId || !selectedCandidateId}
                    className="px-3 py-2 rounded-xl bg-[#E60027] text-white text-xs font-medium hover:bg-red-700 flex items-center gap-2 disabled:opacity-60"
                  >
                    {busyIssueId === issue.issueId ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Check className="w-3.5 h-3.5" />}
                    确认更改
                  </button>
                </div>
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
