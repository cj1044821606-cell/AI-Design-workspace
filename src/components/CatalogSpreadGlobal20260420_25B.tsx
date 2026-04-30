import React from 'react';
import bgImage from '@/画册素材库/背景素材/画册-25B-产品页左上角背景.png';
import productImage from '@/画册素材库/产品素材/IPX-51314SPT-25B.png';
import { ProductImageEditor } from './ProductImageEditor';

export default function CatalogSpreadGlobal20260420_25B() {
  return (
    <div className="w-[420mm] h-[297mm] bg-white relative overflow-hidden shadow-sm flex">
      {/* ================= 瀹革箓銆&plusmn;(0-210mm) ================= */}
      <div className="w-[210mm] h-full relative z-10">
        {/* 瀹革缚绗傜憴鎺曞剹閺咁垰娴&plusmn;*/}
        <div className="design-group-wrapper absolute left-0 top-0 w-[210mm] h-[144.834mm] bg-gray-200 overflow-hidden">
          <div className="design-group-label">场景图</div>
          <img src={bgImage} alt="Scene Background" className="w-full h-full object-cover" />
        </div>

        {/* 产品图 (叠加在场景图右下角) */}
        <div className="design-group-wrapper absolute left-[128.7mm] top-[106.84mm] w-[68.83mm] h-[93.22mm] z-10">
          <div className="design-group-label">产品图</div>
          <ProductImageEditor
            src={productImage}
            componentName="CatalogSpreadGlobal20260420_25B"
            initialX={0} /* IMAGE_TRANSFORM_X */
            initialY={-73} /* IMAGE_TRANSFORM_Y */
            initialScale={1.15} /* IMAGE_TRANSFORM_SCALE */
            defaultHeight="100%"
            defaultMarginLeft="0"
          />
        </div>

        {/* 功率徽标 */}
        <div className="design-group-wrapper absolute left-[20.9mm] top-[169.83mm] flex items-center z-10">
          <div className="design-group-label">功率徽标</div>
          <div className="bg-[#ED1651] h-[11.2mm] px-4 flex items-center justify-center rounded-l-md z-20">
            <span className="text-white font-bold text-[16pt]" style={{ fontFamily: '"Mark OT", sans-serif' }}>
              51.2V-16kWh
            </span>
          </div>
          <div className="bg-[#ACADB1] h-[11.2mm] px-4 flex items-center justify-center rounded-r-md -ml-2 pl-6 z-10">
            <span className="text-white font-bold text-[16pt]" style={{ fontFamily: '"Mark OT", sans-serif' }}>
              314Ah
            </span>
          </div>
        </div>

        {/* Product Features 标题&plusmn;*/}
        <div className="design-group-wrapper absolute left-[20.9mm] top-[188.44mm] z-10">
          <div className="design-group-label">标题下划线</div>
          <h2
            className="text-[#ED1651] font-medium text-[31.621pt] leading-none tracking-tight"
            style={{ fontFamily: '"MiSans", sans-serif' }}
          >
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
          <div className="grid grid-cols-2 gap-x-[10mm] gap-y-[4mm]">
            <div className="flex items-start gap-[4mm]">
              <div className="w-[9.46mm] h-[9.46mm] bg-[#ED1651] rounded-[2mm] shrink-0 mt-1"></div>
              <div className="flex flex-col gap-[1mm]">
                <h3 className="text-[#010202] font-medium text-[12pt]" style={{ fontFamily: '"MiSans", sans-serif' }}>
                  Class-A LiFePO<sub>4</sub> Battery Cell
                </h3>
                <p className="text-[#5A5A5C] font-normal text-[8pt] leading-[1.3]" style={{ fontFamily: '"MiSans", sans-serif' }}>
                  Life Cycle 6000<br />
                  High Safety and Performance
                </p>
              </div>
            </div>

            <div className="flex items-start gap-[4mm]">
              <div className="w-[9.46mm] h-[9.46mm] bg-[#ED1651] rounded-[2mm] shrink-0 mt-1"></div>
              <div className="flex flex-col gap-[1mm]">
                <h3 className="text-[#010202] font-medium text-[12pt]" style={{ fontFamily: '"MiSans", sans-serif' }}>
                  Intelligent Software BMS
                </h3>
                <p className="text-[#5A5A5C] font-normal text-[8pt] leading-[1.3]" style={{ fontFamily: '"MiSans", sans-serif' }}>
                  50+ Protection Algorithms for Safety<br />
                  and Longer Lifespan
                </p>
              </div>
            </div>

            <div className="flex items-start gap-[4mm]">
              <div className="w-[9.46mm] h-[9.46mm] bg-[#ED1651] rounded-[2mm] shrink-0 mt-1"></div>
              <div className="flex flex-col gap-[1mm]">
                <h3 className="text-[#010202] font-medium text-[12pt]" style={{ fontFamily: '"MiSans", sans-serif' }}>
                  3-Level Hardware Protection
                </h3>
                <p className="text-[#5A5A5C] font-normal text-[8pt] leading-[1.3]" style={{ fontFamily: '"MiSans", sans-serif' }}>
                  Relay / Breaker / Fuse
                </p>
              </div>
            </div>

            <div className="flex items-start gap-[4mm]">
              <div className="w-[9.46mm] h-[9.46mm] bg-[#ED1651] rounded-[2mm] shrink-0 mt-1"></div>
              <div className="flex flex-col gap-[1mm]">
                <h3 className="text-[#010202] font-medium text-[12pt]" style={{ fontFamily: '"MiSans", sans-serif' }}>
                  Flexible Expansion Capability
                </h3>
                <p className="text-[#5A5A5C] font-normal text-[8pt] leading-[1.3]" style={{ fontFamily: '"MiSans", sans-serif' }}>
                  Support 16 in Parallel and 12 in Series
                </p>
              </div>
            </div>

            <div className="flex items-start gap-[4mm]">
              <div className="w-[9.46mm] h-[9.46mm] bg-[#ED1651] rounded-[2mm] shrink-0 mt-1"></div>
              <div className="flex flex-col gap-[1mm]">
                <h3 className="text-[#010202] font-medium text-[12pt]" style={{ fontFamily: '"MiSans", sans-serif' }}>
                  Wide Application Compatibility
                </h3>
                <p className="text-[#5A5A5C] font-normal text-[8pt] leading-[1.3]" style={{ fontFamily: '"MiSans", sans-serif' }}>
                  Support C&amp;I and Residential Scenarios<br />
                  Support High Voltage and Low Voltage Systems
                </p>
              </div>
            </div>

            <div className="flex items-start gap-[4mm]">
              <div className="w-[9.46mm] h-[9.46mm] bg-[#ED1651] rounded-[2mm] shrink-0 mt-1"></div>
              <div className="flex flex-col gap-[1mm]">
                <h3 className="text-[#010202] font-medium text-[12pt]" style={{ fontFamily: '"MiSans", sans-serif' }}>
                  Automatic Parallel Address
                </h3>
                <p className="text-[#5A5A5C] font-normal text-[8pt] leading-[1.3]" style={{ fontFamily: '"MiSans", sans-serif' }}>
                  Automatically Configure the Parallel Address<br />
                  and Assign Master and Slave
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= 閸欐娊銆&plusmn;(210-420mm) ================= */}
      <div className="w-[210mm] h-full relative">
        <div className="design-group-wrapper absolute left-[38.151mm] top-[15.63mm] w-[150.099mm] z-10">
          <div className="design-group-label">参数表格</div>
          <table className="w-full border-collapse text-[6pt] text-center" style={{ fontFamily: '"Mark OT", sans-serif' }}>
            <tbody>
              <tr className="bg-[#9e9e9e] text-white font-bold">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle w-1/2">Model</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle w-1/2">IPX-51314SPT</td>
              </tr>

              <tr className="bg-[#cac9c8] text-[#231A16] font-bold text-left">
                <td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">
                  Main Parameters
                </td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Battery Type</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">LiFePO<sub>4</sub></td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Nominal Voltage (V)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">51.2</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Nominal Capacity (Ah)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">314</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Nominal Energy (kWh)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">16</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Operating Voltage Range (V)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">48~56</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">
                  Max. Parallel &amp; Series Number
                </td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">16 in Parallel; 12 in Series</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">
                  Max. Continuous Charge Current (A)
                </td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">200</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Peak Charge Current (A)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">210A@3s</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">
                  Max. Continuous Discharge Current (A)
                </td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">200</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Peak Discharge Current (A)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">210A@1s</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">
                  Recommended Depth of Discharge
                </td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">90%</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white py-[1.4mm] px-[2mm] align-middle text-left leading-tight">
                  Cycle Life of Battery Cell
                </td>
                <td className="border-[0.368pt] border-white py-[1.4mm] px-[2mm] align-middle leading-tight">
                  &gt;6000@25°C, 0.5C/0.5C,<br />
                  80%DOD, 80%EOL
                </td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Communication Port</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">CAN2.0/RS485</td>
              </tr>

              <tr className="bg-[#cac9c8] text-[#231A16] font-bold text-left">
                <td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">
                  General Parameters
                </td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Dimensions (D*W*H, mm)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">235*450*855</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Net Weight (kg)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">116</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">
                  Operating Temperature/Charge (°C)
                </td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">0~+55</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">
                  Operating Temperature/Discharge (°C)
                </td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">-10~+55</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">
                  Recommend Operating Temperature (°C)
                </td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">15~+35</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Storage Temperature (°C)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">0~+35</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Humidity</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">10%~95%</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Altitude (m)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">2000</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Ingress Protection</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">IP20</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Cooling Method</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">Natural Cooling</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Shell Material</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">Metal</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">LED Display</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">2 LED (Run and Alarm)</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Wi-Fi</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">Yes</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white py-[1.4mm] px-[2mm] align-middle text-left leading-tight">Certification</td>
                <td className="border-[0.368pt] border-white py-[1.4mm] px-[2mm] align-middle leading-tight">
                  IEC62619/UN38.3/<br />
                  MSDS/DGM
                </td>
              </tr>

              <tr className="bg-[#cac9c8] text-[#231A16] font-bold text-left">
                <td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">
                  Protection
                </td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Circuit Breaker</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">Yes</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Fuse</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">Yes</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Voltage Protection</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">Yes</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Current Protection</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">Yes</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Temperature Protection</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">Yes</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Short Circuit Protection</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">Yes</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}


