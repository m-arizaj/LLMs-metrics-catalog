import React from 'react';

type Ref = {
  id: string;  
  url: string;  
};

const REFS: Record<string, Ref> = {
  '1': {
    id: '1',
    url: 'https://doi.org/10.1109/SWC62898.2024.00231',
  },
  '2': {
    id: '2',
    url: 'https://doi.org/10.48550/arXiv.2404.09135',
  },
  '3': {
    id: '3',
    url: 'https://elib.dlr.de/217570/1/Bektas_Ali_MA.pdf',
  },
  '4': {
    id: '4',
    url: 'https://doi.org/10.48550/arXiv.2211.09110',
  },
  '5': {
    id: '5',
    url: 'https://doi.org/10.48550/arXiv.2310.19736',
  },
  '6': {
    id: '6',
    url: 'https://doi.org/10.48550/arXiv.2308.10620',
  },
  '7': {
    id: '7',
    url: 'https://doi.org/10.48550/arXiv.2505.08903',
  },
  '8': {
    id: '8',
    url: 'https://doi.org/10.48550/arXiv.2311.07397',
  },
  '9': {
    id: '9',
    url: 'https://doi.org/10.48550/arXiv.2307.03109',
  },
  '10': {
    id: '10',
    url: 'https://doi.org/10.48550/arXiv.2408.16498',
  },
  '11': {
    id: '11',
    url: 'https://doi.org/10.48550/arXiv.2505.20854',
  },
  '12': {
    id: '12',
    url: 'https://doi.org/10.48550/arXiv.2304.14317',
  },
  '13': {
    id: '13',
    url: 'https://doi.org/10.48550/arXiv.2403.08604',
  },
  '14': {
    id: '14',
    url: 'https://doi.org/10.48550/arXiv.2310.06770',
  },
  '15': {
    id: '15',
    url: 'https://doi.org/10.48550/arXiv.2206.04615',
  },
  '16': {
    id: '16',
    url: 'https://doi.org/10.1162/coli_a_00524',
  },
  '17': {
    id: '17',
    url: 'https://doi.org/10.56038/oprd.v4i1.444',
  },
  '18': {
    id: '18',
    url: 'https://doi.org/10.56155/978-81-955020-9-7-24',
  },
  '19': {
    id: '19',
    url: 'https://doi.org/10.48550/arXiv.2406.12655',
  },
  '20': {
    id: '20',
    url: 'https://doi.org/10.48550/arXiv.2305.01210',
  },
  '21': {
    id: '21',
    url: 'https://doi.org/10.4218/etrij.2023-0357',
  },
  '22': {
    id: '22',
    url: 'https://doi.org/10.48550/arXiv.2401.06401',
  },
  '23': {
    id: '23',
    url: 'https://doi.org/10.48550/arXiv.2212.10264',
  },
  '24': {
    id: '24',
    url: 'https://doi.org/10.48550/arXiv.2302.05527',
  },
  '25': {
    id: '25',
    url: 'https://doi.org/10.1016/j.jss.2023.111741',
  },
  '26': {
    id: '26',
    url: 'https://doi.org/10.48550/arXiv.2406.06902',
  },
  '27': {
    id: '27',
    url: 'https://doi.org/10.18653/v1/2024.findings-emnlp.303',
  },
  '28': {
    id: '28',
    url: 'https://doi.org/10.1007/s42979-025-04241-5',
  },
  '29': {
    id: '29',
    url: 'https://doi.org/10.1007/s10009-025-00798-x',
  },
  '30': {
    id: '30',
    url: 'https://doi.org/10.1007/s10710-024-09494-2',
  },
  '31': {
    id: '31',
    url: 'https://doi.org/10.48550/arXiv.2107.03374',
  },
  '32': {
    id: '32',
    url: 'https://doi.org/10.48550/arXiv.2102.04664',
  },
  '33': {
    id: '33',
    url: 'https://doi.org/10.48550/arXiv.2410.12381',
  },
  '34': {
    id: '34',
    url: 'https://doi.org/10.48550/arXiv.2108.07732',
  },
  '35': {
    id: '35',
    url: 'https://doi.org/10.48550/arXiv.2208.08227',
  },
  '36': {
    id: '36',
    url: 'https://doi.org/10.48550/arXiv.2404.00599',
  },
  '37': {
    id: '37',
    url: 'https://doi.org/10.48550/arXiv.2301.09043',
  },
  '38': {
    id: '38',
    url: 'https://doi.org/10.1145/3650105.3652295',
  },
  '39': {
    id: '39',
    url: 'https://doi.org/10.3390/digital4010005',
  },
  '40': {
    id: '40',
    url: 'https://doi.org/10.18653/v1/2024.emnlp-main.1118',
  },
  '41': {
    id: '41',
    url: 'https://doi.org/10.48550/arXiv.2408.06450',
  },
  '42': {
    id: '42',
    url: 'https://doi.org/10.48550/arXiv.2411.11908',
  },
  '43': {
    id: '43',
    url: 'https://doi.org/10.18653/v1/2021.emnlp-main.685',
  },
  '44': {
    id: '44',
    url: 'https://doi.org/10.48550/arXiv.2207.11280',
  },
  '45': {
    id: '45',
    url: 'https://doi.org/10.48550/arXiv.2301.03988',
  },
  '46': {
    id: '46',
    url: 'https://doi.org/10.48550/arXiv.2303.17568',
  },
  '47': {
    id: '47',
    url: 'https://doi.org/10.48550/arXiv.2206.08474',
  },
  '48': {
    id: '48',
    url: 'https://doi.org/10.1007/s41019-025-00296-9',
  },
  '49': {
    id: '49',
    url: 'https://doi.org/10.1007/s11704-024-40231-1',
  },
  '50': {
    id: '50',
    url: 'https://doi.org/10.1007/s11432-023-4127-5',
  },
  '51': {
    id: '51',
    url: 'https://doi.org/10.1007/s44443-025-00074-7',
  },
  '52': {
    id: '52',
    url: 'https://doi.org/10.1007/s10515-024-00451-y',
  },
  '53': {
    id: '53',
    url: 'https://doi.org/10.1007/s10462-024-10888-y',
  },
  '54': {
    id: '54',
    url: 'https://doi.org/10.48550/arXiv.2509.09614',
  },
  '55': {
    id: '55',
    url: 'https://doi.org/10.48550/arXiv.2506.10833',
  },
  '56': {
    id: '56',
    url: 'https://doi.org/10.1007/s43681-025-00721-9',
  },
  '57': {
    id: '57',
    url: 'https://doi.org/10.1109/ACCESS.2024.3482107',
  },
  '58': {
    id: '58',
    url: 'https://doi.org/10.1109/ACCESS.2024.3403858',
  },
  '59': {
    id: '59',
    url: 'https://doi.org/10.1109/ACCESS.2024.3484947',
  },
  '60': {
    id: '60',
    url: 'https://doi.org/10.1109/ACCESS.2025.3553870',
  },
  '61': {
    id: '61',
    url: 'https://doi.org/10.1109/ACCESS.2025.3601206',
  },
  '62': {
    id: '62',
    url: 'https://doi.org/10.1016/j.csi.2024.103942',
  },
  '63': {
    id: '63',
    url: 'https://doi.org/10.1145/3597503.3639219',
  },
  '64': {
    id: '64',
    url: 'https://doi.org/10.1109/TSE.2023.3334955',
  },
  '65': {
    id: '65',
    url: 'https://doi.org/10.1007/s10664-025-10687-1',
  },
  '66': {
    id: '66',
    url: 'https://doi.org/10.48550/arXiv.2506.01793',
  },
  '67': {
    id: '67',
    url: 'https://doi.org/10.48550/arXiv.2306.04675',
  },
  '68': {
    id: '68',
    url: 'https://doi.org/10.48550/arXiv.2509.12395',
  },
};

export function ReferencesIndex({ ids }: { ids: string[] }) {
  return (
    <p>
      {ids.map((key, idx) => {
        const ref = REFS[key];
        if (!ref) return null;
        return (
          <React.Fragment key={key}>
            <a href={ref.url} target="_blank" rel="noreferrer">
              {ref.id}
            </a>
            {idx < ids.length - 1 ? ', ' : null}
          </React.Fragment>
        );
      })}
    </p>
  );
}