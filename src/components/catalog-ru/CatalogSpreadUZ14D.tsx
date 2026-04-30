import React from 'react';
import inverterImg from '@/画册素材库/产品素材/IGT-330KT-G1 & IGT-350KT-G1.png';
import bgImage from '@/画册素材库/背景素材/画册-IGT-330KT-G1 & IGT-350KT-G1-产品页左上角背景.png';
import { ProductImageEditor } from './ProductImageEditor';

export default function CatalogSpreadUZ14D() {
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
          <ProductImageEditor src={inverterImg} componentName="CatalogSpreadUZ14D" initialX={0} /* IMAGE_TRANSFORM_X */ initialY={-44} /* IMAGE_TRANSFORM_Y */ initialScale={0.95} /* IMAGE_TRANSFORM_SCALE */ defaultHeight="100%" defaultMarginLeft="0" />
        </div>

        {/* 功率徽标 */}
        <div className="design-group-wrapper absolute left-[20.9mm] top-[169.83mm] flex items-center z-10">
          <div className="design-group-label">功率徽标</div>
          <div className="bg-[#ED1651] h-[11.2mm] px-4 flex items-center justify-center rounded-l-md z-20">
            <span className="text-white font-bold text-[16pt]" style={{ fontFamily: '"Mark OT", sans-serif' }}>330kW/350kW</span>
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
        <div className="design-group-wrapper absolute left-[21.5mm] top-[203.5mm] w-[180mm] h-[0.4pt] bg-black z-10">
          <div className="design-group-label">标题下划线</div>
        </div>

        {/* 特性列表 Grid */}
        <div className="design-group-wrapper absolute left-[21.5mm] top-[207mm] w-[180mm] z-10">
          <div className="design-group-label">产品特性列表</div>
          <div className="grid grid-cols-2 gap-x-[8mm] gap-y-[4mm]">
            
            {/* Feature 1: High Efficiency */}
            <div className="flex items-start gap-[4mm]">
              <div className="w-[9.46mm] h-[9.46mm] bg-[#ED1651] rounded-[2mm] shrink-0 mt-1"></div>
              <div className="flex flex-col gap-[1mm]">
                <h3 className="text-[#010202] font-medium text-[12pt]" style={{ fontFamily: '"MiSans", sans-serif' }}>Высокая эффективность</h3>
                <p className="text-[#5A5A5C] font-normal text-[8pt] leading-[1.25]" style={{ fontFamily: '"MiSans", sans-serif' }}>
                  Макс. Эффективность до 99.80%, эффективность ЕС до 98.80%<br/> Выходная мощность до 350kW с 6 MPPT с, 75A на MPPT<br/> Макс. 30 струн, совместимы с модулями PV серий 182 и 210.
                </p>
              </div>
            </div>

            {/* Feature 2: Smart */}
            <div className="flex items-start gap-[4mm]">
              <div className="w-[9.46mm] h-[9.46mm] bg-[#ED1651] rounded-[2mm] shrink-0 mt-1"></div>
              <div className="flex flex-col gap-[1mm]">
                <h3 className="text-[#010202] font-medium text-[12pt]" style={{ fontFamily: '"MiSans", sans-serif' }}>Умный</h3>
                <p className="text-[#5A5A5C] font-normal text-[8pt] leading-[1.25]" style={{ fontFamily: '"MiSans", sans-serif' }}>
                  Поддерживает сканирование ВАХ для точного выявления аномалий струн<br/> Адаптивный SBF и SBR, интеллектуальный вентилятор с самоочисткой<br/> Прогноз неисправностей и анализ дискретности, онлайн-управление заказами на техническое обслуживание
                </p>
              </div>
            </div>

            {/* Feature 3: Safe & Reliable */}
            <div className="flex items-start gap-[4mm]">
              <div className="w-[9.46mm] h-[9.46mm] bg-[#ED1651] rounded-[2mm] shrink-0 mt-1"></div>
              <div className="flex flex-col gap-[1mm]">
                <h3 className="text-[#010202] font-medium text-[12pt]" style={{ fontFamily: '"MiSans", sans-serif' }}>Безопасный и надежный</h3>
                <p className="text-[#5A5A5C] font-normal text-[8pt] leading-[1.25]" style={{ fontFamily: '"MiSans", sans-serif' }}>
                  Интеллектуальное обнаружение на уровне соединителя, интеллектуальное отключение переключателя DC<br/> Интеллектуальное обнаружение на уровне терминала, автоматическая защита безопасности на стороне AC<br/> IP65 Степень защиты, антикоррозийный корпус C5-M<br/> Интеллектуальный AFCI снижает риск пожара
                </p>
              </div>
            </div>

            {/* Feature 4: Economical & Cost-Saving */}
            <div className="flex items-start gap-[4mm]">
              <div className="w-[9.46mm] h-[9.46mm] bg-[#ED1651] rounded-[2mm] shrink-0 mt-1"></div>
              <div className="flex flex-col gap-[1mm]">
                <h3 className="text-[#010202] font-medium text-[12pt]" style={{ fontFamily: '"MiSans", sans-serif' }}>Экономичный и экономичный</h3>
                <p className="text-[#5A5A5C] font-normal text-[8pt] leading-[1.25]" style={{ fontFamily: '"MiSans", sans-serif' }}>
                  Совместимость со слабыми электросетями: SCR~1.1<br/> Более высокое качество электроэнергии, THDi &lt; 1.5%<br/> Более короткое время отклика по питанию: активные &lt; 60m с, реактивные &lt; 30m с<br/> Функция Q в ночное время, автоматическое управление реактивной мощностью
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
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle w-1/3">Модель</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle w-1/3">IGT-330KT-G1</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle w-1/3">IGT-350KT-G1</td>
              </tr>

              {/* PV Input */}
              <tr className="bg-[#cac9c8] text-[#231A16] font-bold text-left">
                <td colSpan={3} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">PV Ввод</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Макс. PV Входная мощность (кВт)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">480</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">500</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Макс. PV Входное напряжение (В)</td>
                <td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">1500</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Номинальное входное напряжение PV (В)</td>
                <td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">1080</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Пусковое напряжение (В)</td>
                <td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">520</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">MPPT Диапазон напряжения (В)</td>
                <td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">500-1500</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Макс. PV Входной ток (А)</td>
                <td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">6*75</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Макс. Ток короткого замыкания (А)</td>
                <td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">6*125</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">MPPT Число/Макс. Число входных строк</td>
                <td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">6/30</td>
              </tr>

              {/* AC Output */}
              <tr className="bg-[#cac9c8] text-[#231A16] font-bold text-left">
                <td colSpan={3} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">AC Вывод</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Номинальная выходная мощность (кВт)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">330</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">350</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Макс. Полная выходная мощность (кВА)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">330</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">350</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Номинальный выходной ток (А)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">238</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">254</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Номинальное выходное напряжение (В)</td>
                <td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">800, 3L/PE</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Номинальная выходная частота/диапазон частот (Гц)</td>
                <td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">50/60 (卤5)</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Коэффициент мощности</td>
                <td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">&gt;0,99 (от 0,8 опережающего до 0,8 отстающего)</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">THDi</td>
                <td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">&lt;1.5%</td>
              </tr>

              {/* Efficiency */}
              <tr className="bg-[#cac9c8] text-[#231A16] font-bold text-left">
                <td colSpan={3} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">Эффективность</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">MPPT Эффективность</td>
                <td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">99.80%</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Макс. Эффективность</td>
                <td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">99.08%</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Эффективность ЕС</td>
                <td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">98.80%</td>
              </tr>

              {/* General */}
              <tr className="bg-[#cac9c8] text-[#231A16] font-bold text-left">
                <td colSpan={3} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">Общий</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Размеры (Ш*В*Г мм)</td>
                <td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">1128*808*351</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Топология</td>
                <td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">Бестрансформаторный</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Вес (кг)</td>
                <td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">≤115</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Диапазон рабочих температур (°C)</td>
                <td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">-30~+60</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Относительная влажность</td>
                <td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">0-100%</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Макс. Рабочая высота (м)</td>
                <td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">5000 (снижение характеристик выше 4000)</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Способ охлаждения</td>
                <td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">Умное вентиляторное охлаждение</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Самопотребление (ночное время, Вт)</td>
                <td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">&lt;6</td>
              </tr>

              {/* Protection */}
              <tr className="bg-[#cac9c8] text-[#231A16] font-bold text-left">
                <td colSpan={3} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">Защита</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Степень защиты</td>
                <td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">IP65</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Антикоррозионная степень</td>
                <td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">C5-M</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">DC Переключатель</td>
                <td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">Да</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">DC Защита от обратной полярности</td>
                <td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">Да</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Строковый мониторинг</td>
                <td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">Да</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Обнаружение сопротивления изоляции</td>
                <td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">Да</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Обнаружение остаточного тока утечки</td>
                <td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">Да</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Мониторинг замыканий на землю</td>
                <td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">Да</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Защита от короткого замыкания</td>
                <td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">Да</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Защита от изолирования</td>
                <td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">Да</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">DC/AC Защита от перенапряжения</td>
                <td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">DC: Тип II; AC: Тип II</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Восстановление ПИД-регулятора</td>
                <td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">Необязательный</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">DC Защита цепи от дугового замыкания</td>
                <td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">Необязательный</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Сканирование кривой I/V</td>
                <td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">Да</td>
              </tr>

              {/* Communication */}
              <tr className="bg-[#cac9c8] text-[#231A16] font-bold text-left">
                <td colSpan={3} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">Коммуникация</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Отображать</td>
                <td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">Светодиод + Bluetooth + приложение</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Коммуникация</td>
                <td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">RS485/ПЛК/Wi-Fi (дополнительно)/4G (дополнительно)</td>
              </tr>

              {/* Certification */}
              <tr className="bg-[#cac9c8] text-[#231A16] font-bold text-left">
                <td colSpan={3} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">Сертификация</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Стандарты сетки</td>
                <td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-[5pt] leading-tight">EN 50549-1, IEC 61727/62116, IEC 61683, IEC 60068, IEEE1547, UL1741, VDE 4105</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Безопасность/ЭМС</td>
                <td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-[5pt] leading-tight">IEC/EN 62109-1/2, EN IEC 61000-6-2/4, EN IEC 61000-3-11/12</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

