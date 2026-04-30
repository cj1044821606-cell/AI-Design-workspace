import React from 'react';
import hqImage from '@/画册素材库/背景素材/画册-02-总部图.png';

export default function CatalogSpreadUZ02() {
  return (
    <div className="w-[420mm] h-[297mm] bg-white relative overflow-hidden shadow-sm">
      
      {/* ================= 宸﹂〉 (P2) ================= */}
      
      {/* [寤虹瓚背景图綸 */}
      <div className="design-group-wrapper absolute left-0 top-0 w-[254.206mm] h-[185.832mm] z-0">
        <div className="design-group-label">总部大楼图片</div>
        <img src={hqImage} alt="Headquarters" className="w-full h-full object-cover" />
      </div>

      {/* [全球员工数癩 */}
      <div className="design-group-wrapper absolute left-[29.5mm] bottom-[67.83mm] z-10">
        <div className="design-group-label">全球员工数</div>
        <h3 className="text-[14pt] font-sans font-bold text-[#E3002B] tracking-wide">Employees Worldwide</h3>
        <div className="text-[42pt] font-sans font-black text-[#E3002B] leading-none mt-1">16,000+</div>
      </div>

      {/* [左页统计数据] */}
      <div className="design-group-wrapper absolute left-[29.5mm] bottom-[34.89mm] w-[151mm] z-10 flex gap-[8.24mm]">
        <div className="design-group-label">左页统计数据</div>
        <div className="flex-1 bg-[#efefef] rounded-2xl py-4 px-2 flex flex-col items-center justify-center text-center">
          <div className="flex items-baseline gap-1.5">
            <span className="text-[10pt] font-sans font-bold text-[#595857]">Testing centers</span>
            <span className="text-[18pt] font-sans font-black text-[#E3002B]">1000+</span>
          </div>
          <div className="text-[9pt] font-sans font-normal text-[#595857] mt-0.5">square meters</div>
        </div>
        <div className="flex-1 bg-[#efefef] rounded-2xl py-4 px-2 flex flex-col items-center justify-center text-center">
          <div className="flex items-baseline gap-1.5">
            <span className="text-[10pt] font-sans font-bold text-[#595857]">Headquarter</span>
            <span className="text-[18pt] font-sans font-black text-[#E3002B]">10,000+</span>
          </div>
          <div className="text-[9pt] font-sans font-normal text-[#595857] mt-0.5">square meters</div>
        </div>
      </div>

      {/* ================= 右页 (P3) ================= */}

      {/* [COMPANY PROFILE 标题] */}
      <div className="design-group-wrapper absolute left-[280mm] top-[30mm] z-10">
        <div className="design-group-label">页面标题-红底白字</div>
        <div className="bg-[#E3002B] min-w-[63.5mm] h-[13mm] flex items-center justify-center px-4">
          <span className="text-[26.505pt] font-sans font-bold text-white leading-none tracking-wider">COMPANY</span>
        </div>
      </div>
      <div className="design-group-wrapper absolute left-[325mm] top-[45.125mm] z-10">
        <div className="design-group-label">页面标题-红字</div>
        <span className="text-[26.505pt] font-sans font-bold text-[#E3002B] leading-none tracking-wider">PROFILE</span>
      </div>

      {/* [正文内容鍖篯 */}
      <div className="design-group-wrapper absolute left-[280mm] top-[77.875mm] w-[111mm] z-10 flex flex-col gap-6">
        <div className="design-group-label">正文内容</div>
        
        {/* About itel */}
        <div>
          <h4 className="text-[15pt] font-sans font-bold text-[#595857] mb-2">About itel</h4>
          <p className="text-[7pt] font-sans font-normal text-[#231815] leading-[1.6] text-justify">
            For over a decade, itel has empowered families to enjoy better life through technology. Founded on the philosophy of "Enjoy Better Life", itel is a trusted smart life brand dedicated to making cutting-edge technology accessible and affordable for everyone. We democratize technology by bridging the digital divide, offering a diverse product portfolio that spans smartphones, accessories, appliances, laptops, and lifestyle products. Today, itel thrives in over 50 emerging markets worldwide, continuously enriching lives through innovative and user-friendly technology solutions.
          </p>
        </div>

        {/* About itel Energy */}
        <div>
          <h4 className="text-[15pt] font-sans font-bold text-[#595857] mb-2">About itel Energy</h4>
          <p className="text-[7pt] font-sans font-normal text-[#231815] leading-[1.6] text-justify">
            Itel Energy is your one-stop choice for residential energy storage solutions. We are passionate about creating a future powered by clean energy, and we believe that everyone deserves access to safe, efficient, and sustainable energy options. Our team brings over a decade of experience in the new energy and mobile internet industries, we leverage this combined expertise to develop innovative and user-centric energy storage solutions that meet the specific needs of families around the world.
          </p>
        </div>

        {/* Global Reach, Local Focus */}
        <div>
          <h4 className="text-[15pt] font-sans font-bold text-[#595857] mb-2">Global Reach, Local Focus</h4>
          <p className="text-[7pt] font-sans font-normal text-[#231815] leading-[1.6] text-justify">
            At itel energy, we operate with a "glocal" mindset. We are a global brand with a strong commitment to understanding and catering to local user demands. Our team members possess deeper understanding of regional energy markets and consumer preferences, allowing us to develop solutions that are not just technologically advanced but also perfectly suited for the local context.
          </p>
        </div>
      </div>

      {/* ================= 右页统计数据 ================= */}
      <div className="design-group-wrapper absolute left-[234.24mm] bottom-[34.89mm] w-[151mm] z-10 flex gap-[8.24mm]">
        <div className="design-group-label">右页统计数据</div>
        
        <div className="flex-1 bg-[#efefef] rounded-2xl py-4 px-2 flex flex-col items-center justify-center text-center">
          <div className="flex items-baseline gap-1.5">
            <span className="text-[10pt] font-sans font-bold text-[#595857]">R&D offices</span>
            <span className="text-[18pt] font-sans font-black text-[#E3002B]">650+</span>
          </div>
          <div className="text-[9pt] font-sans font-normal text-[#595857] mt-0.5">seats</div>
        </div>

        <div className="flex-1 bg-[#efefef] rounded-2xl py-4 px-2 flex flex-col items-center justify-center text-center">
          <div className="flex items-baseline gap-1.5">
            <span className="text-[10pt] font-sans font-bold text-[#595857]">Exhibition hall</span>
            <span className="text-[18pt] font-sans font-black text-[#E3002B]">1000+</span>
          </div>
          <div className="text-[9pt] font-sans font-normal text-[#595857] mt-0.5">square meters</div>
        </div>
      </div>

    </div>
  );
}

