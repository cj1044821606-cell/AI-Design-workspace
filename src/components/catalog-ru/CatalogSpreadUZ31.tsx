import React from 'react';
import { ProductImageEditor } from './ProductImageEditor';
import bgImage from '@/画册素材库/背景素材/画册-31-产品页左上角背景.png';
import productImage from '@/画册素材库/产品素材/ІНY-30KH3S&IHY-50KH3S.png';

export default function CatalogSpreadUZ31() {
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
        <div className="design-group-wrapper absolute left-[85.7mm] top-[106.84mm] w-[110.83mm] h-[93.22mm] z-10">
          <div className="design-group-label">产品图</div>
          <ProductImageEditor 
            src={productImage} 
            componentName="CatalogSpreadUZ31"
            initialX={51} /* IMAGE_TRANSFORM_X */
            initialY={-75} /* IMAGE_TRANSFORM_Y */
            initialScale={0.7} /* IMAGE_TRANSFORM_SCALE */
            defaultHeight="100%"
            defaultMarginLeft="0"
          />
        </div>

        {/* 功率徽标 */}
        <div className="design-group-wrapper absolute left-[20.9mm] top-[165.83mm] flex items-center z-10">
          <div className="design-group-label">功率徽标</div>
          <div className="bg-[#ED1651] h-[11.2mm] px-4 flex items-center justify-center rounded-l-md z-20">
            <span className="text-white font-bold text-[16pt]" style={{ fontFamily: '"Mark OT", sans-serif' }}>30-50kW</span>
          </div>
          <div className="bg-[#b4b5b5] h-[11.2mm] px-4 flex items-center justify-center rounded-r-md -ml-1 z-10">
            <span className="text-white font-bold text-[16pt]" style={{ fontFamily: '"Mark OT", sans-serif' }}>Гибридный инвертор</span>
          </div>
        </div>

        {/* Product Features 标题 */}
        <div className="design-group-wrapper absolute left-[20.9mm] top-[179.44mm] z-10">
          <div className="design-group-label">Product Features 标题</div>
          <h2 className="text-[#ED1651] font-medium text-[31.621pt] leading-none tracking-tight" style={{ fontFamily: '"MiSans", sans-serif' }}>
            Особенности продукта
          </h2>
        </div>

        {/* 分隔线 */}
        <div className="design-group-wrapper absolute left-[21.5mm] top-[196.5mm] w-[188mm] h-[0.4pt] bg-black z-10">
          <div className="design-group-label">标题下划线</div>
        </div>

        {/* 特性列表 Grid */}
        <div className="design-group-wrapper absolute left-[21.5mm] top-[201.5mm] w-[188mm] z-10">
          <div className="design-group-label">产品特性列表</div>
          <div className="grid grid-cols-2 gap-x-[6mm] gap-y-[4mm]">
            {/* Feature 1 */}
            <div className="flex items-start gap-[4mm]">
              <div className="w-[9.46mm] h-[9.46mm] bg-[#ED1651] rounded-[2mm] shrink-0 mt-1"></div>
              <div className="flex flex-col gap-[1mm]">
                <h3 className="text-[#010202] font-medium text-[12pt]" style={{ fontFamily: '"MiSans", sans-serif' }}>
                  Максимальный сбор энергии
                </h3>
                <p className="text-[#5A5A5C] font-normal text-[8pt] leading-[1.3]" style={{ fontFamily: '"MiSans", sans-serif' }}>
                  100% Несбалансированный выпуск увеличивает собственное потребление<br/> 150A Зарядка/разрядка для эффективной передачи энергии<br/> 150-840V Сверхширокий диапазон напряжения аккумулятора<br/> 160% DC Увеличение размеров повышает эффективность,<br/> 20A PV Входной ток на строку, 4 MPPT трекеры
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start gap-[4mm]">
              <div className="w-[9.46mm] h-[9.46mm] bg-[#ED1651] rounded-[2mm] shrink-0 mt-1"></div>
              <div className="flex flex-col gap-[1mm]">
                <h3 className="text-[#010202] font-medium text-[12pt]" style={{ fontFamily: '"MiSans", sans-serif' }}>
                  Разработан для универсальности
                </h3>
                <p className="text-[#5A5A5C] font-normal text-[8pt] leading-[1.3]" style={{ fontFamily: '"MiSans", sans-serif' }}>
                  Макс. Параллельный номер (в сети) 10<br/> 150% Максимальное резервное копирование @10 с справляется с перегрузками<br/> IP66 защищает как внутри, так и снаружи<br/> Поддерживает полуволновую нагрузку
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start gap-[4mm]">
              <div className="w-[9.46mm] h-[9.46mm] bg-[#ED1651] rounded-[2mm] shrink-0 mt-1"></div>
              <div className="flex flex-col gap-[1mm]">
                <h3 className="text-[#010202] font-medium text-[12pt]" style={{ fontFamily: '"MiSans", sans-serif' }}>
                  Интеллектуальная энергетическая динамика
                </h3>
                <p className="text-[#5A5A5C] font-normal text-[8pt] leading-[1.3]" style={{ fontFamily: '"MiSans", sans-serif' }}>
                  Шесть режимов работы для разнообразного использования<br/> Поддерживает как TOU, так и стратегии динамического ценообразования<br/> для оптимизации энергопотребления и экономии затрат<br/> Поддерживает дизельные генераторы для разнообразных источников энергии
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex items-start gap-[4mm]">
              <div className="w-[9.46mm] h-[9.46mm] bg-[#ED1651] rounded-[2mm] shrink-0 mt-1"></div>
              <div className="flex flex-col gap-[1mm]">
                <h3 className="text-[#010202] font-medium text-[12pt]" style={{ fontFamily: '"MiSans", sans-serif' }}>
                  Упрощенное взаимодействие
                </h3>
                <p className="text-[#5A5A5C] font-normal text-[8pt] leading-[1.3]" style={{ fontFamily: '"MiSans", sans-serif' }}>
                  Удаленные обновления поддерживают работоспособность системы<br/> Быстрый ввод в эксплуатацию через Bluetooth<br/> Усовершенствованная платформа EMS для Peak Intelligent<br/> Энергетический менеджмент
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= 右页 ================= */}
      <div className="w-[210mm] h-full relative">
        <div className="design-group-wrapper absolute left-[38.151mm] top-[15.63mm] w-[150.099mm] z-10">
          <div className="design-group-label">参数表格</div>
          <table className="w-full border-collapse text-[5.5pt] text-center" style={{ fontFamily: '"Mark OT", sans-serif' }}>
            <tbody>
              {/* Header */}
              <tr className="bg-[#9e9e9e] text-white font-bold">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle w-1/3">Модель</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle w-1/3">IHY-30KH3S</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle w-1/3">IHY-50KH3S</td>
              </tr>

              {/* Efficiency */}
              <tr className="bg-[#cac9c8] text-[#231A16] font-bold">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left" colSpan={3}>Эффективность</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">MPPT Эффективность</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle" colSpan={2}>99.90%</td>
              </tr>

              {/* PV Input */}
              <tr className="bg-[#cac9c8] text-[#231A16] font-bold">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left" colSpan={3}>PV Ввод</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Макс. PV Входная мощность (Вт)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">45000</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">75000</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Макс. DC Входное напряжение (В)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle" colSpan={2}>1000</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Пусковое напряжение (В)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle" colSpan={2}>135</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">MPPT Диапазон напряжения (В)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle" colSpan={2}>200~950</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Макс. Входной ток (А)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle" colSpan={2}>40/40/40/40</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Количество MPPT</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle" colSpan={2}>4</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Количество строк на MPPT</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle" colSpan={2}>2</td>
              </tr>

              {/* AC Input */}
              <tr className="bg-[#cac9c8] text-[#231A16] font-bold">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left" colSpan={3}>AC Ввод</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Номинальное входное напряжение (В переменного тока)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle" colSpan={2}>220/380V; 230/400V(3L+N+PE)</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Макс. AC Входной ток (А)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">90.9</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">121.2</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Номинальная рабочая частота (Гц)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle" colSpan={2}>50/60</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Макс. Входная полная мощность (ВА)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">60000</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">80000</td>
              </tr>

              {/* AC Output */}
              <tr className="bg-[#cac9c8] text-[#231A16] font-bold">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left" colSpan={3}>AC Вывод</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Номинальная выходная мощность AC (Вт)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">30000</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">50000</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Макс. Выходная полная мощность (ВА)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">30000</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">50000</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Номинальное выходное напряжение AC (В AC)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle" colSpan={2}>220/380V; 230/400V(3L+N+PE)</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Макс. Выходной ток (А)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">45.5</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">75.8</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Полное гармоническое искажение тока</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle" colSpan={2}>&lt;3%</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Номинальная частота AC (Гц)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle" colSpan={2}>50/60</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Время переключения (мс)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle" colSpan={2}>&lt;20</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Impульсная мощность (ВА)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">45000</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">75000</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Возможность перегрузки</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle" colSpan={2}>110%&lt;Нагрузка≤150% @ 10 с</td>
              </tr>

              {/* Battery */}
              <tr className="bg-[#cac9c8] text-[#231A16] font-bold">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left" colSpan={3}>Аккумуляторы</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Тип батареи</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle" colSpan={2}>Литий-ионный</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Диапазон напряжения батареи (В)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle" colSpan={2}>150-840</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Количество батарейных входов</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle" colSpan={2}>1</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Макс. Ток заряда/разряда (А)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle" colSpan={2}>150/150</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Макс. Мощность заряда/разряда (Вт)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">30000/30000</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">50000/50000</td>
              </tr>

              {/* General */}
              <tr className="bg-[#cac9c8] text-[#231A16] font-bold">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left" colSpan={3}>Общий</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Габариты (Д*Ш*В, мм)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle" colSpan={2}>909*735*305</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Масса нетто (кг)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle" colSpan={2}>89</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Диапазон рабочих температур (°C))</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle" colSpan={2}>-30 ~ +60 (&gt;45°C Снижение мощности)</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Макс. Рабочая высота (м)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle" colSpan={2}>3000</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Коммуникация</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle" colSpan={2}>Wi-Fi/CAN/RS485/сухой контакт/LAN (дополнительно)</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Поддержка дизельных генераторов</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle" colSpan={2}>Да</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Поддержка интеллектуальной загрузки</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle" colSpan={2}>Да</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Параллельная возможность</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle" colSpan={2}>10</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Способ охлаждения</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle" colSpan={2}>Интеллектуальное вентиляторное охлаждение</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Шум (дБ)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle" colSpan={2}>&lt;65</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Уровень аутентификации</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle" colSpan={2}>IEC62109/IEC61000</td>
              </tr>

              {/* Protection */}
              <tr className="bg-[#cac9c8] text-[#231A16] font-bold">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left" colSpan={3}>Защита</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Степень защиты</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle" colSpan={2}>IP66</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Защита от перенапряжения</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle" colSpan={2}>Да</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Защита от перегрузки</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle" colSpan={2}>Да</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Защита от короткого замыкания</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle" colSpan={2}>Да</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Защита от перегрева</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle" colSpan={2}>Да</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Защита от перенапряжения</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle" colSpan={2}>DC: ТИП II; AC: ТИП III</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

