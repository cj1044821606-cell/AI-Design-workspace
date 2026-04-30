import React from 'react';
import { ProductImageEditor } from './ProductImageEditor';
import bgImage from '@/画册素材库/背景素材/画册-25-产品页左上角背景.png';
import productImage from '@/画册素材库/产品素材/IESS-3K680N.png';

export default function CatalogSpreadUZ25() {
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
        <div className="design-group-wrapper absolute left-[128.7mm] top-[106.84mm] w-[68.83mm] h-[93.22mm] z-10">
          <div className="design-group-label">产品图</div>
          <ProductImageEditor 
            src={productImage} 
            componentName="CatalogSpreadUZ25"
            initialX={0} /* IMAGE_TRANSFORM_X */
            initialY={-96} /* IMAGE_TRANSFORM_Y */
            initialScale={0.95} /* IMAGE_TRANSFORM_SCALE */
            defaultHeight="100%"
            defaultMarginLeft="0"
          />
        </div>

        {/* 功率徽标 */}
        <div className="design-group-wrapper absolute left-[20.9mm] top-[169.83mm] flex items-center z-10">
          <div className="design-group-label">功率徽标</div>
          <div className="bg-[#ED1651] h-[11.2mm] px-4 flex items-center justify-center rounded-md z-20">
            <span className="text-white font-bold text-[16pt] whitespace-nowrap" style={{ fontFamily: '"Mark OT", sans-serif' }}>3600W+8000Wh ESS</span>
          </div>
        </div>

        {/* Product Features 标题 */}
        <div className="design-group-wrapper absolute left-[20.9mm] top-[188.44mm] z-10">
          <div className="design-group-label">Product Features 标题</div>
          <h2 className="text-[#ED1651] font-medium text-[31.621pt] leading-none tracking-tight" style={{ fontFamily: '"MiSans", sans-serif' }}>
            Product Features
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
            {/* Feature 1 */}
            <div className="flex items-start gap-[4mm]">
              <div className="w-[9.46mm] h-[9.46mm] bg-[#ED1651] rounded-[2mm] shrink-0 mt-1"></div>
              <div className="flex flex-col gap-[1mm]">
                <h3 className="text-[#010202] font-medium text-[12pt]" style={{ fontFamily: '"MiSans", sans-serif' }}>
                  3 in 1 Household ESS
                </h3>
                <p className="text-[#5A5A5C] font-normal text-[8pt] leading-[1.4]" style={{ fontFamily: '"MiSans", sans-serif' }}>
                  Intelligent EMS & Dual Output PCS & Intelligent BMS
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start gap-[4mm]">
              <div className="w-[9.46mm] h-[9.46mm] bg-[#ED1651] rounded-[2mm] shrink-0 mt-1"></div>
              <div className="flex flex-col gap-[1mm]">
                <h3 className="text-[#010202] font-medium text-[12pt]" style={{ fontFamily: '"MiSans", sans-serif' }}>
                  Class-A LiFePO<sub>4</sub> battery
                </h3>
                <p className="text-[#5A5A5C] font-normal text-[8pt] leading-[1.4]" style={{ fontFamily: '"MiSans", sans-serif' }}>
                  Cycle Life 6,000+, Up to 8-10 Years<br/>
                  LiFePO<sub>4</sub> Battery, High Safety and Performance
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start gap-[4mm]">
              <div className="w-[9.46mm] h-[9.46mm] bg-[#ED1651] rounded-[2mm] shrink-0 mt-1"></div>
              <div className="flex flex-col gap-[1mm]">
                <h3 className="text-[#010202] font-medium text-[12pt]" style={{ fontFamily: '"MiSans", sans-serif' }}>
                  Ultra-large Capacity
                </h3>
                <p className="text-[#5A5A5C] font-normal text-[8pt] leading-[1.4]" style={{ fontFamily: '"MiSans", sans-serif' }}>
                  8000Wh LiFePO<sub>4</sub> Battery<br/>
                  Backup Time up to 2 hours
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex items-start gap-[4mm]">
              <div className="w-[9.46mm] h-[9.46mm] bg-[#ED1651] rounded-[2mm] shrink-0 mt-1"></div>
              <div className="flex flex-col gap-[1mm]">
                <h3 className="text-[#010202] font-medium text-[12pt]" style={{ fontFamily: '"MiSans", sans-serif' }}>
                  Grid Compatibility
                </h3>
                <p className="text-[#5A5A5C] font-normal text-[8pt] leading-[1.4]" style={{ fontFamily: '"MiSans", sans-serif' }}>
                  Phase Voltage Withstand Voltage 380V<br/>
                  Self-adapting to Unstable Power Grid THDv&lt;3%<br/>
                  Self-adapting to Weak Grid
                </p>
              </div>
            </div>

            {/* Feature 5 */}
            <div className="flex items-start gap-[4mm]">
              <div className="w-[9.46mm] h-[9.46mm] bg-[#ED1651] rounded-[2mm] shrink-0 mt-1"></div>
              <div className="flex flex-col gap-[1mm]">
                <h3 className="text-[#010202] font-medium text-[12pt]" style={{ fontFamily: '"MiSans", sans-serif' }}>
                  High Performance Inverter
                </h3>
                <p className="text-[#5A5A5C] font-normal text-[8pt] leading-[1.4]" style={{ fontFamily: '"MiSans", sans-serif' }}>
                  UPS Class Switch Time &lt;10 ms<br/>
                  Intelligent Overload Protection Mode
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
          <table className="w-full border-collapse text-[6pt] text-center" style={{ fontFamily: '"Mark OT", sans-serif' }}>
            <tbody>
              {/* Header */}
              <tr className="bg-[#9e9e9e] text-white font-bold">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle w-1/2">Model</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle w-1/2">IESS-3K680N</td>
              </tr>

              {/* Efficiency */}
              <tr className="bg-[#cac9c8] text-[#231A16] font-bold text-left">
                <td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">Efficiency</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">MPPT Efficiency</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">99%</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Max. Battery Mode Conversion Efficiency</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">90%</td>
              </tr>
              
              {/* PV Input */}
              <tr className="bg-[#cac9c8] text-[#231A16] font-bold text-left">
                <td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">PV Input</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Max. PV Input Power (W)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">&gt;5000</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Max. PV Input Voltage (V)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">500</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">MPPT Voltage Range (V)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">40~430</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Start-up Voltage (V)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">60</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Max. Input Current (A)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">18</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Number of MPPT</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">1</td>
              </tr>

              {/* AC Input */}
              <tr className="bg-[#cac9c8] text-[#231A16] font-bold text-left">
                <td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">AC Input</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Max. Grid Input Voltage (Absolute Maximum Ratings)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">380Vrms</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Input Voltage Range (Vac)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">160-280</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Overvoltage Voltage (Vac)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">280&plusmn;10</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Max. AC Input Power (Bypass Mode+Battery Charge) (W)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">4000</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Max. AC Input Current (Bypass Mode+Battery Charge) (A)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">20</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Nominal Operating Frequency (Hz)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">50/60</td>
              </tr>

              {/* AC Output */}
              <tr className="bg-[#cac9c8] text-[#231A16] font-bold text-left">
                <td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">AC Output</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Nominal AC Output Power (Inverter Mode) (W)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">3600</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Max. Output Apparent Power (Inverter Mode) (VA)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">3600</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Nominal AC Output Voltage (Inverter Mode) (Vac)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">230</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Total Voltage Harmonic Distortion (Inverter Mode)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">&lt;3%</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Nominal AC Output Current (Inverter Mode) (A)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">16.4</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Max. Output AC Output Current Limit (Inverter Mode) (A)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">23 (3s)</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Nominal AC Frequency (Hz)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">50</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Switch Time (ms)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">&lt;10</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Surge Power (VA)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">5400 (3s)</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Overload Capacity</td>
                <td className="border-[0.368pt] border-white py-[2mm] px-[2mm] align-middle leading-tight">105%~150%, After 3s Shutdown<br/>150%~200%, After 0.2s Shutdown</td>
              </tr>

              {/* Battery */}
              <tr className="bg-[#cac9c8] text-[#231A16] font-bold text-left">
                <td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">Battery</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Battery Type</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">LiFePO<sub>4</sub></td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Rated Battery Voltage (Vdc)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">25.6</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Rated Capacity (Ah)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">314</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Battery Energy (kWh)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">8.038</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Cycle Life</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">6000</td>
              </tr>

              {/* General Data */}
              <tr className="bg-[#cac9c8] text-[#231A16] font-bold text-left">
                <td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">General Data</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Operating Temperature Range (&deg;C)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">-10~+60, &gt;40 Power Derating</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Max. Operating Altitude</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">4000m, &gt;2000m Power Derating</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Feed to Grid</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">Support</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Cooling Method</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">Intelligent Fan Cooling</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Noise (dB)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">&lt;47 (1m)</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Authentication Level</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">IEC62619/IEC62368/UN38.3</td>
              </tr>

              {/* Protection */}
              <tr className="bg-[#cac9c8] text-[#231A16] font-bold text-left">
                <td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">Protection</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Battery Fuse</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">Yes</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Grid Overvoltage Protection</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">Yes</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">PV Overvoltage Protection</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">Yes</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Overload Protection</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">Yes</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Short Circuit Protection</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">Yes</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Over Temperature Protection</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">Yes</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Surge Protection</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">DC: Type II, AC: Type III</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

