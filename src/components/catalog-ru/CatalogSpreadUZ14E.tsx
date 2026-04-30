import React from 'react';
import inverterImg from '@/画册素材库/产品素材/IGT-40KT-G1 & IGT-50KT-G1.png';
import bgImage from '@/画册素材库/背景素材/画册-IGT-40KT-G1 & IGT-50KT-G1-产品页左上角背景.png';
import { ProductImageEditor } from './ProductImageEditor';

export default function CatalogSpreadUZ14E() {
  return (
    <div className="w-[420mm] h-[297mm] bg-white relative overflow-hidden shadow-sm flex">
      <div className="w-[210mm] h-full relative z-10">
        <div className="design-group-wrapper absolute left-0 top-0 w-[210mm] h-[144.834mm] bg-gray-200 overflow-hidden">
          <div className="design-group-label">场景图</div>
          <img src={bgImage} alt="Scene Background" className="w-full h-full object-cover" />
        </div>

        <div className="design-group-wrapper absolute left-[100.7mm] top-[106.84mm] w-[100.83mm] h-[93.22mm] z-10">
          <div className="design-group-label">产品图</div>
          <ProductImageEditor
            src={inverterImg}
            componentName="CatalogSpreadUZ14E"
            initialX={21} /* IMAGE_TRANSFORM_X */
            initialY={-40} /* IMAGE_TRANSFORM_Y */
            initialScale={0.95} /* IMAGE_TRANSFORM_SCALE */
            defaultHeight="100%"
            defaultMarginLeft="0"
          />
        </div>

        <div className="design-group-wrapper absolute left-[20.9mm] top-[169.83mm] flex items-center z-10">
          <div className="design-group-label">功率徽标</div>
          <div className="bg-[#ED1651] h-[11.2mm] px-4 flex items-center justify-center rounded-l-md z-20">
            <span className="text-white font-bold text-[16pt]" style={{ fontFamily: '"Mark OT", sans-serif' }}>
              40kW/50kW
            </span>
          </div>
          <div className="bg-[#ACADB1] h-[11.2mm] px-4 flex items-center justify-center rounded-r-md -ml-2 pl-6 z-10">
            <span className="text-white font-bold text-[16pt]" style={{ fontFamily: '"Mark OT", sans-serif' }}>
              3P-в сети
            </span>
          </div>
        </div>

        <div className="design-group-wrapper absolute left-[20.9mm] top-[188.44mm] z-10">
          <div className="design-group-label">标题下划线</div>
          <h2
            className="text-[#ED1651] font-medium text-[31.621pt] leading-none tracking-tight"
            style={{ fontFamily: '"MiSans", sans-serif' }}
          >
            Особенности продукта
          </h2>
        </div>

        <div className="design-group-wrapper absolute left-[21.5mm] top-[205.5mm] w-[167.2mm] h-[0.4pt] bg-black z-10">
          <div className="design-group-label">标题下划线</div>
        </div>

        <div className="design-group-wrapper absolute left-[21.5mm] top-[211mm] w-[167.2mm] z-10">
          <div className="design-group-label">产品特性列表</div>
          <div className="grid grid-cols-2 gap-x-[10mm] gap-y-[5mm]">
            <div className="flex items-start gap-[4mm]">
              <div className="w-[9.46mm] h-[9.46mm] bg-[#ED1651] rounded-[2mm] shrink-0 mt-1"></div>
              <div className="flex flex-col gap-[1mm]">
                <h3 className="text-[#010202] font-medium text-[12pt]" style={{ fontFamily: '"MiSans", sans-serif' }}>
                  Высокая эффективность
                </h3>
                <p className="text-[#5A5A5C] font-normal text-[8pt] leading-[1.3]" style={{ fontFamily: '"MiSans", sans-serif' }}>
                  Макс. эффективность 98,6%<br />
                  Поддерживает увеличение отношения DC/AC до 1,5<br />
                  Входной ток до 20 А, подходит для различных мощных PV-модулей<br />
                  Низкое пусковое напряжение 180 В обеспечивает ранний запуск и большую выработку энергии
                </p>
              </div>
            </div>

            <div className="flex items-start gap-[4mm]">
              <div className="w-[9.46mm] h-[9.46mm] bg-[#ED1651] rounded-[2mm] shrink-0 mt-1"></div>
              <div className="flex flex-col gap-[1mm]">
                <h3 className="text-[#010202] font-medium text-[12pt]" style={{ fontFamily: '"MiSans", sans-serif' }}>
                  Умный
                </h3>
                <p className="text-[#5A5A5C] font-normal text-[8pt] leading-[1.3]" style={{ fontFamily: '"MiSans", sans-serif' }}>
                  Сверхширокий диапазон напряжения сети и технология автоматической регулировки напряжения
                  обеспечивают непрерывную работу даже при нестабильной сети
                </p>
              </div>
            </div>

            <div className="flex items-start gap-[4mm]">
              <div className="w-[9.46mm] h-[9.46mm] bg-[#ED1651] rounded-[2mm] shrink-0 mt-1"></div>
              <div className="flex flex-col gap-[1mm]">
                <h3 className="text-[#010202] font-medium text-[12pt]" style={{ fontFamily: '"MiSans", sans-serif' }}>
                  Безопасный и надежный
                </h3>
                <p className="text-[#5A5A5C] font-normal text-[8pt] leading-[1.3]" style={{ fontFamily: '"MiSans", sans-serif' }}>
                  Степень защиты IP66, подходит для суровых условий эксплуатации
                </p>
              </div>
            </div>

            <div className="flex items-start gap-[4mm]">
              <div className="w-[9.46mm] h-[9.46mm] bg-[#ED1651] rounded-[2mm] shrink-0 mt-1"></div>
              <div className="flex flex-col gap-[1mm]">
                <h3 className="text-[#010202] font-medium text-[12pt]" style={{ fontFamily: '"MiSans", sans-serif' }}>
                  Экономичный и выгодный
                </h3>
                <p className="text-[#5A5A5C] font-normal text-[8pt] leading-[1.3]" style={{ fontFamily: '"MiSans", sans-serif' }}>
                  Без снижения мощности при 45°C, выше надежность и выработка
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[210mm] h-full relative">
        <div className="design-group-wrapper absolute left-[38.151mm] top-[15.63mm] w-[150.099mm] z-10">
          <div className="design-group-label">参数表格</div>
          <table className="w-full border-collapse text-[6pt] text-center" style={{ fontFamily: '"Mark OT", sans-serif' }}>
            <tbody>
              <tr className="bg-[#9e9e9e] text-white font-bold">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle w-1/3">Модель</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle w-1/3">IGT-40KT-G1</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle w-1/3">IGT-50KT-G1</td>
              </tr>

              <tr className="bg-[#cac9c8] text-[#231A16] font-bold text-left"><td colSpan={3} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">PV вход</td></tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]"><td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Макс. мощность PV-входа (кВт)</td><td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">60</td><td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">75</td></tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]"><td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Макс. входное напряжение PV (В)</td><td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">1100</td></tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]"><td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Номинальное входное напряжение PV (В)</td><td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">620</td></tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]"><td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Пусковое напряжение (В)</td><td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">180</td></tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]"><td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Диапазон напряжения MPPT (В)</td><td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">160~1000</td></tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]"><td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Макс. входной ток (А)</td><td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">40/40/20/20</td><td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">40/40/20/32</td></tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]"><td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Макс. ток короткого замыкания (А)</td><td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">50/50/25/25</td><td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">50/50/25/40</td></tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]"><td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Количество MPPT</td><td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">4</td></tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]"><td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Количество стрингов на MPPT</td><td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">2+2+1+1</td><td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">2+2+1+2</td></tr>

              <tr className="bg-[#cac9c8] text-[#231A16] font-bold text-left"><td colSpan={3} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">AC выход</td></tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]"><td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Номинальная выходная мощность AC (Вт)</td><td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">40000</td><td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">50000</td></tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]"><td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Макс. полная выходная мощность (ВА)</td><td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">44000</td><td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">55000</td></tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]"><td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Номинальный выходной ток (А)</td><td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">57.7</td><td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">72.2</td></tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]"><td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Макс. выходной ток (А)</td><td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">63.5</td><td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">79.4</td></tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]"><td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Номинальное выходное напряжение AC (В)</td><td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">400 (3L+N+PE)</td></tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]"><td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Диапазон выходного напряжения AC (В)</td><td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-[5pt] leading-tight">162-300 (фазное), 280-520 (линейное)</td></tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]"><td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Номинальная частота AC (Гц)</td><td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">50/60</td></tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]"><td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Диапазон выходной частоты (Гц)</td><td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">45-55/55-65</td></tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]"><td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Коэффициент мощности</td><td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">&gt;0.99 (от 0.8 опереж. до 0.8 отстающ.)</td></tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]"><td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">THDi</td><td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">&lt;3%</td></tr>

              <tr className="bg-[#cac9c8] text-[#231A16] font-bold text-left"><td colSpan={3} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">Эффективность</td></tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]"><td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Макс. эффективность</td><td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">98.6%</td></tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]"><td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Европейская эффективность</td><td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">98.0%</td></tr>

              <tr className="bg-[#cac9c8] text-[#231A16] font-bold text-left"><td colSpan={3} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">Общие характеристики</td></tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]"><td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Размеры (Ш*В*Г, мм)</td><td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">578*444*226</td></tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]"><td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Топология</td><td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">Безтрансформаторная</td></tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]"><td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Масса нетто (кг)</td><td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">31</td></tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]"><td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Диапазон рабочих температур (°C)</td><td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">-30~+60</td></tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]"><td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Относительная влажность</td><td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">0-100%</td></tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]"><td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Макс. рабочая высота (м)</td><td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">4000</td></tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]"><td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Способ охлаждения</td><td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">Интеллектуальное вентиляторное охлаждение</td></tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]"><td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Ночное самопотребление (Вт)</td><td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">&lt;1</td></tr>

              <tr className="bg-[#cac9c8] text-[#231A16] font-bold text-left"><td colSpan={3} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">Защита</td></tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]"><td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Степень защиты</td><td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">IP66</td></tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]"><td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Встроенный DC выключатель</td><td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">Да</td></tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]"><td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Защита от обратной полярности PV</td><td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">Да</td></tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]"><td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Обнаружение тока утечки</td><td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">Да</td></tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]"><td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Защита от перегрузки по току</td><td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">Да</td></tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]"><td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Защита от короткого замыкания</td><td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">Да</td></tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]"><td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Защита от перенапряжения</td><td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">Да</td></tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]"><td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Антиостровная защита</td><td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">Да</td></tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]"><td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Обнаружение сопротивления изоляции</td><td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">Да</td></tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]"><td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Защита от импульсных перенапряжений</td><td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">DC: TYPE II; AC: TYPE II</td></tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]"><td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Антиобратный ток</td><td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">Опция</td></tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]"><td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Сканирование I/V-кривой</td><td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">Опция</td></tr>

              <tr className="bg-[#cac9c8] text-[#231A16] font-bold text-left"><td colSpan={3} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">Функции</td></tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]"><td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">DC подключение</td><td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">MC4 Connector</td></tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]"><td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">AC подключение</td><td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">OT Terminal</td></tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]"><td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Дисплей</td><td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">LED+Bluetooth+App</td></tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]"><td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Связь</td><td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">RS485/Wi-Fi (Опция)/4G (Опция)</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

