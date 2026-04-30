import React from 'react';
import { ProductImageEditor } from './ProductImageEditor';
import bgImage from '@/画册素材库/背景素材/画册-32-产品页左上角背景.png';
import productImage from '@/画册素材库/产品素材/Rack Battery Energy Storage System.png';

export default function CatalogSpread32() {
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
            componentName="CatalogSpread32"
            initialX={0} /* IMAGE_TRANSFORM_X */
            initialY={0} /* IMAGE_TRANSFORM_Y */
            initialScale={1} /* IMAGE_TRANSFORM_SCALE */
            defaultHeight="100%"
            defaultMarginLeft="0"
          />
        </div>

        {/* 功率徽标 */}
        <div className="design-group-wrapper absolute left-[20.9mm] top-[169.83mm] flex items-center z-10">
          <div className="design-group-label">功率徽标</div>
          <div className="bg-[#ED1651] h-[11.2mm] px-4 flex items-center justify-center rounded-md z-20">
            <span className="text-white font-bold text-[16pt]" style={{ fontFamily: '"Mark OT", sans-serif' }}>Rack BESS</span>
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
                  High Quality & Long Lifespan
                </h3>
                <p className="text-[#5A5A5C] font-normal text-[8pt] leading-[1.4]" style={{ fontFamily: '"MiSans", sans-serif' }}>
                  Grade-A LiFePO<sub>4</sub> cells<br/>
                  Cycle Life 6,000
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start gap-[4mm]">
              <div className="w-[9.46mm] h-[9.46mm] bg-[#ED1651] rounded-[2mm] shrink-0 mt-1"></div>
              <div className="flex flex-col gap-[1mm]">
                <h3 className="text-[#010202] font-medium text-[12pt]" style={{ fontFamily: '"MiSans", sans-serif' }}>
                  Intelligent Battery Management<br/>System (BMS)
                </h3>
                <p className="text-[#5A5A5C] font-normal text-[8pt] leading-[1.4]" style={{ fontFamily: '"MiSans", sans-serif' }}>
                  50+ Protection Algorithms for Safety and Longer Lifespan<br/>
                  Connects 14 Batteries in Series<br/>
                  Supports Black Restart Function
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start gap-[4mm]">
              <div className="w-[9.46mm] h-[9.46mm] bg-[#ED1651] rounded-[2mm] shrink-0 mt-1"></div>
              <div className="flex flex-col gap-[1mm]">
                <h3 className="text-[#010202] font-medium text-[12pt]" style={{ fontFamily: '"MiSans", sans-serif' }}>
                  System Flexible Scalability
                </h3>
                <p className="text-[#5A5A5C] font-normal text-[8pt] leading-[1.4]" style={{ fontFamily: '"MiSans", sans-serif' }}>
                  Supports 6-14 Battery Modules in Series<br/>
                  and 4 in Parallel
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex items-start gap-[4mm]">
              <div className="w-[9.46mm] h-[9.46mm] bg-[#ED1651] rounded-[2mm] shrink-0 mt-1"></div>
              <div className="flex flex-col gap-[1mm]">
                <h3 className="text-[#010202] font-medium text-[12pt]" style={{ fontFamily: '"MiSans", sans-serif' }}>
                  Smart Operation
                </h3>
                <p className="text-[#5A5A5C] font-normal text-[8pt] leading-[1.4]" style={{ fontFamily: '"MiSans", sans-serif' }}>
                  Remote Monitor via itel Energy Cloud/APP<br/>
                  Built-in User-friendly LCD Display
                </p>
              </div>
            </div>

            {/* Feature 5 */}
            <div className="flex items-start gap-[4mm]">
              <div className="w-[9.46mm] h-[9.46mm] bg-[#ED1651] rounded-[2mm] shrink-0 mt-1"></div>
              <div className="flex flex-col gap-[1mm]">
                <h3 className="text-[#010202] font-medium text-[12pt]" style={{ fontFamily: '"MiSans", sans-serif' }}>
                  Smart Protection
                </h3>
                <p className="text-[#5A5A5C] font-normal text-[8pt] leading-[1.4]" style={{ fontFamily: '"MiSans", sans-serif' }}>
                  Automatically Manages Charge/Discharge and<br/>
                  Cell Balancing Protects Against Over-discharge/<br/>
                  Charge/Current and Extreme Temperatures
                </p>
              </div>
            </div>

            {/* Feature 6 */}
            <div className="flex items-start gap-[4mm]">
              <div className="w-[9.46mm] h-[9.46mm] bg-[#ED1651] rounded-[2mm] shrink-0 mt-1"></div>
              <div className="flex flex-col gap-[1mm]">
                <h3 className="text-[#010202] font-medium text-[12pt]" style={{ fontFamily: '"MiSans", sans-serif' }}>
                  Quick Installation
                </h3>
                <p className="text-[#5A5A5C] font-normal text-[8pt] leading-[1.4]" style={{ fontFamily: '"MiSans", sans-serif' }}>
                  Modular Rack System for Fast Setup
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
          <table className="w-full border-collapse text-[5pt] text-center" style={{ fontFamily: '"Mark OT", sans-serif' }}>
            <tbody>
              {/* Header 1 */}
              <tr className="bg-[#9e9e9e] text-white font-bold">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left" colSpan={7}>Rack Battery Energy Storage System</td>
              </tr>

              {/* Main Parameters */}
              <tr className="bg-[#cac9c8] text-[#231A16] font-bold">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left" colSpan={7}>Main Parameters</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left w-[28%]">Battery Type</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle" colSpan={6}>LiFePO<sub>4</sub></td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Nominal Voltage (V)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle" colSpan={6}>51.2</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Nominal Capacity (Ah)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle" colSpan={6}>100</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Nominal Energy (kWh)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle" colSpan={6}>5.12</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Battery Operating Voltage Range (V)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle" colSpan={6}>48~57.6</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Controller Operating Voltage Range (V)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle" colSpan={6}>288~864</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Max. Series Number</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle" colSpan={6}>15</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Max. Parallel Number</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle" colSpan={6}>4</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Max. Continuous Charge Current (A)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle" colSpan={6}>100</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Peak Charge Current</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle" colSpan={6}>110A@1s</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Max. Continuous Discharge Current (A)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle" colSpan={6}>100</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Peak Discharge Current</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle" colSpan={6}>110A@3s</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Recommended Depth of Discharge</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle" colSpan={6}>90%</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Cycle Life of Battery Cell</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle" colSpan={6}>&gt;6000@25°C, 0.5C/0.5C, 80%DOD, 70%EOL</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Dimensions (D*W*H, mm)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle" colSpan={6}>450*510*153</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Net Weight (kg)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle" colSpan={6}>49</td>
              </tr>

              {/* General Parameters */}
              <tr className="bg-[#cac9c8] text-[#231A16] font-bold">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left" colSpan={7}>General Parameters</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Communication Port</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle" colSpan={6}>CAN/RS485</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Operating Temperature/Charge (°C)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle" colSpan={6}>0~+55</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Operating Temperature/Discharge (°C)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle" colSpan={6}>-20~+55</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Recommend Operating Temperature (°C)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle" colSpan={6}>15~+35</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Storage Temperature (°C)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle" colSpan={6}>0~+35</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Humidity</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle" colSpan={6}>10%~95%</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Altitude (m)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle" colSpan={6}>2000</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Ingress Protection</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle" colSpan={6}>IP20</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Cooling Method</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle" colSpan={6}>Natural Cooling</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Shell Material</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle" colSpan={6}>Metal</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">LED Display</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle" colSpan={6}>/</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Certification</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle" colSpan={6}>IEC62619/UN38.3/MSDS/DGM</td>
              </tr>

              {/* Protection */}
              <tr className="bg-[#cac9c8] text-[#231A16] font-bold">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left" colSpan={7}>Protection</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Circuit Breaker</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle" colSpan={6}>Yes</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Fuse</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle" colSpan={6}>Yes</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Voltage Protection</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle" colSpan={6}>Yes</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Current Protection</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle" colSpan={6}>Yes</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Temperature Protection</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle" colSpan={6}>Yes</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Short Circuit Protection</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle" colSpan={6}>Yes</td>
              </tr>

              {/* Recommended Configuration */}
              <tr className="bg-[#9e9e9e] text-white font-bold">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left" colSpan={7}>Recommended Configuration</td>
              </tr>
              <tr className="bg-[#cac9c8] text-[#231A16] font-bold">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Module</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[1mm] align-middle w-[12%]">IB-H30-X-G1</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[1mm] align-middle w-[12%]">IB-H40-X-G1</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[1mm] align-middle w-[12%]">IB-H50-X-G1</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[1mm] align-middle w-[12%]">IB-H60-X-G1</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[1mm] align-middle w-[12%]">IB-H70-X-G1</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[1mm] align-middle w-[12%]">IB-H70-X-G1</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Module Quantity in Series</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[1mm] align-middle">6</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[1mm] align-middle">8</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[1mm] align-middle">10</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[1mm] align-middle">12</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[1mm] align-middle">14</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[1mm] align-middle">15 (Max.)</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">System Nominal Voltage (V)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[1mm] align-middle">307.2</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[1mm] align-middle">409.6</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[1mm] align-middle">512</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[1mm] align-middle">614.4</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[1mm] align-middle">716.8</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[1mm] align-middle">768</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">System Voltage Range (V)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[1mm] align-middle">259.2~345.6</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[1mm] align-middle">345.6~460.8</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[1mm] align-middle">432~576</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[1mm] align-middle">518.4~691.2</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[1mm] align-middle">604.8~806.4</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[1mm] align-middle">648~864</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">System Nominal Energy (kWh)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[1mm] align-middle">30.72</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[1mm] align-middle">40.96</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[1mm] align-middle">51.2</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[1mm] align-middle">61.44</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[1mm] align-middle">71.68</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[1mm] align-middle">76.8</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Maximum Continuous Power (kW)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[1mm] align-middle">30.72</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[1mm] align-middle">40.96</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[1mm] align-middle">51.2</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[1mm] align-middle">61.44</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[1mm] align-middle">71.68</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[1mm] align-middle">76.8</td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Charge/Discharge Current (A)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[1mm] align-middle" colSpan={6}>
                  50 (Recommended)<br/>100 (Maximum)
                </td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Operating Temperature (°C)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[1mm] align-middle" colSpan={6}>
                  Charge: 0~55<br/>Discharge: -20~+55
                </td>
              </tr>
              <tr className="bg-[#dbdcdb] text-[#231A16]">
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[2mm] align-middle text-left">Net Weight (kg)</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[1mm] align-middle">312.5</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[1mm] align-middle">410.5</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[1mm] align-middle">508.5</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[1mm] align-middle">606.5</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[1mm] align-middle">704.5</td>
                <td className="border-[0.368pt] border-white h-[4.551mm] px-[1mm] align-middle">772</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

