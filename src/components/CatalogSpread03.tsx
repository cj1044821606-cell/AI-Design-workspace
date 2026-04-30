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
          'IPV-8K48T & IPV-11K48T',
          'IPV-3K24U Pro',
          'IPV-4K24U Pro & IPV-6K48U Pro',
          'IPV-8K48U & IPV-12K48U',
          'IHY-8KL3 & IHY-12KL3',
          'IHY-6K6L1C & IHY-12KL1C',
        ],
      },
      {
        title: 'On-Grid Inverter',
        items: [
          'IGT-12KTA & IGT-17KTA',
          'IGT-110KTA',
          'IGT-6KSA & IGT-8KSA & IGT-10KSA',
          'IGT-100KT-G1 & IGT-110KT-G1',
          'IGT-330KT-G1 & IGT-350KT-G1',
          'IGT-50KTA',
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
          'IPW-25100 & IPL-25200X',
          'IPL-51200H & IPL-51314H',
          'IPL-51200 & IPL-51280',
          'IPL-51628H',
          'IPL-51314Y',
          'IPW-51100 & IPL-51100A',
          'IPL-51200X',
          'IPX-51314SPT',
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
          'IESS-320T',
          'IESS-320ACT',
          'IESS-05K10U',
          'IESS-05K10N',
          'IESS-3K680N',
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
          'IHY-30KH3S & IHY-50KH3S',
          'IB-H30~70-X-G1',
          'IPX-51314SPT',
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
        items: ['410W/N', '550W/N', '590W/N', '610W/N', '585W/N', '620W/N'],
      },
    ],
  },
];

export default function CatalogSpread03() {
  return <CatalogDirectoryPage groups={groups} />;
}
