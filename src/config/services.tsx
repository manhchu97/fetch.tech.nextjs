import { paramCase } from 'param-case'

import { fDateDuration } from '@/utils/formatTime'

interface ServiceTypeProps {
  [name: string]: string
}

export const SERVICE_TYPE: ServiceTypeProps = {
  TALENT_ACQUISITION: '1',
  MANAGEMENT: '2',
  PAYROLL_COMPLIANCES: '3',
  FULL_SUITE_PROJECT_CONSULTANCY: '4',
}

export const HEADER_CONFIG = [
  {
    type: SERVICE_TYPE.TALENT_ACQUISITION,
    render: () => ({
      title: 'Talent acquisition',
      subTitle: 'Utilise your preferred talent for your projects.',
      imageSource: '/images/service/ServiceTheme1.png',
      className: 'talent-acquisition-service-container',
      imgWidth: 432,
      imgHeight: 417,
    }),
  },
  {
    type: SERVICE_TYPE.MANAGEMENT,
    render: () => ({
      title: 'Service management',
      subTitle: 'Run your remote team and leave the HR aspects to us.',
      imageSource: '/images/service/ServiceTheme2.png',
      className: 'management-service-container',
      imgWidth: 361,
      imgHeight: 394,
    }),
  },
  {
    type: SERVICE_TYPE.PAYROLL_COMPLIANCES,
    render: () => ({
      title: 'Payroll and compliances',
      subTitle: 'Experience a seamless contracting and payroll process.',
      imageSource: '/images/service/ServiceTheme3.png',
      className: 'payroll-compliances-service-container',
      imgWidth: 355,
      imgHeight: 406,
    }),
  },
  {
    type: SERVICE_TYPE.FULL_SUITE_PROJECT_CONSULTANCY,
    render: () => ({
      title: 'Full-suite project consultancy',
      subTitle:
        'Enjoy carefully curated management for your project from start to finish.',
      imageSource: '/images/service/ServiceTheme4.png',
      className: 'full-suite-project-service-container',
      imgWidth: 518,
      imgHeight: 319,
    }),
  },
]

