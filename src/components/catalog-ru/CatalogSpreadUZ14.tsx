import React from 'react';
import inverterImg from '@/画册素材库/产品素材/IGT-110KTA.png';
import bgImage from '@/画册素材库/背景素材/画册-14-产品页左上角背景.png';
import { ProductImageEditor } from './ProductImageEditor';

export default function CatalogSpreadUZ14() {
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
          <ProductImageEditor src={inverterImg} componentName="CatalogSpreadUZ14" initialX={0} /* IMAGE_TRANSFORM_X */ initialY={-44} /* IMAGE_TRANSFORM_Y */ initialScale={0.95} /* IMAGE_TRANSFORM_SCALE */ defaultHeight="100%" defaultMarginLeft="0" />
        </div>

        {/* 功率徽标 */}
        <div className="design-group-wrapper absolute left-[20.9mm] top-[169.83mm] flex items-center z-10">
          <div className="design-group-label">功率徽标</div>
          <div className="bg-[#ED1651] h-[11.2mm] px-4 flex items-center justify-center rounded-l-md z-20">
            <span className="text-white font-bold text-[16pt]" style={{ fontFamily: '"Mark OT", sans-serif' }}>110kW</span>
          </div>
          <div className="bg-[#ACADB1] h-[11.2mm] px-4 flex items-center justify-center rounded-r-md -ml-2 pl-6 z-10">
            <span className="text-white font-bold text-[16pt]" style={{ fontFamily: '"Mark OT", sans-serif' }}>3P-в сети</span>
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
            
            {/* Feature 1: Optimal Performance */}
            <div className="flex items-start gap-[4mm]">
              <div className="w-[9.46mm] h-[9.46mm] bg-[#ED1651] rounded-[2mm] shrink-0 mt-1"></div>
              <div className="flex flex-col gap-[1mm]">
                <h3 className="text-[#010202] font-medium text-[12pt]" style={{ fontFamily: '"MiSans", sans-serif' }}>Оптимальная производительность</h3>
                <p className="text-[#5A5A5C] font-normal text-[8pt] leading-[1.4]" style={{ fontFamily: '"MiSans", sans-serif' }}>
                  20A PV входной ток на строку<br/> 8 MPPTс, Макс. Эффективность 98.7%<br/> 150% DC превышение размера ввода и 110% AC перегрузка вывода<br/> Без снижения номинальных характеристик при 45°C
                </p>
              </div>
            </div>

            {/* Feature 2: Remote Control and Monitoring */}
            <div className="flex items-start gap-[4mm]">
              <div className="w-[9.46mm] h-[9.46mm] bg-[#ED1651] rounded-[2mm] shrink-0 mt-1"></div>
              <div className="flex flex-col gap-[1mm]">
                <h3 className="text-[#010202] font-medium text-[12pt]" style={{ fontFamily: '"MiSans", sans-serif' }}>Дистанционное управление и мониторинг</h3>
                <p className="text-[#5A5A5C] font-normal text-[8pt] leading-[1.4]" style={{ fontFamily: '"MiSans", sans-serif' }}>
                  Мониторинг уровня строки<br/> Поддерживается удаленное обновление или обновление на месте
                </p>
              </div>
            </div>

            {/* Feature 3: Safety and Reliability */}
            <div className="flex items-start gap-[4mm]">
              <div className="w-[9.46mm] h-[9.46mm] bg-[#ED1651] rounded-[2mm] shrink-0 mt-1"></div>
              <div className="flex flex-col gap-[1mm]">
                <h3 className="text-[#010202] font-medium text-[12pt]" style={{ fontFamily: '"MiSans", sans-serif' }}>Безопасность и надежность</h3>
                <p className="text-[#5A5A5C] font-normal text-[8pt] leading-[1.4]" style={{ fontFamily: '"MiSans", sans-serif' }}>
                  УЗИП типа II на сторонах AC и DC<br/> IP66 и дополнительная защита C5<br/> Дополнительная защита AFCI
                </p>
              </div>
            </div>

            {/* Feature 4: Thoughtful Design */}
            <div className="flex items-start gap-[4mm]">
              <div className="w-[9.46mm] h-[9.46mm] bg-[#ED1651] rounded-[2mm] shrink-0 mt-1"></div>
              <div className="flex flex-col gap-[1mm]">
                <h3 className="text-[#010202] font-medium text-[12pt]" style={{ fontFamily: '"MiSans", sans-serif' }}>Продуманный дизайн</h3>
                <p className="text-[#5A5A5C] font-normal text-[8pt] leading-[1.4]" style={{ fontFamily: '"MiSans", sans-serif' }}>
                  Простая и быстрая замена вентилятора<br/> Конструкция без предохранителя
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
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle w-1/2">IGT-110KTA</td>
              </tr>

              {/* PV Input */}
              <tr className="bg-[#cac9c8] text-[#231A16] font-bold text-left">
                <td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">PV Ввод</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Макс. PV Входная мощность (кВт)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">165</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Макс. PV Входное напряжение (В)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">1100</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Номинальное входное напряжение PV (В)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">600</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Пусковое напряжение (В)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">200</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">MPPT Диапазон напряжения (В)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">200-1000</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Макс. Входной ток на MPPT (А)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">40/40/20/20/40/40/20/20</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Количество MPPT</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">8</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Количество строк на MPPT</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">2+2+1+1+2+2+1+1</td>
              </tr>

              {/* AC Output */}
              <tr className="bg-[#cac9c8] text-[#231A16] font-bold text-left">
                <td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">AC Вывод</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Номинальная выходная активная мощность (кВт)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">110</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Номинальная выходная полная мощность (кВА)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">110</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Макс. Выходная активная мощность (кВт)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">121</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Макс. Выходная полная мощность (кВА)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">121</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Номинальное выходное напряжение (В переменного тока)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">380/400/415 (3L+N+PE)</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Макс. Выходной ток (А)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">176</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Выходная частота (Гц)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">50/60</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Диапазон выходной частоты (Гц)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">45-55/55-65</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Коэффициент мощности</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">От 0,8 опережает до 0,8 отстает</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Полное гармоническое искажение тока</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">&lt;3%</td>
              </tr>

              {/* Efficiency */}
              <tr className="bg-[#cac9c8] text-[#231A16] font-bold text-left">
                <td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">Эффективность</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Макс. Эффективность</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">98.70%</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Европейская эффективность</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">98.10%</td>
              </tr>

              {/* Protection */}
              <tr className="bg-[#cac9c8] text-[#231A16] font-bold text-left">
                <td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">Защита</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">PV Защита от обратной полярности</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">Да</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Монитор остаточного тока</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">Да</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">PV Защита от перенапряжения</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">Да</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">PV Защита от перегрузки по току</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">Да</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">DC Переключатель</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">Да</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Защита от изолирования</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">Да</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Защита от перенапряжения</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">DC: Тип II<br/>AC: Тип II</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Детектор изоляционного резистора</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">Да</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Защита от перегрузки по выходному току</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">Да</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Защита от короткого замыкания на выходе</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">Да</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Защита от перенапряжения на выходе</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">Да</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">AFCI</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">Необязательный</td>
              </tr>

              {/* General */}
              <tr className="bg-[#cac9c8] text-[#231A16] font-bold text-left">
                <td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">Общий</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Размеры (Д*Ш*В мм)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">1160*611*286</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Масса нетто (кг)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">92</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Диапазон рабочих температур (°C)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">-25 ~ +60 (&gt;45°CСнижение мощности)</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Макс. Рабочая высота (м)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">4000</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Коммуникация</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">RS485, необязательно: WIFI/GPRS</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Способ охлаждения</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">Интеллектуальное вентиляторное охлаждение</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Степень защиты от проникновения</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">IP66</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Относительная влажность</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">0~100%</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Пользовательский интерфейс</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">LED/LCD (необязательно)</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Самопотребление ночью (Вт)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">&lt;1</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Топология</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">Неизолированный</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Уровень аутентификации</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">IEC62109-1/2,IEC61683,IEC61000,IEC61727/IEC62116</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

