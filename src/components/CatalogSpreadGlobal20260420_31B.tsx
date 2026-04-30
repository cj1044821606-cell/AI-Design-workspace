import React from 'react';
import { ProductImageEditor } from './ProductImageEditor';
import bgImage from '@/画册素材库/背景素材/画册-IHY-75KH3-G1系列-产品页背景.jpg';
import productImage from '@/画册素材库/产品素材/IHY-75KH3-G1&IHY-100KH3-G1&IHY-125KH3-G1.png';

const models = ['IHY-75KH3-G1', 'IHY-100KH3-G1', 'IHY-125KH3-G1'];

type TableRow =
  | { kind: 'section'; label: string }
  | { kind: 'row'; label: string; values: string[]; compact?: boolean };

const rows: TableRow[] = [
  { kind: 'section', label: 'Efficiency' },
  { kind: 'row', label: 'MPPT Efficiency', values: ['99.90%'] },
  { kind: 'row', label: 'Max. Efficiency', values: ['98.10%'] },
  { kind: 'row', label: 'EU Efficiency', values: ['97.50%', '97.60%', '97.60%'] },

  { kind: 'section', label: 'PV Side' },
  { kind: 'row', label: 'Max. PV Array Power (kWp)', values: ['150', '200', '250'] },
  { kind: 'row', label: 'Max. PV Input Voltage (V)*', values: ['1000*'] },
  { kind: 'row', label: 'Rated PV Input Voltage (V)', values: ['620'] },
  { kind: 'row', label: 'Start-up Voltage (V)', values: ['180'] },
  { kind: 'row', label: 'MPPT Operating Voltage Range (V)*', values: ['160-950*'] },
  { kind: 'row', label: 'Number of MPPT Trackers', values: ['6'] },
  { kind: 'row', label: 'Number of Strings per MPPT', values: ['3'] },
  { kind: 'row', label: 'Max. Input Current per MPPT (A)', values: ['6 x 48'] },
  { kind: 'row', label: 'Max. Short Circuit Current per MPPT (A)', values: ['6 x 60'] },

  { kind: 'section', label: 'Battery Side' },
  { kind: 'row', label: 'Battery Type', values: ['Lithium-ion'] },
  { kind: 'row', label: 'Battery Voltage Range (V)', values: ['300-950'] },
  { kind: 'row', label: 'Number of Battery Input', values: ['2'] },
  { kind: 'row', label: 'Max. Charge/Discharge Current (A)', values: ['150+150'] },
  { kind: 'row', label: 'Max. Charge/Discharge Power (kW)', values: ['75/75', '100/100', '125/125'] },

  { kind: 'section', label: 'Grid Side (On-Grid)' },
  { kind: 'row', label: 'Rated Output Power (kW)', values: ['75.0', '100.0', '125.0'] },
  { kind: 'row', label: 'Max. Output Apparent Power (kVA)', values: ['75.0', '100.0', '125.0'] },
  { kind: 'row', label: 'Rated AC Voltage', values: ['220/380V; 230/400V; 240/415V (3L/N/PE)'], compact: true },
  { kind: 'row', label: 'Rated AC Frequency (Hz)', values: ['50/60'] },
  { kind: 'row', label: 'Rated Output Current (A)', values: ['113.9/108.3/104.3', '151.9/144.3/139.1', '189.9/180.4/173.9'], compact: true },
  { kind: 'row', label: 'Max. Output Current (A)', values: ['113.9', '151.9', '189.9'] },
  { kind: 'row', label: 'Power Factor', values: ['0.8 Leading to 0.8 Lagging'] },
  { kind: 'row', label: 'THDi (@Rated Power)', values: ['<3%'] },
  { kind: 'row', label: 'Max. Input Apparent Power (kVA)**', values: ['150.0', '200.0', '207.0'] },
  { kind: 'row', label: 'Rated AC Voltage', values: ['220/380V; 230/400V; 240/415V (3L/N/PE)'], compact: true },
  { kind: 'row', label: 'Rated AC Frequency (Hz)', values: ['50/60'] },
  { kind: 'row', label: 'Max. AC Input Current (A)', values: ['227.8', '243.1', '273.4'] },

  { kind: 'section', label: 'Back-up Side (Off-Grid)' },
  { kind: 'row', label: 'Rated Output Power (kW)', values: ['75.0', '100.0', '125.0'] },
  { kind: 'row', label: 'Peak Output Apparent Power (kVA)', values: ['165 @10s'] },
  { kind: 'row', label: 'Rated Output Voltage', values: ['220/380V; 230/400V; 240/415V (3L/N/PE)'], compact: true },
  { kind: 'row', label: 'Rated Output Frequency (Hz)', values: ['50/60'] },
  { kind: 'row', label: 'Rated Output Current (A)', values: ['113.9/108.3/104.3', '151.9/144.3/139.1', '189.9/180.4/173.9'], compact: true },
  { kind: 'row', label: 'On/Off-grid Switch Time (ms)', values: ['< 20'] },
  { kind: 'row', label: 'THDv (@Linear Load)', values: ['<3%'] },

  { kind: 'section', label: 'Protection' },
  {
    kind: 'row',
    label: 'Integrated Protection',
    values: [
      'DC reverse polarity protection; Battery input reverse connection protection; Insulation resistance protection; Surge protection (DC: Type I+II, AC: Type II); Over temperature protection; Residual current protection; Islanding protection; AC overvoltage protection; Overload protection; AC Short Circuit protection',
    ],
    compact: true,
  },

  { kind: 'section', label: 'General' },
  { kind: 'row', label: 'Dimensions (W*H*D, mm)', values: ['1226*932*356'] },
  { kind: 'row', label: 'Weight (kg)', values: ['164'] },
  { kind: 'row', label: 'Ingress Protection', values: ['IP66'] },
  { kind: 'row', label: 'Anti-corrosion degree', values: ['C4'] },
  { kind: 'row', label: 'Standby Self-consumption (W)', values: ['< 35'] },
  { kind: 'row', label: 'Topology', values: ['Transformerless'] },
  { kind: 'row', label: 'Operating Temperature Range (°C)', values: ['-30~60'] },
  { kind: 'row', label: 'Relative Humidity (%)', values: ['0~100'] },
  { kind: 'row', label: 'Max. Operation Altitude (m)', values: ['3000'] },
  { kind: 'row', label: 'Overvoltage Category', values: ['II (PV+Battery), III (Mains)'], compact: true },
  { kind: 'row', label: 'Cooling', values: ['Smart Fan'] },
  { kind: 'row', label: 'Display', values: ['LED & OLED'] },
  { kind: 'row', label: 'Communication', values: ['CAN, RS485'] },
];