export const SERVICE_BODY_CONFIG = [
  {
    type: SERVICE_TYPE.TALENT_ACQUISITION,
    render: () => [
      {
        featureTheme: '/images/service/ServiceFeatureTheme1.png',
        featureTitle: 'A multi-dynamic pool of talents',
        featureSubtitle:
          'We bring you access to the best techies you can find in Vietnam through our vast recruitment network.',
        width: 305,
        height: 255,
      },

      {
        featureTheme: '/images/service/ServiceFeatureTheme2.png',
        featureTitle: 'A comprehensive journey from start to finish',
        featureSubtitle:
          'Enjoy an experienced team of dedicated recruiters and account managers to assist you through your recruitment journey and provide advisory support.',
        width: 305,
        height: 351,
      },
      {
        featureTheme: '/images/service/ServiceFeatureTheme3.png',
        featureTitle: 'Vigorous candidate profiling',
        featureSubtitle:
          "Upon establishing your project's requirements, we will prepare the job descriptions for internal review to search for the best persons to undertake the task.",
        width: 298,
        height: 245,
      },
      {
        featureTheme: '/images/service/ServiceFeatureTheme4.png',
        featureTitle: '100% involvement and control',
        featureSubtitle:
          "When we've filtered the suitable candidates that meet your specifications, you get to run your own interviews and technical test throughout the selection process.",
        width: 298,
        height: 207,
      },
      {
        featureTheme: '/images/service/ServiceFeatureTheme5.png',
        featureTitle: 'Quality control assurance',
        featureSubtitle:
          "We understand the need for communication and proficiency. That's why we run strenuous English proficiency test filtering and background checks to ensure that each employee meets our high standards of requirement.",
        width: 298,
        height: 288,
      },
      {
        featureTheme: '/images/service/ServiceFeatureTheme6.png',
        featureTitle: 'Probational term guarantee',
        featureSubtitle:
          'We are confident in the capabilities of every member of our community. However, should you be dissatisfied with your selected party, you get to enjoy a free replacement to find your perfect fit. (T&Cs apply)',
        width: 271,
        height: 362,
      },
    ],
  },
  {
    type: SERVICE_TYPE.MANAGEMENT,
    render: () => [
      {
        featureTheme: '/images/service/ServiceFeatureTheme7.png',
        featureTitle: 'Fully-equipped office space',
        featureSubtitle:
          'From a dedicated working area to private meeting rooms, your remote employees can access our facility to help them focus on productivity and efficiency.',
        width: 298,
        height: 243,
      },

      {
        featureTheme: '/images/service/ServiceFeatureTheme8.png',
        featureTitle: 'Work discipline practice',
        featureSubtitle:
          'Office managers act on your behalf to record attendance and enforce proper work ethics that adheres to all NDA and compliance.',
        width: 298,
        height: 278,
      },
      {
        featureTheme: '/images/service/ServiceFeatureTheme9.png',
        featureTitle: 'Managed administrative duties',
        featureSubtitle:
          'We cover all typical administrative responsibilities that include contract review reminders as well as mail and equipment handling. Furthermore, we provide your team with anything they should need for their projects.',
        width: 298,
        height: 352,
      },
      {
        featureTheme: '/images/service/ServiceFeatureTheme10.png',
        featureTitle: 'Attentive employee welfare',
        featureSubtitle:
          "We believe that each staff member's well-being is crucial in a happy community which directly impacts work productivity.Events and activities are conducted to help boost their morale and job satisfaction – this includes weekly sports activities, celebrations, team bonding dinners and trips and snacks to enjoy while working.",
        width: 298,
        height: 243,
      },
    ],
  },
  {
    type: SERVICE_TYPE.PAYROLL_COMPLIANCES,
    render: () => [
      {
        featureTheme: '/images/service/ServiceFeatureTheme11.png',
        featureTitle: 'Locally-compliant contracts',
        featureSubtitle:
          'Fetch allows you to generate and provide contracts that meet the requirements set by local authorities without a need for you to create a legal company entity.',
        width: 298,
        height: 350,
      },

      {
        featureTheme: '/images/service/ServiceFeatureTheme12.png',
        featureTitle: 'Flexible employment arrangements',
        featureSubtitle:
          'Whether you require a freelancer to work on a short-term project or a full-time team member, we have various engagements to meet your needs.',
        width: 298,
        height: 264,
      },
      {
        featureTheme: '/images/service/ServiceFeatureTheme13.png',
        featureTitle: 'Straight forward tax payments',
        featureSubtitle:
          'We make tax contributions a simple process by incorporating all fees in a single payment for you.',
        width: 298,
        height: 204,
      },
      {
        featureTheme: '/images/service/ServiceFeatureTheme14.png',
        featureTitle: 'Seamless payroll management',
        featureSubtitle:
          "Make your payments in your preferred currency easily through a monthly-itemised invoice. Fetch carries out each payment process individually that's synced to our HR data.",
        width: 298,
        height: 291,
      },
    ],
  },
  {
    type: SERVICE_TYPE.FULL_SUITE_PROJECT_CONSULTANCY,
    render: () => [
      {
        featureTheme: '/images/service/ServiceFeatureTheme15.png',
        featureTitle:
          "Meticulous end-to-end management of your organisation's project and tech needs",
        featureSubtitle:
          'Our three-pronged approach gives you a personalised business solution, allowing you to undertake any task effortlessly.',
        width: 298,
        height: 259,
      },

      {
        featureTheme: '/images/service/ServiceFeatureTheme16.png',
        featureTitle: 'Step 1: Understanding your needs',
        featureSubtitle:
          'A consultant will work closely and assimilate into your organisation to thoroughly understand your business and current IT infrastructure, as well as technical capabilities. This aids in devising a strategy to achieve your business goals.',
        width: 298,
        height: 245,
      },
      {
        featureTheme: '/images/service/ServiceFeatureTheme17.png',
        featureTitle: 'Step 2: Execution',
        featureSubtitle:
          'We bring you access to the best techies you can find in Vietnam through our vast recruitment network.',
        width: 298,
        height: 285,
      },
      {
        featureTheme: '/images/service/ServiceFeatureTheme18.png',
        featureTitle: 'Step 3: Long-term sustainability',
        featureSubtitle:
          "The consultant will guide your local staff to take over the team's management when they’re thoroughly trained and proficient, thereby allowing full control and sustainability for independent growth into the future for your organisation.",
        width: 298,
        height: 322,
      },
    ],
  },
]

