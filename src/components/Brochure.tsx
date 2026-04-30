import React from 'react';
import { ShieldCheck, Clock, Activity, TrendingUp } from 'lucide-react';
import logoSvg from '@/品牌素材库/横版logo_CMYK.svg';
import productPng from '@/产品素材库/封面-电池家族 02.png';
import tablePng from '@/产品素材库/P2对比表格.png';
// import img51314H from '@/产品素材库/IPL-51314H-06.png';
import img51100 from '@/产品素材库/IPW-51100_2.png';
// import img25200 from '@/产品素材库/IPL-25200_06.png';
import img25100 from '@/产品素材库/IPW25100_5.png';

export default function Brochure() {
  return (
    <>
      {/* --- PAGE 1 (Cover) --- */}
      <div className="relative bg-white shadow-2xl w-[380px] h-[760px] overflow-hidden group shrink-0 print:shadow-none print:break-after-page">
        {/* Image - Height reduced to 82% to physically move the image up and leave pure white space at the bottom */}
        <div className="absolute top-0 left-0 w-full h-[82%] z-0 design-group-wrapper">
          <div className="design-group-label">封面背景图 (Cover Image)</div>
          <img src={productPng} alt="MarathonS Battery Background" className="w-full h-full object-cover object-bottom" referrerPolicy="no-referrer" />
        </div>
        <div className="absolute inset-0 border border-blue-400/0 group-hover:border-blue-400/30 transition-colors pointer-events-none z-50 m-4"></div>

        {/* 1. Logo (Fixed Position) */}
        <div className="absolute top-6 left-8 z-10 design-group-wrapper">
          <div className="design-group-label">品牌 Logo</div>
          <img src={logoSvg} alt="itel Logo" className="h-8 w-auto object-contain" referrerPolicy="no-referrer" />
        </div>

        {/* 2. Typography - Updated colors and sizes */}
        <div className="absolute top-24 left-8 right-8 z-10 flex flex-col items-start text-left design-group-wrapper">
          <div className="design-group-label">主标题 (Main Title)</div>
          <h3 className="text-[#E60027] font-bold text-xs tracking-[0.2em] uppercase mb-3">
            itel Energy
          </h3>
          <h1 className="text-[#0F1D3A] font-black text-[2.5rem] leading-[1.05] tracking-tight mb-4">
            MarathonS<br />Battery Series
          </h1>
          <p className="text-[#334155] font-medium text-sm leading-relaxed max-w-[80%]">
            Built for long-term reliability.
          </p>
        </div>

        {/* 3. Bottom Text - Placed in the newly created white space at the bottom */}
        <div className="absolute bottom-8 left-8 right-8 z-10 design-group-wrapper">
          <div className="design-group-label">底部信息 (Bottom Info)</div>
          <div className="border-t-[1.5px] border-[#0F1D3A]/10 pt-4 flex flex-col gap-1.5">
            <div className="flex items-center gap-x-3 text-xs font-bold text-[#0F1D3A] tracking-widest uppercase">
              <span>Grade-A cells</span>
              <span className="text-[#E60027]">•</span>
              <span>6000 cycles</span>
            </div>
            <div className="text-[10px] font-bold text-slate-500 tracking-widest uppercase">
              Built for long-term use.
            </div>
          </div>
        </div>
      </div>

      {/* --- PAGE 2 (Content) --- */}
      <div className="relative bg-white shadow-2xl w-[380px] h-[760px] overflow-hidden group shrink-0 print:shadow-none print:break-after-page">
        <div className="absolute inset-0 border border-blue-400/0 group-hover:border-blue-400/30 transition-colors pointer-events-none z-50 m-4"></div>
        
        {/* Top Section: Text (Fixed to top 270px) */}
        <div className="absolute top-0 left-0 w-full h-[270px] px-8 pt-8 bg-white z-10 flex flex-col design-group-wrapper">
          <div className="design-group-label">核心技术说明 (Core Tech)</div>
          <div className="mb-4">
            <h3 className="text-[#E60027] font-bold text-[10px] tracking-[0.2em] uppercase mb-1.5">
              Core Technology
            </h3>
            <h2 className="text-[#0F1D3A] font-black text-[22px] leading-none tracking-tight mb-2">
              Why LiFePO₄ Batteries&plusmn;
            </h2>
            <p className="text-[#334155] font-medium text-[10px] leading-relaxed">
              <strong className="text-[#0F1D3A]">Built for long-term reliability.</strong> Premium LiFePO₄ cells are safer, longer-lasting, and ideal for frequent cycling.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-5 gap-y-4">
            {/* Item 1 */}
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5 mb-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#E60027]" />
                <h4 className="text-[#0F1D3A] font-bold text-[10px] leading-none">Safer chemistry</h4>
              </div>
              <p className="text-[#334155] text-[9px] leading-snug">High thermal stability ensures safe, steady performance.</p>
            </div>
            {/* Item 2 */}
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5 mb-1">
                <Clock className="w-3.5 h-3.5 text-[#E60027]" />
                <h4 className="text-[#0F1D3A] font-bold text-[10px] leading-none">Long-term use</h4>
              </div>
              <p className="text-[#334155] text-[9px] leading-snug">High cycle life for frequent daily charge and discharge.</p>
            </div>
            {/* Item 3 */}
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5 mb-1">
                <Activity className="w-3.5 h-3.5 text-[#E60027]" />
                <h4 className="text-[#0F1D3A] font-bold text-[10px] leading-none">Stable output</h4>
              </div>
              <p className="text-[#334155] text-[9px] leading-snug">Consistent power delivery with minimal capacity fade.</p>
            </div>
            {/* Item 4 */}
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5 mb-1">
                <TrendingUp className="w-3.5 h-3.5 text-[#E60027]" />
                <h4 className="text-[#0F1D3A] font-bold text-[10px] leading-none">Better value</h4>
              </div>
              <p className="text-[#334155] text-[9px] leading-snug">Fewer replacements mean lower total cost of ownership.</p>
            </div>
          </div>
        </div>

        {/* Bottom Section: Table (Using user's exact CSS dimensions) */}
        <div 
          className="absolute left-0 w-full z-0 design-group-wrapper"
          style={{
            top: '270px',
            height: '568px',
          }}
        >
          <div className="design-group-label">对比表格 (Comparison Table)</div>
          <img 
            src={tablePng} 
            alt="LiFePO4 Comparison Table" 
            className="w-full h-full object-contain object-top"
            referrerPolicy="no-referrer" 
          />
        </div>
      </div>

      {/* --- PAGE 3 (Products & Models / Specifications) --- */}
      <div className="relative bg-white shadow-2xl w-[380px] h-[760px] overflow-hidden group shrink-0 print:shadow-none print:break-after-page">
        <div className="absolute inset-0 border border-blue-400/0 group-hover:border-blue-400/30 transition-colors pointer-events-none z-50 m-4"></div>
        
        {/* Header */}
        <div className="absolute top-12 left-8 right-8 z-10 design-group-wrapper">
          <div className="design-group-label">页面标题 (Page Title)</div>
          <h2 className="text-[#0F1D3A] font-black text-[24px] leading-none tracking-tight mb-2">
            Products & Models*
          </h2>
          <p className="text-[#334155] font-medium text-[10px] leading-relaxed">
            Covering different capacities and application requirements.
          </p>
        </div>

        {/* Table Container */}
        <div className="absolute top-[110px] bottom-[80px] left-8 right-8 z-10 flex flex-col design-group-wrapper">
          <div className="design-group-label">参数表格</div>
          
          <div className="flex-1 w-full flex flex-col justify-center">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="w-[26%] p-1 align-bottom border-b-2 border-[#0F1D3A]"></th>
                  <th className="w-[18.5%] p-1 align-bottom border-b-2 border-[#0F1D3A] text-center">
                    <img src={img25100} alt="IPW-25100" className="h-12 mx-auto object-contain mb-1.5" referrerPolicy="no-referrer" />
                    <div className="text-[#0F1D3A] font-bold text-[7.5px]">IPW-25100</div>
                  </th>
                  <th className="w-[18.5%] p-1 align-bottom border-b-2 border-[#0F1D3A] text-center">
                    {/* <img src={img25200} alt="IPL-25200X" className="h-12 mx-auto object-contain mb-1.5" referrerPolicy="no-referrer" /> */}
                    <div className="h-12 mx-auto mb-1.5 bg-gray-100 w-full"></div>
                    <div className="text-[#0F1D3A] font-bold text-[7.5px]">IPL-25200X</div>
                  </th>
                  <th className="w-[18.5%] p-1 align-bottom border-b-2 border-[#0F1D3A] text-center">
                    <img src={img51100} alt="IPW-51100" className="h-12 mx-auto object-contain mb-1.5" referrerPolicy="no-referrer" />
                    <div className="text-[#0F1D3A] font-bold text-[7.5px]">IPW-51100</div>
                  </th>
                  <th className="w-[18.5%] p-1 align-bottom border-b-2 border-[#0F1D3A] text-center">
                    {/* <img src={img51314H} alt="IPL-51314H" className="h-12 mx-auto object-contain mb-1.5" referrerPolicy="no-referrer" /> */}
                    <div className="h-12 mx-auto mb-1.5 bg-gray-100 w-full"></div>
                    <div className="text-[#0F1D3A] font-bold text-[7.5px]">IPL-51314H</div>
                  </th>
                </tr>
              </thead>
              <tbody className="text-[7.5px] text-[#334155] leading-[1.1]">
                {[
                  ['Battery Type', 'LiFePO₄', 'LiFePO₄', 'LiFePO₄', 'LiFePO₄'],
                  ['Cycle Life', '≥6000 cycles', '≥6000 cycles', '≥6000 cycles', '≥6000 cycles'],
                  ['Nominal Voltage', '25.6V', '25.6V', '51.2V', '51.2V'],
                  ['Nominal Capacity', '100Ah', '200Ah', '100Ah', '314Ah'],
                  ['Nominal Energy', '2.56kWh', '5.12kWh', '5.12kWh', '16kWh'],
                  ['Operating Voltage Range', '20–28.8V', '21.6–28.8V', '43.2–57.6V', '43.2–57.6V'],
                  ['Max. Continuous Charge Current', '100A', '200A', '100A', '157A'],
                  ['Peak Charge Current', '—', '—', '110A', '175A'],
                  ['Max. Continuous Discharge Current', '100A', '200A', '100A', '157A'],
                  ['Peak Discharge Current', '150A', '220A', '110A', '175A'],
                  ['Recommended DOD', '—', '—', '0.9', '0.9'],
                  ['Max. Parallel Units', '15', '32', '15', '32'],
                  ['Communication Port', 'RS485 / CAN / RS232', 'RS485 / CAN / RS232', 'CAN / RS485', 'CAN / RS485'],
                  ['Operating Temp. (Charge)', '0–60°C', '0–55°C', '0–60°C', '0–60°C'],
                  ['Operating Temp. (Discharge)', '-20–60°C', '-20–60°C', '-20–60°C', '-20–60°C'],
                  ['Dimensions (mm)', '135×410×454', '240×490×618', '135×585×454', '230×548×840'],
                  ['Weight', '27kg', '48kg', '45kg', '120kg'],
                ].map((row, idx) => (
                  <tr key={idx} className="border-b border-neutral-200/60 hover:bg-neutral-50/50 transition-colors">
                    <td className="py-2 px-1 font-bold text-[#0F1D3A] pr-2">{row[0]}</td>
                    <td className="py-2 px-1 text-center font-medium">{row[1]}</td>
                    <td className="py-2 px-1 text-center font-medium">{row[2]}</td>
                    <td className="py-2 px-1 text-center font-medium">{row[3]}</td>
                    <td className="py-2 px-1 text-center font-medium">{row[4]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer */}
        <div className="absolute bottom-8 left-8 right-8 z-10 design-group-wrapper">
          <div className="design-group-label">底部注脚 (Footer Note)</div>
          <p className="text-[#94A3B8] text-[7px] leading-relaxed">
            *Please select the right model based on your application. For details and configuration recommendations, contact your local itel Energy distributor.
          </p>
        </div>
      </div>
    </>
  );
}
