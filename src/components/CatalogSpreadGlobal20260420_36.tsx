import React from 'react';
import bgImage from '@/画册素材库/背景素材/画册-36-PV产品页背景.png';

export default function CatalogSpreadGlobal20260420_36() {
  return (
    <div className="w-[420mm] h-[297mm] bg-white relative overflow-hidden shadow-sm flex">
      <div className="design-group-wrapper absolute left-0 top-0 w-[420mm] h-[297mm] z-0">
        <div className="design-group-label">背景图</div>
        <img src={bgImage} alt="PV Product Background" className="w-full h-full object-cover" />
      </div>

      <div className="w-[210mm] h-full relative z-10">
        <div className="design-group-wrapper absolute left-[22.429mm] top-[15.316mm] w-[173mm] h-[0.553mm] bg-[#ED1651] z-10">
          <div className="design-group-label">顶部红线</div>
        </div>

        <div className="design-group-wrapper absolute left-[26mm] top-[20mm] z-10">
          <div className="design-group-label">婢堆勭垼妫</div>
          <h1 className="text-[#ED1651] text-[28pt] font-bold leading-none" style={{ fontFamily: '"Mark OT", sans-serif' }}>
            PV Modules-550/N
          </h1>
        </div>

        <div className="design-group-wrapper absolute left-[26mm] top-[32mm] z-10">
          <div className="design-group-label">附加说明</div>
          <p className="text-[#010202] text-[12pt] font-normal leading-none" style={{ fontFamily: '"MiSans", sans-serif' }}>
            N-Type Bifacial
          </p>
        </div>

        <div className="design-group-wrapper absolute left-[20.9mm] top-[165mm] flex items-center z-10 mt-[20px]">
          <div className="design-group-label">功率徽标</div>
          <div className="bg-[#ED1651] h-[11.2mm] px-4 flex items-center justify-center rounded-l-md z-20">
            <span className="text-white font-bold text-[16pt]" style={{ fontFamily: '"Mark OT", sans-serif' }}>550W</span>
          </div>
          <div className="bg-[#ACADB1] h-[11.2mm] px-4 flex items-center justify-center rounded-r-md -ml-2 pl-6 z-10">
            <span className="text-white font-bold text-[16pt]" style={{ fontFamily: '"Mark OT", sans-serif' }}>182*91mm</span>
          </div>
        </div>

        <div className="design-group-wrapper absolute left-[20.9mm] top-[185mm] z-10">
          <div className="design-group-label">Product Features 标题</div>
          <h2 className="text-[#ED1651] font-medium text-[31.621pt] leading-none tracking-tight mt-[10px]" style={{ fontFamily: '"MiSans", sans-serif' }}>
            Product Features
          </h2>
        </div>

        <div className="design-group-wrapper absolute left-[21.5mm] top-[202mm] w-[167.2mm] h-[0.4pt] bg-black z-10 mt-[10px]">
          <div className="design-group-label">标题下划线</div>
        </div>

        <div className="design-group-wrapper absolute left-[21.5mm] top-[208mm] w-[167.2mm] z-10">
          <div className="design-group-label">产品特性列表</div>
          <div className="grid grid-cols-2 gap-x-[10mm] gap-y-[8mm] mt-[30px]">
            <div className="flex items-start gap-[4mm]">
              <div className="w-[9.46mm] h-[9.46mm] bg-[#ED1651] rounded-[2mm] shrink-0 mt-1"></div>
              <div className="flex flex-col gap-[1mm]">
                <h3 className="text-[#010202] font-medium text-[12pt]" style={{ fontFamily: '"MiSans", sans-serif' }}>Low Temperature Impact</h3>
                <p className="text-[#5A5A5C] font-normal text-[8pt] leading-[1.4]" style={{ fontFamily: '"MiSans", sans-serif' }}>
                  Superior Pmax Temperature Coefficient (-0.30%/&deg;C)
                  <br />
                  Reducing Power Loss in High-heat Conditions
                </p>
              </div>
            </div>

            <div className="flex items-start gap-[4mm]">
              <div className="w-[9.46mm] h-[9.46mm] bg-[#ED1651] rounded-[2mm] shrink-0 mt-1"></div>
              <div className="flex flex-col gap-[1mm]">
                <h3 className="text-[#010202] font-medium text-[12pt]" style={{ fontFamily: '"MiSans", sans-serif' }}>Reduced LID/LeTID Losses</h3>
                <p className="text-[#5A5A5C] font-normal text-[8pt] leading-[1.4]" style={{ fontFamily: '"MiSans", sans-serif' }}>
                  Advanced Tech Minimizes Light/heat-induced
                  <br />
                  Degradation (LID/LeTID), Ensuring Stable Output
                </p>
              </div>
            </div>

            <div className="flex items-start gap-[4mm]">
              <div className="w-[9.46mm] h-[9.46mm] bg-[#ED1651] rounded-[2mm] shrink-0 mt-1"></div>
              <div className="flex flex-col gap-[1mm]">
                <h3 className="text-[#010202] font-medium text-[12pt]" style={{ fontFamily: '"MiSans", sans-serif' }}>Longer Low-Light Power</h3>
                <p className="text-[#5A5A5C] font-normal text-[8pt] leading-[1.4]" style={{ fontFamily: '"MiSans", sans-serif' }}>
                  Generates Electricity 1 Hour Longer at Dawn/Dusk
                  <br />
                  Maximizing Daily Energy Yield
                </p>
              </div>
            </div>

            <div className="flex items-start gap-[4mm]">
              <div className="w-[9.46mm] h-[9.46mm] bg-[#ED1651] rounded-[2mm] shrink-0 mt-1"></div>
              <div className="flex flex-col gap-[1mm]">
                <h3 className="text-[#010202] font-medium text-[12pt]" style={{ fontFamily: '"MiSans", sans-serif' }}>Extreme Weather Resilience</h3>
                <p className="text-[#5A5A5C] font-normal text-[8pt] leading-[1.4]" style={{ fontFamily: '"MiSans", sans-serif' }}>
                  Certified Mechanical Strength: 2400Pa Wind Load,
                  <br />
                  5400Pa Snow Load, Guaranteeing Durability
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[210mm] h-full relative z-10">
        <div className="design-group-wrapper absolute left-[38.151mm] top-[15.63mm] w-[150.099mm] z-10">
          <div className="design-group-label">参数表格</div>
          <table className="w-full border-collapse text-[6pt] text-center" style={{ fontFamily: '"Mark OT", sans-serif' }}>
            <colgroup>
              <col style={{ width: '60mm' }} />
              <col style={{ width: '45mm' }} />
              <col style={{ width: '45mm' }} />
            </colgroup>
            <tbody>
              <tr className="bg-[#9e9e9e] text-white font-bold">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">Module Type</td>
                <td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">ISP-550W</td>
              </tr>

              <tr className="bg-[#cac9c8] text-[#231A16] font-bold text-left">
                <td colSpan={3} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">Electrical Performance Parameters</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Test Condition</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">STC</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">NMOT</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Rated Peak Power - Pmax (Wp)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">550</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">413</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Max. Power Voltage - Vmp (V)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">41.50</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">38.99</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Max. Power Current - Imp (A)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">13.26</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">10.61</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Open Circuit Voltage - Voc (V)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">50.21&plusmn;3%</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">47.70&plusmn;3%</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Short Circuit Current - Isc (A)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">14.00&plusmn;3%</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">11.30&plusmn;3%</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Module Efficiency (%)</td>
                <td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">21.29</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td colSpan={3} className="border-[0.368pt] border-white py-[2mm] px-[2mm] align-middle text-left leading-tight text-[5pt]">
                  STC - Irradiance 1000W/m&sup2;, Cell Temp. 25&deg;C, Air Mass AM 1.5
                  <br />
                  NMOT - Irradiance 800W/m&sup2;, Cell Temp. 20&deg;C, Air Mass AM 1.5 Wind Speed 1m/s
                </td>
              </tr>

              <tr className="bg-[#cac9c8] text-[#231A16] font-bold text-left">
                <td colSpan={3} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">Operating Parameters</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Max. System Voltage (Vdc)</td>
                <td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">1500</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Operational Temp (&deg;C)</td>
                <td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">-40~+85</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Max. Series Fuse Rating (A)</td>
                <td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">20</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Nominal Module Operating Temp (&deg;C)</td>
                <td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">45&plusmn;2</td>
              </tr>

              <tr className="bg-[#cac9c8] text-[#231A16] font-bold text-left">
                <td colSpan={3} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">Temperature Coefficient</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Temp Coefficient of Pmax</td>
                <td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">-0.300%/&deg;C</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Temp Coefficient of Voc</td>
                <td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">-0.260%/&deg;C</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Temp Coefficient of Isc</td>
                <td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">+0.047%/&deg;C</td>
              </tr>

              <tr className="bg-[#cac9c8] text-[#231A16] font-bold text-left">
                <td colSpan={3} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">Mechanical Characteristics</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Cell Type (mm)</td>
                <td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">182*91 N - Type Mono</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Number of Cells</td>
                <td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">144 (12*12)</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Module Dimensions (H*W*D, mm)</td>
                <td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">2278*1134*30</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Weight (kg)</td>
                <td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">27.40</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Bifacial Glass Front Glass (mm)</td>
                <td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">3.2mm AR Coating Tempered Glass</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Frame</td>
                <td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">Anodized Aluminium Alloy (Silver)</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Junction Box</td>
                <td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">IP68, 1500Vdc, 3 Schottky Bypass Diodes</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Cables</td>
                <td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-[5pt]">4.0mm&sup2; Positive (+) : 350mm, Negative (-) : 350mm, Or Customized Length</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Connector</td>
                <td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">MC4</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Snow Load/Wind Load</td>
                <td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">5400Pa/2400Pa</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Class of Safety Protection</td>
                <td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">Class II</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">IEC Component Fire Rating</td>
                <td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">Class C</td>
              </tr>

              <tr className="bg-[#cac9c8] text-[#231A16] font-bold text-left">
                <td colSpan={3} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">Packing Standard 40ft (HQ)</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Number of Modules Per Pallet</td>
                <td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">37</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Number of Pallets Per Container</td>
                <td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">20</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Number of Modules Per Container</td>
                <td colSpan={2} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">740</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}


