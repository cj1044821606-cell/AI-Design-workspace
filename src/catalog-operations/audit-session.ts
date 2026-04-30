import type { AuditSession } from './audit-types';

export function isAuditReport(value: unknown): value is AuditSession {
  if (!value || typeof value !== 'object') return false;
  const candidate = value as Partial<AuditSession>;
  return candidate.schema === 'catalog_audit_report_v1' && typeof candidate.auditId === 'string' && Array.isArray(candidate.issues);
}

export function extractAuditReportFromText(input: string): AuditSession {
  const trimmed = input.trim();
  const fencedMatch = trimmed.match(/```json\s*([\s\S]*?)```/i);
  const jsonSource = fencedMatch ? fencedMatch[1].trim() : trimmed;
  const parsed = JSON.parse(jsonSource) as unknown;

  if (!isAuditReport(parsed)) {
    throw new Error('输入内容不是合法的 catalog_audit_report_v1');
  }

  return parsed;
}
