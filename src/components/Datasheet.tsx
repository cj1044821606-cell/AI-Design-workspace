/**
 * ============================================================================
 * 🤖 AI AGENT INSTRUCTIONS: DATASHEET TEMPLATE USAGE RULES
 * ============================================================================
 * When modifying this template or creating a new datasheet based on it, 
 * you MUST strictly adhere to the following 7 rules:
 * 
 * 1. Logo: Size and position MUST remain unchanged.
 * 2. Background Image: Size and position MUST remain unchanged.
 * 3. Red Gradient Bar: Position (top: 194.5mm) MUST remain unchanged. Text format 
 *    (font, size, color) MUST remain unchanged. Content changes based on copy, 
 *    and the bar MUST dynamically resize its width to fit the text length.
 * 4. Product Image: Approximate position MUST remain unchanged. You MUST use the 
 *    <ProductImageEditor> component and preserve the /* IMAGE_TRANSFORM_X * /, 
 *    /* IMAGE_TRANSFORM_Y * /, and /* IMAGE_TRANSFORM_SCALE * / comments exactly.
 * 5. Product Title: Position and size MUST remain unchanged. Text format 
 *    (font, size, color) MUST remain unchanged. Content changes based on copy.
 * 6. Core Features (Selling Points): Text format MUST remain unchanged. Content 
 *    changes based on copy. Icons MUST be updated to semantically match the new 
 *    content. Use ONLY linear icons (e.g., lucide-react) matching the template style. 
 *    DO NOT blindly reuse the original template icons.
 * 7. Tables (Page 2+): Margins (top: 10mm, left/right: 14mm) MUST remain unchanged. 
 *    Color scheme (red headers, white text) and elements MUST remain unchanged. 
 *    Text format MUST remain unchanged. Content and table length adapt to the copy.
 * 
 * See /DATASHEET_TEMPLATE_RULES.md for full details.
 * ============================================================================
 */
import React from 'react';
import { Battery, Cpu, Monitor, Bluetooth, Zap } from 'lucide-react';
import { ProductImageEditor } from './ProductImageEditor';
import logoSvg from '@/品牌素材库/横版logo_CMYK_反白.svg';
import productPng from '@/产品素材库/IPB-12100 产品白底图.png';
import bgSvg from '@/品牌素材库/datasheet 首页背景.svg';

