import React, { useState, useRef, useEffect } from 'react';
import { Download, LayoutTemplate, Image as ImageIcon, FileText, Layers, FolderKanban, Plus, Save, PenTool, CheckCircle2, LayoutDashboard, Minus, Maximize, MousePointer2, Hand, Trash2, Eye, EyeOff, Loader2, Home, Sparkles, MonitorPlay, Settings2, FileWarning } from 'lucide-react';
import logoSvg from '@/品牌素材库/横版logo_CMYK.svg';
import productPng from '@/产品素材库/封面-电池家族 02.png';
import tablePng from '@/产品素材库/P2对比表格.png';
import Brochure from './components/Brochure';
import Datasheet from './components/Datasheet';
import IPV11K48T_Datasheet from './components/IPV11K48T_Datasheet';
import IGT_Datasheet from './components/IGT_Datasheet';
import CatalogProject from './components/CatalogProject';
import CatalogProjectUZ from './components/CatalogProjectUZ';
import CatalogProjectGlobal20260420 from './components/CatalogProjectGlobal20260420';
import CatalogProjectRU from './components/catalog-ru/CatalogProjectRU';
import FoldingBrochureUZ_RU from './components/FoldingBrochureUZ_RU';

import CatalogMinimap from './components/CatalogMinimap';
import type { AuditIssue, AuditSessionBundle } from './catalog-operations/audit-types';
import { applyAuditIssue, fetchAuditSession, ignoreAuditIssue, importAuditReport, restoreAuditCheckpoint } from './catalog-operations/audit-client';
import { extractAuditReportFromText } from './catalog-operations/audit-session';
import { getAuditIssueCount, getVisibleAuditIssuesForProject } from './catalog-operations/audit-registry';
import AuditImportModal from './components/audit/AuditImportModal';
import AuditOverlayLayer from './components/audit/AuditOverlayLayer';

type ViewState = 'home' | 'workspace' | 'projects' | 'templates';
type ExportQuality = 'high' | 'low';

function viewStateStorageKey(projectId: string) {
  return `catalog-view-state:${projectId}`;
}

function getTopLevelExportPages(root: HTMLElement) {
  const allMatched = Array.from(
    root.querySelectorAll('.w-\\[420mm\\], .w-\\[210mm\\], .w-\\[380px\\]')
  ) as HTMLElement[];

  return allMatched
    .filter((el) => {
      let parent = el.parentElement;
      while (parent) {
        if (allMatched.includes(parent as HTMLElement)) return false;
        parent = parent.parentElement;
      }
      return true;
    })
    .map((el) => {
      if (el.querySelector('[data-export-page-number-overlay="true"]')) {
        return el;
      }

      const spreadShell = el.closest<HTMLElement>('[data-spread-id]');
      const pageNumberOverlay = spreadShell?.querySelector<HTMLElement>(
        '[data-export-page-number-overlay="true"]',
      );

      if (!pageNumberOverlay) {
        return el;
      }

      const pageClone = el.cloneNode(true) as HTMLElement;
      pageClone.appendChild(pageNumberOverlay.cloneNode(true));
      return pageClone;
    });
}

function getPageExportMeta(page: HTMLElement) {
  if (page.classList.contains('w-[420mm]')) {
    return { widthMm: 420, heightMm: 297, pageSizeCss: 'size: 420mm 297mm;' };
  }
  if (page.classList.contains('w-[210mm]')) {
    return { widthMm: 210, heightMm: 297, pageSizeCss: 'size: 210mm 297mm;' };
  }
  if (page.classList.contains('w-[380px]')) {
    return { widthMm: 100.542, heightMm: 201.083, pageSizeCss: 'size: 380px 760px;' };
  }

  return { widthMm: 210, heightMm: 297, pageSizeCss: 'size: A4 portrait;' };
}


