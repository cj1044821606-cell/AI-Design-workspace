import React, { useMemo, useState } from 'react';
import { FileWarning, Loader2, X } from 'lucide-react';
import { extractAuditReportFromText } from '../../catalog-operations/audit-session';

interface AuditImportModalProps {
  onClose: () => void;
  onImport: (input: string) => Promise<void>;
}

export default function AuditImportModal({ onClose, onImport }: AuditImportModalProps) {
  const [input, setInput] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isImporting, setIsImporting] = useState(false);

  const preview = useMemo(() => {
    if (!input.trim()) return null;

    try {
      const report = extractAuditReportFromText(input);
      return {
        auditId: report.auditId,
        materialType: report.materialType,
        issues: report.issues.length,
      };
    } catch {
      return null;
    }
  }, [input]);

  const handleImport = async () => {
    setError(null);

    try {
      extractAuditReportFromText(input);
      setIsImporting(true);
      await onImport(input);
      onClose();
    } catch (importError) {
      setError(importError instanceof Error ? importError.message : '导入失败');
    } finally {
      setIsImporting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center bg-black/40 p-8 backdrop-blur-[1px]">
      <div className="w-full max-w-4xl overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-2xl">
        <div className="flex items-center justify-between border-b border-neutral-200 px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-red-50 text-[#E60027]">
              <FileWarning className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-base font-bold text-neutral-900">导入审校报告</h2>
              <p className="mt-0.5 text-xs text-neutral-500">
                粘贴 Codex 输出的 `catalog_audit_report_v1` JSON 或 ```json fenced block
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-2 text-neutral-500 hover:bg-neutral-100 hover:text-neutral-900"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="flex flex-col gap-4 p-6">
          <textarea
            value={input}
            onChange={(event) => setInput(event.target.value)}
            className="min-h-[340px] w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 font-mono text-sm text-neutral-800 focus:border-[#E60027] focus:outline-none focus:ring-2 focus:ring-[#E60027]/20"
            placeholder={`\`\`\`json\n{\n  "schema": "catalog_audit_report_v1",\n  "auditId": "audit_20260414_001",\n  "materialType": "catalog",\n  "issues": []\n}\n\`\`\``}
          />

          {preview ? (
            <div className="rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-700">
              检测到报告 `{preview.auditId}`，物料类型 `{preview.materialType}`，包含 `{preview.issues}` 条问题。
            </div>
          ) : null}

          {error ? (
            <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              {error}
            </div>
          ) : null}
        </div>

        <div className="flex items-center justify-end gap-3 border-t border-neutral-200 px-6 py-4">
          <button
            onClick={onClose}
            className="rounded-lg border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-50"
          >
            取消
          </button>
          <button
            onClick={handleImport}
            disabled={isImporting || !input.trim()}
            className="flex items-center gap-2 rounded-lg bg-[#E60027] px-4 py-2 text-sm font-medium text-white hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isImporting ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
            导入并生成标注
          </button>
        </div>
      </div>
    </div>
  );
}
