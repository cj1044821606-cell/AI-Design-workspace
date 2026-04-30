import React from 'react';
import bgImage from '@/画册素材库/背景素材/画册-24-AIO章节页背景.png';

export default function CatalogSpread24() {
  return (
    <div className="w-[420mm] h-[297mm] bg-white relative overflow-hidden shadow-sm">
      {/* 背景图*/}
      <div className="design-group-wrapper absolute left-0 top-0 w-[420mm] h-[297mm] z-0">
        <div className="design-group-label">背景图</div>
        <img src={bgImage} alt="Catalog Spread 24 Background" className="w-full h-full object-cover" />
      </div>

      {/* 大标题*/}
      <div className="design-group-wrapper absolute left-[299.713mm] top-[119mm] z-10">
        <div className="design-group-label">大标题</div>
        <h1 className="text-[35pt] font-bold text-[#585857] leading-none" style={{ fontFamily: '"Mark OT", sans-serif' }}>
          All-in-One
        </h1>
      </div>

      {/* 姝ｆ枃鍜屼骇鍝佸垪琛&plusmn;*/}
      <div className="design-group-wrapper absolute left-[333.37mm] top-[140.5mm] z-10 flex flex-col">
        <div className="design-group-label">产品列表</div>
        <ul className="text-[10pt] font-normal text-[#585857] leading-[1.5]" style={{ fontFamily: '"Mark OT", sans-serif' }}>
          <li>IESS-320T</li>
          <li>IESS-320ACT</li>
          <li>IESS-05K10U</li>
          <li>IESS-05K10N</li>
          <li>IESS-3K680N</li>
        </ul>
      </div>
    </div>
  );
}

