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
        <h3 className="text-[14pt] font-sans font-bold text-[#E3002B] tracking-wide">Сотрудники по всему миру</h3>
        <div className="text-[42pt] font-sans font-black text-[#E3002B] leading-none mt-1">16,000+</div>
      </div>

      {/* [左页统计数据] */}
      <div className="design-group-wrapper absolute left-[29.5mm] bottom-[34.89mm] w-[151mm] z-10 flex gap-[8.24mm]">
        <div className="design-group-label">左页统计数据</div>
        <div className="flex-1 bg-[#efefef] rounded-2xl py-4 px-2 flex flex-col items-center justify-center text-center">
          <div className="flex items-baseline gap-1.5">
            <span className="text-[10pt] font-sans font-bold text-[#595857]">Центры тестирования</span>
            <span className="text-[18pt] font-sans font-black text-[#E3002B]">1000+</span>
          </div>
          <div className="text-[9pt] font-sans font-normal text-[#595857] mt-0.5">квадратные метры</div>
        </div>
        <div className="flex-1 bg-[#efefef] rounded-2xl py-4 px-2 flex flex-col items-center justify-center text-center">
          <div className="flex items-baseline gap-1.5">
            <span className="text-[10pt] font-sans font-bold text-[#595857]">Штаб-квартира</span>
            <span className="text-[18pt] font-sans font-black text-[#E3002B]">10,000+</span>
          </div>
          <div className="text-[9pt] font-sans font-normal text-[#595857] mt-0.5">квадратные метры</div>
        </div>
      </div>

      {/* ================= 右页 (P3) ================= */}

      {/* [ПРОФИЛЬ КОМПАНИИ 标题] */}
      <div className="design-group-wrapper absolute left-[280mm] top-[30mm] z-10">
        <div className="design-group-label">页面标题-红底白字</div>
        <div className="bg-[#E3002B] min-w-[63.5mm] h-[13mm] flex items-center justify-center px-4">
          <span className="text-[26.505pt] font-sans font-bold text-white leading-none tracking-wider">ПРОФИЛЬ</span>
        </div>
      </div>
      <div className="design-group-wrapper absolute left-[325mm] top-[45.125mm] z-10">
        <div className="design-group-label">页面标题-红字</div>
        <span className="text-[26.505pt] font-sans font-bold text-[#E3002B] leading-none tracking-wider">КОМПАНИИ</span>
      </div>

      {/* [正文内容鍖篯 */}
      <div className="design-group-wrapper absolute left-[280mm] top-[77.875mm] w-[111mm] z-10 flex flex-col gap-6">
        <div className="design-group-label">正文内容</div>
        
        {/* About itel */}
        <div>
          <h4 className="text-[15pt] font-sans font-bold text-[#595857] mb-2">О компании itel</h4>
          <p className="text-[7pt] font-sans font-normal text-[#231815] leading-[1.6] text-justify">
            Уже более десяти лет компания itel помогает семьям улучшить жизнь благодаря технологиям. Основанный на философии «Наслаждайся лучшей жизнью», itel является надежным брендом умной жизни, стремящимся сделать передовые технологии доступными и доступными для каждого. Мы демократизируем технологии, преодолевая цифровой разрыв, предлагая разнообразный портфель продуктов, включающий смартфоны, аксессуары, бытовую технику, ноутбуки и товары для образа жизни. Сегодня компания itel процветает на более чем 50 развивающихся рынках по всему миру, постоянно улучшая жизнь людей благодаря инновационным и удобным технологическим решениям.
          </p>
        </div>

        {/* About itel Energy */}
        <div>
          <h4 className="text-[15pt] font-sans font-bold text-[#595857] mb-2">О компании itel Energy</h4>
          <p className="text-[7pt] font-sans font-normal text-[#231815] leading-[1.6] text-justify">
            Itel Energy — это универсальный выбор решений для хранения энергии в жилых домах. Мы увлечены созданием будущего, основанного на чистой энергии, и считаем, что каждый заслуживает доступа к безопасным, эффективным и устойчивым источникам энергии. Наша команда обладает более чем десятилетним опытом работы в сфере новой энергетики и мобильного Интернета. Мы используем этот объединенный опыт для разработки инновационных и ориентированных на пользователя решений по хранению энергии, которые отвечают конкретным потребностям семей по всему миру.
          </p>
        </div>

        {/* Global Reach, Local Focus */}
        <div>
          <h4 className="text-[15pt] font-sans font-bold text-[#595857] mb-2">Глобальный охват, местный фокус</h4>
          <p className="text-[7pt] font-sans font-normal text-[#231815] leading-[1.6] text-justify">
            В компании itel Energy мы придерживаемся «глокального» мышления. Мы являемся глобальным брендом, который твердо привержен пониманию и удовлетворению потребностей местных пользователей. Члены нашей команды обладают более глубоким пониманием региональных энергетических рынков и потребительских предпочтений, что позволяет нам разрабатывать решения, которые не только технологически продвинуты, но и идеально подходят для местного контекста.
          </p>
        </div>
      </div>

      {/* ================= 左页统计数据 ================= */}
      <div className="design-group-wrapper absolute left-[234.24mm] bottom-[34.89mm] w-[151mm] z-10 flex gap-[8.24mm]">
        <div className="design-group-label">右页统计数据</div>
        
        <div className="flex-1 bg-[#efefef] rounded-2xl py-4 px-2 flex flex-col items-center justify-center text-center">
          <div className="flex items-baseline gap-1.5">
            <span className="text-[10pt] font-sans font-bold text-[#595857]">Офисы R&D</span>
            <span className="text-[18pt] font-sans font-black text-[#E3002B]">650+</span>
          </div>
          <div className="text-[9pt] font-sans font-normal text-[#595857] mt-0.5">мест</div>
        </div>

        <div className="flex-1 bg-[#efefef] rounded-2xl py-4 px-2 flex flex-col items-center justify-center text-center">
          <div className="flex items-baseline gap-1.5">
            <span className="text-[10pt] font-sans font-bold text-[#595857]">Выставочный зал</span>
            <span className="text-[18pt] font-sans font-black text-[#E3002B]">1000+</span>
          </div>
          <div className="text-[9pt] font-sans font-normal text-[#595857] mt-0.5">квадратные метры</div>
        </div>
      </div>

    </div>
  );
}

