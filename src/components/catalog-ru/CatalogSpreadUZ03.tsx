import React from 'react';
import bgImage from '@/画册素材库/背景素材/画册-03-目录背景图.png';
import icon1 from '@/画册素材库/背景素材/画册-03-1-产品icon.png';
import icon2 from '@/画册素材库/背景素材/画册-03-2-产品icon.png';
import icon3 from '@/画册素材库/背景素材/画册-03-3-产品icon.png';
import icon4 from '@/画册素材库/背景素材/画册-03-4-产品icon.png';
import icon5 from '@/画册素材库/背景素材/画册-03-5-产品icon.png';

export default function CatalogSpreadUZ03() {
  return (
    <div className="w-[420mm] h-[297mm] bg-white relative overflow-hidden shadow-sm">
      <div className="design-group-wrapper absolute left-0 top-0 w-[420mm] h-[297mm] z-0">
        <div className="design-group-label">背景图</div>
        <img src={bgImage} alt="Catalog Spread 03 Background" className="w-full h-full object-cover" />
      </div>

      <div className="absolute left-0 top-[15mm] w-full h-[267mm] z-10">
        <div className="design-group-wrapper absolute left-0 top-0 w-full">
          <div className="design-group-label">Inverter 组</div>
          <img src={icon1} alt="Inverter Icon" className="absolute left-[304.86mm] top-0 w-[20mm] object-contain object-top" />
          <div className="absolute left-[337.55mm] top-0 flex flex-col w-[75mm]">
            <h2 className="text-[14.16pt] font-bold text-[#585857] leading-none mb-3" style={{ fontFamily: '"Mark OT", sans-serif' }}>
              Инверторы
            </h2>

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

        <div className="design-group-wrapper absolute left-0 top-[90mm] w-full">
          <div className="design-group-label">Battery 组</div>
          <img src={icon2} alt="Battery Icon" className="absolute left-[304.86mm] top-0 w-[20mm] object-contain object-top" />
          <div className="absolute left-[337.55mm] top-0 flex flex-col w-[75mm]">
            <h2 className="text-[14.16pt] font-bold text-[#585857] leading-none mb-3" style={{ fontFamily: '"Mark OT", sans-serif' }}>
              Аккумуляторы
            </h2>
            <ul className="text-[10pt] font-normal text-[#585857] leading-[1.5]" style={{ fontFamily: '"Mark OT", sans-serif' }}>
              <li>IPW-25100 & IPL-25200X</li>
              <li>IPL-51200H & IPL-51314H</li>
              <li>IPW-51100 & IPL-51100A</li>
              <li>IPL-51200X</li>
              <li>IPX-51314SPT</li>
            </ul>
          </div>
        </div>

        <div className="design-group-wrapper absolute left-0 top-[150mm] w-full">
          <div className="design-group-label">All-in-One 组</div>
          <img src={icon3} alt="All-in-One Icon" className="absolute left-[304.86mm] top-0 w-[20mm] object-contain object-top" />
          <div className="absolute left-[337.55mm] top-0 flex flex-col w-[75mm]">
            <h2 className="text-[14.16pt] font-bold text-[#585857] leading-none mb-3" style={{ fontFamily: '"Mark OT", sans-serif' }}>
              Всё в одном
            </h2>
            <ul className="text-[10pt] font-normal text-[#585857] leading-[1.5]" style={{ fontFamily: '"Mark OT", sans-serif' }}>
              <li>IESS-320T</li>
              <li>IESS-320ACT</li>
              <li>IESS-05K10U</li>
              <li>IESS-05K10N</li>
              <li>IESS-3K680N</li>
            </ul>
          </div>
        </div>

        <div className="design-group-wrapper absolute left-0 top-[196mm] w-full">
          <div className="design-group-label">C&I ESS 组</div>
          <img src={icon4} alt="C&I ESS Icon" className="absolute left-[300.8mm] top-0 w-[28.392mm] h-[21.155mm] object-contain object-top" />
          <div className="absolute left-[337.55mm] top-0 flex flex-col w-[75mm]">
            <h2 className="text-[14.16pt] font-bold text-[#585857] leading-none mb-3" style={{ fontFamily: '"Mark OT", sans-serif' }}>
              C&I ESS
            </h2>
            <ul className="text-[10pt] font-normal text-[#585857] leading-[1.5]" style={{ fontFamily: '"Mark OT", sans-serif' }}>
              <li>IHY-30KH3S & IHY-50KH3S</li>
              <li>IB-H30~70-X-G1</li>
              <li>IPX-51314SPT</li>
            </ul>
          </div>
        </div>

        <div className="design-group-wrapper absolute left-0 top-[236mm] w-full">
          <div className="design-group-label">PV Modules 组</div>
          <img src={icon5} alt="PV Modules Icon" className="absolute left-[304.86mm] top-0 w-[20mm] object-contain object-top" />
          <div className="absolute left-[337.55mm] top-0 flex flex-col w-[75mm]">
            <h2 className="text-[14.16pt] font-bold text-[#585857] leading-none mb-3" style={{ fontFamily: '"Mark OT", sans-serif' }}>
              PV-модули
            </h2>
            <ul className="text-[10pt] font-normal text-[#585857] leading-[1.5]" style={{ fontFamily: '"Mark OT", sans-serif' }}>
              <li>585W/N</li>
              <li>590W/N</li>
              <li>610W/N</li>
              <li>620W/N</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

