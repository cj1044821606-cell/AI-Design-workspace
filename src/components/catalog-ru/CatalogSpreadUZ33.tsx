import React from 'react';
import { ProductImageEditor } from './ProductImageEditor';
import bgImage from '@/画册素材库/背景素材/画册-33-产品页左上角背景.png';
import productImage from '@/画册素材库/产品素材/IPX-51314SPT.png';

export default function CatalogSpreadUZ33() {
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
            componentName="CatalogSpreadUZ33"
            initialX={10} /* IMAGE_TRANSFORM_X */
            initialY={-75} /* IMAGE_TRANSFORM_Y */
            initialScale={0.9} /* IMAGE_TRANSFORM_SCALE */
            defaultHeight="100%"
            defaultMarginLeft="0"
          />
        </div>

        {/* 功率徽标 */}
        <div className="design-group-wrapper absolute left-[20.9mm] top-[169.83mm] flex items-center z-10">
          <div className="design-group-label">功率徽标</div>
          <div className="bg-[#ED1651] h-[11.2mm] px-4 flex items-center justify-center rounded-l-md z-20">
            <span className="text-white font-bold text-[16pt]" style={{ fontFamily: '"Mark OT", sans-serif' }}>16kWh</span>
          </div>
          <div className="bg-[#b4b4b5] h-[11.2mm] px-4 flex items-center justify-center rounded-r-md z-10 -ml-1">
            <span className="text-white font-bold text-[16pt]" style={{ fontFamily: '"Mark OT", sans-serif' }}>Батарея высокого напряжения</span>
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
          <div className="grid grid-cols-2 gap-x-[10mm] gap-y-[4mm]">
            {/* Feature 1 */}
            <div className="flex items-start gap-[4mm]">
              <div className="w-[9.46mm] h-[9.46mm] bg-[#ED1651] rounded-[2mm] shrink-0 mt-1"></div>
              <div className="flex flex-col gap-[1mm]">
                <h3 className="text-[#010202] font-medium text-[12pt]" style={{ fontFamily: '"MiSans", sans-serif' }}>
                  &gt;6000
                </h3>
                <p className="text-[#5A5A5C] font-normal text-[8pt] leading-[1.3]" style={{ fontFamily: '"MiSans", sans-serif' }}>
                  Цикл жизни@25°C
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start gap-[4mm]">
              <div className="w-[9.46mm] h-[9.46mm] bg-[#ED1651] rounded-[2mm] shrink-0 mt-1"></div>
              <div className="flex flex-col gap-[1mm]">
                <h3 className="text-[#010202] font-medium text-[12pt]" style={{ fontFamily: '"MiSans", sans-serif' }}>
                  Автоматическое пробуждение
                </h3>
                <p className="text-[#5A5A5C] font-normal text-[8pt] leading-[1.3]" style={{ fontFamily: '"MiSans", sans-serif' }}>
                  В среде автономной системы
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start gap-[4mm]">
              <div className="w-[9.46mm] h-[9.46mm] bg-[#ED1651] rounded-[2mm] shrink-0 mt-1"></div>
              <div className="flex flex-col gap-[1mm]">
                <h3 className="text-[#010202] font-medium text-[12pt]" style={{ fontFamily: '"MiSans", sans-serif' }}>
                  Множественная защита безопасности
                </h3>
                <p className="text-[#5A5A5C] font-normal text-[8pt] leading-[1.3]" style={{ fontFamily: '"MiSans", sans-serif' }}>
                  Реле, Предохранитель
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex items-start gap-[4mm]">
              <div className="w-[9.46mm] h-[9.46mm] bg-[#ED1651] rounded-[2mm] shrink-0 mt-1"></div>
              <div className="flex flex-col gap-[1mm]">
                <h3 className="text-[#010202] font-medium text-[12pt]" style={{ fontFamily: '"MiSans", sans-serif' }}>
                  Поддерживает подключение<br/>новых и старых батарей.
                </h3>
                <p className="text-[#5A5A5C] font-normal text-[8pt] leading-[1.3]" style={{ fontFamily: '"MiSans", sans-serif' }}>
                  Подключено параллельно
                </p>
              </div>
            </div>

            {/* Feature 5 */}
            <div className="flex items-start gap-[4mm]">
              <div className="w-[9.46mm] h-[9.46mm] bg-[#ED1651] rounded-[2mm] shrink-0 mt-1"></div>
              <div className="flex flex-col gap-[1mm]">
                <h3 className="text-[#010202] font-medium text-[12pt]" style={{ fontFamily: '"MiSans", sans-serif' }}>
                  Умный BMS
                </h3>
                <p className="text-[#5A5A5C] font-normal text-[8pt] leading-[1.3]" style={{ fontFamily: '"MiSans", sans-serif' }}>
                  Интеллектуальное управление &<br/> Обслуживание аккумуляторных систем
                </p>
              </div>
            </div>

            {/* Feature 6 */}
            <div className="flex items-start gap-[4mm]">
              <div className="w-[9.46mm] h-[9.46mm] bg-[#ED1651] rounded-[2mm] shrink-0 mt-1"></div>
              <div className="flex flex-col gap-[1mm]">
                <h3 className="text-[#010202] font-medium text-[12pt]" style={{ fontFamily: '"MiSans", sans-serif' }}>
                  Удаленный мониторинг
                </h3>
                <p className="text-[#5A5A5C] font-normal text-[8pt] leading-[1.3]" style={{ fontFamily: '"MiSans", sans-serif' }}>
                  Мониторинг потребления электроэнергии в режиме реального времени<br/> и эксплуатация оборудования
                </p>
              </div>
            </div>

            {/* Feature 7 */}
            <div className="flex items-start gap-[4mm]">
              <div className="w-[9.46mm] h-[9.46mm] bg-[#ED1651] rounded-[2mm] shrink-0 mt-1"></div>
              <div className="flex flex-col gap-[1mm]">
                <h3 className="text-[#010202] font-medium text-[12pt]" style={{ fontFamily: '"MiSans", sans-serif' }}>
                  Параллельно и последовательно
                </h3>
                <p className="text-[#5A5A5C] font-normal text-[8pt] leading-[1.3]" style={{ fontFamily: '"MiSans", sans-serif' }}>
                  Адаптация к последовательному или параллельному соединению
                </p>
              </div>
            </div>

            {/* Feature 8 */}
            <div className="flex items-start gap-[4mm]">
              <div className="w-[9.46mm] h-[9.46mm] bg-[#ED1651] rounded-[2mm] shrink-0 mt-1"></div>
              <div className="flex flex-col gap-[1mm]">
                <h3 className="text-[#010202] font-medium text-[12pt]" style={{ fontFamily: '"MiSans", sans-serif' }}>
                  Балансировка напряжения
                </h3>
                <p className="text-[#5A5A5C] font-normal text-[8pt] leading-[1.3]" style={{ fontFamily: '"MiSans", sans-serif' }}>
                  Балансировка напряжения между<br/> Аккумуляторные элементы и аккумуляторный блок
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
          <table className="w-full border-collapse text-[6pt] text-center" style={{ fontFamily: '"Mark OT", sans-serif' }}>
            <tbody>
              {/* Header */}
              <tr className="bg-[#9e9e9e] text-white font-bold">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle w-1/2">Модель</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle w-1/2">IPX-51314SPT</td>
              </tr>

              {/* Battery */}
              <tr className="bg-[#cac9c8] text-[#231A16] font-bold text-left">
                <td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">Аккумуляторы</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Общая энергия*</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">16.076kWh</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Полезная энергия(DC)*</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">14.5kWh</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Емкость</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">314Ah</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Номинальная мощность отключения/заряда</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">10.2kW</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Пиковая мощность (только разряд)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">10.6kW в течение 3 секунд</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Напряжение</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">48~56Vd.c</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Номинальное напряжение</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">51.2Vd.c</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Номинальный ток</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">200A</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Макс. Напряжение заряда</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">57.6Vd.c</td>
              </tr>

              {/* General Data */}
              <tr className="bg-[#cac9c8] text-[#231A16] font-bold text-left">
                <td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">Общие данные</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Масса</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">116kg</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Размер(Д*Ш*В)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">855*450*235 mm</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Макс.Рекомендуется DOD</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">90%</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Условия эксплуатации</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">Крытый</td>
              </tr>
              
              {/* 参数表格 */}
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left w-[50%] p-0">
                  <table className="w-full h-full border-collapse">
                    <tbody>
                      <tr>
                        <td className="border-r-[0.368pt] border-white px-[2mm] align-middle w-1/2" rowSpan={2}>
                          Рабочая<br/>Температура
                        </td>
                        <td className="border-b-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-center w-1/2">Заряжать</td>
                      </tr>
                      <tr>
                        <td className="h-[4.551mm] px-[2mm] align-middle text-center">Увольнять</td>
                      </tr>
                    </tbody>
                  </table>
                </td>
                <td className="border-[0.368pt] border-white h-[4.551mm] align-middle p-0">
                  <table className="w-full h-full border-collapse">
                    <tbody>
                      <tr>
                        <td className="border-b-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">0~55°C</td>
                      </tr>
                      <tr>
                        <td className="h-[4.551mm] px-[2mm] align-middle">-10~55°C</td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>

              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Диапазон частот Wi-Fi</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">2.4GMHz</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Рекомендуемая влажность</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">&lt;60% (без конденсата)</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Тип охлаждения</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">Естественное охлаждение</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Материал корпуса</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">Металл</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Цвет</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">Белый</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Установка</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">Монтаж в стойке/наземная установка</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Гарантия</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">10 лет</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Коммуникация</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">CAN/ RS485</td>
              </tr>

              {/* Protection */}
              <tr className="bg-[#cac9c8] text-[#231A16] font-bold text-left">
                <td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">Защита</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Категория перенапряжения</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">II</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">IP-рейтинг</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">IP 20</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Защитный класс</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">I</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Макс. Номер подключения</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">16P/12S</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Режим защиты</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">Двойная аппаратная защита</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Защита аккумулятора</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">Перегрузка по току/перенапряжение/короткое замыкание/пониженное напряжение/перегрев</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Безопасность</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">CE</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Классификация опасных материалов</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">9</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Транспорт</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">UN 38.3</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

