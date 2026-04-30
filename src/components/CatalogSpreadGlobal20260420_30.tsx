import React from 'react';
import bgImage from '@/画册素材库/背景素材/画册-30-AIO章节页背景.png';

export default function CatalogSpreadGlobal20260420_30() {
  return (
    <div className="w-[420mm] h-[297mm] bg-white relative overflow-hidden shadow-sm">
      {/* 背景图*/}
      <div className="design-group-wrapper absolute left-0 top-0 w-[420mm] h-[297mm] z-0">
        <div className="design-group-label">背景图</div>
        <img src={bgImage} alt="Catalog Spread 30 Background" className="w-full h-full object-cover" />
      </div>

      {/* 婢堆勭垼妫&plusmn;*/}
      <div className="design-group-wrapper absolute left-[299.713mm] top-[119mm] z-10">
        <div className="design-group-label">婢堆勭垼妫</div>
        <h1 className="text-[35pt] font-bold text-[#585857] leading-none" style={{ fontFamily: '"Mark OT", sans-serif' }}>
          C&I ESS
        </h1>
      </div>

      {/* 产品列表*/}
      <div className="design-group-wrapper absolute left-[336mm] top-[148.5mm] z-10 flex flex-col">
        <div className="design-group-label">产品列表</div>
        <ul className="text-[10pt] font-normal text-[#585857] leading-[1.7]" style={{ fontFamily: '"Mark OT", sans-serif' }}>
          <li>IHY-15/20/25/30KH3-G1</li>
          <li>IHY-50KH3S</li>
          <li>IGT-40KT-G1 & IGT-50KT-G1</li>
          <li>IHY-75/100/125KH3-G1</li>
          <li>IGT-100KT-G1 & IGT-110KT-G1</li>
          <li>IGT-330KT-G1 & IGT-350KT-G1</li>
          <li>IB-H30~70-X-G1</li>
        </ul>
      </div>
    </div>
  );
}


