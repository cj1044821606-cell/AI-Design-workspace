import React from 'react';
import logoSvg from '@/品牌素材库/横版logo_CMYK.svg';
import bgImage from '@/画册素材库/背景素材/画册-01-封面.png';

export default function CatalogSpreadGlobal20260420_01() {
  return (
    <div className="w-[420mm] h-[297mm] bg-white relative overflow-hidden shadow-sm">
      
      {/* ================= 閸欐娊銆&plusmn;(鐏忎線娼&plusmn; ================= */}
      
      {/* [閼冲本娅欑槐鐘虫綏] */}
      <div className="design-group-wrapper absolute right-0 top-0 w-[210mm] h-[297mm] z-0">
        <div className="design-group-label">封面背景</div>
        <img src={bgImage} alt="Cover Background" className="w-full h-full object-cover" />
      </div>

      {/* [娑撶粯鐖ｆ０姒&plusmn;*/}
      <div className="design-group-wrapper absolute left-[228.564mm] bottom-[59.763mm] z-10">
        <div className="design-group-label">主标题</div>
        <h1 className="text-[25pt] font-misans font-semibold text-[#717071] leading-[1.1] tracking-wide whitespace-nowrap">
          ONE-STOP ENERGY<br />
          STORAGE SOLUTIONS
        </h1>
      </div>

      {/* [閸擃垱鐖ｆ０姒&plusmn;*/}
      <div className="design-group-wrapper absolute left-[228.564mm] bottom-[51.66mm] z-10">
        <div className="design-group-label">副标题</div>
        <p className="text-[15pt] font-misans font-normal text-[#717071] tracking-wide whitespace-nowrap">
          For Residential and C&amp;I Applications
        </p>
      </div>

      {/* [Logo] */}
      <div className="design-group-wrapper absolute right-[145.468mm] top-[15.431mm] z-10">
        <div className="design-group-label">品牌Logo</div>
        <img src={logoSvg} alt="itel energy" className="h-[12mm]" />
      </div>

      {/* [红线装饰] */}
      <div className="design-group-wrapper absolute left-[210mm] bottom-[119.373mm] z-10">
        <div className="design-group-label">红线装饰</div>
        <div className="w-[95mm] h-[3mm] bg-[#E3002B]"></div>
      </div>

      {/* [Slogan] */}
      <div className="design-group-wrapper absolute right-[15mm] bottom-[15mm] z-10">
        <div className="design-group-label">Slogan</div>
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 bg-[#E3002B]"></div>
          <span className="text-[12px] font-sans font-medium text-[#4A4A4A]">Enjoy Better Life</span>
        </div>
      </div>


      {/* ================= 瀹革箓銆&plusmn;(鐏忎礁绨&plusmn; ================= */}
      
      {/* [网址胶囊] */}
      <div className="design-group-wrapper absolute left-[15mm] bottom-[15mm] z-10">
        <div className="design-group-label">网址胶囊</div>
        <div className="border border-gray-400 rounded-full px-3 py-1 flex items-center gap-1 bg-white">
          <span className="text-[8pt] font-sans font-medium text-[#E3002B]">energy.itel-life.com</span>
          <svg className="w-3 h-3 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      {/* [版权声明] */}
      <div className="design-group-wrapper absolute left-[115mm] bottom-[15mm] z-10">
        <div className="design-group-label">版权声明</div>
        <div className="whitespace-nowrap">
          <span className="text-[8pt] font-misans font-semibold text-gray-500">Subject to change without notice. </span>
          <span className="text-[10pt] font-misans font-semibold text-gray-700">Global 1.1</span>
        </div>
      </div>

    </div>
  );
}