export const ENGAGEMENT_MODEL_OPTIONS = [
  {
    value: paramCase('Freelancers'),
    label: 'Freelancers',
  },
  {
    value: paramCase('Fulltimers'),
    label: 'Fulltimers',
  },
  {
    value: paramCase('Part time contract workers'),
    label: 'Part time contract workers',
  },
  {
    value: paramCase('Others'),
    label: 'Others',
  },
]

export enum CLIENT_INFO_FORM_FIELD_VALUES {
  COMPANY_NAME = 'companyName',
  CONTACT_NAME = 'contactName',
  EMAIL = 'email',
  PHONE = 'phone',
  SKILL = 'skill',
  PROJECT_REQUIREMENT = 'projectRequirement',
  DURATION = 'duration',
  ENGAGEMENT_MODEL = 'engagementModel',
}

export const CLIENT_INFO_DEFAULT_VALUES = {
  [CLIENT_INFO_FORM_FIELD_VALUES.COMPANY_NAME]: '',
  [CLIENT_INFO_FORM_FIELD_VALUES.CONTACT_NAME]: '',
  [CLIENT_INFO_FORM_FIELD_VALUES.EMAIL]: '',
  [CLIENT_INFO_FORM_FIELD_VALUES.PHONE]: '',
  [CLIENT_INFO_FORM_FIELD_VALUES.SKILL]: '',
  [CLIENT_INFO_FORM_FIELD_VALUES.PROJECT_REQUIREMENT]: '',
  [CLIENT_INFO_FORM_FIELD_VALUES.DURATION]: '',
  [CLIENT_INFO_FORM_FIELD_VALUES.ENGAGEMENT_MODEL]: '',
}

const calculateYearOfExperience = (startYear: string, endYear?: string) => {
  if (!startYear) return ''

  if (!endYear)
    return `Have ${
      fDateDuration(String(startYear), String(new Date().getFullYear()))?.value
    } years work experience`

  return `Have ${
    fDateDuration(String(startYear), String(endYear))?.value
  } years work experience`
}

