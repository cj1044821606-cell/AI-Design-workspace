import React from 'react';
import bgImage from '@/画册素材库/背景素材/画册-38-PV产品页背景.png';

export default function CatalogSpreadGlobal20260420_38() {
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
            PV Modules-610/N
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
            <span className="text-white font-bold text-[16pt]" style={{ fontFamily: '"Mark OT", sans-serif' }}>610W</span>
          </div>
          <div className="bg-[#ACADB1] h-[11.2mm] px-4 flex items-center justify-center rounded-r-md -ml-2 pl-6 z-10">
            <span className="text-white font-bold text-[16pt]" style={{ fontFamily: '"Mark OT", sans-serif' }}>182*105mm</span>
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
            <div className="flex items-center gap-[4mm]">
              <div className="w-[9.46mm] h-[9.46mm] bg-[#ED1651] rounded-[2mm] shrink-0"></div>
              <p className="text-[#5A5A5C] font-normal text-[10pt] leading-[1.4]" style={{ fontFamily: '"MiSans", sans-serif' }}>
                Excellent Temperature Coefficient (Pmax): -0.29/&deg;C
              </p>
            </div>

            <div className="flex items-center gap-[4mm]">
              <div className="w-[9.46mm] h-[9.46mm] bg-[#ED1651] rounded-[2mm] shrink-0"></div>
              <p className="text-[#5A5A5C] font-normal text-[10pt] leading-[1.4]" style={{ fontFamily: '"MiSans", sans-serif' }}>
                  Excellent Low-Light Performance:
                  <br />
                  Extended Power Generation up to 1h also in the Morning and Evening
              </p>
            </div>

            <div className="flex items-center gap-[4mm]">
              <div className="w-[9.46mm] h-[9.46mm] bg-[#ED1651] rounded-[2mm] shrink-0"></div>
              <p className="text-[#5A5A5C] font-normal text-[10pt] leading-[1.4]" style={{ fontFamily: '"MiSans", sans-serif' }}>
                Has Lower LID/LeTID Attenuation
              </p>
            </div>

            <div className="flex items-center gap-[4mm]">
              <div className="w-[9.46mm] h-[9.46mm] bg-[#ED1651] rounded-[2mm] shrink-0"></div>
              <p className="text-[#5A5A5C] font-normal text-[10pt] leading-[1.4]" style={{ fontFamily: '"MiSans", sans-serif' }}>
                With a Bifacial Gain of 80%~90%, Extra Rear-side Power Output Greatly Reduces LCOE, as the Panel Backside Captures More Reflected Light.
              </p>
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
              <col style={{ width: '30mm' }} />
              <col style={{ width: '30mm' }} />
              <col style={{ width: '30mm' }} />
            </colgroup>
            <tbody>
              <tr className="bg-[#9e9e9e] text-white font-bold">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">Module Type</td>
                <td colSpan={3} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">ISP-610W</td>
              </tr>

              <tr className="bg-[#cac9c8] text-[#231A16] font-bold text-left">
                <td colSpan={4} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">Electrical Performance Parameters</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Test Condition</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">STC</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">NMOT</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">BNPI</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Rated Peak Power - Pmax (Wp)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">610</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">462</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">676</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Max. Power Voltage - Vmp (V)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">41.38</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">39.15</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">41.5</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Max. Power Current - Imp (A)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">14.74</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">11.80</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">16.29</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Open Circuit Voltage - Voc (V)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">48.68&plusmn;3%</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">46.05&plusmn;3%</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">48.83&plusmn;3%</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Short Circuit Current - Isc (A)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">15.66&plusmn;3%</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">12.49&plusmn;3%</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">17.30&plusmn;3%</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Module Efficiency (%)</td>
                <td colSpan={3} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">22.58</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td colSpan={4} className="border-[0.368pt] border-white py-[2mm] px-[2mm] align-middle text-left leading-tight text-[5pt]">
                  STC - Irradiance 1000W/m&sup2;, Cell Temp. 25&deg;C, Air Mass AM 1.5
                  <br />
                  NMOT - Irradiance 800W/m&sup2;, Cell Temp. 20&deg;C, Air Mass AM 1.5 Wind Speed 1m/s
                  <br />
                  BNPI - Irradiance 1000 W/m&sup2;, Back Irradiance 135 W/m&sup2;, Cell Temp 25&deg;C, Air Mass AM1.5
                </td>
              </tr>

              <tr className="bg-[#cac9c8] text-[#231A16] font-bold text-left">
                <td colSpan={4} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">Operating Parameters</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Max. System Voltage (Vdc)</td>
                <td colSpan={3} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">1500</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Operational Temp (&deg;C)</td>
                <td colSpan={3} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">-40~+85</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Max. Series Fuse Rating (A)</td>
                <td colSpan={3} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">28</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Nominal Module Operating Temp (&deg;C)</td>
                <td colSpan={3} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">45&plusmn;2</td>
              </tr>

              <tr className="bg-[#cac9c8] text-[#231A16] font-bold text-left">
                <td colSpan={4} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">Temperature Coefficient</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Temp Coefficient of Pmax</td>
                <td colSpan={3} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">-0.290%/&deg;C</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Temp Coefficient of Voc</td>
                <td colSpan={3} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">-0.250%/&deg;C</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Temp Coefficient of Isc</td>
                <td colSpan={3} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">+0.045%/&deg;C</td>
              </tr>

              <tr className="bg-[#cac9c8] text-[#231A16] font-bold text-left">
                <td colSpan={4} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">Mechanical Characteristics</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Cell Type (mm)</td>
                <td colSpan={3} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">182*105 N - Type Mono</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Number of Cells</td>
                <td colSpan={3} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">132 (12*11)</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Module Dimensions (H*W*D, mm)</td>
                <td colSpan={3} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">2382*1134*30</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Weight (kg)</td>
                <td colSpan={3} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">32.40</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Bifacial Glass Front Glass (mm)</td>
                <td colSpan={3} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">2.0 AR Coating Tempered Glass</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Bifacial Glass Back Glass (mm)</td>
                <td colSpan={3} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">2.0 Glazed Glass</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Frame</td>
                <td colSpan={3} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">Anodized Aluminium Alloy (Silver)</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Junction Box</td>
                <td colSpan={3} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">IP68, 1500Vdc, 3 Schottky Bypass Diodes</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Cables</td>
                <td colSpan={3} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-[5pt]">4.0mm&sup2; Positive (+) : 300mm, Negative (-) : 300mm, Or Customized Length</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Connector</td>
                <td colSpan={3} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">MC4</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Snow Load/Wind Load</td>
                <td colSpan={3} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">5400Pa/2400Pa</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Class of Safety Protection</td>
                <td colSpan={3} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">Class II</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">IEC Component Fire Rating</td>
                <td colSpan={3} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">Class C</td>
              </tr>

              <tr className="bg-[#cac9c8] text-[#231A16] font-bold text-left">
                <td colSpan={4} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">Packing Standard 40ft (HQ)</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Number of Modules Per Pallet</td>
                <td colSpan={3} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">37</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Number of Pallets Per Container</td>
                <td colSpan={3} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">20</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Number of Modules Per Container</td>
                <td colSpan={3} className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle">740</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}


