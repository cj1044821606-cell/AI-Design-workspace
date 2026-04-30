import React from 'react';
import icon1 from '@/画册素材库/背景素材/画册-03-1-产品icon.png';
import icon2 from '@/画册素材库/背景素材/画册-03-2-产品icon.png';
import icon3 from '@/画册素材库/背景素材/画册-03-3-产品icon.png';
import icon4 from '@/画册素材库/背景素材/画册-03-4-产品icon.png';
import icon5 from '@/画册素材库/背景素材/画册-03-5-产品icon.png';
import CatalogDirectoryPage, { type DirectoryGroup } from './CatalogDirectoryPage';

const groups: DirectoryGroup[] = [
  {
    key: 'inverter',
    title: 'Inverter',
    icon: icon1,
    iconAlt: 'Inverter Icon',
    iconWidthClass: 'w-[20mm]',
    iconOffsetClass: 'ml-[4.06mm]',
    sections: [
      {
        title: 'Hybrid Inverter',
        items: [
          { label: 'IPV-1K612U', pageLabel: 'P10' },
          { label: 'IPV-3K24U Pro', pageLabel: 'P12' },
          { label: 'IPV-4K24U Pro & IPV-6K48U Pro', pageLabel: 'P14' },
          { label: 'IHY-6K6L1C & IHY-12KL1C', pageLabel: 'P16' },
          { label: 'IPV-8K48T & IPV-11K48T', pageLabel: 'P18' },
          { label: 'IPV-8K48U & IPV-12K48U', pageLabel: 'P20' },
          { label: 'IHY-8KL3 & IHY-12KL3', pageLabel: 'P22' },
        ],
      },
      {
        title: 'On-Grid Inverter',
        items: [
          { label: 'IGT-6KSA & IGT-8KSA & IGT-10KSA', pageLabel: 'P24' },
          { label: 'IGT-12KTA & IGT-17KTA', pageLabel: 'P26' },
          { label: 'IGT-50KTA', pageLabel: 'P28' },
          { label: 'IGT-110KTA', pageLabel: 'P30' },
        ],
      },
    ],
  },
  {
    key: 'battery',
    title: 'Battery',
    icon: icon2,
    iconAlt: 'Battery Icon',
    iconWidthClass: 'w-[20mm]',
    iconOffsetClass: 'ml-[4.06mm]',
    sections: [
      {
        items: [
          { label: 'IPL-51628H', pageLabel: 'P34' },
          { label: 'IPL-51200H & IPL-51314H', pageLabel: 'P36' },
          { label: 'IPL-51314Y', pageLabel: 'P38' },
          { label: 'IPX-51314SPT', pageLabel: 'P40' },
          { label: 'IPL-51200X', pageLabel: 'P42' },
          { label: 'IPW-51100 & IPL-51100A', pageLabel: 'P44' },
          { label: 'IPW-25100 & IPL-25200X', pageLabel: 'P46' },
          { label: 'IPB-12100', pageLabel: 'P48' },
        ],
      },
    ],
  },
  {
    key: 'all-in-one',
    title: 'All-in-One',
    icon: icon3,
    iconAlt: 'All-in-One Icon',
    iconWidthClass: 'w-[20mm]',
    iconOffsetClass: 'ml-[4.06mm]',
    sections: [
      {
        items: [
          { label: 'IESS-320T', pageLabel: 'P52' },
          { label: 'IESS-320ACT', pageLabel: 'P54' },
          { label: 'IESS-05K10U', pageLabel: 'P56' },
          { label: 'IESS-05K10N', pageLabel: 'P58' },
          { label: 'IESS-3K680N', pageLabel: 'P60' },
        ],
      },
    ],
  },
  {
    key: 'ci-ess',
    title: 'C&I ESS',
    icon: icon4,
    iconAlt: 'C&I ESS Icon',
    iconWidthClass: 'w-[28.392mm]',
    iconHeightClass: 'h-[21.155mm]',
    sections: [
      {
        items: [
          { label: 'IHY-15/20/25/30KH3-G1', pageLabel: 'P64' },
          { label: 'IHY-50KH3S', pageLabel: 'P66' },
          { label: 'IGT-40KT-G1 & IGT-50KT-G1', pageLabel: 'P68' },
          { label: 'IHY-75/100/125KH3-G1', pageLabel: 'P70' },
          { label: 'IGT-100KT-G1 & IGT-110KT-G1', pageLabel: 'P72' },
          { label: 'IGT-330KT-G1 & IGT-350KT-G1', pageLabel: 'P74' },
          { label: 'IB-H30~70-X-G1', pageLabel: 'P76' },
        ],
      },
    ],
  },
  {
    key: 'pv-modules',
    title: 'PV Modules',
    icon: icon5,
    iconAlt: 'PV Modules Icon',
    iconWidthClass: 'w-[20mm]',
    iconOffsetClass: 'ml-[4.06mm]',
    sections: [
      {
        items: [
          { label: '585W/N', pageLabel: 'P80' },
          { label: '590W/N', pageLabel: 'P82' },
          { label: '610W/N', pageLabel: 'P84' },
          { label: '620W/N', pageLabel: 'P86' },
        ],
      },
    ],
  },
];

export default function CatalogSpreadGlobal20260420_03() {
  return <CatalogDirectoryPage groups={groups} listTopMm={10} />;
}
