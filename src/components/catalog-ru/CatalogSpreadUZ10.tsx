import React from 'react';
import inverterImg from '@/画册素材库/产品素材/IPV-8K48U&IPV-12K48U.png';
import bgImage from '@/画册素材库/背景素材/画册-10-产品页左上角背景.png';
import { ProductImageEditor } from './ProductImageEditor';

export default function CatalogSpreadUZ10() {
  return (
    <div className="w-[420mm] h-[297mm] bg-white relative overflow-hidden shadow-sm flex">
      {/* ================= 左页 (0-210mm) ================= */}
      <div className="w-[210mm] h-full relative z-10">
        {/* 顶部家庭与逆变器场景图 */}
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
          <ProductImageEditor src={inverterImg} componentName="CatalogSpreadUZ10" initialX={0} /* IMAGE_TRANSFORM_X */ initialY={-44} /* IMAGE_TRANSFORM_Y */ initialScale={0.9} /* IMAGE_TRANSFORM_SCALE */ defaultHeight="100%" defaultMarginLeft="0" />
        </div>

        {/* 功率徽标 */}
        <div className="design-group-wrapper absolute left-[20.9mm] top-[169.83mm] flex items-center z-10">
          <div className="design-group-label">功率徽标</div>
          <div className="bg-[#ED1651] h-[11.2mm] px-4 flex items-center justify-center rounded-l-md z-20">
            <span className="text-white font-bold text-[16pt]" style={{ fontFamily: '"Mark OT", sans-serif' }}>8~12kW</span>
          </div>
          <div className="bg-[#ACADB1] h-[11.2mm] px-4 flex items-center justify-center rounded-r-md -ml-2 pl-6 z-10">
            <span className="text-white font-bold text-[16pt]" style={{ fontFamily: '"Mark OT", sans-serif' }}>SP-HYBRID</span>
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
          <div className="grid grid-cols-2 gap-x-[10mm] gap-y-[8mm]">
            
            {/* Feature 1: Dual Output */}
            <div className="flex items-start gap-[4mm]">
              <div className="w-[9.46mm] h-[9.46mm] bg-[#ED1651] rounded-[2mm] shrink-0 mt-1"></div>
              <div className="flex flex-col gap-[1mm]">
                <h3 className="text-[#010202] font-medium text-[12pt]" style={{ fontFamily: '"MiSans", sans-serif' }}>Двойной выход</h3>
                <p className="text-[#5A5A5C] font-normal text-[8pt] leading-[1.4]" style={{ fontFamily: '"MiSans", sans-serif' }}>
                  Поддержка умной нагрузки и основной нагрузки
                </p>
              </div>
            </div>

            {/* Feature 2: High PV Input Power */}
            <div className="flex items-start gap-[4mm]">
              <div className="w-[9.46mm] h-[9.46mm] bg-[#ED1651] rounded-[2mm] shrink-0 mt-1"></div>
              <div className="flex flex-col gap-[1mm]">
                <h3 className="text-[#010202] font-medium text-[12pt]" style={{ fontFamily: '"MiSans", sans-serif' }}>Высокая входная мощность PV</h3>
                <p className="text-[#5A5A5C] font-normal text-[8pt] leading-[1.4]" style={{ fontFamily: '"MiSans", sans-serif' }}>
                  PV Входная мощность до 16000W<br/> Макс. MPPT Зарядный ток до 160A/210A
                </p>
              </div>
            </div>

            {/* Feature 3: High Efficiency */}
            <div className="flex items-start gap-[4mm]">
              <div className="w-[9.46mm] h-[9.46mm] bg-[#ED1651] rounded-[2mm] shrink-0 mt-1"></div>
              <div className="flex flex-col gap-[1mm]">
                <h3 className="text-[#010202] font-medium text-[12pt]" style={{ fontFamily: '"MiSans", sans-serif' }}>Высокая эффективность</h3>
                <p className="text-[#5A5A5C] font-normal text-[8pt] leading-[1.4]" style={{ fontFamily: '"MiSans", sans-serif' }}>
                  Эффективность отслеживания MPP ≥99.5%<br/> Эффективность преобразования режима работы от батареи ≥95%
                </p>
              </div>
            </div>

            {/* Feature 4: Powerful Performance */}
            <div className="flex items-start gap-[4mm]">
              <div className="w-[9.46mm] h-[9.46mm] bg-[#ED1651] rounded-[2mm] shrink-0 mt-1"></div>
              <div className="flex flex-col gap-[1mm]">
                <h3 className="text-[#010202] font-medium text-[12pt]" style={{ fontFamily: '"MiSans", sans-serif' }}>Мощная производительность</h3>
                <p className="text-[#5A5A5C] font-normal text-[8pt] leading-[1.4]" style={{ fontFamily: '"MiSans", sans-serif' }}>
                  105%-150% Перегрузочная способность@10 с<br/> 150%-200% Перегрузочная способность@5 с<br/> Макс. Входное напряжение сети 380V
                </p>
              </div>
            </div>

            {/* Feature 5: Solid Quality & Service */}
            <div className="flex items-start gap-[4mm]">
              <div className="w-[9.46mm] h-[9.46mm] bg-[#ED1651] rounded-[2mm] shrink-0 mt-1"></div>
              <div className="flex flex-col gap-[1mm]">
                <h3 className="text-[#010202] font-medium text-[12pt]" style={{ fontFamily: '"MiSans", sans-serif' }}>Солидное качество и сервис</h3>
                <p className="text-[#5A5A5C] font-normal text-[8pt] leading-[1.4]" style={{ fontFamily: '"MiSans", sans-serif' }}>
                  IP54 Защитная конструкция для защиты от пыли и водонепроницаемости<br/> 3-летняя замена
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
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle w-1/4">IPV-8K48U</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle w-1/4">IPV-12K48U</td>
              </tr>

              {/* Efficiency */}
              <tr className="bg-[#cac9c8] text-[#231A16] font-bold text-left">
                <td colSpan={3} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">Эффективность</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">MPPT Эффективность</td>
                <td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">99.50%</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Макс. Эффективность преобразования режима работы от батареи</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">93%</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">95%</td>
              </tr>

              {/* PV Input */}
              <tr className="bg-[#cac9c8] text-[#231A16] font-bold text-left">
                <td colSpan={3} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">PV Ввод</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Макс. PV Входная мощность (Вт)</td>
                <td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">16000</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Макс. PV Входное напряжение (В)</td>
                <td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">500</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Пусковое напряжение (В)</td>
                <td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">75</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">MPPT Диапазон напряжения (В)</td>
                <td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">85-450</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Макс. Входной ток (А)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">27+27</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">27+27</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Количество MPPT</td>
                <td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">2</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Количество строк на MPPT</td>
                <td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">1</td>
              </tr>

              {/* AC Input */}
              <tr className="bg-[#cac9c8] text-[#231A16] font-bold text-left">
                <td colSpan={3} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">AC Ввод</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Номинальное входное напряжение (В переменного тока)</td>
                <td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">230</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Диапазон входного напряжения (В переменного тока)</td>
                <td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">90~280</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Макс. AC Входной ток (А)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">65 (Режим обхода)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">90 (режим байпаса)</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Номинальная рабочая частота (Гц)</td>
                <td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">50/60</td>
              </tr>

              {/* AC Output */}
              <tr className="bg-[#cac9c8] text-[#231A16] font-bold text-left">
                <td colSpan={3} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">AC Вывод</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Номинальная выходная мощность AC (Вт)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">8000</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">12000</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Макс. Выходная полная мощность (ВА)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">8000</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">12000</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Номинальное выходное напряжение AC (В AC)</td>
                <td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">220/230/240 (L+N+PE)</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Макс. Выходной ток (А)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">36.4</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">54.5</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Полное гармоническое искажение тока</td>
                <td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">&lt;3%</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Номинальная частота AC (Гц)</td>
                <td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">50</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Время переключения (мс)</td>
                <td colSpan={2} className="border-[0.368pt] border-white py-[2mm] px-[2mm] align-middle leading-tight">10 (ИБП)<br/>20 (Бытовая техника)</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Impульсная мощность (ВА)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">16000 @ 5s</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">24000 @ 5s</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Возможность перегрузки</td>
                <td colSpan={2} className="border-[0.368pt] border-white py-[2mm] px-[2mm] align-middle leading-tight">
                  105%-150% @ 10s<br/>
                  150%-200% @ 5s
                </td>
              </tr>

              {/* Battery */}
              <tr className="bg-[#cac9c8] text-[#231A16] font-bold text-left">
                <td colSpan={3} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">Аккумуляторы</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Тип батареи</td>
                <td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">Свинцово-кислотный/литий-ионный/определяемый пользователем</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Номинальное напряжение (В)</td>
                <td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">48</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Диапазон напряжения батареи (В)</td>
                <td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">40-60</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Макс. Ток солнечной зарядки (А)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">160</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">210</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Макс. Зарядный ток сети/генератора (А)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">160</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">210</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Макс. Разрядный ток (А)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">180</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">250</td>
              </tr>

              {/* General */}
              <tr className="bg-[#cac9c8] text-[#231A16] font-bold text-left">
                <td colSpan={3} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">Общий</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Габариты (Д*Ш*В, мм)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">420*125*520</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">525*125*630</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Масса нетто (кг)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">17.5</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">28.5</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Диапазон рабочих температур (°C))</td>
                <td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">-10 ~ +55 (&gt;45°C Снижение мощности)</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Макс. Рабочая высота (м)</td>
                <td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">4000 (&gt;2000m Снижение мощности)</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Коммуникация</td>
                <td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">WIFI/RS485/CAN/RS232/Сухой контакт</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Поддержка дизельных генераторов</td>
                <td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">Да</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Поддержка интеллектуальной загрузки</td>
                <td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">Да</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Параллельная возможность</td>
                <td className="border-[0.368pt] border-white py-[2mm] px-[2mm] align-middle leading-tight">Однофазный: 9<br/>Трехфазный: 12</td>
                <td className="border-[0.368pt] border-white py-[2mm] px-[2mm] align-middle leading-tight">Одна фаза: 6<br/>Три фазы: 12</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Способ охлаждения</td>
                <td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">Интеллектуальное вентиляторное охлаждение</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Шум (дБ)</td>
                <td className="border-[0.368pt] border-white py-[2mm] px-[2mm] align-middle leading-tight">&lt;55 (PV подключен)<br/>&lt;45 (нет PV подключен)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">&lt;60</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Уровень аутентификации</td>
                <td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">IEC62109-1, IEC62109-2, IEC61683</td>
              </tr>

              {/* Protection */}
              <tr className="bg-[#cac9c8] text-[#231A16] font-bold text-left">
                <td colSpan={3} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">Защита</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Степень защиты</td>
                <td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">IP54</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Защита от перенапряжения</td>
                <td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">Да</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Защита от перегрузки</td>
                <td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">Да</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Защита от короткого замыкания</td>
                <td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">Да</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Защита от перегрева</td>
                <td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">Да</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Защита от перенапряжения</td>
                <td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">DC: ТИП III; AC: ТИП III</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