function renderTableRow(row: TableRow) {
  if (row.kind === 'section') {
    return (
      <tr key={row.label} className="bg-[#cac9c8] text-[#231A16] font-bold text-left">
        <td colSpan={models.length + 1} className="border-[0.368pt] border-white h-[4.0mm] px-[1.45mm] align-middle">
          {row.label}
        </td>
      </tr>
    );
  }

  const isSingle = row.values.length === 1;
  const cellClass = row.compact
    ? 'border-[0.368pt] border-white py-[1.0mm] px-[1.5mm] align-middle leading-[1.2]'
    : 'border-[0.368pt] border-white h-[4.0mm] px-[1.5mm] align-middle';

  return (
    <tr key={row.label} className="bg-[#dbdcdb] text-[#231A16]">
      <td className={`${cellClass} text-left`}>{row.label}</td>
      {isSingle ? (
        <td colSpan={models.length} className={cellClass}>
          {row.values[0]}
        </td>
      ) : (
        row.values.map((value, index) => (
          <td key={`${row.label}-${index}`} className={cellClass}>
            {value}
          </td>
        ))
      )}
    </tr>
  );
}

export default function CatalogSpreadGlobal20260420_31B() {
  return (
    <div className="w-[420mm] h-[297mm] bg-white relative overflow-hidden shadow-sm flex">
      <div className="w-[210mm] h-full relative z-10">
        <div className="design-group-wrapper absolute left-0 top-0 w-[210mm] h-[144.834mm] bg-gray-200 overflow-hidden">
          <div className="design-group-label">Scene Background</div>
          <img src={bgImage} alt="Scene Background" className="w-full h-full object-cover" />
        </div>

        <div className="design-group-wrapper absolute left-[86.7mm] top-[94.84mm] w-[108.83mm] h-[105.22mm] z-10">
          <div className="design-group-label">Product Image</div>
          <ProductImageEditor
            src={productImage}
            componentName="CatalogSpreadGlobal20260420_31B"
            initialX={30} /* IMAGE_TRANSFORM_X */
            initialY={-60} /* IMAGE_TRANSFORM_Y */
            initialScale={0.78} /* IMAGE_TRANSFORM_SCALE */
            defaultHeight="100%"
            defaultMarginLeft="0"
          />
        </div>

        <div className="design-group-wrapper absolute left-[20.9mm] top-[169.83mm] flex items-center z-10">
          <div className="design-group-label">Power Badge</div>
          <div className="bg-[#ED1651] h-[11.2mm] px-4 flex items-center justify-center rounded-l-md z-20">
            <span className="text-white font-bold text-[16pt]" style={{ fontFamily: '"Mark OT", sans-serif' }}>
              75/100/125kW
            </span>
          </div>
          <div className="bg-[#ACADB1] h-[11.2mm] px-4 flex items-center justify-center rounded-r-md -ml-2 pl-6 z-10">
            <span className="text-white font-bold text-[16pt]" style={{ fontFamily: '"Mark OT", sans-serif' }}>
              3P-Hybrid
            </span>
          </div>
        </div>

        <div className="design-group-wrapper absolute left-[20.9mm] top-[188.44mm] z-10">
          <div className="design-group-label">Product Features Title</div>
          <h2 className="text-[#ED1651] font-medium text-[31.621pt] leading-none tracking-tight" style={{ fontFamily: '"MiSans", sans-serif' }}>
            Product Features
          </h2>
        </div>

        <div className="design-group-wrapper absolute left-[21.5mm] top-[205.5mm] w-[167.2mm] h-[0.4pt] bg-black z-10">
          <div className="design-group-label">Title Divider</div>
        </div>

        <div className="design-group-wrapper absolute left-[21.5mm] top-[211mm] w-[167.2mm] z-10">
          <div className="design-group-label">Product Features List</div>
          <div className="grid grid-cols-2 gap-x-[10mm] gap-y-[8mm]">
            <div className="flex items-start gap-[4mm]">
              <div className="w-[9.46mm] h-[9.46mm] bg-[#ED1651] rounded-[2mm] shrink-0 mt-1"></div>
              <div className="flex flex-col gap-[1mm]">
                <h3 className="text-[#010202] font-medium text-[12pt]" style={{ fontFamily: '"MiSans", sans-serif' }}>Surge Protection</h3>
                <p className="text-[#5A5A5C] font-normal text-[8pt] leading-[1.4]" style={{ fontFamily: '"MiSans", sans-serif' }}>
                  Supports DC-Side Level 1 Surge Protection
                </p>
              </div>
            </div>

            <div className="flex items-start gap-[4mm]">
              <div className="w-[9.46mm] h-[9.46mm] bg-[#ED1651] rounded-[2mm] shrink-0 mt-1"></div>
              <div className="flex flex-col gap-[1mm]">
                <h3 className="text-[#010202] font-medium text-[12pt]" style={{ fontFamily: '"MiSans", sans-serif' }}>Reliable Operation</h3>
                <p className="text-[#5A5A5C] font-normal text-[8pt] leading-[1.4]" style={{ fontFamily: '"MiSans", sans-serif' }}>
                  IP66 Ingress Protection, C5 Corrosion Optional
                  <br />
                  Built-in Grid Phase and CT Direction Adaptive Control
                </p>
              </div>
            </div>

            <div className="flex items-start gap-[4mm]">
              <div className="w-[9.46mm] h-[9.46mm] bg-[#ED1651] rounded-[2mm] shrink-0 mt-1"></div>
              <div className="flex flex-col gap-[1mm]">
                <h3 className="text-[#010202] font-medium text-[12pt]" style={{ fontFamily: '"MiSans", sans-serif' }}>Parallel Ready</h3>
                <p className="text-[#5A5A5C] font-normal text-[8pt] leading-[1.4]" style={{ fontFamily: '"MiSans", sans-serif' }}>
                  Supports 10 Units in Parallel
                </p>
              </div>
            </div>

            <div className="flex items-start gap-[4mm]">
              <div className="w-[9.46mm] h-[9.46mm] bg-[#ED1651] rounded-[2mm] shrink-0 mt-1"></div>
              <div className="flex flex-col gap-[1mm]">
                <h3 className="text-[#010202] font-medium text-[12pt]" style={{ fontFamily: '"MiSans", sans-serif' }}>Easy Maintenance</h3>
                <p className="text-[#5A5A5C] font-normal text-[8pt] leading-[1.4]" style={{ fontFamily: '"MiSans", sans-serif' }}>
                  Supports Remote Monitoring and Upgrades
                  <br />
                  Auto-Reverse Fan Dust Removal, Easy to Maintain
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[210mm] h-full relative">
        <div className="design-group-wrapper absolute left-[38.151mm] top-[15.63mm] w-[150.099mm] z-10">
          <div className="design-group-label">Parameter Table</div>
          <table className="w-full border-collapse text-[5pt] text-center" style={{ fontFamily: '"Mark OT", sans-serif' }}>
            <colgroup>
              <col style={{ width: '40%' }} />
              <col style={{ width: '20%' }} />
              <col style={{ width: '20%' }} />
              <col style={{ width: '20%' }} />
            </colgroup>
            <tbody>
              <tr className="bg-[#9e9e9e] text-white font-bold">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[1mm] align-middle whitespace-nowrap">Model</td>
                {models.map((model) => (
                  <td key={model} className="border-[0.368pt] border-white h-[4.551mm] px-[1mm] align-middle whitespace-nowrap text-[4.7pt]">
                    {model}
                  </td>
                ))}
              </tr>
              {rows.map(renderTableRow)}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