export const LIST_CANDIDATES = [
  {
    id: 1,
    name: 'Nguyen Hoang An',
    role: 'Frontend Developer',
    location: 'Hanoi, Vietnam',
    experienceDescription: calculateYearOfExperience('2020'),
    avatarUrl: '/images/hiring-freelancers/nguyen_hoang_an_avatar.png',
    skills: ['Javascript', 'TypeScript', 'HTML', 'CSS'],
    experience: [
      {
        duration: String(fDateDuration('01-01-2020', '05-01-2022')?.value),
        position: 'Frontend Developer',
        company: 'Saigon Technology',
        time: '01/2020 - 05/2022',
      },
      {
        duration: String(fDateDuration('06-01-2022', '', true)?.value),
        position: 'Frontend Developer',
        company: 'Oddle',
        time: '06/2022 - Present',
      },
    ],
  },
  {
    id: 2,
    name: 'Hoang Van Minh',
    role: 'Mobile Developer',
    location: 'Hochiminh, Vietnam',
    experienceDescription: calculateYearOfExperience('2017'),
    avatarUrl: '/images/hiring-freelancers/hoang_van_minh_avatar.png',
    skills: ['React Native', 'Flutter', 'Android', 'IOS'],
    experience: [
      {
        duration: String(fDateDuration('08-01-2018', '11-01-2020')?.value),
        position: 'Mobile Developer',
        company: 'VIRALSOFT',
        time: '08/2018 - 11/2020',
      },
      {
        duration: String(fDateDuration('12-01-2020', '', true)?.value),
        position: 'Mobile team leader',
        company: 'NTQ Solution',
        time: '12/2020 - Present',
      },
    ],
  },
  {
    id: 3,
    name: 'Vu Viet Dat',
    role: 'Fullstack Developer',
    location: 'Danang, Vietnam',
    experienceDescription: calculateYearOfExperience('2019'),
    avatarUrl: '/images/hiring-freelancers/vu_viet_dat_avatar.png',
    skills: ['NodeJS', 'VueJS', 'JavaScript', 'TypeScript'],
    experience: [
      {
        duration: String(fDateDuration('04-01-2019', '05-01-2021')?.value),
        position: 'Software Engineer',
        company: 'Relipa Software',
        time: '04/2019 - 05/2021',
      },
      {
        duration: String(fDateDuration('06-01-2021', '', true)?.value),
        position: 'Software Engineer',
        company: 'FPT Software',
        time: '06/2021 - Present',
      },
    ],
  },
  {
    id: 4,
    name: 'Pham Viet Vuong',
    role: 'UI/UX Designer',
    location: 'Hanoi, Vietnam',
    experienceDescription: calculateYearOfExperience('2018'),
    avatarUrl: '/images/hiring-freelancers/pham_viet_vuong_avatar.png',
    skills: ['Figma', 'Photoshop', 'React Native', 'ReactJS'],
    experience: [
      {
        duration: String(fDateDuration('08-01-2018', '05-01-2021')?.value),
        position: 'React Native Developer',
        company: 'SmartOSC',
        time: '08/2018 - 05/2021',
      },
      {
        duration: String(fDateDuration('06-01-2020', '', true)?.value),
        position: 'UI/UX Designer',
        company: 'SmartDev LLC',
        time: '06/2021 - Present',
      },
    ],
  },
  {
    id: 5,
    name: 'Nguyen Viet Ha',
    role: 'Senior QA',
    location: 'Hanoi, Vietnam',
    experienceDescription: calculateYearOfExperience('2015'),
    avatarUrl: '/images/hiring-freelancers/nguyen_viet_ha_avatar.png',
    skills: ['Selenium', 'HTML', 'CSS', 'Javascript', 'Java', 'PHP'],
    experience: [
      {
        duration: String(fDateDuration('08-01-2018', '10-01-2019')?.value),
        position: 'Tester',
        company: 'Blueotter VN',
        time: '08/2018 - 10/2019',
      },
      {
        duration: String(fDateDuration('11-01-2019', '', true)?.value),
        position: 'Tester',
        company: 'Blueotter VN',
        time: '11/2019 - Present',
      },
    ],
  },
  {
    id: 6,
    name: 'Nguyen Van Son',
    role: 'Python Developer',
    location: 'Hochiminh, Vietnam',
    experienceDescription: calculateYearOfExperience('2018'),
    avatarUrl: '/images/hiring-freelancers/nguyen_van_son_avatar.png',
    skills: ['Python'],
    experience: [
      {
        duration: String(fDateDuration('05-01-2018', '06-01-2020')?.value),
        position: 'Python Developer',
        company: 'DXC',
        time: '05/2018 - 06/2020',
      },
      {
        duration: String(fDateDuration('07-01-2020', '', true)?.value),
        position: 'Senior Python Developer',
        company: 'NashTech',
        time: '07/2020 - Present',
      },
    ],
  },
  {
    id: 7,
    name: 'Tran Thi Tram',
    role: 'DevOps Engineer',
    location: 'Danang, Vietnam',
    experienceDescription: calculateYearOfExperience('2019'),
    avatarUrl: '/images/hiring-freelancers/tran_thi_tram_avatar.png',
    skills: ['DevOps', 'Java'],
    experience: [
      {
        duration: String(fDateDuration('03-01-2019', '07-01-2022')?.value),
        position: 'Software Engineer',
        company: 'MoMo',
        time: '03/2019 - 07/2022',
      },
      {
        duration: String(fDateDuration('08-01-2022', '', true)?.value),
        position: 'Senior DevOps Engineer',
        company: 'GFT',
        time: '08/2022 - Present',
      },
    ],
  },
  {
    id: 8,
    name: 'Tran Van Thoi',
    role: 'Lead Software Engineer',
    location: 'Hanoi, Vietnam',
    experienceDescription: calculateYearOfExperience('2013'),
    avatarUrl: '/images/hiring-freelancers/tran_van_thoi_avatar.png',
    skills: ['Java', 'Golang', 'NodeJS'],
    experience: [
      {
        duration: String(fDateDuration('07-01-2019', '08-01-2022')?.value),
        position: 'Team Leader',
        company: 'Techcombank',
        time: '07/2019 - 08/2022',
      },
      {
        duration: String(fDateDuration('09-01-2022', '', true)?.value),
        position: 'Lead Software Engineer',
        company: 'Onemount',
        time: '09/2022 - Present',
      },
    ],
  },
]