export default function Datasheet() {
  const tableData = [
    { section: 'Main Parameters' },
    { label: 'Battery Type', value: 'LiFePO₄' },
    { label: 'Nominal Voltage (V)', value: '12.8' },
    { label: 'Nominal Capacity (Ah)', value: '100' },
    { label: 'Nominal Energy (kWh)', value: '1.28' },
    { label: 'Operating Voltage Range (V)', value: '11.6-14.4' },
    { label: 'Max. Parallel Number', value: '16' },
    { label: 'Max. Series Number', value: '4' },
    { label: 'Recommended Charge Current (A)', value: '50' },
    { label: 'Max. Continuous Charge Current (A)', value: '90' },
    { label: 'Peak Charge Current (A)', value: '150A@500mS' },
    { label: 'Recommended Discharge Current (A)', value: '50' },
    { label: 'Max. Continuous Discharge Current (A)', value: '90' },
    { label: 'Peak Discharge Current (A)', value: '150A@500mS' },
    { label: 'Recommended Depth of Discharge', value: '90%' },
    { label: 'Cycle Life of Battery Cell', value: '> 3000@25°C, 0.5C/0.5C, 80%DOD, 80%EOL' },
    { label: 'Communication Port', value: '/' },
    { section: 'General Parameters' },
    { label: 'Dimensions (D*W*H, mm)', value: '168*262*221' },
    { label: 'Net Weight (kg)', value: '10' },
    { label: 'Operating Temperature/Charge (°C)', value: '0~+55' },
    { label: 'Operating Temperature/Discharge (°C)', value: '-20~+55' },
    { label: 'Recommended Operating Temperature (°C)', value: '15~+35' },
    { label: 'Storage Temperature (°C)', value: '0~+35' },
    { label: 'Humidity', value: '10%-95%' },
    { label: 'Altitude (m)', value: '2000' },
    { label: 'Ingress Protection', value: 'IP20' },
    { label: 'Cooling Type', value: 'Natural Cooling' },
    { label: 'Shell Material', value: 'ABS' },
    { label: 'SOC Display', value: 'Digital Indicator' },
    { label: 'Bluetooth', value: 'Yes' },
    { label: 'Certification', value: 'IEC62619/UN38.3/MSDS/DGM' },
    { section: 'Protection' },
    { label: 'Circuit Breaker', value: '/' },
    { label: 'Voltage Protection', value: 'Yes' },
    { label: 'Current Protection', value: 'Yes' },
    { label: 'Temperature Protection', value: 'Yes' },
    { label: 'Short Circuit Protection', value: 'Yes' },
  ];

  return (
    <div className="flex gap-12 print:flex-col print:gap-0">
      {/* --- PAGE 1 (Front) --- */}
      <div className="relative bg-white shadow-2xl w-[210mm] h-[297mm] overflow-hidden shrink-0 print:shadow-none print:break-after-page">
        
        {/* FIXED: Background size and position MUST NOT change */}
        <div className="absolute top-0 left-0 z-0 design-group-wrapper">
          <div className="design-group-label">背景图 (Background)</div>
          <img src={bgSvg} alt="Background" className="object-cover" style={{ marginLeft: '1px', height: '1150.96px', width: '807.696px' }} referrerPolicy="no-referrer" />
        </div>

        {/* FIXED: Logo size and position MUST NOT change */}
        <div className="absolute z-10 design-group-wrapper" style={{ top: '8.552mm', left: '15.405mm' }}>
          <div className="design-group-label">品牌 Logo</div>
          <img src={logoSvg} alt="itel Logo" className="object-contain" style={{ width: '53.782mm', height: '12.758mm' }} referrerPolicy="no-referrer" />
        </div>

        {/* FIXED: Product model and name position and font sizes MUST NOT change */}
        <div className="absolute top-[23%] z-10 text-white design-group-wrapper" style={{ left: '15.405mm' }}>
          <div className="design-group-label">产品图</div>
          <h3 className="tracking-wider mb-2" style={{ fontFamily: 'MarkOT, sans-serif', fontWeight: 700, fontSize: '15.8pt' }}>IPB-12100</h3>
          <div className="w-[240px] h-[1.5px] bg-white mb-4"></div>
          <h1 className="leading-none tracking-tight" style={{ fontFamily: 'MarkOT, sans-serif', fontWeight: 400, fontSize: '36.67pt' }}>
            LiFePO₄ Battery
          </h1>
        </div>

        {/* 产品图 (叠加在场景图右下角) */}
        <div className="absolute top-[34%] right-[5%] w-[390px] z-20">
          <ProductImageEditor 
            src={productPng} 
            componentName="Datasheet"
            initialX={0} /* IMAGE_TRANSFORM_X */
            initialY={0} /* IMAGE_TRANSFORM_Y */
            initialScale={1} /* IMAGE_TRANSFORM_SCALE */
          />
        </div>

        {/* FIXED: Red gradient bar position and height MUST NOT change. Width is dynamic based on content. */}
        <div className="absolute z-10 design-group-wrapper" style={{ top: '194.5mm', left: '8.55mm' }}>
          <div className="design-group-label">红色渐变条 (Gradient Bar)</div>
          <div 
            className="flex items-center w-max relative"
            style={{ 
              paddingLeft: '15mm',
              paddingRight: '15mm',
              height: '43px'
            }}
          >
            {/* 真正的内联 SVG，确保 AI 完美解析渐变。使用纯白代替透明，避免 PDF 透明度展平导致的白边问题 */}
            <svg className="absolute inset-0 w-full h-full -z-10" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="redGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="15%" stopColor="#e60027" />
                  <stop offset="85%" stopColor="#e60027" />
                  <stop offset="100%" stopColor="#ffffff" />
                </linearGradient>
              </defs>
              <rect width="100%" height="100%" fill="url(#redGrad)" />
            </svg>
            <span className="text-white" style={{ fontFamily: 'MarkOT, sans-serif', fontWeight: 700, fontSize: '15.8pt' }}>IPB-12100</span>
            <span className="mx-4 text-white" style={{ fontFamily: 'MarkOT, sans-serif', fontWeight: 700, fontSize: '15.8pt' }}>|</span>
            <span className="text-white" style={{ fontFamily: 'MarkOT, sans-serif', fontWeight: 700, fontSize: '15.8pt' }}>12.8V 100Ah</span>
          </div>
        </div>

        {/* FIXED: Selling points (Features) boundaries MUST NOT change */}
        <div className="absolute left-14 right-10 z-10 grid grid-cols-[1fr_1.1fr] gap-x-4 gap-y-8 design-group-wrapper" style={{ top: 'calc(194.5mm + 43px + 5mm)' }}>
          <div className="design-group-label">核心卖点 (Features)</div>
          {/* Feature 1 */}
          <div className="flex gap-4">
            <Battery className="w-7 h-7 text-[#E60027] shrink-0 mt-0.5" strokeWidth={1.5} />
            <div className="flex flex-col gap-1">
              <h4 className="font-bold text-[#333] text-[16px] leading-tight">Class-A LiFePO₄ Battery Cell</h4>
              <p className="text-[#666] text-[12px] leading-relaxed">3000 Cycle Life<br/>High Safety and Performance</p>
            </div>
          </div>
          {/* Feature 2 */}
          <div className="flex gap-4">
            <Cpu className="w-7 h-7 text-[#E60027] shrink-0 mt-0.5" strokeWidth={1.5} />
            <div className="flex flex-col gap-1">
              <h4 className="font-bold text-[#333] text-[16px] leading-tight">Intelligent Software BMS</h4>
              <p className="text-[#666] text-[12px] leading-relaxed">50+ Protection Algorithms for Safety and<br/>Longer Lifespan</p>
            </div>
          </div>
          {/* Feature 3 */}
          <div className="flex gap-4">
            <Monitor className="w-7 h-7 text-[#E60027] shrink-0 mt-0.5" strokeWidth={1.5} />
            <div className="flex flex-col gap-1">
              <h4 className="font-bold text-[#333] text-[16px] leading-tight">Digital Display</h4>
              <p className="text-[#666] text-[12px] leading-relaxed">Display Battery SOC and Fault Codes<br/>Accurately</p>
            </div>
          </div>
          {/* Feature 4 */}
          <div className="flex gap-4">
            <Bluetooth className="w-7 h-7 text-[#E60027] shrink-0 mt-0.5" strokeWidth={1.5} />
            <div className="flex flex-col gap-1">
              <h4 className="font-bold text-[#333] text-[16px] leading-tight">Bluetooth</h4>
              <p className="text-[#666] text-[12px] leading-relaxed">OTA Battery<br/>Check Battery information via itel Energy APP</p>
            </div>
          </div>
          {/* Feature 5 */}
          <div className="flex gap-4 col-span-2">
            <Zap className="w-7 h-7 text-[#E60027] shrink-0 mt-0.5" strokeWidth={1.5} />
            <div className="flex flex-col gap-1">
              <h4 className="font-bold text-[#333] text-[16px] leading-tight">Built-in AC Charger</h4>
              <p className="text-[#666] text-[12px] leading-relaxed">Automatically woken up by Inverter, No Need<br/>Extra Charger</p>
            </div>
          </div>
        </div>
      </div>

      {/* --- PAGE 2 (Back / Table) --- */}
      {/* 参数表格 */}
      <div className="relative bg-white shadow-2xl w-[210mm] h-[297mm] overflow-hidden shrink-0 pt-[10mm] px-[14mm] flex flex-col design-group-wrapper print:shadow-none print:break-after-page">
        <div className="design-group-label">参数表格</div>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#E60027] text-white h-[5mm]">
              <th className="px-4 font-bold w-[35%] border-r-[0.5pt] border-b-[0.4pt] border-white text-center text-[8.607pt]" style={{ fontFamily: '"Mark OT", sans-serif' }}>Model</th>
              <th className="px-4 font-bold w-[65%] border-b-[0.4pt] border-white text-center text-[8.607pt]" style={{ fontFamily: '"Mark OT", sans-serif' }}>IPB-12100</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => {
              if (row.section) {
                return (
                  <tr key={index} className="bg-[#9f9e9f]/30 text-black h-[5mm]">
                    <td colSpan={2} className="px-4 text-[6.455pt] font-[900] border-b-[0.4pt] border-white" style={{ fontFamily: '"Mark OT", sans-serif' }}>{row.section}</td>
                  </tr>
                );
              }
              return (
                <tr key={index} className="bg-[#efefef] text-black h-[5mm]">
                  <td className="px-4 border-r-[0.5pt] border-b-[0.4pt] border-white text-[6.455pt] font-normal" style={{ fontFamily: '"Mark OT", sans-serif' }}>{row.label}</td>
                  <td className="px-4 text-center border-b-[0.4pt] border-white text-[6.455pt] font-normal" style={{ fontFamily: '"Mark OT", sans-serif' }}>{row.value}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
