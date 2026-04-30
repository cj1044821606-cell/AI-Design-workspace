import React from 'react';
import { ProductImageEditor } from './ProductImageEditor';
import bgImage from '@/画册素材库/背景素材/画册-32-产品页左上角背景.png';
import productImage from '@/画册素材库/产品素材/Rack Battery Energy Storage System.png';

export default function CatalogSpreadUZ32() {
  return (
    <div className="w-[420mm] h-[297mm] bg-white relative overflow-hidden shadow-sm flex">
      {/* ================= 宸﹂〉 ================= */}
      <div className="w-[210mm] h-full relative z-10">
        {/* 宸︿笂瑙掕儗鏅浘 */}
        <div className="design-group-wrapper absolute left-0 top-0 w-[210mm] h-[144.834mm] bg-gray-200 overflow-hidden">
          <div className="design-group-label">场景图</div>
          <img src={bgImage} alt="Background" className="w-full h-full object-cover" />
        </div>

        {/* 产品图 (叠加在场景图右下角) */}
        <div className="design-group-wrapper absolute left-[105.7mm] top-[86.84mm] w-[90.83mm] h-[113.22mm] z-10">
          <div className="design-group-label">产品图</div>
          <ProductImageEditor 
            src={productImage} 
            componentName="CatalogSpreadUZ32"
            initialX={0} /* IMAGE_TRANSFORM_X */
            initialY={0} /* IMAGE_TRANSFORM_Y */
            initialScale={1} /* IMAGE_TRANSFORM_SCALE */
            defaultHeight="100%"
            defaultMarginLeft="0"
          />
        </div>

        {/* 功率徽标 */}
        <div className="design-group-wrapper absolute left-[20.9mm] top-[157.83mm] flex items-center z-10">
          <div className="design-group-label">功率徽标</div>
          <div className="bg-[#ED1651] h-[11.2mm] px-4 flex items-center justify-center rounded-md z-20">
            <span className="text-white font-bold text-[16pt]" style={{ fontFamily: '"Mark OT", sans-serif' }}>Стеллаж БЕСС</span>
          </div>
        </div>

        {/* Product Features 标题 */}
        <div className="design-group-wrapper absolute left-[20.9mm] top-[176.44mm] z-10">
          <div className="design-group-label">Product Features 标题</div>
          <h2 className="text-[#ED1651] font-medium text-[31.621pt] leading-none tracking-tight" style={{ fontFamily: '"MiSans", sans-serif' }}>
            Особенности продукта
          </h2>
        </div>

        {/* 分隔线 */}
        <div className="design-group-wrapper absolute left-[21.5mm] top-[193.5mm] w-[178mm] h-[0.4pt] bg-black z-10">
          <div className="design-group-label">标题下划线</div>
        </div>

        {/* 特性列表 Grid */}
        <div className="design-group-wrapper absolute left-[21.5mm] top-[198mm] w-[178mm] z-10">
          <div className="design-group-label">产品特性列表</div>
          <div className="grid grid-cols-2 gap-x-[8mm] gap-y-[4mm]">
            {/* Feature 1 */}
            <div className="flex items-start gap-[4mm]">
              <div className="w-[9.46mm] h-[9.46mm] bg-[#ED1651] rounded-[2mm] shrink-0 mt-1"></div>
              <div className="flex flex-col gap-[1mm]">
                <h3 className="text-[#010202] font-medium text-[12pt]" style={{ fontFamily: '"MiSans", sans-serif' }}>
                  Высокое качество и длительный срок службы
                </h3>
                <p className="text-[#5A5A5C] font-normal text-[8pt] leading-[1.2]" style={{ fontFamily: '"MiSans", sans-serif' }}>
                  Клетки LiFePO<sub>4</sub> класса А<br/> Цикл жизни 6000
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start gap-[4mm]">
              <div className="w-[9.46mm] h-[9.46mm] bg-[#ED1651] rounded-[2mm] shrink-0 mt-1"></div>
              <div className="flex flex-col gap-[1mm]">
                <h3 className="text-[#010202] font-medium text-[12pt]" style={{ fontFamily: '"MiSans", sans-serif' }}>
                  Интеллектуальная система управления батареями<br/>(BMS)
                </h3>
                <p className="text-[#5A5A5C] font-normal text-[8pt] leading-[1.2]" style={{ fontFamily: '"MiSans", sans-serif' }}>
                  Более 50 алгоритмов защиты для обеспечения безопасности и увеличения срока службы<br/> Последовательное соединение 14 батарей<br/> Поддерживает функцию черного перезапуска
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start gap-[4mm]">
              <div className="w-[9.46mm] h-[9.46mm] bg-[#ED1651] rounded-[2mm] shrink-0 mt-1"></div>
              <div className="flex flex-col gap-[1mm]">
                <h3 className="text-[#010202] font-medium text-[12pt]" style={{ fontFamily: '"MiSans", sans-serif' }}>
                  Гибкая масштабируемость системы
                </h3>
                <p className="text-[#5A5A5C] font-normal text-[8pt] leading-[1.2]" style={{ fontFamily: '"MiSans", sans-serif' }}>
                  Поддерживает 6-14 последовательно соединенных аккумуляторных модулей<br/> и 4 параллельно
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex items-start gap-[4mm]">
              <div className="w-[9.46mm] h-[9.46mm] bg-[#ED1651] rounded-[2mm] shrink-0 mt-1"></div>
              <div className="flex flex-col gap-[1mm]">
                <h3 className="text-[#010202] font-medium text-[12pt]" style={{ fontFamily: '"MiSans", sans-serif' }}>
                  Умная работа
                </h3>
                <p className="text-[#5A5A5C] font-normal text-[8pt] leading-[1.2]" style={{ fontFamily: '"MiSans", sans-serif' }}>
                  Удаленный мониторинг через приложение itel Energy Cloud<br/> Встроенный удобный ЖК-дисплей
                </p>
              </div>
            </div>

            {/* Feature 5 */}
            <div className="flex items-start gap-[4mm]">
              <div className="w-[9.46mm] h-[9.46mm] bg-[#ED1651] rounded-[2mm] shrink-0 mt-1"></div>
              <div className="flex flex-col gap-[1mm]">
                <h3 className="text-[#010202] font-medium text-[12pt]" style={{ fontFamily: '"MiSans", sans-serif' }}>
                  Умная защита
                </h3>
                <p className="text-[#5A5A5C] font-normal text-[8pt] leading-[1.2]" style={{ fontFamily: '"MiSans", sans-serif' }}>
                  Автоматически управляет зарядкой/разрядкой и балансировкой ячеек<br/> Защищает от чрезмерной разрядки, перезаряда, перегрузки по току и экстремальных температур
                </p>
              </div>
            </div>

            {/* Feature 6 */}
            <div className="flex items-start gap-[4mm]">
              <div className="w-[9.46mm] h-[9.46mm] bg-[#ED1651] rounded-[2mm] shrink-0 mt-1"></div>
              <div className="flex flex-col gap-[1mm]">
                <h3 className="text-[#010202] font-medium text-[12pt]" style={{ fontFamily: '"MiSans", sans-serif' }}>
                  Быстрая установка
                </h3>
                <p className="text-[#5A5A5C] font-normal text-[8pt] leading-[1.2]" style={{ fontFamily: '"MiSans", sans-serif' }}>
                  Модульная стоечная система для быстрой установки
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= 右页 ================= */}
      <div className="w-[210mm] h-full relative">
        <div className="design-group-wrapper absolute left-[15mm] top-[15.63mm] w-[173.25mm] z-10">
          <div className="design-group-label">参数表格</div>
          <table className="w-full border-collapse text-[5pt] text-center" style={{ fontFamily: '"Mark OT", sans-serif' }}>
            <tbody>
              {/* Header 1 */}
              <tr className="bg-[#9e9e9e] text-white font-bold">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left" colSpan={7}>Стоечная аккумуляторная система хранения энергии</td>
              </tr>

              {/* Main Parameters */}
              <tr className="bg-[#cac9c8] text-[#231A16] font-bold">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left" colSpan={7}>Основные параметры</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left w-[28%]">Тип батареи</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle" colSpan={6}>LiFePO<sub>4</sub></td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Номинальное напряжение (В)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle" colSpan={6}>51.2</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Номинальная емкость (А·ч)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle" colSpan={6}>100</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Номинальная энергия (кВт·ч)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle" colSpan={6}>5.12</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Диапазон рабочего напряжения батареи (В)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle" colSpan={6}>48~57.6</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Диапазон рабочего напряжения контроллера (В)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle" colSpan={6}>288~806.4</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Макс. Серийный номер</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle" colSpan={6}>14</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Макс. количество параллельных модулей</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle" colSpan={6}>4</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Макс. постоянный ток заряда (А)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle" colSpan={6}>100</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Пиковый зарядный ток</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle" colSpan={6}>110A@1s</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Макс. постоянный ток разряда (А)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle" colSpan={6}>100</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Пиковый ток разряда</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle" colSpan={6}>110A@3s</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Рекомендуемая глубина разряда</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle" colSpan={6}>90%</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Ресурс элементов батареи</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle" colSpan={6}>&gt;6000@25°C, 0,5C/0,5C, 80%DOD, 70%EOL</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Размеры (Г*Ш*В, мм)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle" colSpan={6}>450*510*153</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Масса нетто (кг)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle" colSpan={6}>49</td>
              </tr>

              {/* General Parameters */}
              <tr className="bg-[#cac9c8] text-[#231A16] font-bold">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left" colSpan={7}>Общие параметры</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Порт связи</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle" colSpan={6}>CAN/RS485</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Рабочая температура / заряд (°C)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle" colSpan={6}>0~+55</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Рабочая температура / разряд (°C)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle" colSpan={6}>-20~+55</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Рекомендуемая рабочая температура (°C)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle" colSpan={6}>15~+35</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Температура хранения (°C)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle" colSpan={6}>0~+35</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Влажность</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle" colSpan={6}>10%~95%</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Высота над уровнем моря (м)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle" colSpan={6}>2000</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Степень защиты</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle" colSpan={6}>IP20</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Способ охлаждения</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle" colSpan={6}>Естественное охлаждение</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Материал корпуса</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle" colSpan={6}>Металл</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">LED-индикация</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle" colSpan={6}>/</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Сертификация</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle" colSpan={6}>IEC62619/UN38.3/MSDS/DGM</td>
              </tr>

              {/* Protection */}
              <tr className="bg-[#cac9c8] text-[#231A16] font-bold">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left" colSpan={7}>Защита</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Автоматический выключатель</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle" colSpan={6}>Да</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Предохранитель</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle" colSpan={6}>Да</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Защита по напряжению</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle" colSpan={6}>Да</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Защита по току</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle" colSpan={6}>Да</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Защита по температуре</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle" colSpan={6}>Да</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Защита от короткого замыкания</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle" colSpan={6}>Да</td>
              </tr>

              {/* Recommended Configuration */}
              <tr className="bg-[#9e9e9e] text-white font-bold">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left" colSpan={7}>Рекомендуемая конфигурация</td>
              </tr>
              <tr className="bg-[#cac9c8] text-[#231A16] font-bold">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Модуль</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[1mm] align-middle w-[12%]">IB-H30-X-G1</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[1mm] align-middle w-[12%]">IB-H40-X-G1</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[1mm] align-middle w-[12%]">IB-H50-X-G1</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[1mm] align-middle w-[12%]">IB-H60-X-G1</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[1mm] align-middle w-[12%]">IB-H70-X-G1</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[1mm] align-middle w-[12%]">IB-H70-X-G1</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Количество модулей в серии</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[1mm] align-middle">6</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[1mm] align-middle">8</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[1mm] align-middle">10</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[1mm] align-middle">12</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[1mm] align-middle">14</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[1mm] align-middle">15 (Макс.)</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Номинальное напряжение системы (В)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[1mm] align-middle">307.2</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[1mm] align-middle">409.6</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[1mm] align-middle">512</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[1mm] align-middle">614.4</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[1mm] align-middle">716.8</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[1mm] align-middle">768</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Диапазон напряжения системы (В)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[1mm] align-middle">259.2~345.6</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[1mm] align-middle">345.6~460.8</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[1mm] align-middle">432~576</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[1mm] align-middle">518.4~691.2</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[1mm] align-middle">604.8~806.4</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[1mm] align-middle">648~864</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Номинальная энергия системы (кВтч)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[1mm] align-middle">30.72</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[1mm] align-middle">40.96</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[1mm] align-middle">51.2</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[1mm] align-middle">61.44</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[1mm] align-middle">71.68</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[1mm] align-middle">76.8</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Максимальная продолжительная мощность (кВт)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[1mm] align-middle">30.72</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[1mm] align-middle">40.96</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[1mm] align-middle">51.2</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[1mm] align-middle">61.44</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[1mm] align-middle">71.68</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[1mm] align-middle">76.8</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Ток заряда/разряда (А)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[1mm] align-middle" colSpan={6}>
                  50 (рекомендуется)<br/>100 (максимум)
                </td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Рабочая температура (°С)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[1mm] align-middle" colSpan={6}>
                  Заряд: 0~55<br/>Разряд: -20~+56
                </td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Масса нетто (кг)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[1mm] align-middle">312.5</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[1mm] align-middle">410.5</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[1mm] align-middle">508.5</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[1mm] align-middle">606.5</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[1mm] align-middle">704.5</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[1mm] align-middle">772</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

