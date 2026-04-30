import React from 'react';
import logoSvg from '@/品牌素材库/横版logo_CMYK.svg';
import bgImage from '@/画册素材库/背景素材/画册-01-封面.png';
import qrCode1 from '@/画册素材库/背景素材/catalog-01-qr-facebook.svg';
import qrCode2 from '@/画册素材库/背景素材/catalog-01-qr-instagram.svg';

export default function CatalogSpreadUZ01() {
  return (
    <div className="w-[420mm] h-[297mm] bg-white relative overflow-hidden shadow-sm">
      <div className="design-group-wrapper absolute right-0 top-0 w-[210mm] h-[297mm] z-0">
        <div className="design-group-label">封面背景</div>
        <img src={bgImage} alt="Cover Background" className="w-full h-full object-cover" />
      </div>

      <div className="design-group-wrapper absolute left-[223.84mm] top-[15.35mm] z-10">
        <div className="design-group-label">主标题</div>
        <img src={logoSvg} alt="itel energy" className="h-[12.71mm]" />
      </div>

      <div className="design-group-wrapper absolute left-[210.08mm] top-[174.62mm] z-10">
        <div className="design-group-label">副标题</div>
        <div className="w-[94.99mm] h-[2.91mm] bg-[#E92E2E]"></div>
      </div>

      <div className="design-group-wrapper absolute left-[228.56mm] top-[216.75mm] z-10">
        <div className="design-group-label">品牌Logo</div>
        <h1 className="text-[25pt] font-misans font-semibold text-[#647074] leading-[1.05] tracking-wide whitespace-nowrap">
          ЕДИНОЕ ЭНЕРГИЯ
          <br />
          РЕШЕНИЯ ДЛЯ ХРАНЕНИЯ
        </h1>
      </div>

      <div className="design-group-wrapper absolute left-[228.56mm] top-[237.63mm] z-10">
        <div className="design-group-label">红线装饰</div>
        <p className="text-[15pt] font-misans font-normal text-[#647074] tracking-wide whitespace-nowrap">
          Для жилых и C&amp;I применений
        </p>
      </div>

      <div className="design-group-wrapper absolute left-[377.03mm] top-[278.34mm] z-10">
        <div className="design-group-label">Slogan</div>
        <div className="flex items-center gap-[2mm]">
          <div className="w-[2.65mm] h-[2.65mm] bg-[#E92E2E]"></div>
          <span className="text-[9pt] font-misans font-medium text-[#647074] whitespace-nowrap">Живите лучше</span>
        </div>
      </div>

      <div className="design-group-wrapper absolute left-[15.15mm] top-[251.69mm] w-[180mm] z-10">
        <div className="design-group-label">网址胶囊</div>
        <div className="w-[57.68mm] h-[0.18mm] bg-[#879FAD] mb-[2.43mm] ml-[0.29mm]"></div>
        <div className="flex items-start justify-between w-[180mm]">
          <div className="flex flex-col gap-[0.6mm] pt-[0mm]">
            <span className="text-[8pt] leading-none text-[#647074]" style={{ fontFamily: '"Mark OT", sans-serif' }}>
              Facebook: itel Energy Uzbekistan
            </span>
            <span className="text-[8pt] leading-none text-[#647074]" style={{ fontFamily: '"Mark OT", sans-serif' }}>
              Instagram: itel Energy Uzbekistan
            </span>
          </div>
          <div className="flex items-start gap-[7.5mm] pr-[5.8mm] -mt-[7mm]">
            <div className="flex flex-col items-center gap-[1.2mm]">
              <img src={qrCode2} alt="Instagram QR Code" className="w-[18.8mm] h-[18.8mm] object-contain" />
              <span className="text-[5.1pt] leading-none text-[#647074]" style={{ fontFamily: '"Arial", sans-serif' }}>
                Instagram
              </span>
            </div>
            <div className="flex flex-col items-center gap-[1.2mm]">
              <img src={qrCode1} alt="Facebook QR Code" className="w-[18.8mm] h-[18.8mm] object-contain" />
              <span className="text-[5.1pt] leading-none text-[#647074]" style={{ fontFamily: '"Arial", sans-serif' }}>
                Facebook
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="design-group-wrapper absolute left-[15.21mm] top-[275.3mm] z-10">
        <div className="design-group-label">二维码</div>
        <div className="border border-[#879FAD] rounded-full px-[4mm] h-[6.61mm] flex items-center gap-[1.2mm] bg-white">
          <span className="text-[8pt] font-sans font-medium text-[#E92E2E]">Energy.itel-life.com</span>
          <svg className="w-[3.4mm] h-[3.4mm] text-[#5B7384]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      <div className="design-group-wrapper absolute left-[107.59mm] top-[272.4mm] w-[87.41mm] z-10">
        <div className="design-group-label">版权声明</div>
        <div className="text-right leading-[1.12]">
          <span className="block text-[8pt] font-misans font-semibold text-[#647074]">Возможны изменения без</span>
          <span className="block text-[8pt] font-misans font-semibold text-[#647074]">предварительного уведомления.</span>
          <span className="block text-[10pt] font-misans font-semibold text-[#647074]">Версия для Узбекистана 1.0</span>
        </div>
      </div>
    </div>
  );
}

