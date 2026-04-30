import React from 'react';
import productImg from '@/画册素材库/产品素材/IPW-25100&IPL-25200X.png';
import bgImage from '@/画册素材库/背景素材/画册-17-产品页左上角背景.png';
import { ProductImageEditor } from './ProductImageEditor';

export default function CatalogSpreadUZ17() {
  return (
    <div className="w-[420mm] h-[297mm] bg-white relative overflow-hidden shadow-sm flex">
      {/* ================= 左页 (0-210mm) ================= */}
      <div className="w-[210mm] h-full relative z-10">
        {/* 顶部场景图 */}
        <div className="design-group-wrapper absolute left-0 top-0 w-[210mm] h-[144.834mm] bg-gray-200 overflow-hidden">
          <div className="design-group-label">场景图</div>
          <img 
            src={bgImage} 
            alt="Scene Background" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* 产品图 (叠加在场景图右下角) */}
        <div className="design-group-wrapper absolute left-[100.7mm] top-[106.84mm] w-[100.83mm] h-[93.22mm] z-10">
          <div className="design-group-label">产品图</div>
          <ProductImageEditor src={productImg} componentName="CatalogSpreadUZ17" initialX={13} /* IMAGE_TRANSFORM_X */ initialY={-87} /* IMAGE_TRANSFORM_Y */ initialScale={0.85} /* IMAGE_TRANSFORM_SCALE */ defaultHeight="100%" defaultMarginLeft="0" />
        </div>

        {/* 功率徽标 */}
        <div className="design-group-wrapper absolute left-[20.9mm] top-[169.83mm] flex items-center z-10">
          <div className="design-group-label">功率徽标</div>
          <div className="bg-[#ED1651] h-[11.2mm] px-4 flex items-center justify-center rounded-l-md z-20">
            <span className="text-white font-bold text-[16pt]" style={{ fontFamily: '"Mark OT", sans-serif' }}>25.6V-2.56/5.12kWh</span>
          </div>
          <div className="bg-[#ACADB1] h-[11.2mm] px-4 flex items-center justify-center rounded-r-md -ml-2 pl-6 z-10">
            <span className="text-white font-bold text-[16pt]" style={{ fontFamily: '"Mark OT", sans-serif' }}>100/200Ah</span>
          </div>
        </div>

        {/* Product Features 标题 */}
        <div className="design-group-wrapper absolute left-[20.9mm] top-[188.44mm] z-10">
          <div className="design-group-label">Product Features 标题</div>
          <h2 className="text-[#ED1651] font-medium text-[31.621pt] leading-none tracking-tight" style={{ fontFamily: '"MiSans", sans-serif' }}>
            Особенности продукта
          </h2>
        </div>

        {/* 分隔线 */}
        <div className="design-group-wrapper absolute left-[21.5mm] top-[205.5mm] w-[167.2mm] h-[0.4pt] bg-black z-10">
          <div className="design-group-label">标题下划线</div>
        </div>

        {/* 特性列表 Grid */}
        <div className="design-group-wrapper absolute left-[21.5mm] top-[211mm] w-[167.2mm] z-10">
          <div className="design-group-label">产品特性列表</div>
          <div className="grid grid-cols-2 gap-x-[10mm] gap-y-[6mm]">
            
            {/* Feature 1 */}
            <div className="flex items-start gap-[4mm]">
              <div className="w-[9.46mm] h-[9.46mm] bg-[#ED1651] rounded-[2mm] shrink-0 mt-1"></div>
              <div className="flex flex-col gap-[1mm]">
                <h3 className="text-[#010202] font-medium text-[12pt]" style={{ fontFamily: '"MiSans", sans-serif' }}>Элементы LiFePO<sub>4</sub> класса A</h3>
                <p className="text-[#5A5A5C] font-normal text-[8pt] leading-[1.4]" style={{ fontFamily: '"MiSans", sans-serif' }}>
                  Срок службы 6000 циклов<br/> Высокая безопасность и производительность
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start gap-[4mm]">
              <div className="w-[9.46mm] h-[9.46mm] bg-[#ED1651] rounded-[2mm] shrink-0 mt-1"></div>
              <div className="flex flex-col gap-[1mm]">
                <h3 className="text-[#010202] font-medium text-[12pt]" style={{ fontFamily: '"MiSans", sans-serif' }}>Высокая совместимость</h3>
                <p className="text-[#5A5A5C] font-normal text-[8pt] leading-[1.4]" style={{ fontFamily: '"MiSans", sans-serif' }}>
                  Самоадаптивная связь с популярными инверторами
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start gap-[4mm]">
              <div className="w-[9.46mm] h-[9.46mm] bg-[#ED1651] rounded-[2mm] shrink-0 mt-1"></div>
              <div className="flex flex-col gap-[1mm]">
                <h3 className="text-[#010202] font-medium text-[12pt]" style={{ fontFamily: '"MiSans", sans-serif' }}>Интеллектуальное программное обеспечение BMS</h3>
                <p className="text-[#5A5A5C] font-normal text-[8pt] leading-[1.4]" style={{ fontFamily: '"MiSans", sans-serif' }}>
                  Более 50 алгоритмов защиты для обеспечения безопасности и увеличения срока службы<br/> Количество параллельных блоков: 15
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ================= 右页 (210-420mm) ================= */}
      <div className="w-[210mm] h-full relative">
        <div className="design-group-wrapper absolute left-[38.151mm] top-[15.63mm] w-[150.099mm] z-10">
          <div className="design-group-label">参数表格</div>
          <table className="w-full border-collapse text-[6pt] text-center" style={{ fontFamily: '"Mark OT", sans-serif' }}>
            <tbody>
              {/* Header */}
              <tr className="bg-[#9e9e9e] text-white font-bold">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle w-1/2">Модель</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle w-1/4">IPW-25100</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle w-1/4">IPL-25200X</td>
              </tr>

              {/* Main Parameters */}
              <tr className="bg-[#cac9c8] text-[#231A16] font-bold text-left">
                <td colSpan={3} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">Основные параметры</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Тип батареи</td>
                <td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">LiFePO<sub>4</sub></td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Номинальное напряжение (В)</td>
                <td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">25.6</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Номинальная емкость (А·ч)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">100</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">200</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Номинальная энергия (кВт·ч)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">2.56</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">5.12</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Диапазон рабочего напряжения (В)</td>
                <td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">21.6~28.8</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Макс. количество параллельных модулей</td>
                <td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">15</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Макс. постоянный ток заряда (А)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">100</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">200</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Пиковый ток заряда (А)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">110@3s</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">210@3s</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Макс. постоянный ток разряда (А)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">100</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">200</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Пиковый ток разряда (А)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">110@1s</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">210@1s</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Рекомендуемая глубина разряда</td>
                <td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">90%</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Ресурс элементов батареи</td>
                <td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">&gt;6000@25°C, 0,5C/0,5C, 80%DOD, 70% EOL</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Порт связи</td>
                <td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">CAN2.0/RS485</td>
              </tr>

              {/* General Parameters */}
              <tr className="bg-[#cac9c8] text-[#231A16] font-bold text-left">
                <td colSpan={3} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">Общие параметры</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Размеры (Г*Ш*В, мм)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">135*410*454</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">150*454*585</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Масса нетто (кг)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">27</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">48</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Рабочая температура / заряд (°C)</td>
                <td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">0~+60</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Рабочая температура / разряд (°C)</td>
                <td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">-20~+60</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Рекомендуемая рабочая температура (°C)</td>
                <td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">15~+35</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Температура хранения (°C)</td>
                <td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">0~+35</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Влажность</td>
                <td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">10%-95%</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Высота над уровнем моря (м)</td>
                <td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">2000</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Степень защиты</td>
                <td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">IP20</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Способ охлаждения</td>
                <td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">Естественное охлаждение</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Материал корпуса</td>
                <td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">Металл</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">LED-индикация</td>
                <td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">4 светодиода (SOC), 2 светодиода (работа и сигнализация)</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Сертификация</td>
                <td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">IEC62619/UN38.3/MSDS/DGM</td>
              </tr>

              {/* Protection */}
              <tr className="bg-[#cac9c8] text-[#231A16] font-bold text-left">
                <td colSpan={3} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">Защита</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Автоматический выключатель</td>
                <td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">/</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Защита по напряжению</td>
                <td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">Да</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Защита по току</td>
                <td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">Да</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Защита по температуре</td>
                <td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">Да</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Защита от короткого замыкания</td>
                <td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">Да</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