export default function App() {
  const [currentView, setCurrentView] = useState<ViewState>('workspace');
  const [activeProjectId, setActiveProjectId] = useState('catalog-global-copy-20260420');
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [deleteConfirm, setDeleteConfirm] = useState<{type: 'project' | 'template', id: string} | null>(null);
  const [isExporting, setIsExporting] = useState(false);
  const [showExportModal, setShowExportModal] = useState(false);
  const [showAuditImportModal, setShowAuditImportModal] = useState(false);
  const [auditBundle, setAuditBundle] = useState<AuditSessionBundle | null>(null);
  const [auditActionError, setAuditActionError] = useState<string | null>(null);
  const [busyCheckpointId, setBusyCheckpointId] = useState<string | null>(null);

  // --- Zoom & Pan State ---
  const [scale, setScale] = useState(0.5);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [toolMode, setToolMode] = useState<'select' | 'pan'>('pan');
  const [showLabels, setShowLabels] = useState(true);
  const canvasRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const hasRestoredViewRef = useRef(false);

  const fitToScreen = () => {
    if (canvasRef.current && contentRef.current) {
      const containerWidth = canvasRef.current.clientWidth;
      const containerHeight = canvasRef.current.clientHeight;
      const contentWidth = contentRef.current.scrollWidth;
      const contentHeight = contentRef.current.scrollHeight;

      if (contentWidth > 0 && contentHeight > 0) {
        const scaleX = (containerWidth - 80) / contentWidth;
        const scaleY = (containerHeight - 120) / contentHeight;
        const newScale = Math.min(scaleX, scaleY, 1);

        setScale(newScale);
        setPan({ x: 0, y: 0 });
        sessionStorage.setItem(
          viewStateStorageKey(activeProjectId),
          JSON.stringify({ scale: newScale, pan: { x: 0, y: 0 } }),
        );
      }
    } else {
      setScale(0.5);
      setPan({ x: 0, y: 0 });
    }
  };

  // Initial fit to screen when switching to workspace
  useEffect(() => {
    hasRestoredViewRef.current = false;

    if (currentView !== 'workspace') return;

    const timer = setTimeout(() => {
      const savedViewState = sessionStorage.getItem(viewStateStorageKey(activeProjectId));
      if (savedViewState) {
        try {
          const parsed = JSON.parse(savedViewState) as { scale?: number; pan?: { x?: number; y?: number } };
          if (typeof parsed.scale === 'number' && parsed.pan) {
            setScale(parsed.scale);
            setPan({ x: parsed.pan.x ?? 0, y: parsed.pan.y ?? 0 });
            hasRestoredViewRef.current = true;
            return;
          }
        } catch (error) {
          console.warn('Failed to restore saved view state', error);
        }
      }

      fitToScreen();
      hasRestoredViewRef.current = true;
    }, 100);

    return () => clearTimeout(timer);
  }, [currentView, activeProjectId]);

  useEffect(() => {
    if (!hasRestoredViewRef.current) return;
    sessionStorage.setItem(viewStateStorageKey(activeProjectId), JSON.stringify({ scale, pan }));
  }, [activeProjectId, scale, pan]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleNativeWheel = (e: WheelEvent) => {
      if (e.ctrlKey || e.metaKey) {
        e.preventDefault();
        const zoomSensitivity = 0.002;
        const delta = -e.deltaY * zoomSensitivity;
        setScale(s => Math.min(Math.max(0.1, s + delta), 3));
      } else {
        setPan(p => ({ x: p.x - e.deltaX, y: p.y - e.deltaY }));
      }
    };

    canvas.addEventListener('wheel', handleNativeWheel, { passive: false });
    return () => canvas.removeEventListener('wheel', handleNativeWheel);
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (toolMode === 'pan' || e.button === 1) {
      e.preventDefault();
      setIsDragging(true);
      setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      setPan({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Mock Projects Database
  const [projects, setProjects] = useState(() => {
    const saved = localStorage.getItem('itel_projects');
    const defaultProjects = [
      { id: '1', name: 'MarathonS 鎶橀〉璁捐', type: 'Brochure', date: '2026-03-20', status: 'In Progress' },
      { id: '2', name: 'itel Energy Datasheet', type: 'Datasheet', date: '2026-03-18', status: 'Draft' },
      { id: '3', name: 'Q3 鍝佺墝涓昏瑙?(KV)', type: 'Key Visual', date: '2026-03-15', status: 'Completed' },
    ];
    let parsed = saved ? JSON.parse(saved) : defaultProjects;
    if (!parsed.find((p: any) => p.id === '4')) {
      parsed = [{ id: '4', name: 'IPV-11K48T Datasheet', type: 'IPV11K48T_Datasheet', date: '2026-03-24', status: 'Draft' }, ...parsed];
    }
    if (!parsed.find((p: any) => p.id === '5')) {
      parsed = [{ id: '5', name: 'IGT-6KSA/8KSA/10KSA Datasheet', type: 'IGT_Datasheet', date: '2026-03-30', status: 'Draft' }, ...parsed];
    }
    if (!parsed.find((p: any) => p.id === 'catalog-full')) {
      parsed = [{ id: 'catalog-full', name: '2026 浜у搧鐢诲唽', type: 'CatalogProject', date: '2026-04-05', status: 'Draft' }, ...parsed];
    }
    if (!parsed.find((p: any) => p.id === 'catalog-uz')) {
      parsed = [{ id: 'catalog-uz', name: '2026浜у搧鐢诲唽-涔屽吂', type: 'CatalogProjectUZ', date: '2026-04-08', status: 'Draft' }, ...parsed];
    }
    if (!parsed.find((p: any) => p.id === 'catalog-global-copy-20260420')) {
      parsed = [{ id: 'catalog-global-copy-20260420', name: '全球版画册-2026-04-20', type: 'CatalogProjectGlobal20260420', date: '2026-04-20', status: 'Draft' }, ...parsed];
    }
    if (!parsed.find((p: any) => p.id === 'catalog-ru')) {
      parsed = [{ id: 'catalog-ru', name: '2026产品画册-俄语版', type: 'CatalogProjectRU', date: '2026-04-10', status: 'Draft' }, ...parsed];
    }
    if (!parsed.find((p: any) => p.id === 'folding-uz-ru')) {
      parsed = [{ id: 'folding-uz-ru', name: '涔屽吂淇勮鎶橀〉', type: 'FoldingBrochureUZ_RU', date: '2026-04-16', status: 'Draft' }, ...parsed];
    }
    return parsed;
  });

  useEffect(() => {
    localStorage.setItem('itel_projects', JSON.stringify(projects));
  }, [projects]);

  // Mock Templates Database
  const [templates, setTemplates] = useState(() => {
    const saved = localStorage.getItem('itel_templates');
    const defaultTemplates = [
      { id: 't1', name: '标准三折页模板', type: 'Brochure', category: '官方推荐' },
      { id: 't2', name: '单页 Datasheet 模板', type: 'Datasheet', category: '官方推荐' },
    ];
    let parsed = saved ? JSON.parse(saved) : defaultTemplates;
    if (!parsed.find((t: any) => t.id === 't3')) {
      parsed = [...parsed, { id: 't3', name: 'IPV-11K48T Datasheet 模板', type: 'IPV11K48T_Datasheet', category: '官方推荐' }];
    }
    if (!parsed.find((t: any) => t.id === 't4')) {
      parsed = [...parsed, { id: 't4', name: 'IGT Series Datasheet 模板', type: 'IGT_Datasheet', category: '官方推荐' }];
    }
    if (!parsed.find((t: any) => t.id === 't5')) {
      parsed = [...parsed, { id: 't5', name: '俄语折页模板', type: 'FoldingBrochureUZ_RU', category: '官方推荐' }];
    }
    return parsed;
  });

  useEffect(() => {
    localStorage.setItem('itel_templates', JSON.stringify(templates));
  }, [templates]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const refreshAuditSession = async (auditId = 'latest') => {
    try {
      const bundle = await fetchAuditSession(auditId);
      setAuditBundle(bundle);
      return bundle;
    } catch (error) {
      console.warn('Failed to fetch audit session', error);
      return null;
    }
  };

  useEffect(() => {
    void refreshAuditSession();
  }, []);

  const handleImportAuditReport = async (input: string) => {
    const report = extractAuditReportFromText(input);
    const bundle = await importAuditReport(report);
    setAuditBundle(bundle);
    showToast(`已导入审校结果：${report.issues.length} 条问题`);
  };

  const handleIgnoreAuditIssue = async (issue: AuditIssue) => {
    if (!auditBundle?.session) return;
    setAuditActionError(null);
    try {
      const bundle = await ignoreAuditIssue(auditBundle.session.auditId, issue.issueId, issue.ignoreSignature);
      setAuditBundle(bundle);
      await refreshAuditSession(bundle.session?.auditId ?? auditBundle.session.auditId);
      showToast('已忽略同类问题');
    } catch (error) {
      const message = error instanceof Error ? error.message : '忽略操作失败';
      setAuditActionError(message);
      throw error;
    }
  };

  const handleApplyAuditIssue = async (issue: AuditIssue, candidateId: string) => {
    if (!auditBundle?.session) return;
    setAuditActionError(null);
    try {
      const bundle = await applyAuditIssue(auditBundle.session.auditId, issue.issueId, candidateId);
      setAuditBundle(bundle);
      await refreshAuditSession(bundle.session?.auditId ?? auditBundle.session.auditId);
      showToast('已确认并应用更改');
    } catch (error) {
      const message = error instanceof Error ? error.message : '应用更改失败';
      setAuditActionError(message);
      throw error;
    }
  };

  const handleRestoreCheckpoint = async (checkpointId: string) => {
    setAuditActionError(null);
    setBusyCheckpointId(checkpointId);
    try {
      const bundle = await restoreAuditCheckpoint(checkpointId);
      setAuditBundle(bundle);
      await refreshAuditSession(bundle.session?.auditId ?? 'latest');
      showToast('已恢复检查点');
    } catch (error) {
      const message = error instanceof Error ? error.message : '恢复检查点失败';
      setAuditActionError(message);
    } finally {
      setBusyCheckpointId(null);
    }
  };

  const handleSaveAsTemplate = () => {
    const current = projects.find(p => p.id === activeProjectId);
    if (current) {
      setTemplates([
        { id: Date.now().toString(), name: current.name + ' (自定义模板)', type: current.type, category: '我的模板' },
        ...templates
      ]);
      showToast('已成功保存至模板库！');
    }
  };

  const handleCreateProject = (templateId?: string) => {
    const newId = Date.now().toString();
    const template = templates.find(t => t.id === templateId);
    setProjects([{
      id: newId,
      name: template ? ('基于 ' + template.name + ' 的新项目') : '未命名新项目',
      type: template ? template.type : 'Design',
      date: new Date().toISOString().split('T')[0],
      status: 'Draft'
    }, ...projects]);
    setActiveProjectId(newId);
    setCurrentView('workspace');
    showToast('新项目已创建');
  };

  const legacyHandleExportPDF = async () => {
    if (!contentRef.current) return;
    
    try {
      setIsExporting(true);
      showToast('姝ｅ湪鎵撳寘绾煝閲忔簮鏂囦欢锛岃绋嶅€?..');
      
      // 1. Clone the content to manipulate it without affecting the UI
      const clone = contentRef.current.cloneNode(true) as HTMLElement;
      
      // 2. Clean up UI elements (hover borders, labels, shadows)
      const labels = clone.querySelectorAll('.design-group-label');
      labels.forEach(l => l.remove());
      
      const wrappers = clone.querySelectorAll('.design-group-wrapper');
      wrappers.forEach(w => {
        (w as HTMLElement).style.outline = 'none';
        (w as HTMLElement).style.border = 'none';
      });

      // 3. Convert all images to Base64 so the downloaded file is self-contained
      const images = clone.querySelectorAll('img');
      const promises = Array.from(images).map(async (img) => {
        if (img.src.startsWith('data:')) return;
        try {
          const response = await fetch(img.src);
          const blob = await response.blob();
          const reader = new FileReader();
          const dataUrl = await new Promise<string>((resolve) => {
            reader.onloadend = () => resolve(reader.result as string);
            reader.readAsDataURL(blob);
          });
          img.src = dataUrl;
        } catch (e) {
          console.warn('Failed to convert image to base64', img.src);
        }
      });
      await Promise.all(promises);

      // 4. Extract all CSS styles from the current document
      // We need to inline all CSS and remove @font-face rules.
      // This prevents Chrome from subsetting the web fonts, which causes AI to outline them.
      // By removing @font-face, Chrome is forced to use the local font (if installed), keeping it editable in AI.
      let stylesHtml = '';
      const styleElements = document.querySelectorAll('style, link[rel="stylesheet"]');
      for (const el of styleElements) {
        if (el.tagName.toLowerCase() === 'style') {
          let css = el.innerHTML.replace(/@font-face\s*\{[^}]*\}/g, '');
          // Add fallback local names for MarkOT to ensure Chrome finds the installed font
          css = css.replace(/['"]Mark\s*OT['"]/gi, '"MarkOT", "Mark OT", "Mark Pro", "Mark", "MarkOT-Light", "MarkOT-Medium", "MarkOT-Bold", "MarkOT-Heavy", "MarkOT-Black", "MarkOT Light", "MarkOT Medium", "MarkOT Bold", "MarkOT Heavy", "MarkOT Black"');
          stylesHtml += `<style>${css}</style>\n`;
        } else if (el.tagName.toLowerCase() === 'link') {
          try {
            const href = (el as HTMLLinkElement).href;
            if (href && !href.startsWith('data:')) {
              const res = await fetch(href);
              let cssText = await res.text();
              cssText = cssText.replace(/@font-face\s*\{[^}]*\}/g, '');
              cssText = cssText.replace(/['"]Mark\s*OT['"]/gi, '"MarkOT", "Mark OT", "Mark Pro", "Mark", "MarkOT-Light", "MarkOT-Medium", "MarkOT-Bold", "MarkOT-Heavy", "MarkOT-Black", "MarkOT Light", "MarkOT Medium", "MarkOT Bold", "MarkOT Heavy", "MarkOT Black"');
              stylesHtml += `<style>${cssText}</style>\n`;
            }
          } catch (e) {
            console.warn('Failed to fetch stylesheet', el);
            stylesHtml += el.outerHTML + '\n';
          }
        }
      }

      // 5. Determine the correct @page size based on the artboard
      const allMatched = Array.from(clone.querySelectorAll('.w-\\[420mm\\], .w-\\[210mm\\], .w-\\[380px\\]')) as HTMLElement[];
      const topLevelPages = allMatched.filter(el => {
        let parent = el.parentElement;
        while (parent) {
          if (allMatched.includes(parent)) return false;
          parent = parent.parentElement;
        }
        return true;
      });

      const firstPage = topLevelPages[0];
      let pageSizeCss = 'size: A4 portrait;'; // Default
      if (firstPage) {
        if (firstPage.classList.contains('w-[420mm]')) {
          pageSizeCss = 'size: 420mm 297mm;';
        } else if (firstPage.classList.contains('w-[210mm]')) {
          pageSizeCss = 'size: 210mm 297mm;';
        } else if (firstPage.classList.contains('w-[380px]')) {
          pageSizeCss = 'size: 380px 760px;';
        }
      }

      // 6. Construct the final HTML document
      const htmlContent = `
        <!DOCTYPE html>
        <html lang="zh-CN">
        <head>
          <meta charset="UTF-8">
          <title>鐭㈤噺鎵撳嵃婧愭枃浠?/title>
          ${stylesHtml}
          <style>
            body {
              margin: 0;
              padding: 0;
              background: #525252;
              display: flex;
              flex-direction: column;
              align-items: center;
              gap: 20px;
              padding: 40px 0;
              -webkit-print-color-adjust: exact !important;
              print-color-adjust: exact !important;
            }
            .page-container {
              box-shadow: 0 10px 30px rgba(0,0,0,0.5);
              overflow: hidden;
              background: white;
              position: relative;
            }
            @media print {
              @page {
                ${pageSizeCss}
                margin: 0;
              }
              body {
                background: white;
                padding: 0;
                display: block;
              }
              .page-container {
                box-shadow: none;
                margin: 0;
                page-break-after: always;
              }
            }
          </style>
        </head>
        <body>
          ${topLevelPages.map(page => `
            <div class="page-container">
              ${page.outerHTML}
            </div>
          `).join('')}
          <script>
            // Automatically trigger print dialog when opened
            window.onload = () => {
              setTimeout(() => {
                window.print();
              }, 500);
            };
          </script>
        </body>
        </html>
      `;

      // 7. Trigger download of the HTML file
      const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      const activeProject = projects.find(p => p.id === activeProjectId);
      a.download = `${activeProject?.name || 'Design'}_矢量打印源文件.html`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      showToast('矢量源文件已下载，请双击打开它并另存为 PDF');
      
    } catch (error) {
      console.error('Export failed:', error);
      showToast('导出失败，请重试');
    } finally {
      setIsExporting(false);
    }
  };

  const createCleanExportClone = () => {
    if (!contentRef.current) return null;

    const clone = contentRef.current.cloneNode(true) as HTMLElement;
    clone.querySelectorAll('.design-group-label, .print\\:hidden').forEach((el) => el.remove());

    clone.querySelectorAll('.design-group-wrapper').forEach((wrapper) => {
      (wrapper as HTMLElement).style.outline = 'none';
      (wrapper as HTMLElement).style.border = 'none';
      (wrapper as HTMLElement).style.boxShadow = 'none';
    });

    return clone;
  };

  const buildPrintableHtmlFromClone = async (
    clone: HTMLElement,
    options?: { embedImages?: boolean }
  ) => {
    const embedImages = options?.embedImages ?? true;
    const images = clone.querySelectorAll('img');

    if (embedImages) {
      await Promise.all(Array.from(images).map(async (img) => {
        if (img.src.startsWith('data:')) return;
        try {
          const response = await fetch(img.src);
          const blob = await response.blob();
          const reader = new FileReader();
          const dataUrl = await new Promise<string>((resolve) => {
            reader.onloadend = () => resolve(reader.result as string);
            reader.readAsDataURL(blob);
          });
          img.src = dataUrl;
        } catch (e) {
          console.warn('Failed to convert image to base64', img.src);
        }
      }));
    } else {
      clone.querySelectorAll('img').forEach((img) => {
        const image = img as HTMLImageElement;
        const absoluteSrc = image.currentSrc || image.src;
        if (absoluteSrc) {
          image.setAttribute('src', absoluteSrc);
        }
        if (image.getAttribute('srcset')) {
          image.removeAttribute('srcset');
        }
        image.setAttribute('loading', 'eager');
        image.setAttribute('decoding', 'sync');
      });
    }

    let stylesHtml = '';
    const styleElements = document.querySelectorAll('style, link[rel="stylesheet"]');
    for (const el of styleElements) {
      if (el.tagName.toLowerCase() === 'style') {
        let css = el.innerHTML.replace(/@font-face\s*\{[^}]*\}/g, '');
        css = css.replace(/['"]Mark\s*OT['"]/gi, '"MarkOT", "Mark OT", "Mark Pro", "Mark", "MarkOT-Light", "MarkOT-Medium", "MarkOT-Bold", "MarkOT-Heavy", "MarkOT-Black", "MarkOT Light", "MarkOT Medium", "MarkOT Bold", "MarkOT Heavy", "MarkOT Black"');
        stylesHtml += `<style>${css}</style>\n`;
      } else if (el.tagName.toLowerCase() === 'link') {
        try {
          const href = (el as HTMLLinkElement).href;
          if (href && !href.startsWith('data:')) {
            const res = await fetch(href);
            let cssText = await res.text();
            cssText = cssText.replace(/@font-face\s*\{[^}]*\}/g, '');
            cssText = cssText.replace(/['"]Mark\s*OT['"]/gi, '"MarkOT", "Mark OT", "Mark Pro", "Mark", "MarkOT-Light", "MarkOT-Medium", "MarkOT-Bold", "MarkOT-Heavy", "MarkOT-Black", "MarkOT Light", "MarkOT Medium", "MarkOT Bold", "MarkOT Heavy", "MarkOT Black"');
            stylesHtml += `<style>${cssText}</style>\n`;
          }
        } catch (e) {
          console.warn('Failed to fetch stylesheet', el);
          stylesHtml += el.outerHTML + '\n';
        }
      }
    }

    const topLevelPages = getTopLevelExportPages(clone);
    const firstPage = topLevelPages[0];
    const { pageSizeCss } = firstPage ? getPageExportMeta(firstPage) : getPageExportMeta(document.createElement('div'));

    return `
      <!DOCTYPE html>
      <html lang="zh-CN">
      <head>
        <meta charset="UTF-8">
        <title>Print Ready PDF</title>
        ${embedImages ? '' : `<base href="${window.location.origin}/">`}
        ${stylesHtml}
        <style>
          body {
            margin: 0;
            padding: 0;
            background: #525252;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 20px;
            padding: 40px 0;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          .page-container {
            box-shadow: 0 10px 30px rgba(0,0,0,0.5);
            overflow: hidden;
            background: white;
            position: relative;
          }
          @media print {
            @page {
              ${pageSizeCss}
              margin: 0;
            }
            body {
              background: white;
              padding: 0;
              display: block;
            }
            .page-container {
              box-shadow: none;
              margin: 0;
              page-break-after: always;
            }
          }
        </style>
      </head>
      <body>
        ${topLevelPages.map((page) => `
          <div class="page-container">
            ${page.outerHTML}
          </div>
        `).join('')}
        <script>
          window.onload = () => {
            setTimeout(() => {
              window.print();
            }, 500);
          };
        </script>
      </body>
      </html>
    `;
  };

  const buildServerRenderHtmlFromClone = async (clone: HTMLElement) => {
    const topLevelPages = getTopLevelExportPages(clone);

    clone.querySelectorAll('img').forEach((img) => {
      const image = img as HTMLImageElement;
      const absoluteSrc = image.currentSrc || image.src;
      if (absoluteSrc) {
        image.setAttribute('src', absoluteSrc);
      }
      const srcset = image.getAttribute('srcset');
      if (srcset) {
        image.removeAttribute('srcset');
      }
      image.setAttribute('loading', 'eager');
      image.setAttribute('decoding', 'sync');
    });

    let stylesHtml = '';
    const styleElements = document.querySelectorAll('style, link[rel="stylesheet"]');
    for (const el of styleElements) {
      if (el.tagName.toLowerCase() === 'style') {
        stylesHtml += `${el.outerHTML}\n`;
        continue;
      }

      const href = (el as HTMLLinkElement).href;
      if (!href) continue;
      stylesHtml += `<link rel="stylesheet" href="${href}">\n`;
    }

    return `
      <!DOCTYPE html>
      <html lang="zh-CN">
      <head>
        <meta charset="UTF-8">
        <title>Low Quality Render</title>
        <base href="${window.location.origin}/">
        ${stylesHtml}
        <style>
          html, body {
            margin: 0;
            padding: 0;
            background: #ffffff;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          body {
            display: block;
          }
          .page-container {
            background: white;
            overflow: hidden;
            position: relative;
            box-shadow: none;
            margin: 0;
            page-break-after: always;
            break-after: page;
          }
        </style>
      </head>
      <body>
        ${topLevelPages.map((page) => {
          const { widthMm, heightMm } = getPageExportMeta(page);
          return `
          <div class="page-container" style="width:${widthMm}mm;height:${heightMm}mm;">
            ${page.outerHTML}
          </div>
        `;
        }).join('')}
      </body>
      </html>
    `;
  };

  const buildLowQualityPdf = async () => {
    const clone = createCleanExportClone();
    if (!clone) return null;

    const renderHtml = await buildServerRenderHtmlFromClone(clone);

    const response = await fetch('/api/export-low-quality-pdf', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        html: renderHtml,
        fileName: `${activeProject?.name || 'Design'}-low-quality.pdf`,
      }),
    });

    if (!response.ok) {
      throw new Error('Low quality PDF export failed on server');
    }

    return await response.blob();
  };

  const handleExportByQuality = async (quality: ExportQuality) => {
    if (!contentRef.current) return;

    try {
      setIsExporting(true);
      setShowExportModal(false);

      if (quality === 'high') {
        showToast('姝ｅ湪鍑嗗楂樿川閲?PDF锛岃绋嶅€?..');
        const printWindow = window.open('', '_blank');
        if (printWindow) {
          printWindow.document.write('<!DOCTYPE html><html><head><title>Preparing PDF</title></head><body style="font-family:sans-serif;padding:24px;">姝ｅ湪鍑嗗楂樿川閲?PDF锛岃绋嶅€?..</body></html>');
          printWindow.document.close();
        }

        const clone = createCleanExportClone();
        if (!clone) return;

        const useLightweightImageMode =
          activeProject?.type === 'CatalogProject' ||
          activeProject?.type === 'CatalogProjectUZ' ||
          activeProject?.type === 'CatalogProjectGlobal20260420' ||
          activeProject?.type === 'CatalogProjectRU';

        const htmlContent = await buildPrintableHtmlFromClone(clone, {
          embedImages: !useLightweightImageMode,
        });
        const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
        const url = URL.createObjectURL(blob);

        if (printWindow) {
          printWindow.location.href = url;
          setTimeout(() => URL.revokeObjectURL(url), 60000);
        } else {
          const a = document.createElement('a');
          a.href = url;
          a.download = `${activeProject?.name || 'Design'}-high-quality-print.html`;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          setTimeout(() => URL.revokeObjectURL(url), 10000);
        }

        showToast('高质量导出已准备完成。画册印刷请继续走这条路径，低质量 PDF 仅用于预览分发。');
        return;
      }

      showToast('正在生成低质量 PDF，请稍候...');
      const pdfBlob = await buildLowQualityPdf();
      if (!pdfBlob) {
        showToast('低质量导出失败，请重试');
        return;
      }

      const url = URL.createObjectURL(pdfBlob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${activeProject?.name || 'Design'}-low-quality.pdf`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      setTimeout(() => URL.revokeObjectURL(url), 10000);

      const sizeMb = pdfBlob.size / (1024 * 1024);
      showToast(
        pdfBlob.size <= 10 * 1024 * 1024
          ? `浣庤川閲?PDF 宸蹭笅杞斤紝绾?${sizeMb.toFixed(1)}MB`
          : `宸插敖閲忓帇缂╋紝褰撳墠绾?${sizeMb.toFixed(1)}MB`
      );
    } catch (error) {
      console.error('Export failed:', error);
      showToast('导出失败，请重试');
    } finally {
      setIsExporting(false);
    }
  };

  const handleExportPDF = () => {
    if (isExporting) return;
    setShowExportModal(true);
  };

  const activeProject = projects.find(p => p.id === activeProjectId);
  const activeCatalogEdition =
    activeProject?.type === 'CatalogProject'
      ? 'global'
      : activeProject?.type === 'CatalogProjectUZ'
        ? 'uz-en'
        : activeProject?.type === 'CatalogProjectGlobal20260420'
          ? 'uz-en'
        : activeProject?.type === 'CatalogProjectRU'
          ? 'uz-ru'
          : undefined;
  const visibleAuditIssues = getVisibleAuditIssuesForProject(
    auditBundle,
    activeProject?.type,
    activeCatalogEdition,
  );
  const visibleAuditIssueCount = getAuditIssueCount(
    auditBundle,
    activeProject?.type,
    activeCatalogEdition,
  );

  const renderPreview = (type: string) => {
    return (
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden bg-neutral-200/50">
        <div 
          className="flex items-center justify-center gap-4 origin-center transition-transform duration-500 group-hover:scale-105"
          style={{ transform: 'scale(0.15)' }}
        >
          {type === 'Brochure' ? <Brochure /> : type === 'Datasheet' ? <Datasheet /> : type === 'IPV11K48T_Datasheet' ? <IPV11K48T_Datasheet /> : type === 'IGT_Datasheet' ? <IGT_Datasheet /> : type === 'CatalogProject' ? <CatalogProject /> : type === 'CatalogProjectUZ' ? <CatalogProjectUZ /> : type === 'CatalogProjectGlobal20260420' ? <CatalogProjectGlobal20260420 /> : type === 'CatalogProjectRU' ? <CatalogProjectRU /> : type === 'FoldingBrochureUZ_RU' ? <FoldingBrochureUZ_RU /> : <LayoutTemplate className="w-64 h-64 text-neutral-300" />}
        </div>
      </div>
    );
  };

  const restorableCheckpoints = (auditBundle?.checkpoints ?? []).filter(
    (checkpoint) => checkpoint.beforeSnapshots.length > 0,
  );

  return (
    <div className="h-screen w-screen bg-neutral-100 flex font-sans overflow-hidden">
      
      {/* Delete Confirmation Modal */}
      {deleteConfirm && (
        <div className="fixed inset-0 z-[200] bg-black/50 flex items-center justify-center backdrop-blur-sm">
          <div className="bg-white rounded-xl p-6 w-[400px] shadow-2xl animate-in fade-in zoom-in duration-200">
            <h3 className="text-lg font-bold text-neutral-900 mb-2">确认删除</h3>
            <p className="text-neutral-500 mb-6">您确定要删除这个{deleteConfirm.type === 'project' ? '项目' : '模板'}吗？此操作无法撤销。</p>
            <div className="flex justify-end gap-3">
              <button 
                onClick={() => setDeleteConfirm(null)}
                className="px-4 py-2 rounded-lg text-sm font-medium text-neutral-600 hover:bg-neutral-100 transition-colors"
              >
                取消
              </button>
              <button 
                onClick={() => {
                  if (deleteConfirm.type === 'project') {
                    setProjects(projects.filter(p => p.id !== deleteConfirm.id));
                    if (activeProjectId === deleteConfirm.id) {
                      setActiveProjectId(projects.find(p => p.id !== deleteConfirm.id)?.id || '');
                    }
                    showToast('项目已删除');
                  } else {
                    setTemplates(templates.filter(t => t.id !== deleteConfirm.id));
                    showToast('模板已删除');
                  }
                  setDeleteConfirm(null);
                }}
                className="px-4 py-2 rounded-lg text-sm font-medium text-white bg-red-600 hover:bg-red-700 transition-colors shadow-sm"
              >
                纭鍒犻櫎
              </button>
            </div>
          </div>
        </div>
      )}

      {showAuditImportModal && (
        <AuditImportModal
          onClose={() => setShowAuditImportModal(false)}
          onImport={handleImportAuditReport}
        />
      )}

      {showExportModal && (
        <div className="fixed inset-0 z-[210] bg-black/50 flex items-center justify-center backdrop-blur-sm">
          <div className="bg-white rounded-2xl p-6 w-[480px] shadow-2xl animate-in fade-in zoom-in duration-200">
            <h3 className="text-lg font-bold text-neutral-900 mb-2">选择 PDF 导出模式</h3>
            <p className="text-sm text-neutral-500 mb-6">
              画册请优先使用高质量导出作为印刷主路径；低质量导出用于预览、传阅和快速发送。
            </p>

            <div className="space-y-3">
              <button
                onClick={() => handleExportByQuality('high')}
                disabled={isExporting}
                className="w-full text-left rounded-xl border border-neutral-200 hover:border-red-300 hover:bg-red-50/40 transition-colors p-4 disabled:opacity-60"
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <div className="font-bold text-neutral-900">高质量导出</div>
                    <div className="text-sm text-neutral-500 mt-1">保留文本与矢量友好结构，适合作为画册印刷主路径和 Illustrator 后续编辑路径。</div>
                  </div>
                  <div className="text-xs font-bold text-red-600 shrink-0">AI 可编辑</div>
                </div>
              </button>

              <button
                onClick={() => handleExportByQuality('low')}
                disabled={isExporting}
                className="w-full text-left rounded-xl border border-neutral-200 hover:border-blue-300 hover:bg-blue-50/40 transition-colors p-4 disabled:opacity-60"
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <div className="font-bold text-neutral-900">低质量导出</div>
                    <div className="text-sm text-neutral-500 mt-1">直接生成压缩 PDF，优先保证更快导出和更小体积，更适合预览、发送和归档。</div>
                  </div>
                  <div className="text-xs font-bold text-blue-600 shrink-0">目标 &lt; 10MB</div>
                </div>
              </button>
            </div>

            <div className="flex justify-end mt-6">
              <button
                onClick={() => setShowExportModal(false)}
                className="px-4 py-2 rounded-lg text-sm font-medium text-neutral-600 hover:bg-neutral-100 transition-colors"
              >
                取消
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Global Toast Notification */}
      {toastMessage && (
        <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-neutral-900 text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-2 z-[100] animate-in fade-in slide-in-from-top-4">
          <CheckCircle2 className="w-4 h-4 text-green-400" />
          <span className="text-sm font-medium">{toastMessage}</span>
        </div>
      )}

      {/* Global Navigation Sidebar */}
      <nav className="w-16 bg-[#0F1D3A] flex flex-col items-center py-6 gap-8 shrink-0 z-50 shadow-xl print:hidden">
        <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center mb-4">
          <LayoutDashboard className="w-5 h-5 text-white" />
        </div>
        
        <div className="flex flex-col gap-4 w-full px-2">
          <button 
            onClick={() => setCurrentView('home')}
            className={`w-full aspect-square rounded-xl flex flex-col items-center justify-center gap-1 transition-all ${currentView === 'home' ? 'bg-[#E60027] text-white shadow-lg shadow-red-500/30' : 'text-white/50 hover:bg-white/5 hover:text-white'}`}
            title="棣栭〉鎸囧崡"
          >
            <Home className="w-5 h-5" />
            <span className="text-[9px] font-medium">棣栭〉</span>
          </button>
          <button 
            onClick={() => setCurrentView('workspace')}
            className={`w-full aspect-square rounded-xl flex flex-col items-center justify-center gap-1 transition-all ${currentView === 'workspace' ? 'bg-[#E60027] text-white shadow-lg shadow-red-500/30' : 'text-white/50 hover:bg-white/5 hover:text-white'}`}
            title="工作台"
          >
            <PenTool className="w-5 h-5" />
            <span className="text-[9px] font-medium">工作台</span>
          </button>
          <button 
            onClick={() => setCurrentView('projects')}
            className={`w-full aspect-square rounded-xl flex flex-col items-center justify-center gap-1 transition-all ${currentView === 'projects' ? 'bg-[#E60027] text-white shadow-lg shadow-red-500/30' : 'text-white/50 hover:bg-white/5 hover:text-white'}`}
            title="项目库"
          >
            <FolderKanban className="w-5 h-5" />
            <span className="text-[9px] font-medium">项目库</span>
          </button>
          <button 
            onClick={() => setCurrentView('templates')}
            className={`w-full aspect-square rounded-xl flex flex-col items-center justify-center gap-1 transition-all ${currentView === 'templates' ? 'bg-[#E60027] text-white shadow-lg shadow-red-500/30' : 'text-white/50 hover:bg-white/5 hover:text-white'}`}
            title="模板库"
          >
            <LayoutTemplate className="w-5 h-5" />
            <span className="text-[9px] font-medium">模板库</span>
          </button>
        </div>
      </nav>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden relative print:overflow-visible">
        
        {/* --- HOME VIEW --- */}
        {currentView === 'home' && (
          <div className="flex-1 bg-neutral-50 overflow-y-auto">
            <div className="max-w-5xl mx-auto px-10 py-16">
              <div className="text-center mb-16">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-red-100 text-[#E60027] mb-6 shadow-sm">
                  <Sparkles className="w-8 h-8" />
                </div>
                <h1 className="text-4xl md:text-5xl font-black text-neutral-900 tracking-tight mb-6">
                  AI 主导下的平面设计平台
                </h1>
                <p className="text-lg md:text-xl text-neutral-500 max-w-3xl mx-auto leading-relaxed">
                  不再从空白画布开始。通过结构化数据驱动，实现从“意图”到“专业级印刷源文件”的瞬间跨越。
                </p>
                <div className="mt-10 flex items-center justify-center gap-4">
                  <button 
                    onClick={() => setCurrentView('projects')}
                    className="px-8 py-3.5 bg-[#0F1D3A] text-white rounded-xl font-bold hover:bg-[#0F1D3A]/90 transition-all shadow-lg shadow-blue-900/20 flex items-center gap-2"
                  >
                    <FolderKanban className="w-5 h-5" />
                    进入项目库
                  </button>
                  <button 
                    onClick={() => setCurrentView('templates')}
                    className="px-8 py-3.5 bg-white text-neutral-700 border border-neutral-200 rounded-xl font-bold hover:bg-neutral-50 transition-all flex items-center gap-2"
                  >
                    <LayoutTemplate className="w-5 h-5" />
                    浏览模板
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                {[
                  {
                    icon: <Sparkles className="w-6 h-6 text-blue-600" />,
                    bg: "bg-blue-100",
                    title: "1. 意图与数据生成",
                    desc: "AI 负责理解您的意图，将非结构化信息转化为结构化的 JSON 产品参数数据。",
                  },
                  {
                    icon: <MonitorPlay className="w-6 h-6 text-indigo-600" />,
                    bg: "bg-indigo-100",
                    title: "2. 瀹炴椂娓叉煋鏄犲皠",
                    desc: "平台接收数据后，通过预设的设计系统瞬间渲染成高精度的视觉版面，所见即所得。",
                  },
                  {
                    icon: <Settings2 className="w-6 h-6 text-orange-600" />,
                    bg: "bg-orange-100",
                    title: "3. 局部人工微调",
                    desc: "在工作台中替换高清产品图、微调参数数值，完成最后 10% 的个性化设计。",
                  },
                  {
                    icon: <Download className="w-6 h-6 text-red-600" />,
                    bg: "bg-red-100",
                    title: "4. 工业级矢量交付",
                    desc: "一键导出保留完整文本属性、本地字体映射和纯净 SVG 路径的印刷级 PDF 源文件。",
                  }
                ].map((step, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-2xl border border-neutral-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${step.bg}`}>
                      {step.icon}
                    </div>
                    <h3 className="text-lg font-bold text-neutral-900 mb-2">{step.title}</h3>
                    <p className="text-sm text-neutral-500 leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>

              <div className="bg-[#0F1D3A] rounded-3xl p-10 text-white shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>
                
                <div className="relative z-10">
                  <h2 className="text-2xl font-bold mb-4">给 AI 助手的操作提示</h2>
                  <div className="space-y-4 text-white/80 text-sm leading-relaxed">
                    <p>
                      <strong className="text-white">数据驱动：</strong>
                      不要直接修改 React 组件里分散的硬编码正文，优先改项目规定的数据层、装配层或模板层。
                    </p>
                    <p>
                      <strong className="text-white">印刷约束：</strong>
                      新增或修改模板时，避免使用 <code>box-shadow</code>、<code>drop-shadow</code>、大面积
                      <code>opacity</code> 或容易栅格化的网页效果，确保导出后仍适合印刷和继续编辑。
                    </p>
                    <p>
                      <strong className="text-white">物理单位：</strong>
                      页面布局必须坚持绝对定位和物理单位，优先使用 <code>mm</code> 与 <code>pt</code>，
                      保证最终输出尺寸和现有模板一致。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* --- PROJECTS VIEW --- */}
        {currentView === 'projects' && (
          <div className="flex-1 bg-neutral-50 p-10 overflow-y-auto">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h1 className="text-2xl font-bold text-neutral-900 mb-1">所有项目</h1>
                  <p className="text-sm text-neutral-500">管理并查看当前工作空间中的全部设计项目。</p>
                </div>
                <button 
                  onClick={() => handleCreateProject()}
                  className="flex items-center gap-2 bg-[#0F1D3A] hover:bg-[#0F1D3A]/90 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors shadow-sm"
                >
                  <Plus className="w-4 h-4" />
                  新建项目
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {projects.map(project => (
                  <div 
                    key={project.id} 
                    onClick={() => { setActiveProjectId(project.id); setCurrentView('workspace'); }}
                    className="bg-white border border-neutral-200 rounded-xl p-5 hover:shadow-xl hover:border-blue-200 transition-all cursor-pointer group flex flex-col h-full"
                  >
                    <div className="w-full aspect-video bg-neutral-100 rounded-lg mb-4 flex items-center justify-center overflow-hidden relative border border-neutral-100">
                      {renderPreview(project.type)}
                      <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-md text-[10px] font-bold text-neutral-700 shadow-sm z-10">
                        {project.type}
                      </div>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          setDeleteConfirm({ type: 'project', id: project.id });
                        }}
                        className="absolute bottom-3 right-3 bg-white/90 hover:bg-red-50 text-neutral-400 hover:text-red-500 backdrop-blur-sm p-1.5 rounded-md shadow-sm z-10 opacity-0 group-hover:opacity-100 transition-all"
                        title="删除项目"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="mt-auto">
                      <h3 className="font-bold text-neutral-900 mb-2 group-hover:text-[#E60027] transition-colors line-clamp-1">{project.name}</h3>
                      <div className="flex items-center justify-between text-xs text-neutral-500">
                        <span>{project.date}</span>
                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-medium ${project.status === 'Completed' ? 'bg-green-100 text-green-700' : project.status === 'In Progress' ? 'bg-blue-100 text-blue-700' : 'bg-neutral-100 text-neutral-600'}`}>
                          {project.status}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* --- TEMPLATES VIEW --- */}
        {currentView === 'templates' && (
          <div className="flex-1 bg-neutral-50 p-10 overflow-y-auto">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h1 className="text-2xl font-bold text-neutral-900 mb-1">模板库</h1>
                  <p className="text-sm text-neutral-500">使用预设模板快速开始新设计，或管理已保存的自定义模板。</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {templates.map(template => (
                  <div 
                    key={template.id} 
                    className="bg-white border border-neutral-200 rounded-xl p-5 hover:shadow-xl hover:border-red-200 transition-all group flex flex-col h-full"
                  >
                    <div className="w-full aspect-[3/4] bg-gradient-to-br from-neutral-50 to-neutral-100 rounded-lg mb-4 flex flex-col items-center justify-center border border-neutral-100 relative overflow-hidden">
                      {renderPreview(template.type)}
                      
                      {/* Hover Action Overlay */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-3 backdrop-blur-[2px] z-10">
                        <button 
                          onClick={() => handleCreateProject(template.id)}
                          className="bg-white text-neutral-900 px-4 py-2 rounded-lg text-sm font-bold shadow-lg hover:scale-105 transition-transform"
                        >
                          使用此模板
                        </button>
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            setDeleteConfirm({ type: 'template', id: template.id });
                          }}
                          className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm font-bold shadow-lg hover:bg-red-600 hover:scale-105 transition-transform flex items-center gap-1.5"
                        >
                          <Trash2 className="w-4 h-4" />
                          删除模板
                        </button>
                      </div>
                    </div>
                    <div className="mt-auto">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className={`px-2 py-0.5 rounded-md text-[9px] font-bold uppercase tracking-wider ${template.category === '瀹樻柟鎺ㄨ崘' ? 'bg-[#E60027]/10 text-[#E60027]' : 'bg-blue-100 text-blue-700'}`}>
                          {template.category}
                        </span>
                      </div>
                      <h3 className="font-bold text-neutral-900 line-clamp-1">{template.name}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* --- WORKSPACE VIEW --- */}
        {currentView === 'workspace' && (
          <div className="flex-1 flex flex-col overflow-hidden bg-neutral-100 print:bg-white print:overflow-visible">
            {/* Workspace Header */}
            <header className="bg-white border-b border-neutral-200 px-6 py-4 flex items-center justify-between shrink-0 shadow-sm z-20 print:hidden">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-neutral-100 rounded-lg flex items-center justify-center border border-neutral-200">
                  <PenTool className="w-4 h-4 text-neutral-600" />
                </div>
                <div>
                  <h1 className="text-base font-bold text-neutral-900 leading-tight">
                    {projects.find(p => p.id === activeProjectId)?.name || '未命名项目'}
                  </h1>
                  <p className="text-[11px] text-neutral-500 font-medium mt-0.5">
                    {projects.find(p => p.id === activeProjectId)?.type} Design Workspace
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setShowAuditImportModal(true)}
                  className="flex items-center gap-2 bg-white border border-neutral-200 hover:border-red-200 hover:bg-red-50 text-neutral-700 px-4 py-2 rounded-lg text-sm font-medium transition-all shadow-sm"
                >
                  <FileWarning className="w-4 h-4 text-[#E60027]" />
                  导入审校
                  {visibleAuditIssueCount > 0 ? (
                    <span className="ml-1 inline-flex min-w-[22px] h-[22px] items-center justify-center rounded-full bg-red-100 text-[#E60027] text-[11px] font-bold px-1.5">
                      {visibleAuditIssueCount}
                    </span>
                  ) : null}
                </button>
                <button 
                  onClick={handleSaveAsTemplate}
                  className="flex items-center gap-2 bg-white border border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50 text-neutral-700 px-4 py-2 rounded-lg text-sm font-medium transition-all shadow-sm"
                >
                  <Save className="w-4 h-4" />
                  存为模板
                </button>
                <button 
                  onClick={handleExportPDF}
                  disabled={isExporting}
                  className="flex items-center gap-2 bg-[#E60027] hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all shadow-sm shadow-red-500/20 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isExporting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Download className="w-4 h-4" />}
                  {isExporting ? '生成中...' : '导出 PDF'}
                </button>
              </div>
            </header>

            {/* Workspace Body */}
            <div className="flex-1 flex overflow-hidden print:overflow-visible">
              {/* Left Sidebar - Assets & Info */}
              <aside className="w-80 bg-white border-r border-neutral-200 p-6 flex flex-col gap-6 overflow-y-auto shrink-0 z-10 print:hidden">
                {activeProject?.type === 'CatalogProject' || activeProject?.type === 'CatalogProjectUZ' || activeProject?.type === 'CatalogProjectGlobal20260420' || activeProject?.type === 'CatalogProjectRU' ? (
                  <>
                    <CatalogMinimap 
                      pan={pan} 
                      setPan={setPan} 
                      scale={scale} 
                      setScale={setScale}
                      contentRef={contentRef} 
                      canvasRef={canvasRef} 
                      projectType={activeProject.type}
                      issues={visibleAuditIssues}
                    />
                    <div className="rounded-2xl border border-neutral-200 bg-white shadow-sm p-4">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-sm font-bold text-neutral-900 uppercase tracking-wider">检查点恢复</h3>
                        <span className="text-xs text-neutral-500">{restorableCheckpoints.length} 个</span>
                      </div>
                      <div className="space-y-2 max-h-[260px] overflow-y-auto pr-1">
                        {restorableCheckpoints.length ? restorableCheckpoints.map((checkpoint) => (
                          <button
                            key={checkpoint.checkpointId}
                            onClick={() => handleRestoreCheckpoint(checkpoint.checkpointId)}
                            disabled={busyCheckpointId === checkpoint.checkpointId}
                            className="w-full text-left rounded-xl border border-neutral-200 hover:border-red-200 hover:bg-red-50 px-3 py-3 transition-colors disabled:opacity-60"
                          >
                            <div className="text-sm font-semibold text-neutral-900">{checkpoint.summary}</div>
                            <div className="text-xs text-neutral-500 mt-1">{new Date(checkpoint.createdAt).toLocaleString()}</div>
                            <div className="text-xs text-neutral-500 mt-1">
                              {checkpoint.restoredAt ? '已恢复：' + new Date(checkpoint.restoredAt).toLocaleString() : '尚未恢复'}
                            </div>
                          </button>
                        )) : (
                          <div className="text-sm text-neutral-500 rounded-xl bg-neutral-50 border border-neutral-200 px-3 py-4">暂无可恢复的检查点</div>
                        )}
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <h2 className="text-sm font-bold text-neutral-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                        <FileText className="w-4 h-4" /> 设计备忘录
                      </h2>
                      <div className="space-y-3 text-sm text-neutral-600 bg-neutral-50 p-4 rounded-lg border border-neutral-100">
                        <p><strong className="text-neutral-900">尺寸：</strong>105 × 210 mm（竖版）</p>
                        <p className="flex items-center gap-2">
                          <strong className="text-neutral-900">品牌色：</strong>CMYK 0,100,70,0
                          <span className="inline-block w-4 h-4 bg-[#E60027] rounded-full shadow-sm"></span>
                        </p>
                        <p><strong className="text-neutral-900">字体：</strong>MarkOT（预览阶段使用系统无衬线替代）</p>
                        <p><strong className="text-neutral-900">风格：</strong>白底、明亮、简洁、大方，并保持高质感与品牌统一。</p>
                      </div>
                    </div>

                    <hr className="border-neutral-100" />

                    <div>
                      <h2 className="text-sm font-bold text-neutral-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                        <Layers className="w-4 h-4" /> 图层与素材
                      </h2>
                      <div className="space-y-2">
                        <div className="flex items-center gap-3 p-3 rounded-md bg-white border border-neutral-200 shadow-sm">
                          <div className="w-8 h-8 flex items-center justify-center bg-neutral-50 rounded border border-neutral-100 p-1">
                            <img src={logoSvg} alt="Logo thumbnail" className="w-full h-full object-contain" />
                          </div>
                          <span className="text-sm font-medium text-neutral-700">itel Logo (SVG)</span>
                        </div>
                        <div className="flex items-center gap-3 p-3 rounded-md bg-white border border-neutral-200 shadow-sm">
                          <div className="w-8 h-8 flex items-center justify-center bg-neutral-50 rounded border border-neutral-100 p-1">
                            <img src={productPng} alt="Product thumbnail" className="w-full h-full object-contain" />
                          </div>
                          <span className="text-sm font-medium text-neutral-700">MarathonS 电池产品图</span>
                        </div>
                        <div className="flex items-center gap-3 p-3 rounded-md bg-white border border-neutral-200 shadow-sm">
                          <div className="w-8 h-8 flex items-center justify-center bg-neutral-50 rounded border border-neutral-100 p-1">
                            <img src={tablePng} alt="Table thumbnail" className="w-full h-full object-contain" />
                          </div>
                          <span className="text-sm font-medium text-neutral-700">P2 对比表格（PNG）</span>
                        </div>
                        <div className="flex items-center gap-3 p-3 rounded-md bg-white border border-neutral-200 shadow-sm">
                          <FileText className="w-4 h-4 text-neutral-400" />
                          <span className="text-sm font-medium text-neutral-700">文案结构（P1 &amp; P2）</span>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </aside>

              {/* Canvas Area */}
              <section 
                ref={canvasRef}
                className={`flex-1 bg-neutral-200/50 overflow-hidden relative print:bg-white print:overflow-visible print:block ${toolMode === 'pan' ? (isDragging ? 'cursor-grabbing' : 'cursor-grab') : 'cursor-default'} ${showLabels ? 'show-design-labels' : ''}`}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
              >
                <div 
                  style={{
                    transform: `translate(${pan.x}px, ${pan.y}px) scale(${scale})`,
                    transformOrigin: 'center',
                    transition: isDragging ? 'none' : 'transform 0.05s linear'
                  }}
                  className="w-full h-full flex items-center justify-center print:!transform-none print:block"
                >
                  <div ref={contentRef} className="flex items-center justify-center gap-12 print:block print:gap-0">
                    {activeProject?.type === 'Brochure' ? (
                      <Brochure />
                    ) : activeProject?.type === 'Datasheet' ? (
                      <Datasheet />
                    ) : activeProject?.type === 'IPV11K48T_Datasheet' ? (
                      <IPV11K48T_Datasheet />
                    ) : activeProject?.type === 'IGT_Datasheet' ? (
                      <IGT_Datasheet />
                    ) : activeProject?.type === 'CatalogProject' ? (
                      <CatalogProject />
                    ) : activeProject?.type === 'CatalogProjectUZ' ? (
                      <CatalogProjectUZ />
                    ) : activeProject?.type === 'CatalogProjectGlobal20260420' ? (
                      <CatalogProjectGlobal20260420 />
                    ) : activeProject?.type === 'CatalogProjectRU' ? (
                      <CatalogProjectRU />
                    ) : activeProject?.type === 'FoldingBrochureUZ_RU' ? (
                      <FoldingBrochureUZ_RU />
                    ) : (
                      <div className="flex flex-col items-center justify-center text-neutral-400 bg-white shadow-xl rounded-2xl w-[800px] h-[600px] border border-neutral-200 border-dashed">
                        <LayoutTemplate className="w-16 h-16 mb-4 opacity-30" />
                        <h2 className="text-xl font-bold text-neutral-500 mb-2">空白画布</h2>
                        <p className="text-sm">这是一个新项目，您可以从左侧导航进入项目库或模板库开始设计。</p>
                      </div>
                    )}
                  </div>
                </div>

                {visibleAuditIssues.length > 0 ? (
                  <AuditOverlayLayer
                    issues={visibleAuditIssues}
                    canvasRef={canvasRef}
                    contentRef={contentRef}
                    scale={scale}
                    pan={pan}
                    onIgnore={handleIgnoreAuditIssue}
                    onApply={handleApplyAuditIssue}
                  />
                ) : null}

                {auditActionError ? (
                  <div className="absolute top-6 right-6 z-[95] max-w-[420px] rounded-2xl border border-red-200 bg-white/96 shadow-xl px-4 py-3 text-sm text-red-700 print:hidden">
                    <div className="font-bold text-red-600 mb-1">操作失败</div>
                    <div>{auditActionError}</div>
                  </div>
                ) : null}

                {/* Zoom/Pan Controls */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white rounded-full shadow-xl border border-neutral-200 px-2 py-2 flex items-center gap-2 z-50 print:hidden">
                  <div className="flex items-center gap-1 pr-3 border-r border-neutral-200">
                    <button
                      onClick={() => setToolMode('select')}
                      className={`p-2 rounded-full transition-colors ${toolMode === 'select' ? 'bg-neutral-100 text-neutral-900' : 'text-neutral-500 hover:text-neutral-900'}`}
                      title="閫夋嫨宸ュ叿"
                    >
                      <MousePointer2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setToolMode('pan')}
                      className={`p-2 rounded-full transition-colors ${toolMode === 'pan' ? 'bg-neutral-100 text-neutral-900' : 'text-neutral-500 hover:text-neutral-900'}`}
                      title="鎶撴墜宸ュ叿"
                    >
                      <Hand className="w-4 h-4" />
                    </button>
                  </div>

                  <button onClick={() => setScale(s => Math.max(0.1, s - 0.1))} className="p-2 text-neutral-500 hover:text-neutral-900 transition-colors" title="缂╁皬">
                    <Minus className="w-4 h-4" />
                  </button>
                  <span 
                    className="text-xs font-bold w-12 text-center text-neutral-700 cursor-pointer hover:bg-neutral-100 py-1 rounded" 
                    onClick={() => {setScale(1); setPan({x:0, y:0});}} 
                    title="閲嶇疆 100%"
                  >
                    {Math.round(scale * 100)}%
                  </span>
                  <button onClick={() => setScale(s => Math.min(3, s + 0.1))} className="p-2 text-neutral-500 hover:text-neutral-900 transition-colors" title="鏀惧ぇ">
                    <Plus className="w-4 h-4" />
                  </button>
                  <div className="w-px h-4 bg-neutral-200 mx-1"></div>
                  <button onClick={fitToScreen} className="p-2 text-neutral-500 hover:text-neutral-900 transition-colors" title="閫傚簲灞忓箷">
                    <Maximize className="w-4 h-4" />
                  </button>
                  <div className="w-px h-4 bg-neutral-200 mx-1"></div>
                  <button 
                    onClick={() => setShowLabels(!showLabels)} 
                    className={`p-2 rounded-full transition-colors ${showLabels ? 'bg-neutral-100 text-neutral-900' : 'text-neutral-500 hover:text-neutral-900'}`}
                    title={showLabels ? '隐藏元素组名称' : '显示元素组名称'}
                  >
                    {showLabels ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                  </button>
                </div>
              </section>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

