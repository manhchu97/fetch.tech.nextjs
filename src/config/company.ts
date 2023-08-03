import { PATH_CONFIG } from '@/routes/paths'

import { IClientService } from '@/types/company'

export const clientServices: IClientService[] = [
  {
    id: 'talent_acquisition',
    title: 'Talent acquisition',
    icon: '/images/company/Feature1.png',
    color: 'black',
    bgColor: '#D2E2ED',
    desc: 'Utilise your preferred talent for your projects.',
    url: PATH_CONFIG.services.view(1),
  },
  {
    id: 'services_management',
    title: 'Services management',
    icon: '/images/company/Feature3.png',
    color: 'white',
    bgColor: '#FF6847',
    desc: 'Run your remote team and leave the HR aspects to us.',
    url: PATH_CONFIG.services.view(2),
  },
  {
    id: 'payroll_and_compliances',
    title: 'Payroll and compliances',
    icon: '/images/company/Feature2.png',
    color: 'white',
    bgColor: '#17274E',
    desc: 'Experience a seamless contracting and payroll process.',
    url: PATH_CONFIG.services.view(3),
  },
  {
    id: 'full_suite_project_consultancy',
    title: 'Full-suite project consultancy',
    icon: '/images/company/Feature4.png',
    color: 'white',
    bgColor: '#FFBE16',
    desc: 'Enjoy carefully curated management for your project from start to finish.',
    url: PATH_CONFIG.services.view(4),
  },
]
