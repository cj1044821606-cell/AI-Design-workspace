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
import { Zap, ShieldCheck, Monitor } from 'lucide-react';
import { ProductImageEditor } from './ProductImageEditor';
import logoSvg from '@/品牌素材库/横版logo_CMYK_反白.svg';
import productPng from '@/产品素材库/IGT-6KSA8KSA10KSA.png';
import bgSvg from '@/品牌素材库/datasheet 首页背景.svg';

export default function IGT_Datasheet() {
  const tableData = [
    { section: 'PV Input' },
    { label: 'Max. PV Input Power (W)', val1: '9000', val2: '12000', val3: '15000' },
    { label: 'Max. PV Input Voltage (V)', val1: '550', val2: '550', val3: '550' },
    { label: 'Nominal PV Input Voltage (V)', val1: '360', val2: '360', val3: '360' },
    { label: 'Start-up Voltage (V)', val1: '50', val2: '50', val3: '50' },
    { label: 'MPPT Voltage Range (V)', val1: '80~550', val2: '80~550', val3: '80~550' },
    { label: 'Max. Input Current per MPPT (A)', val1: '20/20', val2: '20/26', val3: '20/30' },
    { label: 'Number of MPPT', val1: '2', val2: '2', val3: '2' },
    { label: 'Number of Strings per MPPT', val1: '1', val2: '1+2', val3: '1+2' },
    { section: 'AC Output' },
    { label: 'Nominal Output Active Power (W)', val1: '6000', val2: '8000', val3: '10000' },
    { label: 'Nominal Output Apparent Power (VA)', val1: '6000', val2: '8000', val3: '10000' },
    { label: 'Max. Output Active Power (W)', val1: '6600', val2: '8800', val3: '11000' },
    { label: 'Max. Output Apparent Power (VA)', val1: '6600', val2: '8800', val3: '11000' },
    { label: 'Nominal Output Voltage (Vac)', val1: '220/230/240 (L+N+PE)', val2: '220/230/240 (L+N+PE)', val3: '220/230/240 (L+N+PE)' },
    { label: 'Max. Output Current (A)', val1: '27.3', val2: '36.4', val3: '45.5' },
    { label: 'Output Frequency (Hz)', val1: '50/60', val2: '50/60', val3: '50/60' },
    { label: 'Output Frequency Range (Hz)', val1: '45-55/55-65', val2: '45-55/55-65', val3: '45-55/55-65' },
    { label: 'Power Factor', val1: '0.8 Leading to 0.8 Lagging', val2: '0.8 Leading to 0.8 Lagging', val3: '0.8 Leading to 0.8 Lagging' },
    { label: 'Total Current Harmonic Distortion', val1: '<3%', val2: '<3%', val3: '<3%' },
    { section: 'Efficiency' },
    { label: 'Max. Efficiency', val1: '98.10%', val2: '98.10%', val3: '98.10%' },
    { label: 'European Efficiency', val1: '97.50%', val2: '97.50%', val3: '97.60%' },
    { section: 'Protection' },
    { label: 'PV Reversed Polarity Protection', val1: 'No', val2: 'Yes', val3: 'Yes' },
    { label: 'Residual Current Monitor', val1: 'Yes', val2: 'Yes', val3: 'Yes' },
    { label: 'PV Overvoltage Protection', val1: 'Yes', val2: 'Yes', val3: 'Yes' },
    { label: 'PV Overcurrent Protection', val1: 'Yes', val2: 'Yes', val3: 'Yes' },
    { label: 'DC Switch', val1: 'Yes', val2: 'Yes', val3: 'Yes' },
    { label: 'Anti-islanding Protection', val1: 'Yes', val2: 'Yes', val3: 'Yes' },
    { label: 'Surge Protection', val1: 'DC: Type II, AC: Type II', val2: 'DC: Type II, AC: Type II', val3: 'DC: Type II, AC: Type II' },
    { label: 'Insulation Resistor Detector', val1: 'Yes', val2: 'Yes', val3: 'Yes' },
    { label: 'Output Overcurrent Protection', val1: 'Yes', val2: 'Yes', val3: 'Yes' },
    { label: 'Output Short Circuit Protection', val1: 'Yes', val2: 'Yes', val3: 'Yes' },
    { label: 'Output Overvoltage Protection', val1: 'Yes', val2: 'Yes', val3: 'Yes' },
    { label: 'AFCI', val1: 'Optional', val2: 'Optional', val3: 'Optional' },
    { section: 'General' },
    { label: 'Dimensions (L×W×H mm)', val1: '347×368×167', val2: '347×368×190', val3: '347×368×190' },
    { label: 'Net Weight (kg)', val1: '10', val2: '11', val3: '11' },
    { label: 'Operating Temperature Range (&deg;C)', val1: '-25 ~ +60 (>45℃ Power Derating)', val2: '-25 ~ +60 (>45℃ Power Derating)', val3: '-25 ~ +60 (>45℃ Power Derating)' },
    { label: 'Max. Operating Altitude (m)', val1: '4000', val2: '4000', val3: '4000' },
    { label: 'Communication', val1: 'RS485, Optional: WiFi/GPRS', val2: 'RS485, Optional: WiFi/GPRS', val3: 'RS485, Optional: WiFi/GPRS' },
    { label: 'Cooling Method', val1: 'Natural Cooling', val2: 'Intelligent Fan Cooling', val3: 'Intelligent Fan Cooling' },
    { label: 'Ingress Protection Rating', val1: 'IP66', val2: 'IP66', val3: 'IP66' },
    { label: 'Relative Humidity', val1: '0~100%', val2: '0~100%', val3: '0~100%' },
    { label: 'User Interface', val1: 'LED/LCD(optional)', val2: 'LED/LCD(optional)', val3: 'LED/LCD(optional)' },
    { label: 'Self-consumption at Night (W)', val1: '<1', val2: '<1', val3: '<1' },
    { label: 'Topology', val1: 'Non-isolated', val2: 'Non-isolated', val3: 'Non-isolated' },
    { label: 'Authentication Level', val1: 'IEC62109-1/2, IEC61683, IEC61000, IEC61727/IEC62116', val2: 'IEC62109-1/2, IEC61683, IEC61000, IEC61727/IEC62116', val3: 'IEC62109-1/2, IEC61683, IEC61000, IEC61727/IEC62116' },
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
          <h3 className="tracking-wider mb-2" style={{ fontFamily: 'MarkOT, sans-serif', fontWeight: 700, fontSize: '15.8pt' }}>IGT-6KSA / IGT-8KSA / IGT-10KSA</h3>
          <div className="w-[240px] h-[1.5px] bg-white mb-4"></div>
          <h1 className="leading-none tracking-tight" style={{ fontFamily: 'MarkOT, sans-serif', fontWeight: 400, fontSize: '36.67pt' }}>
            Grid-tied Inverter
          </h1>
        </div>

        {/* 产品图 (叠加在场景图右下角) */}
        <div className="absolute top-[34%] right-[5%] w-[390px] z-20">
          <ProductImageEditor 
            src={productPng} 
            componentName="IGT_Datasheet"
            initialX={8} /* IMAGE_TRANSFORM_X */
            initialY={-45} /* IMAGE_TRANSFORM_Y */
            initialScale={1.15} /* IMAGE_TRANSFORM_SCALE */
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
            <svg className="absolute inset-0 w-full h-full -z-10" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="redGradIGT" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="15%" stopColor="#e60027" />
                  <stop offset="85%" stopColor="#e60027" />
                  <stop offset="100%" stopColor="#ffffff" />
                </linearGradient>
              </defs>
              <rect width="100%" height="100%" fill="url(#redGradIGT)" />
            </svg>
            <span className="text-white" style={{ fontFamily: 'MarkOT, sans-serif', fontWeight: 700, fontSize: '15.8pt' }}>IGT-6KSA / IGT-8KSA / IGT-10KSA</span>
            <span className="mx-4 text-white" style={{ fontFamily: 'MarkOT, sans-serif', fontWeight: 700, fontSize: '15.8pt' }}>|</span>
            <span className="text-white" style={{ fontFamily: 'MarkOT, sans-serif', fontWeight: 700, fontSize: '15.8pt' }}>Grid-tied Inverter</span>
          </div>
        </div>

        {/* FIXED: Selling points (Features) boundaries MUST NOT change */}
        <div className="absolute left-14 right-10 z-10 grid grid-cols-[1fr_1.1fr] gap-x-4 gap-y-8 design-group-wrapper" style={{ top: 'calc(194.5mm + 43px + 5mm)' }}>
          <div className="design-group-label">核心卖点 (Features)</div>
          {/* Feature 1 */}
          <div className="flex gap-4">
            <Zap className="w-7 h-7 text-[#E60027] shrink-0 mt-0.5" strokeWidth={1.5} />
            <div className="flex flex-col gap-1">
              <h4 className="font-bold text-[#333] text-[16px] leading-tight">Optimal Performance</h4>
              <p className="text-[#666] text-[12px] leading-relaxed">20A PV Input Current per MPPT<br/>2 MPPTs, Max. Efficiency 98.1%<br/>150% DC Input Oversizing & 110% AC Output Overloading<br/>No Derating at 45ºC</p>
            </div>
          </div>
          {/* Feature 2 */}
          <div className="flex gap-4">
            <ShieldCheck className="w-7 h-7 text-[#E60027] shrink-0 mt-0.5" strokeWidth={1.5} />
            <div className="flex flex-col gap-1">
              <h4 className="font-bold text-[#333] text-[16px] leading-tight">Safety and Reliability</h4>
              <p className="text-[#666] text-[12px] leading-relaxed">Type II SPD on AC & DC Sides<br/>IP66 Protection, 5-Year Warranty<br/>Optional AFCI Protection</p>
            </div>
          </div>
          {/* Feature 3 */}
          <div className="flex gap-4 col-span-2">
            <Monitor className="w-7 h-7 text-[#E60027] shrink-0 mt-0.5" strokeWidth={1.5} />
            <div className="flex flex-col gap-1">
              <h4 className="font-bold text-[#333] text-[16px] leading-tight">Remote Control and Monitoring</h4>
              <p className="text-[#666] text-[12px] leading-relaxed">String Level Monitoring<br/>Remote or Onsite Upgrade Supported</p>
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
              <th className="px-4 font-bold w-[25%] border-r-[0.5pt] border-b-[0.4pt] border-white text-center text-[8.607pt]" style={{ fontFamily: '"Mark OT", sans-serif' }}>Model</th>
              <th className="px-4 font-bold w-[25%] border-r-[0.5pt] border-b-[0.4pt] border-white text-center text-[8.607pt]" style={{ fontFamily: '"Mark OT", sans-serif' }}>IGT-6KSA</th>
              <th className="px-4 font-bold w-[25%] border-r-[0.5pt] border-b-[0.4pt] border-white text-center text-[8.607pt]" style={{ fontFamily: '"Mark OT", sans-serif' }}>IGT-8KSA</th>
              <th className="px-4 font-bold w-[25%] border-b-[0.4pt] border-white text-center text-[8.607pt]" style={{ fontFamily: '"Mark OT", sans-serif' }}>IGT-10KSA</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => {
              if (row.section) {
                return (
                  <tr key={index} className="bg-[#9f9e9f]/30 text-black h-[5mm]">
                    <td colSpan={4} className="px-4 text-[6.455pt] font-[900] border-b-[0.4pt] border-white" style={{ fontFamily: '"Mark OT", sans-serif' }}>{row.section}</td>
                  </tr>
                );
              }
              return (
                <tr key={index} className="bg-[#efefef] text-black h-[5mm]">
                  <td className="px-4 border-r-[0.5pt] border-b-[0.4pt] border-white text-[6.455pt] font-normal" style={{ fontFamily: '"Mark OT", sans-serif' }}>{row.label}</td>
                  <td className="px-4 text-center border-r-[0.5pt] border-b-[0.4pt] border-white text-[6.455pt] font-normal" style={{ fontFamily: '"Mark OT", sans-serif' }}>{row.val1}</td>
                  <td className="px-4 text-center border-r-[0.5pt] border-b-[0.4pt] border-white text-[6.455pt] font-normal" style={{ fontFamily: '"Mark OT", sans-serif' }}>{row.val2}</td>
                  <td className="px-4 text-center border-b-[0.4pt] border-white text-[6.455pt] font-normal" style={{ fontFamily: '"Mark OT", sans-serif' }}>{row.val3}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
