export type CatalogEditionId = 'global' | 'uz-en' | 'uz-ru';

export type AuditIssueType =
  | 'spelling'
  | 'format'
  | 'parameter_name_mismatch'
  | 'parameter_value_mismatch'
  | 'unit_mismatch'
  | 'terminology_inconsistent'
  | 'table_structure_warning';

export type AuditIssueSeverity = 'low' | 'medium' | 'high';
export type AuditIssueStatus = 'open' | 'ignored' | 'applied' | 'invalidated';

export type AuditSourceLayer =
  | 'catalog-data'
  | 'catalog-layouts'
  | 'catalog-editions'
  | 'legacy-spread';

export interface AuditCandidate {
  candidateId: string;
  label: string;
  value: string;
  explanation?: string;
}

export interface AuditLocation {
  editionId?: CatalogEditionId;
  projectType?: string;
  spreadId?: string;
  componentName?: string;
  sourceLayer: AuditSourceLayer;
  sourcePath: string;
  anchorLabel?: string;
  textQuery?: string;
  occurrenceIndex?: number;
  areaType?: string;
}

export interface AuditIssue {
  issueId: string;
  issueType: AuditIssueType;
  severity: AuditIssueSeverity;
  message: string;
  why: string;
  location: AuditLocation;
  currentValue: string;
  candidates: AuditCandidate[];
  recommendedCandidateId: string;
  ignoreSignature: string;
  status?: AuditIssueStatus;
  appliedCandidateId?: string;
  appliedAt?: string;
}

export interface AuditReportRange {
  scope?: 'project' | 'series' | 'spread-range' | 'edition-set';
  description?: string;
  editions?: CatalogEditionId[];
  spreads?: string[];
  series?: string[];
}

export interface AuditSession {
  schema: 'catalog_audit_report_v1';
  auditId: string;
  materialType: string;
  projectType?: string;
  range?: AuditReportRange;
  issues: AuditIssue[];
  createdAt?: string;
  importedAt?: string;
}

export interface AuditIgnoreRule {
  signature: string;
  createdAt: string;
  sourceIssueId: string;
  sourceAuditId: string;
}

export interface AuditCheckpointSnapshot {
  filePath: string;
  content: string;
}

export interface AuditCheckpoint {
  checkpointId: string;
  createdAt: string;
  auditId: string;
  issueId: string;
  targetFiles: string[];
  beforeSnapshots: AuditCheckpointSnapshot[];
  summary: string;
  restoredAt?: string;
}

export interface AuditSessionBundle {
  session: AuditSession | null;
  ignoreRules: AuditIgnoreRule[];
  checkpoints: AuditCheckpoint[];
}
