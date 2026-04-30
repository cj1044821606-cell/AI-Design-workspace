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
import { Battery, Cpu, Monitor, Bluetooth, Zap, ShieldCheck, TrendingUp, Layers } from 'lucide-react';
import { ProductImageEditor } from './ProductImageEditor';
import logoSvg from '@/品牌素材库/横版logo_CMYK_反白.svg';
import productPng from '@/产品素材库/IPV-11K48T.png';
import bgSvg from '@/品牌素材库/datasheet 首页背景.svg';

export default function IPV11K48T_Datasheet() {
  const tableData = [
    { section: 'Efficiency' },
    { label: 'MPPT Efficiency', value: '99.90%' },
    { label: 'Max. Battery Mode Conversion Efficiency', value: '94%' },
    { section: 'PV Input' },
    { label: 'Max. PV Input Power (W)', value: '16500' },
    { label: 'Max. PV Input Voltage (V)', value: '535' },
    { label: 'Start-up Voltage (V)', value: '85' },
    { label: 'MPPT Voltage Range (V)', value: '75-500' },
    { label: 'Max. Input Current (A)', value: '30/20' },
    { label: 'Number of MPPT', value: '2' },
    { label: 'Number of Strings per MPPT', value: '2+1' },
    { section: 'AC Input' },
    { label: 'Nominal Input Voltage (Vac)', value: '230' },
    { label: 'Input Voltage Range (Vac)', value: '90~280' },
    { label: 'Max. AC Input Current (A)', value: '73 (Bypass Mode)' },
    { label: 'Nominal Operating Frequency (Hz)', value: '50/60' },
    { section: 'AC Output' },
    { label: 'Nominal AC Output Power (W)', value: '11000' },
    { label: 'Max. Output Apparent Power (VA)', value: '11000' },
    { label: 'Nominal AC Output Voltage (Vac)', value: '220/230/240 (L+N+PE)' },
    { label: 'Max. Output Current (A)', value: '50' },
    { label: 'Total Current Harmonic Distortion', value: '<3%' },
    { label: 'Nominal AC Frequency (Hz)', value: '50/60' },
    { label: 'Switch Time', value: '<10ms (UPS), <20ms (Appliances)' },
    { label: 'Surge Power (VA)', value: '18000 @ 5s' },
    { label: 'Overload Capability', value: '102%<Load≤110% @ 1min / 110%<Load≤130% @ 15s / 130%<Load≤150% @ 10s / Load>150% @ 5s' },
    { section: 'Battery' },
    { label: 'Battery Type', value: 'Lead-acid / Lithium-ion / User Defined' },
    { label: 'Rated Voltage (V)', value: '48' },
    { label: 'Battery Voltage Range (V)', value: '40-60' },
    { label: 'Max. Solar Charging Current (A)', value: '200' },
    { label: 'Max. Mains/Generator Charging Current (A)', value: '180' },
    { label: 'Max. Discharging Current (A)', value: '220' },
    { section: 'General' },
    { label: 'Dimensions (L×W×H, mm)', value: '410×156×600' },
    { label: 'Net Weight (kg)', value: '20' },
    { label: 'Operating Temperature Range (&deg;C)', value: '-25 ~ +60 (>45°C Power Derating)' },
    { label: 'Max. Operating Altitude (m)', value: '3000 (>2000m Power Derating)' },
    { label: 'Communication', value: 'WiFi / RS485 / CAN / Dry Contact' },
    { label: 'Diesel Generator Support', value: 'Yes' },
    { label: 'Smart Load Support', value: 'Yes' },
    { label: 'Parallel Capability', value: 'Single Phase: 12 / Three Phase: 12' },
    { label: 'Cooling Method', value: 'Intelligent Fan Cooling' },
    { label: 'Noise (dB)', value: '<60' },
    { label: 'Authentication Level', value: 'IEC62109-1, IEC62109-2, IEC61683' },
    { section: 'Protection' },
    { label: 'Ingress Protection', value: 'IP54' },
    { label: 'Overvoltage Protection', value: 'Yes' },
    { label: 'Overload Protection', value: 'Yes' },
    { label: 'Short Circuit Protection', value: 'Yes' },
    { label: 'Over Temperature Protection', value: 'Yes' },
    { label: 'Surge Protection', value: 'DC: TYPE III / AC: TYPE III' },
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
          <h3 className="tracking-wider mb-2" style={{ fontFamily: 'MarkOT, sans-serif', fontWeight: 700, fontSize: '15.8pt' }}>IPV-11K48T</h3>
          <div className="w-[240px] h-[1.5px] bg-white mb-4"></div>
          <h1 className="leading-none tracking-tight" style={{ fontFamily: 'MarkOT, sans-serif', fontWeight: 400, fontSize: '36.67pt' }}>
            Hybrid Inverter
          </h1>
        </div>

        {/* 产品图 (叠加在场景图右下角) */}
        <div className="absolute top-[34%] right-[5%] w-[390px] z-20">
          <ProductImageEditor 
            src={productPng} 
            componentName="IPV11K48T_Datasheet"
            initialX={14} /* IMAGE_TRANSFORM_X */
            initialY={-45} /* IMAGE_TRANSFORM_Y */
            initialScale={1.45} /* IMAGE_TRANSFORM_SCALE */
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
                <linearGradient id="redGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="15%" stopColor="#e60027" />
                  <stop offset="85%" stopColor="#e60027" />
                  <stop offset="100%" stopColor="#ffffff" />
                </linearGradient>
              </defs>
              <rect width="100%" height="100%" fill="url(#redGrad2)" />
            </svg>
            <span className="text-white" style={{ fontFamily: 'MarkOT, sans-serif', fontWeight: 700, fontSize: '15.8pt' }}>IPV-11K48T</span>
            <span className="mx-4 text-white" style={{ fontFamily: 'MarkOT, sans-serif', fontWeight: 700, fontSize: '15.8pt' }}>|</span>
            <span className="text-white" style={{ fontFamily: 'MarkOT, sans-serif', fontWeight: 700, fontSize: '15.8pt' }}>Hybrid Inverter</span>
          </div>
        </div>

        {/* FIXED: Selling points (Features) boundaries MUST NOT change */}
        <div className="absolute left-14 right-10 z-10 grid grid-cols-[1fr_1.1fr] gap-x-4 gap-y-8 design-group-wrapper" style={{ top: 'calc(194.5mm + 43px + 5mm)' }}>
          <div className="design-group-label">核心卖点 (Features)</div>
          {/* Feature 1 */}
          <div className="flex gap-4">
            <Zap className="w-7 h-7 text-[#E60027] shrink-0 mt-0.5" strokeWidth={1.5} />
            <div className="flex flex-col gap-1">
              <h4 className="font-bold text-[#333] text-[16px] leading-tight">Power Reliability</h4>
              <p className="text-[#666] text-[12px] leading-relaxed">150% AC Output Oversizing & Overloading<br/>UPS Switching Time: &lt;20ms</p>
            </div>
          </div>
          {/* Feature 2 */}
          <div className="flex gap-4">
            <TrendingUp className="w-7 h-7 text-[#E60027] shrink-0 mt-0.5" strokeWidth={1.5} />
            <div className="flex flex-col gap-1">
              <h4 className="font-bold text-[#333] text-[16px] leading-tight">Energy Yield</h4>
              <p className="text-[#666] text-[12px] leading-relaxed">Supports up to 16kW PV, MPPT 30A/20A<br/>MPPT ≥ 99%, Low Startup Voltage: 85V</p>
            </div>
          </div>
          {/* Feature 3 */}
          <div className="flex gap-4">
            <Monitor className="w-7 h-7 text-[#E60027] shrink-0 mt-0.5" strokeWidth={1.5} />
            <div className="flex flex-col gap-1">
              <h4 className="font-bold text-[#333] text-[16px] leading-tight">User Convenience</h4>
              <p className="text-[#666] text-[12px] leading-relaxed">Smart Load Management & Remote Control<br/>Low Noise & Lightweight Design (20kg)</p>
            </div>
          </div>
          {/* Feature 4 */}
          <div className="flex gap-4">
            <ShieldCheck className="w-7 h-7 text-[#E60027] shrink-0 mt-0.5" strokeWidth={1.5} />
            <div className="flex flex-col gap-1">
              <h4 className="font-bold text-[#333] text-[16px] leading-tight">Durability & Service</h4>
              <p className="text-[#666] text-[12px] leading-relaxed">IP54 Protection & 3-Year Warranty<br/>Surge Protection: DC/AC TYPE III</p>
            </div>
          </div>
          {/* Feature 5 */}
          <div className="flex gap-4 col-span-2">
            <Layers className="w-7 h-7 text-[#E60027] shrink-0 mt-0.5" strokeWidth={1.5} />
            <div className="flex flex-col gap-1">
              <h4 className="font-bold text-[#333] text-[16px] leading-tight">Expandability</h4>
              <p className="text-[#666] text-[12px] leading-relaxed">Dual MPPT Inputs (30A+20A)<br/>Parallel Operation: Supports up to 12 Units</p>
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
              <th className="px-4 font-bold w-[65%] border-b-[0.4pt] border-white text-center text-[8.607pt]" style={{ fontFamily: '"Mark OT", sans-serif' }}>IPV-11K48T</th>
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
