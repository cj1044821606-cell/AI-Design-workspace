import React from 'react';
import inverterImg from '@/画册素材库/产品素材/IGT-12KTA&IGT-17KTA.png';
import bgImage from '@/画册素材库/背景素材/画册-13-产品页左上角背景.png';
import { ProductImageEditor } from './ProductImageEditor';

export default function CatalogSpreadUZ13() {
  return (
    <div className="w-[420mm] h-[297mm] bg-white relative overflow-hidden shadow-sm flex">
      <div className="w-[210mm] h-full relative z-10">
        <div className="design-group-wrapper absolute left-0 top-0 w-[210mm] h-[144.834mm] bg-gray-200 overflow-hidden">
          <div className="design-group-label">场景图</div>
          <img src={bgImage} alt="Фоновое изображение сцены" className="w-full h-full object-cover" />
        </div>

        <div className="design-group-wrapper absolute left-[100.7mm] top-[106.84mm] w-[100.83mm] h-[93.22mm] z-10">
          <div className="design-group-label">产品图</div>
          <ProductImageEditor
            src={inverterImg}
            componentName="CatalogSpreadUZ13"
            initialX={13} /* IMAGE_TRANSFORM_X */
            initialY={-3} /* IMAGE_TRANSFORM_Y */
            initialScale={0.8} /* IMAGE_TRANSFORM_SCALE */
            defaultHeight="100%"
            defaultMarginLeft="0"
          />
        </div>

        <div className="design-group-wrapper absolute left-[20.9mm] top-[169.83mm] flex items-center z-10">
          <div className="design-group-label">功率徽标</div>
          <div className="bg-[#ED1651] h-[11.2mm] px-4 flex items-center justify-center rounded-l-md z-20">
            <span className="text-white font-bold text-[16pt]" style={{ fontFamily: '"Mark OT", sans-serif' }}>
              12~17kW
            </span>
          </div>
          <div className="bg-[#ACADB1] h-[11.2mm] px-4 flex items-center justify-center rounded-r-md -ml-2 pl-6 z-10">
            <span className="text-white font-bold text-[16pt]" style={{ fontFamily: '"Mark OT", sans-serif' }}>
              3Ф Сетевой
            </span>
          </div>
        </div>

        <div className="design-group-wrapper absolute left-[20.9mm] top-[188.44mm] z-10">
          <div className="design-group-label">Product Features 标题</div>
          <h2 className="text-[#ED1651] font-medium text-[31.621pt] leading-none tracking-tight" style={{ fontFamily: '"MiSans", sans-serif' }}>
            Особенности продукта
          </h2>
        </div>

        <div className="design-group-wrapper absolute left-[21.5mm] top-[205.5mm] w-[167.2mm] h-[0.4pt] bg-black z-10">
          <div className="design-group-label">标题下划线</div>
        </div>

        <div className="design-group-wrapper absolute left-[21.5mm] top-[211mm] w-[167.2mm] z-10">
          <div className="design-group-label">产品特性列表</div>
          <div className="grid grid-cols-2 gap-x-[10mm] gap-y-[6mm]">
            <div className="flex items-start gap-[4mm]">
              <div className="w-[9.46mm] h-[9.46mm] bg-[#ED1651] rounded-[2mm] shrink-0 mt-1"></div>
              <div className="flex flex-col gap-[1mm]">
                <h3 className="text-[#010202] font-medium text-[12pt]" style={{ fontFamily: '"MiSans", sans-serif' }}>
                  Высокая входная мощность PV
                </h3>
                <p className="text-[#5A5A5C] font-normal text-[8pt] leading-[1.4]" style={{ fontFamily: '"MiSans", sans-serif' }}>
                  2 трекера MPP и входная мощность PV
                  <br />
                  до 15600W/24100W
                </p>
              </div>
            </div>

            <div className="flex items-start gap-[4mm]">
              <div className="w-[9.46mm] h-[9.46mm] bg-[#ED1651] rounded-[2mm] shrink-0 mt-1"></div>
              <div className="flex flex-col gap-[1mm]">
                <h3 className="text-[#010202] font-medium text-[12pt]" style={{ fontFamily: '"MiSans", sans-serif' }}>
                  Высокая адаптируемость солнечных модулей
                </h3>
                <p className="text-[#5A5A5C] font-normal text-[8pt] leading-[1.4]" style={{ fontFamily: '"MiSans", sans-serif' }}>
                  Широкий диапазон входного напряжения и макс. входной ток MPPT
                  <br />
                  до 18A/30A. Поддержка солнечных модулей 182 и 210
                </p>
              </div>
            </div>

            <div className="flex items-start gap-[4mm]">
              <div className="w-[9.46mm] h-[9.46mm] bg-[#ED1651] rounded-[2mm] shrink-0 mt-1"></div>
              <div className="flex flex-col gap-[1mm]">
                <h3 className="text-[#010202] font-medium text-[12pt]" style={{ fontFamily: '"MiSans", sans-serif' }}>
                  Высокая эффективность
                </h3>
                <p className="text-[#5A5A5C] font-normal text-[8pt] leading-[1.4]" style={{ fontFamily: '"MiSans", sans-serif' }}>
                  Эффективность отслеживания MPP ≥99.9%
                  <br />
                  Макс. эффективность преобразования ≥98.7%
                  <br />
                  Европейская эффективность ≥98.2%
                </p>
              </div>
            </div>

            <div className="flex items-start gap-[4mm]">
              <div className="w-[9.46mm] h-[9.46mm] bg-[#ED1651] rounded-[2mm] shrink-0 mt-1"></div>
              <div className="flex flex-col gap-[1mm]">
                <h3 className="text-[#010202] font-medium text-[12pt]" style={{ fontFamily: '"MiSans", sans-serif' }}>
                  Надежное качество
                </h3>
                <p className="text-[#5A5A5C] font-normal text-[8pt] leading-[1.4]" style={{ fontFamily: '"MiSans", sans-serif' }}>
                  Конструкция со степенью защиты IP66 от пыли и влаги
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
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle w-1/2">Модель</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle w-1/4">IGT-12KTA</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle w-1/4">IGT-17KTA</td>
              </tr>
              <tr className="bg-[#cac9c8] text-[#231A16] font-bold text-left"><td colSpan={3} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">Эффективность</td></tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]"><td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Эффективность отслеживания MPP</td><td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">99.9%</td></tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]"><td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Макс. эффективность преобразования</td><td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">98.7%</td></tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]"><td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Европейская эффективность</td><td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">98.2%</td></tr>

              <tr className="bg-[#cac9c8] text-[#231A16] font-bold text-left"><td colSpan={3} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">PV-вход</td></tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]"><td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Макс. входная мощность PV (W)</td><td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">15600</td><td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">22100</td></tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]"><td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Макс. входное напряжение PV (V)</td><td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">1100</td></tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]"><td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Диапазон напряжения MPPT (V)</td><td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">180~1000</td></tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]"><td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Макс. входной ток (A)</td><td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">18/18</td><td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">18/30</td></tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]"><td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Количество MPPT</td><td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">2</td></tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]"><td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Макс. количество строк на MPPT</td><td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">1/1</td><td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">1/2</td></tr>

              <tr className="bg-[#cac9c8] text-[#231A16] font-bold text-left"><td colSpan={3} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">AC-выход (On-Grid)</td></tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]"><td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Номинальная выходная мощность (W)</td><td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">12000</td><td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">17000</td></tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]"><td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Макс. полная выходная мощность (VA)</td><td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">13200</td><td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">18700</td></tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]"><td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Номинальное выходное напряжение (Vac)</td><td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">230/400(3W+N+PE)</td></tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]"><td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Макс. выходной ток (A)</td><td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">20</td><td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">28.3</td></tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]"><td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Диапазон выходного напряжения (Vac)</td><td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">310~480</td></tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]"><td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Номинальная частота (Hz)</td><td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">50/60</td></tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]"><td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Диапазон выходной частоты</td><td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">45Hz~65Hz</td></tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]"><td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Коэффициент мощности</td><td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">0.99</td></tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]"><td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Диапазон регулировки коэффициента мощности</td><td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">0.8 Leading to 0.8 Lagging</td></tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]"><td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Полное гармоническое искажение тока</td><td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">&lt;2%</td></tr>

              <tr className="bg-[#cac9c8] text-[#231A16] font-bold text-left"><td colSpan={3} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">Общие</td></tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]"><td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Габариты (D*W*H, mm)</td><td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">204*450*427</td></tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]"><td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Вес нетто (kg)</td><td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">15.3</td><td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">18</td></tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]"><td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Диапазон рабочей температуры (°C)</td><td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">-25~+60, &gt;45°C Снижение мощности</td></tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]"><td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Макс. рабочая высота (m)</td><td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">4000, &gt;2000 Снижение мощности</td></tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]"><td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Связь</td><td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">WIFI/RS485</td></tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]"><td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Потребление энергии ночью (W)</td><td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">&lt;1</td></tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]"><td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Способ охлаждения</td><td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">Intelligent Fan Cooling</td></tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]"><td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Шум (dB)</td><td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">&lt;45</td></tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]"><td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Уровень сертификации</td><td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">IEC62109-1,IEC62109-2,IEC61683,IEC62116,IEC61727</td></tr>

              <tr className="bg-[#cac9c8] text-[#231A16] font-bold text-left"><td colSpan={3} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">Защита</td></tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]"><td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Степень защиты</td><td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">IP66</td></tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]"><td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Защита от обратной полярности PV</td><td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">Yes</td></tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]"><td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Обнаружение сопротивления изоляции</td><td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">Yes</td></tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]"><td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Контроль остаточного тока</td><td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">Yes</td></tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]"><td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Защита от перенапряжения</td><td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">Yes</td></tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]"><td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Защита от перегрузки</td><td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">Yes</td></tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]"><td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Защита от короткого замыкания</td><td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">Yes</td></tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]"><td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Защита от перегрева</td><td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">Yes</td></tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]"><td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Защита от импульсных перенапряжений</td><td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">DC: TYPE II,AC: TYPE III</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

