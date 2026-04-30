import React from 'react';
import bgImage from '@/画册素材库/背景素材/画册-05-逆变器封面背景.png';

export default function CatalogSpreadUZ05() {
  return (
    <div className="w-[420mm] h-[297mm] bg-white relative overflow-hidden shadow-sm">
      <div className="design-group-wrapper absolute left-0 top-0 w-[420mm] h-[297mm] z-0">
        <div className="design-group-label">背景图</div>
        <img src={bgImage} alt="Catalog Spread 05 Background" className="w-full h-full object-cover" />
      </div>

      <div className="design-group-wrapper absolute left-[299.713mm] top-[119mm] z-10">
        <div className="design-group-label">大标题</div>
        <h1 className="text-[35pt] font-bold text-[#585857] leading-none" style={{ fontFamily: '"Mark OT", sans-serif' }}>
          Инверторы
        </h1>
      </div>

      <div className="design-group-wrapper absolute left-[333.37mm] top-[140.5mm] z-10 flex flex-col">
        <div className="design-group-label">产品列表</div>

        <h3 className="text-[10pt] font-medium text-[#585857] leading-[1.5] mb-1" style={{ fontFamily: '"Mark OT", sans-serif' }}>
          Гибридный инвертор
        </h3>
        <ul className="text-[10pt] font-normal text-[#585857] leading-[1.5] mb-2" style={{ fontFamily: '"Mark OT", sans-serif' }}>
          <li>IPV-3K24U Pro</li>
          <li>IPV-4K24U Pro & IPV-6K48U Pro</li>
          <li>IHY-6K6L1C & IHY-12KL1C</li>
          <li>IPV-8K48T & IPV-11K48T</li>
          <li>IHY-8KL3 & IHY-12KL3</li>
        </ul>

        <h3 className="text-[10pt] font-medium text-[#585857] leading-[1.5] mb-1" style={{ fontFamily: '"Mark OT", sans-serif' }}>
          Сетевой инвертор
        </h3>
        <ul className="text-[10pt] font-normal text-[#585857] leading-[1.5]" style={{ fontFamily: '"Mark OT", sans-serif' }}>
          <li>IGT-6KSA & IGT-8KSA & IGT-10KSA</li>
          <li>IGT-12KTA & IGT-17KTA</li>
          <li>IGT-40KT-G1 & IGT-50KT-G1</li>
          <li>IGT-50KTA</li>
          <li>IGT-100KT-G1 & IGT-110KT-G1</li>
          <li>IGT-110KTA</li>
          <li>IGT-330KT-G1 & IGT-350KT-G1</li>
        </ul>
      </div>
    </div>
  );
}

