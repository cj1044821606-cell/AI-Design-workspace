import type { AuditIssue, AuditSessionBundle } from './audit-types';

export function getVisibleAuditIssuesForProject(
  bundle: AuditSessionBundle | null,
  projectType?: string,
  editionId?: string,
) {
  if (!bundle?.session) return [];

  const ignoredSignatures = new Set(bundle.ignoreRules.map((rule) => rule.signature));
  const sessionProjectType = bundle.session.projectType;

  return bundle.session.issues
    .map((issue) => {
      if (issue.status === 'applied') return issue;
      if (ignoredSignatures.has(issue.ignoreSignature)) {
        return { ...issue, status: 'ignored' as const };
      }
      return { ...issue, status: issue.status ?? 'open' as const };
    })
    .filter((issue) => issue.status !== 'applied' && issue.status !== 'ignored')
    .filter((issue) => {
      if (projectType && !issue.location.projectType && sessionProjectType && sessionProjectType !== projectType) {
        return false;
      }
      if (projectType && issue.location.projectType && issue.location.projectType !== projectType) return false;
      if (editionId && issue.location.editionId && issue.location.editionId !== editionId) return false;
      if (!editionId && issue.location.editionId) return false;
      return true;
    });
}

export function getAuditIssueCount(bundle: AuditSessionBundle | null, projectType?: string, editionId?: string) {
  return getVisibleAuditIssuesForProject(bundle, projectType, editionId).length;
}

export function getRecommendedCandidate(issue: AuditIssue) {
  return issue.candidates.find((candidate) => candidate.candidateId === issue.recommendedCandidateId) ?? issue.candidates[0];
}
