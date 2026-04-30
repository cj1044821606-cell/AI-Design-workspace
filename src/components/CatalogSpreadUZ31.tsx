import React from 'react';
import { ProductImageEditor } from './ProductImageEditor';
import bgImage from '@/画册素材库/背景素材/画册-31-产品页左上角背景.png';
import productImage from '@/画册素材库/产品素材/ІНY-30KH3S&IHY-50KH3S.png';

export default function CatalogSpreadUZ31() {
  return (
    <div className="w-[420mm] h-[297mm] bg-white relative overflow-hidden shadow-sm flex">
      {/* ================= 闂佽楠哥紞濠傤焽閼姐倗涓嶉柟鎹愵嚙杩&plusmn;================= */}
      <div className="w-[210mm] h-full relative z-10">
        {/* 闂佽楠哥紞濠傤焽閼姐倗纾芥慨妯夸含缁犳棃鏌涚仦鍓х煁闁哥姴妫濋弻鐔兼倻濡崵顦ラ梺鍛婃尭缂嶅﹪寮婚敓鐘叉そ濞达絽鎽滄禒鈺佲攽&plusmn;*/}
        <div className="design-group-wrapper absolute left-0 top-0 w-[210mm] h-[144.834mm] bg-gray-200 overflow-hidden">
          <div className="design-group-label">&plusmn;&plusmn;&plusmn;</div>
          <img src={bgImage} alt="Background" className="w-full h-full object-cover" />
        </div>

        {/* 婵炲瓨绫傞崘鈺傚剬闂&plusmn;(闂佸憡鐟ф慨瀛樻叏閻愬搫鎹堕柕濞垮劜缁ㄦ岸鏌￠崪浣哥仩婵炲瓨锕㈠畷锝夊礂閸涱垳鎲柣&plusmn; */}
        <div className="design-group-wrapper absolute left-[85.7mm] top-[106.84mm] w-[110.83mm] h-[93.22mm] z-10">
          <div className="design-group-label">&plusmn;&plusmn;&plusmn;</div>
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

        {/* 闂佸憡姊婚崰鎾愁啅閻撳寒鍤楅柤鎭掑劤閸&plusmn;*/}
        <div className="design-group-wrapper absolute left-[20.9mm] top-[169.83mm] flex items-center z-10">
          <div className="design-group-label">&plusmn;&plusmn;&plusmn;&plusmn;</div>
          <div className="bg-[#ED1651] h-[11.2mm] px-4 flex items-center justify-center rounded-l-md z-20">
            <span className="text-white font-bold text-[16pt]" style={{ fontFamily: '"Mark OT", sans-serif' }}>30-50kW</span>
          </div>
          <div className="bg-[#b4b5b5] h-[11.2mm] px-4 flex items-center justify-center rounded-r-md -ml-1 z-10">
            <span className="text-white font-bold text-[16pt]" style={{ fontFamily: '"Mark OT", sans-serif' }}>Hybrid Inverter</span>
          </div>
        </div>

        {/* Product Features 闂佸搫绉村ú顓€&plusmn;*/}
        <div className="design-group-wrapper absolute left-[20.9mm] top-[188.44mm] z-10">
          <div className="design-group-label">Product Features &plusmn;&plusmn;</div>
          <h2 className="text-[#ED1651] font-medium text-[31.621pt] leading-none tracking-tight" style={{ fontFamily: '"MiSans", sans-serif' }}>
            Product Features
          </h2>
        </div>

        {/* 闂佸憡甯掑Λ婵嗏枔瑜忛惀&plusmn;*/}
        <div className="design-group-wrapper absolute left-[21.5mm] top-[205.5mm] w-[167.2mm] h-[0.4pt] bg-black z-10">
          <div className="design-group-label">&plusmn;&plusmn;&plusmn;&plusmn;&plusmn;</div>
        </div>

        {/* 闂佺粯顨夐～澶愬焵椤戭剙鍟悘娆撴偠&plusmn;Grid */}
        <div className="design-group-wrapper absolute left-[21.5mm] top-[211mm] w-[167.2mm] z-10">
          <div className="design-group-label">&plusmn;&plusmn;&plusmn;&plusmn;&plusmn;&plusmn;</div>
          <div className="grid grid-cols-2 gap-x-[10mm] gap-y-[10mm]">
            {/* Feature 1 */}
            <div className="flex items-start gap-[4mm]">
              <div className="w-[9.46mm] h-[9.46mm] bg-[#ED1651] rounded-[2mm] shrink-0 mt-1"></div>
              <div className="flex flex-col gap-[1mm]">
                <h3 className="text-[#010202] font-medium text-[12pt]" style={{ fontFamily: '"MiSans", sans-serif' }}>
                  Maximized Energy Harvesting
                </h3>
                <p className="text-[#5A5A5C] font-normal text-[8pt] leading-[1.4]" style={{ fontFamily: '"MiSans", sans-serif' }}>
                  100% Unbalanced Output Enhances Self-consumption<br/>
                  150A Charge/Discharge for Efficient Energy Transfer<br/>
                  150-840V Super Wide Battery Voltage Range<br/>
                  160% DC Oversizing Boosts Efficiency,<br/>
                  20A PV Input Current per String, 4 MPPT Trackers
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start gap-[4mm]">
              <div className="w-[9.46mm] h-[9.46mm] bg-[#ED1651] rounded-[2mm] shrink-0 mt-1"></div>
              <div className="flex flex-col gap-[1mm]">
                <h3 className="text-[#010202] font-medium text-[12pt]" style={{ fontFamily: '"MiSans", sans-serif' }}>
                  Engineered for Versatility
                </h3>
                <p className="text-[#5A5A5C] font-normal text-[8pt] leading-[1.4]" style={{ fontFamily: '"MiSans", sans-serif' }}>
                  Max. Parallel Number (On-Grid) 10<br/>
                  150% Max Backup @10s Handles Overloads<br/>
                  IP66 Protects both Indoors and Outdoors<br/>
                  Supports Half-wave Loading
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start gap-[4mm]">
              <div className="w-[9.46mm] h-[9.46mm] bg-[#ED1651] rounded-[2mm] shrink-0 mt-1"></div>
              <div className="flex flex-col gap-[1mm]">
                <h3 className="text-[#010202] font-medium text-[12pt]" style={{ fontFamily: '"MiSans", sans-serif' }}>
                  Intelligent Energy Dynamics
                </h3>
                <p className="text-[#5A5A5C] font-normal text-[8pt] leading-[1.4]" style={{ fontFamily: '"MiSans", sans-serif' }}>
                  6 Work Modes for Diverse Use<br/>
                  Supports Both TOU and Dynamic Pricing Strategies<br/>
                  for Optimized Energy Use and Cost Savings<br/>
                  Supports Diesel Generators for Diverse Energy Sourcing
                </p>
              </div>
            </div>

            <div className="flex items-start gap-[4mm]">
              <div className="w-[9.46mm] h-[9.46mm] bg-[#ED1651] rounded-[2mm] shrink-0 mt-1"></div>
              <div className="flex flex-col gap-[1mm]">
                <h3 className="text-[#010202] font-medium text-[12pt]" style={{ fontFamily: '"MiSans", sans-serif' }}>
                  Simplified Interaction
                </h3>
                <p className="text-[#5A5A5C] font-normal text-[8pt] leading-[1.4]" style={{ fontFamily: '"MiSans", sans-serif' }}>
                  Remote Upgrades Maintain System Health<br/>
                  Fast Commissioning through Bluetooth<br/>
                  Advanced EMS Platform for Peak Intelligent<br/>
                  Energy Management
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= 闂傚倷绀侀幉锟犳偡閿旂晫绠惧┑鐘叉搐杩&plusmn;================= */}
      <div className="w-[210mm] h-full relative">
        <div className="design-group-wrapper absolute left-[38.151mm] top-[15.63mm] w-[150.099mm] z-10">
          <div className="design-group-label">&plusmn;&plusmn;&plusmn;&plusmn;</div>
          <table className="w-full border-collapse text-[5.5pt] text-center" style={{ fontFamily: '"Mark OT", sans-serif' }}>
            <tbody>
              {/* Header */}
              <tr className="bg-[#9e9e9e] text-white font-bold">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle w-1/3">Model</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle w-1/3">IHY-30KH3S</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle w-1/3">IHY-50KH3S</td>
              </tr>

              {/* Efficiency */}
              <tr className="bg-[#cac9c8] text-[#231A16] font-bold">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left" colSpan={3}>Efficiency</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">MPPT Efficiency</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle" colSpan={2}>99.90%</td>
              </tr>

              {/* PV Input */}
              <tr className="bg-[#cac9c8] text-[#231A16] font-bold">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left" colSpan={3}>PV Input</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Max. PV Input Power (W)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">45000</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">75000</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Max. DC Input Voltage (V)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle" colSpan={2}>1000</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Start-up Voltage (V)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle" colSpan={2}>135</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">MPPT Voltage Range (V)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle" colSpan={2}>200~950</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Max. Input Current (A)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle" colSpan={2}>40/40/40/40</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Number of MPPT</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle" colSpan={2}>4</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Number of Strings per MPPT</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle" colSpan={2}>2</td>
              </tr>

              {/* AC Input */}
              <tr className="bg-[#cac9c8] text-[#231A16] font-bold">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left" colSpan={3}>AC Input</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Nominal Input Voltage (Vac)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle" colSpan={2}>220/380V; 230/400V(3L+N+PE)</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Max. AC Input Current (A)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">90.9</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">121.2</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Nominal Operating Frequency (Hz)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle" colSpan={2}>50/60</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Max. Input Apparent Power (VA)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">60000</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">80000</td>
              </tr>

              {/* AC Output */}
              <tr className="bg-[#cac9c8] text-[#231A16] font-bold">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left" colSpan={3}>AC Output</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Nominal AC Output Power (W)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">30000</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">50000</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Max. Output Apparent Power (VA)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">30000</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">50000</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Nominal AC Output Voltage (Vac)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle" colSpan={2}>220/380V; 230/400V(3L+N+PE)</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Max. Output Current (A)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">45.5</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">75.8</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Total Current Harmonic Distortion</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle" colSpan={2}>&lt;3%</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Nominal AC Frequency (Hz)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle" colSpan={2}>50/60</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Switch Time (ms)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle" colSpan={2}>&lt;20</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Surge Power (VA)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">45000</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">75000</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Overload Capability</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle" colSpan={2}>110%&lt;Load闂&plusmn;50% @ 10s</td>
              </tr>

              {/* Battery */}
              <tr className="bg-[#cac9c8] text-[#231A16] font-bold">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left" colSpan={3}>Battery</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Battery Type</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle" colSpan={2}>Lithium-ion</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Battery Voltage Range (V)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle" colSpan={2}>150-840</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Number of Battery Input</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle" colSpan={2}>1</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Max. Charge/Discharge Current (A)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle" colSpan={2}>150/150</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Max. Charge/Discharge Power (W)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">30000/30000</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">50000/50000</td>
              </tr>

              {/* General */}
              <tr className="bg-[#cac9c8] text-[#231A16] font-bold">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left" colSpan={3}>General</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Dimensions (L*W*H, mm)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle" colSpan={2}>909*735*305</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Net Weight (kg)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle" colSpan={2}>89</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Operating Temperature Range (&deg;C)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle" colSpan={2}>-30 ~ +60 (&gt;45&deg;C Power Derating)</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Max. Operating Altitude (m)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle" colSpan={2}>3000</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Communication</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle" colSpan={2}>Wi-Fi/CAN/RS485/Dry Contact/LAN (Optional)</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Diesel Generator Support</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle" colSpan={2}>Yes</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Smart Load Support</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle" colSpan={2}>Yes</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Parallel Capability</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle" colSpan={2}>10</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Cooling Method</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle" colSpan={2}>Intelligent Fan Cooling</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Noise (dB)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle" colSpan={2}>&lt;65</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Authentication Level</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle" colSpan={2}>IEC62109/IEC61000</td>
              </tr>

              {/* Protection */}
              <tr className="bg-[#cac9c8] text-[#231A16] font-bold">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left" colSpan={3}>Protection</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Ingress Protection</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle" colSpan={2}>IP66</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Overvoltage Protection</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle" colSpan={2}>Yes</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Overload Protection</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle" colSpan={2}>Yes</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Short Circuit Protection</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle" colSpan={2}>Yes</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Over Temperature Protection</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle" colSpan={2}>Yes</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Surge Protection</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle" colSpan={2}>DC: TYPE II; AC: TYPE III</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
