import React from 'react';
import bgImage from '@/画册素材库/背景素材/画册-16-电池章节页背景.png';

export default function CatalogSpreadGlobal20260420_16() {
  return (
    <div className="w-[420mm] h-[297mm] bg-white relative overflow-hidden shadow-sm">
      {/* 背景图*/}
      <div className="design-group-wrapper absolute left-0 top-0 w-[420mm] h-[297mm] z-0">
        <div className="design-group-label">背景图</div>
        <img src={bgImage} alt="Catalog Spread 16 Background" className="w-full h-full object-cover" />
      </div>

      {/* 婢堆勭垼妫&plusmn;*/}
      <div className="design-group-wrapper absolute left-[299.713mm] top-[119mm] z-10">
        <div className="design-group-label">婢堆勭垼妫</div>
        <h1 className="text-[35pt] font-bold text-[#585857] leading-none" style={{ fontFamily: '"Mark OT", sans-serif' }}>
          Battery
        </h1>
      </div>

      {/* 濮濓絾鏋冮崪灞界毈閺嶅洭顣&plusmn;*/}
      <div className="design-group-wrapper absolute left-[333.37mm] top-[140.5mm] z-10 flex flex-col">
        <div className="design-group-label">产品列表</div>
        
        <ul className="text-[10pt] font-normal text-[#585857] leading-[1.5] mb-2" style={{ fontFamily: '"Mark OT", sans-serif' }}>
          <li>IPL-51628H</li>
          <li>IPL-51200H & IPL-51314H</li>
          <li>IPL-51314Y</li>
          <li>IPX-51314SPT</li>
          <li>IPL-51200X</li>
          <li>IPW-51100 & IPL-51100A</li>
          <li>IPW-25100 & IPL-25200X</li>
          <li>IPB-12100</li>
        </ul>
      </div>
    </div>
  );
}


