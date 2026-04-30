import React from 'react';
import bgImage from '@/画册素材库/背景素材/画册-04-系统介绍背景.png';

export default function CatalogSpreadUZ04() {
  return (
    <div className="w-[420mm] h-[297mm] bg-white relative overflow-hidden shadow-sm">
      {/* 背景图*/}
      <div className="design-group-wrapper absolute left-0 top-0 w-[420mm] h-[297mm] z-0">
        <div className="design-group-label">背景图</div>
        <img src={bgImage} alt="Catalog Spread 04 Background" className="w-full h-full object-cover" />
      </div>

      {/* ================= 右页 (P5) ================= */}

      {/* [SOLAR SOLUTION 标题] */}
      <div className="design-group-wrapper absolute left-[280mm] top-[30mm] z-10">
        <div className="design-group-label">页面标题-红底白字</div>
        <div className="bg-[#E3002B] w-[46mm] h-[12.8mm] flex items-center justify-center">
          <span className="text-[26.505pt] font-sans font-bold text-white leading-none tracking-wider">SOLAR</span>
        </div>
      </div>
      <div className="design-group-wrapper absolute left-[300mm] top-[45.125mm] z-10">
        <div className="design-group-label">页面标题-红字</div>
        <span className="text-[26.505pt] font-sans font-bold text-[#E3002B] leading-none tracking-wider">SOLUTION</span>
      </div>

      {/* [小标题组 1] */}
      <div className="design-group-wrapper absolute left-[85.9mm] top-[184mm] z-10 flex items-center gap-[2mm]">
        <div className="design-group-label">小标题组 1</div>
        <div className="w-[2.852mm] h-[2.852mm] bg-[#E3002B]" style={{ borderRadius: '0.718mm' }}></div>
        <span className="text-[11pt] font-bold text-[#585857] leading-none" style={{ fontFamily: '"Mark OT", sans-serif' }}>PV Сетевое решение</span>
      </div>

      {/* [小标题组 2] */}
      <div className="design-group-wrapper absolute left-[288.416mm] top-[184mm] z-10 flex items-center gap-[2mm]">
        <div className="design-group-label">小标题组 2</div>
        <div className="w-[2.852mm] h-[2.852mm] bg-[#E3002B]" style={{ borderRadius: '0.718mm' }}></div>
        <span className="text-[11pt] font-bold text-[#585857] leading-none" style={{ fontFamily: '"Mark OT", sans-serif' }}>Система хранения энергии</span>
      </div>

      {/* [正文内容鍖篯 */}
      <div className="design-group-wrapper absolute left-[280mm] top-[77.875mm] w-[111mm] z-10 flex flex-col gap-6">
        <div className="design-group-label">正文内容</div>
        
        {/* PV On-grid Solution */}
        <div>
          <h4 className="text-[15pt] font-sans font-bold text-[#595857] mb-2">PV Сетевое решение</h4>
          <p className="text-[7pt] font-sans font-normal text-[#231815] leading-[1.6] text-justify">
            В нашем сетевом решении PV используется современная инверторная технология, обеспечивающая эффективное производство электроэнергии и плавную интеграцию в сеть. Это решение включает в себя функции интеллектуального мониторинга и удаленного управления, обеспечивая круглосуточную оптимальную производительность. Наше гибкое решение, предназначенное для адаптации как к жилым, так и к коммунальным объектам, способствует плавному переходу к устойчивому, экологически чистому энергетическому будущему.
          </p>
        </div>

        {/* Energy Storage System Solution */}
        <div>
          <h4 className="text-[15pt] font-sans font-bold text-[#595857] mb-2">Решение для системы хранения энергии</h4>
          <p className="text-[7pt] font-sans font-normal text-[#231815] leading-[1.6] text-justify">
            Наше решение для системы хранения энергии предлагает комплексный подход к управлению энергопотреблением, обеспечивая стабильность и эффективность за счет передовых технологий хранения. Благодаря настраиваемым конфигурациям и возможностям интеллектуальной диспетчеризации это решение оптимизирует управление пиковой нагрузкой, обеспечивает надежное резервное питание и повышает эффективность собственного потребления. Выбирая наше решение для хранения энергии, вы обеспечиваете более надежное и устойчивое энергетическое будущее.
          </p>
        </div>
      </div>
    </div>
  );
}

