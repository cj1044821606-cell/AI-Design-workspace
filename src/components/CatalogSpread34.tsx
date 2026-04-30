import React from 'react';
import bgImage from '@/画册素材库/背景素材/画册-34-PV章节页背景.png';

export default function CatalogSpread34() {
  return (
    <div className="w-[420mm] h-[297mm] bg-white relative overflow-hidden shadow-sm">
      {/* 背景图*/}
      <div className="design-group-wrapper absolute left-0 top-0 w-[420mm] h-[297mm] z-0">
        <div className="design-group-label">背景图</div>
        <img src={bgImage} alt="Catalog Spread 34 Background" className="w-full h-full object-cover" />
      </div>

      {/* 大标题*/}
      <div className="design-group-wrapper absolute left-[299.713mm] top-[119mm] z-10">
        <div className="design-group-label">大标题</div>
        <h1 className="text-[35pt] font-bold text-[#585857] leading-none" style={{ fontFamily: '"Mark OT", sans-serif' }}>
          PV Modules
        </h1>
      </div>

      {/* 姝ｆ枃鍜屽皬标题 */}
      <div className="design-group-wrapper absolute left-[335mm] top-[141mm] z-10 flex flex-col">
        <div className="design-group-label">产品列表</div>
        
        {/* 鍒楄〃 */}
        <ul className="text-[10pt] font-normal text-[#585857] leading-[1.8]" style={{ fontFamily: '"Mark OT", sans-serif' }}>
          <li>410W/N</li>
          <li>550W/N</li>
          <li>590W/N</li>
          <li>610W/N</li>
          <li>585W/N</li>
          <li>620W/N</li>
        </ul>
      </div>
    </div>
  );
}

