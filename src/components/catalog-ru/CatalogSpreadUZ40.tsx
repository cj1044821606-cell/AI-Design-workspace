import React from 'react';
import bgImage from '@/画册素材库/背景素材/画册-40-PV产品页背景.png';

export default function CatalogSpreadUZ40() {
  return (
    <div className="w-[420mm] h-[297mm] bg-white relative overflow-hidden shadow-sm flex">
      {/* 背景图(閾烘弧鏁翠釜鐢诲竷) */}
      <div className="design-group-wrapper absolute left-0 top-0 w-[420mm] h-[297mm] z-0">
        <div className="design-group-label">背景图</div>
        <img
          src={bgImage}
          alt="PV Product Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* ================= 左页 (0-210mm) ================= */}
      <div className="w-[210mm] h-full relative z-10">
        {/* 品牌红线段 */}
        <div className="design-group-wrapper absolute left-[22.429mm] top-[15.316mm] w-[173mm] h-[0.553mm] bg-[#ED1651] z-10">
          <div className="design-group-label">顶部红线</div>
        </div>

        {/* 大标题*/}
        <div className="design-group-wrapper absolute left-[26mm] top-[20mm] z-10">
          <div className="design-group-label">大标题</div>
          <h1 className="text-[#ED1651] text-[28pt] font-bold leading-none" style={{ fontFamily: '"Mark OT", sans-serif' }}>
            PV-модули-620/N
          </h1>
        </div>

        {/* 附加说明鏂囨湰 */}
        <div className="design-group-wrapper absolute left-[26mm] top-[32mm] z-10">
          <div className="design-group-label">附加说明</div>
          <p className="text-[#010202] text-[12pt] font-normal leading-none" style={{ fontFamily: '"MiSans", sans-serif' }}>
            Двусторонний N-тип
          </p>
        </div>

        {/* 功率徽标 */}
        <div className="design-group-wrapper absolute left-[20.9mm] top-[170mm] flex items-center z-10">
          <div className="design-group-label">功率徽标</div>
          <div className="bg-[#ED1651] h-[11.2mm] px-4 flex items-center justify-center rounded-l-md z-20">
            <span className="text-white font-bold text-[16pt]" style={{ fontFamily: '"Mark OT", sans-serif' }}>620W</span>
          </div>
          <div className="bg-[#ACADB1] h-[11.2mm] px-4 flex items-center justify-center rounded-r-md -ml-2 pl-6 z-10">
            <span className="text-white font-bold text-[16pt]" style={{ fontFamily: '"Mark OT", sans-serif' }}>182*105mm</span>
          </div>
        </div>

        {/* Product Features 标题 */}
        <div className="design-group-wrapper absolute left-[20.9mm] top-[184mm] z-10">
          <div className="design-group-label">Product Features 标题</div>
          <h2 className="text-[#ED1651] font-medium text-[31.621pt] leading-none tracking-tight" style={{ fontFamily: '"MiSans", sans-serif' }}>
            Особенности продукта
          </h2>
        </div>

        {/* 分隔线 */}
        <div className="design-group-wrapper absolute left-[21.5mm] top-[197.5mm] w-[186mm] h-[0.4pt] bg-black z-10">
          <div className="design-group-label">标题下划线</div>
        </div>

        {/* 特性列表 Grid */}
        <div className="design-group-wrapper absolute left-[21.5mm] top-[201.5mm] w-[186mm] z-10">
          <div className="design-group-label">产品特性列表</div>
          <div className="grid grid-cols-2 gap-x-[6mm] gap-y-[2.5mm]">
            <div className="flex items-start gap-[4mm]">
              <div className="w-[9.46mm] h-[9.46mm] bg-[#ED1651] rounded-[2mm] shrink-0 mt-1"></div>
              <div className="flex flex-col gap-[0.5mm]">
                <h3 className="text-[#010202] font-medium text-[12pt] leading-tight" style={{ fontFamily: '"MiSans", sans-serif' }}>Более высокая выходная мощность</h3>
                <p className="text-[#5A5A5C] font-normal text-[8pt] leading-tight" style={{ fontFamily: '"MiSans", sans-serif' }}>
                  Мощность модуля увеличивается на 5-25% Обычно<br /> Значительно снизить LCOE и повысить IRR.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-[4mm]">
              <div className="w-[9.46mm] h-[9.46mm] bg-[#ED1651] rounded-[2mm] shrink-0 mt-1"></div>
              <div className="flex flex-col gap-[0.5mm]">
                <h3 className="text-[#010202] font-medium text-[12pt] leading-tight" style={{ fontFamily: '"MiSans", sans-serif' }}>
                  Устойчивость к экстремальным воздействиям<br /> Условия окружающей среды
                </h3>
                <p className="text-[#5A5A5C] font-normal text-[8pt] leading-tight" style={{ fontFamily: '"MiSans", sans-serif' }}>
                  Высокая устойчивость к солевому туману и аммиаку, сертифицированная<br /> ТЮФ НОРД
                </p>
              </div>
            </div>

            <div className="flex items-start gap-[4mm]">
              <div className="w-[9.46mm] h-[9.46mm] bg-[#ED1651] rounded-[2mm] shrink-0 mt-1"></div>
              <div className="flex flex-col gap-[0.5mm]">
                <h3 className="text-[#010202] font-medium text-[12pt] leading-tight" style={{ fontFamily: '"MiSans", sans-serif' }}>Производительность при слабом освещении</h3>
                <p className="text-[#5A5A5C] font-normal text-[8pt] leading-tight" style={{ fontFamily: '"MiSans", sans-serif' }}>
                  Отличная производительность при слабом освещении.<br /> За счет улучшения коэффициента использования оптической энергии мощность увеличивается на 2~3%<br /> и эффективность увеличивается на 0,4~0.6%
                </p>
              </div>
            </div>

            <div className="flex items-start gap-[4mm]">
              <div className="w-[9.46mm] h-[9.46mm] bg-[#ED1651] rounded-[2mm] shrink-0 mt-1"></div>
              <div className="flex flex-col gap-[0.5mm]">
                <h3 className="text-[#010202] font-medium text-[12pt] leading-tight" style={{ fontFamily: '"MiSans", sans-serif' }}>Сопротивление ПИД</h3>
                <p className="text-[#5A5A5C] font-normal text-[8pt] leading-tight" style={{ fontFamily: '"MiSans", sans-serif' }}>
                  Гарантия отличной работы Anti-PID через<br /> Оптимизированный процесс массового производства и контроль материалов
                </p>
              </div>
            </div>

            <div className="flex items-start gap-[4mm]">
              <div className="w-[9.46mm] h-[9.46mm] bg-[#ED1651] rounded-[2mm] shrink-0 mt-1"></div>
              <div className="flex flex-col gap-[0.5mm]">
                <h3 className="text-[#010202] font-medium text-[12pt] leading-tight" style={{ fontFamily: '"MiSans", sans-serif' }}>Технология нескольких шин</h3>
                <p className="text-[#5A5A5C] font-normal text-[8pt] leading-tight" style={{ fontFamily: '"MiSans", sans-serif' }}>
                  0-5W Гарантия на выход с положительным допуском
                </p>
              </div>
            </div>

            <div className="flex items-start gap-[4mm]">
              <div className="w-[9.46mm] h-[9.46mm] bg-[#ED1651] rounded-[2mm] shrink-0 mt-1"></div>
              <div className="flex flex-col gap-[0.5mm]">
                <h3 className="text-[#010202] font-medium text-[12pt] leading-tight" style={{ fontFamily: '"MiSans", sans-serif' }}>EL Полная проверка</h3>
                <p className="text-[#5A5A5C] font-normal text-[8pt] leading-tight" style={{ fontFamily: '"MiSans", sans-serif' }}>
                  Двухэтапная проверка 100% EL
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= 右页 (210-420mm) ================= */}
      <div className="w-[210mm] h-full relative z-10">
        <div className="design-group-wrapper absolute left-[38.151mm] top-[15.63mm] w-[150.099mm] z-10">
          <div className="design-group-label">参数表格</div>
          <table className="w-full border-collapse text-[6pt] text-center" style={{ fontFamily: '"Mark OT", sans-serif' }}>
            <colgroup>
              <col style={{ width: '60mm' }} />
              <col style={{ width: '30mm' }} />
              <col style={{ width: '30mm' }} />
              <col style={{ width: '30mm' }} />
            </colgroup>
            <tbody>
              <tr className="bg-[#9e9e9e] text-white font-bold">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">Тип модуля</td>
                <td colSpan={3} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">ISP-620W-G1</td>
              </tr>

              <tr className="bg-[#cac9c8] text-[#231A16] font-bold text-left">
                <td colSpan={4} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">Электрические параметры производительности</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Условия испытания</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">STC</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">NMOT</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">BNPI</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Номинальная пиковая мощность - Pmax (Вт)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">620</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">472.5</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">685.2</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Макс. Напряжение питания - Vmp (В)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">41.40</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">39.00</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">41.60</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Макс. Силовой ток - имп (А)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">14.99</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">12.10</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">16.47</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Напряжение разомкнутой цепи - Voc (В)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">49,60&plusmn;3%</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">47,20&plusmn;3%</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">49,80&plusmn;3%</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Ток короткого замыкания - Isc (А)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">15,91&plusmn;3%</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">12,83&plusmn;3%</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">17.50&plusmn;3%</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Эффективность модуля (%)</td>
                <td colSpan={3} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">22.95</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td colSpan={4} className="border-[0.368pt] border-white py-[2mm] px-[2mm] align-middle text-left leading-tight text-[5pt]">
                  STC - Освещенность 1000W/м², температура ячейки. 25°C, воздушная масса AM 1,5<br /> NMOT - Освещенность 800W/м², темп. 20°C, воздушная масса AM 1,5, скорость ветра 1m/с<br /> BNPI - Облученность 1000 W/м², обратная освещенность 135 W/м², температура ячейки 25°C, воздушная масса AM 1,5
                </td>
              </tr>

              <tr className="bg-[#cac9c8] text-[#231A16] font-bold text-left">
                <td colSpan={4} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">Рабочие параметры</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Макс. Напряжение системы (В постоянного тока)</td>
                <td colSpan={3} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">1500</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Рабочая температура (°C)</td>
                <td colSpan={3} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">-40~+85</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Макс. Номинал предохранителя серии (А)</td>
                <td colSpan={3} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">30</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Номинальная рабочая температура модуля (°C)</td>
                <td colSpan={3} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">45卤2</td>
              </tr>

              <tr className="bg-[#cac9c8] text-[#231A16] font-bold text-left">
                <td colSpan={4} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">Температурный коэффициент</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Температурный коэффициент Pmax</td>
                <td colSpan={3} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">-0.290%/°C</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Температурный коэффициент Voc</td>
                <td colSpan={3} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">-0.240%/°C</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Температурный коэффициент Isc</td>
                <td colSpan={3} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">+0.040%/°C</td>
              </tr>

              <tr className="bg-[#cac9c8] text-[#231A16] font-bold text-left">
                <td colSpan={4} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">Механические характеристики</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Тип ячейки (мм)</td>
                <td colSpan={3} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">182*105 Н - TOPCon Моно</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Количество ячеек</td>
                <td colSpan={3} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">132 (6*11+6*11)</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Размеры модуля (В*Ш*Г, мм)</td>
                <td colSpan={3} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">2382*1134*30</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Вес (кг)</td>
                <td colSpan={3} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">33.5</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Двустороннее стекло Переднее стекло (мм)</td>
                <td colSpan={3} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">2.0 AR Покрытие из закаленного стекла</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Двустороннее стекло Заднее стекло (мм)</td>
                <td colSpan={3} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">2.0 Глазурованное стекло</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Рамка</td>
                <td colSpan={3} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">Анодированный алюминиевый сплав</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Распределительная коробка</td>
                <td colSpan={3} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">IP68, 1500Vdc, 3 обходных диода Шоттки</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Кабели</td>
                <td colSpan={3} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-[5pt]">4.0mm虏 Положительный (+): 300mm, отрицательный (-): 200mm, или длина по индивидуальному заказу.</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Разъем</td>
                <td colSpan={3} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">MC4</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Снежная нагрузка/Ветровая нагрузка</td>
                <td colSpan={3} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">5400Pa/2400Pa</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Класс безопасности Защита</td>
                <td colSpan={3} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">Класс II</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Класс огнестойкости компонентов IEC</td>
                <td colSpan={3} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">Класс С</td>
              </tr>

              <tr className="bg-[#cac9c8] text-[#231A16] font-bold text-left">
                <td colSpan={4} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">Стандартная упаковка 40 футов (штаб-квартира)</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Количество модулей на поддоне</td>
                <td colSpan={3} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">37</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Количество поддонов в контейнере</td>
                <td colSpan={3} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">20</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Количество модулей в контейнере</td>
                <td colSpan={3} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">740</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

