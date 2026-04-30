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
            <span className="text-white font-bold text-[16pt]" style={{ fontFamily: '"Mark OT", sans-serif' }}>High Voltage Battery</span>
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
          <div className="grid grid-cols-2 gap-x-[10mm] gap-y-[6mm]">
            {/* Feature 1 */}
            <div className="flex items-start gap-[4mm]">
              <div className="w-[9.46mm] h-[9.46mm] bg-[#ED1651] rounded-[2mm] shrink-0 mt-1"></div>
              <div className="flex flex-col gap-[1mm]">
                <h3 className="text-[#010202] font-medium text-[12pt]" style={{ fontFamily: '"MiSans", sans-serif' }}>
                  &gt;6000
                </h3>
                <p className="text-[#5A5A5C] font-normal text-[8pt] leading-[1.4]" style={{ fontFamily: '"MiSans", sans-serif' }}>
                  Cycle Life @25°C
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start gap-[4mm]">
              <div className="w-[9.46mm] h-[9.46mm] bg-[#ED1651] rounded-[2mm] shrink-0 mt-1"></div>
              <div className="flex flex-col gap-[1mm]">
                <h3 className="text-[#010202] font-medium text-[12pt]" style={{ fontFamily: '"MiSans", sans-serif' }}>
                  Automatic Wake-up
                </h3>
                <p className="text-[#5A5A5C] font-normal text-[8pt] leading-[1.4]" style={{ fontFamily: '"MiSans", sans-serif' }}>
                  Under Off-grid System Environment
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start gap-[4mm]">
              <div className="w-[9.46mm] h-[9.46mm] bg-[#ED1651] rounded-[2mm] shrink-0 mt-1"></div>
              <div className="flex flex-col gap-[1mm]">
                <h3 className="text-[#010202] font-medium text-[12pt]" style={{ fontFamily: '"MiSans", sans-serif' }}>
                  Multiple Safety Protection
                </h3>
                <p className="text-[#5A5A5C] font-normal text-[8pt] leading-[1.4]" style={{ fontFamily: '"MiSans", sans-serif' }}>
                  Relay, Fuse
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex items-start gap-[4mm]">
              <div className="w-[9.46mm] h-[9.46mm] bg-[#ED1651] rounded-[2mm] shrink-0 mt-1"></div>
              <div className="flex flex-col gap-[1mm]">
                <h3 className="text-[#010202] font-medium text-[12pt]" style={{ fontFamily: '"MiSans", sans-serif' }}>
                  Supports Connection of<br/>New and Old Batteries
                </h3>
                <p className="text-[#5A5A5C] font-normal text-[8pt] leading-[1.4]" style={{ fontFamily: '"MiSans", sans-serif' }}>
                  Connected in Parallel
                </p>
              </div>
            </div>

            {/* Feature 5 */}
            <div className="flex items-start gap-[4mm]">
              <div className="w-[9.46mm] h-[9.46mm] bg-[#ED1651] rounded-[2mm] shrink-0 mt-1"></div>
              <div className="flex flex-col gap-[1mm]">
                <h3 className="text-[#010202] font-medium text-[12pt]" style={{ fontFamily: '"MiSans", sans-serif' }}>
                  Smart BMS
                </h3>
                <p className="text-[#5A5A5C] font-normal text-[8pt] leading-[1.4]" style={{ fontFamily: '"MiSans", sans-serif' }}>
                  Intelligent Management &<br/>
                  Maintenance of Battery Systems
                </p>
              </div>
            </div>

            {/* Feature 6 */}
            <div className="flex items-start gap-[4mm]">
              <div className="w-[9.46mm] h-[9.46mm] bg-[#ED1651] rounded-[2mm] shrink-0 mt-1"></div>
              <div className="flex flex-col gap-[1mm]">
                <h3 className="text-[#010202] font-medium text-[12pt]" style={{ fontFamily: '"MiSans", sans-serif' }}>
                  Remote Monitoring
                </h3>
                <p className="text-[#5A5A5C] font-normal text-[8pt] leading-[1.4]" style={{ fontFamily: '"MiSans", sans-serif' }}>
                  Real-time Monitoring of Electricity Usage<br/>
                  and Equipment Operation
                </p>
              </div>
            </div>

            {/* Feature 7 */}
            <div className="flex items-start gap-[4mm]">
              <div className="w-[9.46mm] h-[9.46mm] bg-[#ED1651] rounded-[2mm] shrink-0 mt-1"></div>
              <div className="flex flex-col gap-[1mm]">
                <h3 className="text-[#010202] font-medium text-[12pt]" style={{ fontFamily: '"MiSans", sans-serif' }}>
                  Parallel & Series
                </h3>
                <p className="text-[#5A5A5C] font-normal text-[8pt] leading-[1.4]" style={{ fontFamily: '"MiSans", sans-serif' }}>
                  Adapting to Series or Parallel Connection
                </p>
              </div>
            </div>

            {/* Feature 8 */}
            <div className="flex items-start gap-[4mm]">
              <div className="w-[9.46mm] h-[9.46mm] bg-[#ED1651] rounded-[2mm] shrink-0 mt-1"></div>
              <div className="flex flex-col gap-[1mm]">
                <h3 className="text-[#010202] font-medium text-[12pt]" style={{ fontFamily: '"MiSans", sans-serif' }}>
                  Voltage Balancing
                </h3>
                <p className="text-[#5A5A5C] font-normal text-[8pt] leading-[1.4]" style={{ fontFamily: '"MiSans", sans-serif' }}>
                  Voltage Balancing between<br/>
                  Battery Cells & Battery Pack
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
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle w-1/2">Model</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle w-1/2">IPX-51314SPT</td>
              </tr>

              {/* Battery */}
              <tr className="bg-[#cac9c8] text-[#231A16] font-bold text-left">
                <td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">Battery</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Total Energy*</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">16.076kWh</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Usable Energy(DC)*</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">14.5kWh</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Capacity</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">314Ah</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Nominal Dis-/Charge Power</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">10.2kW</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Peak Power(Only Discharge)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">10.6kW for 3s</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Voltage</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">48~56Vd.c</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Nominal Voltage</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">51.2Vd.c</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Nominal Current</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">200A</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Max. Charge Voltage</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">57.6Vd.c</td>
              </tr>

              {/* General Data */}
              <tr className="bg-[#cac9c8] text-[#231A16] font-bold text-left">
                <td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">General Data</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Weight</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">116kg</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Dimension(L*W*H)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">855*450*235 mm</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Max.Recommended DOD</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">90%</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Operating Condition</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">Indoor</td>
              </tr>
              
              {/* 参数表格 */}
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left w-[50%] p-0">
                  <table className="w-full h-full border-collapse">
                    <tbody>
                      <tr>
                        <td className="border-r-[0.368pt] border-white px-[2mm] align-middle w-1/2" rowSpan={2}>
                          Operating<br/>Temperature
                        </td>
                        <td className="border-b-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-center w-1/2">Charge</td>
                      </tr>
                      <tr>
                        <td className="h-[4.551mm] px-[2mm] align-middle text-center">Discharge</td>
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
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">WIFI Frequency Range</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">2.4GMHz</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Recommended Humidity</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">&lt;60%(No condensed water)</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Cooling Type</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">Natural cooling</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Case Material</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">Metal</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Color</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">White</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Installation</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">Rack mounting/Ground Installation</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Warranty</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">10 years</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Communication</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">CAN/ RS485</td>
              </tr>

              {/* Protection */}
              <tr className="bg-[#cac9c8] text-[#231A16] font-bold text-left">
                <td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">Protection</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Over Voltage Category</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">II</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">IP Rating</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">IP 20</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Protective Class</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">I</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Max. Connection Number</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">16P/12S</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Protection Mode</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">Dual hardware protection</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Battery Protection</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">Over-current/Over-voltage/Short circuit/ Under-voltage/Over temperature</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Safety</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">CE</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Hazardous Material Classification</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">9</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Transportation</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">UN 38.3</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

