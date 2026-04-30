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
        <div className="design-group-label">椤甸潰标题-绾㈠簳鐧藉瓧</div>
        <div className="bg-[#E3002B] w-[46mm] h-[12.8mm] flex items-center justify-center">
          <span className="text-[26.505pt] font-sans font-bold text-white leading-none tracking-wider">SOLAR</span>
        </div>
      </div>
      <div className="design-group-wrapper absolute left-[300mm] top-[45.125mm] z-10">
        <div className="design-group-label">椤甸潰标题-绾㈠瓧</div>
        <span className="text-[26.505pt] font-sans font-bold text-[#E3002B] leading-none tracking-wider">SOLUTION</span>
      </div>

      {/* [小标题组 1] */}
      <div className="design-group-wrapper absolute left-[85.9mm] top-[184mm] z-10 flex items-center gap-[2mm]">
        <div className="design-group-label">小标题组 1</div>
        <div className="w-[2.852mm] h-[2.852mm] bg-[#E3002B]" style={{ borderRadius: '0.718mm' }}></div>
        <span className="text-[11pt] font-bold text-[#585857] leading-none" style={{ fontFamily: '"Mark OT", sans-serif' }}>PV On-Grid Solution</span>
      </div>

      {/* [小标题组 2] */}
      <div className="design-group-wrapper absolute left-[288.416mm] top-[184mm] z-10 flex items-center gap-[2mm]">
        <div className="design-group-label">小标题组 2</div>
        <div className="w-[2.852mm] h-[2.852mm] bg-[#E3002B]" style={{ borderRadius: '0.718mm' }}></div>
        <span className="text-[11pt] font-bold text-[#585857] leading-none" style={{ fontFamily: '"Mark OT", sans-serif' }}>Energy Storage System</span>
      </div>

      {/* [正文内容鍖篯 */}
      <div className="design-group-wrapper absolute left-[280mm] top-[77.875mm] w-[111mm] z-10 flex flex-col gap-6">
        <div className="design-group-label">正文内容</div>
        
        {/* PV On-Grid Solution */}
        <div>
          <h4 className="text-[15pt] font-sans font-bold text-[#595857] mb-2">PV On-Grid Solution</h4>
          <p className="text-[7pt] font-sans font-normal text-[#231815] leading-[1.6] text-justify">
            Our PV on-grid solution employs state-of-the-art inverter technology to ensure efficient power generation and seamless grid integration. This solution includes intelligent monitoring and remote management features, providing round-the-clock optimal performance. Designed to adapt to both residential and utility-scale applications, our flexible solution facilitates a smooth transition to a sustainable, green energy future.
          </p>
        </div>

        {/* Energy Storage System Solution */}
        <div>
          <h4 className="text-[15pt] font-sans font-bold text-[#595857] mb-2">Energy Storage System Solution</h4>
          <p className="text-[7pt] font-sans font-normal text-[#231815] leading-[1.6] text-justify">
            Our energy storage system solution offers a comprehensive approach to energy management, ensuring stability and efficiency through advanced storage technology. With customizable configurations and intelligent dispatch capabilities, this solution optimizes peak load management, provides robust backup power, and enhances self-consumption efficiency. By choosing our energy storage solution, you are securing a more reliable and resilient energy future.
          </p>
        </div>
      </div>
    </div>
  );
}

