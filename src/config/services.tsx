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
    }),
  },
  {
    type: SERVICE_TYPE.MANAGEMENT,
    render: () => ({
      title: 'Service management',
      subTitle: 'Run your remote team and leave the HR aspects to us.',
      imageSource: '/images/service/ServiceTheme2.png',
      className: 'management-service-container',
    }),
  },
  {
    type: SERVICE_TYPE.PAYROLL_COMPLIANCES,
    render: () => ({
      title: 'Payroll and compliances',
      subTitle: 'Experience a seamless contracting and payroll process.',
      imageSource: '/images/service/ServiceTheme3.png',
      className: 'payroll-compliances-service-container',
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
      },

      {
        featureTheme: '/images/service/ServiceFeatureTheme2.png',
        featureTitle: 'A comprehensive journey from start to finish',
        featureSubtitle:
          'Enjoy an experienced team of dedicated recruiters and account managers to assist you through your recruitment journey and provide advisory support.',
      },
      {
        featureTheme: '/images/service/ServiceFeatureTheme3.png',
        featureTitle: 'Vigorous candidate profiling',
        featureSubtitle:
          "Upon establishing your project's requirements, we will prepare the job descriptions for internal review to search for the best persons to undertake the task.",
      },
      {
        featureTheme: '/images/service/ServiceFeatureTheme4.png',
        featureTitle: '100% involvement and control',
        featureSubtitle:
          "When we've filtered the suitable candidates that meet your specifications, you get to run your own interviews and technical test throughout the selection process.",
      },
      {
        featureTheme: '/images/service/ServiceFeatureTheme5.png',
        featureTitle: 'Quality control assurance',
        featureSubtitle:
          "We understand the need for communication and proficiency. That's why we run strenuous English proficiency test filtering and background checks to ensure that each employee meets our high standards of requirement.",
      },
      {
        featureTheme: '/images/service/ServiceFeatureTheme6.png',
        featureTitle: 'Probational term guarantee',
        featureSubtitle:
          'We are confident in the capabilities of every member of our community. However, should you be dissatisfied with your selected party, you get to enjoy a free replacement to find your perfect fit. (T&Cs apply)',
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
      },

      {
        featureTheme: '/images/service/ServiceFeatureTheme8.png',
        featureTitle: 'Work discipline practice',
        featureSubtitle:
          'Office managers act on your behalf to record attendance and enforce proper work ethics that adheres to all NDA and compliance.',
      },
      {
        featureTheme: '/images/service/ServiceFeatureTheme9.png',
        featureTitle: 'Managed administrative duties',
        featureSubtitle:
          'We cover all typical administrative responsibilities that include contract review reminders as well as mail and equipment handling. Furthermore, we provide your team with anything they should need for their projects.',
      },
      {
        featureTheme: '/images/service/ServiceFeatureTheme10.png',
        featureTitle: 'Attentive employee welfare',
        featureSubtitle:
          "We believe that each staff member's well-being is crucial in a happy community which directly impacts work productivity.Events and activities are conducted to help boost their morale and job satisfaction – this includes weekly sports activities, celebrations, team bonding dinners and trips and snacks to enjoy while working.",
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
      },

      {
        featureTheme: '/images/service/ServiceFeatureTheme12.png',
        featureTitle: 'Flexible employment arrangements',
        featureSubtitle:
          'Whether you require a freelancer to work on a short-term project or a full-time team member, we have various engagements to meet your needs.',
      },
      {
        featureTheme: '/images/service/ServiceFeatureTheme13.png',
        featureTitle: 'Straight forward tax payments',
        featureSubtitle:
          'We make tax contributions a simple process by incorporating all fees in a single payment for you.',
      },
      {
        featureTheme: '/images/service/ServiceFeatureTheme14.png',
        featureTitle: 'Seamless payroll management',
        featureSubtitle:
          "Make your payments in your preferred currency easily through a monthly-itemised invoice. Fetch carries out each payment process individually that's synced to our HR data.",
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
      },

      {
        featureTheme: '/images/service/ServiceFeatureTheme16.png',
        featureTitle: 'Step 1: Understanding your needs',
        featureSubtitle:
          'A consultant will work closely and assimilate into your organisation to thoroughly understand your business and current IT infrastructure, as well as technical capabilities. This aids in devising a strategy to achieve your business goals.',
      },
      {
        featureTheme: '/images/service/ServiceFeatureTheme17.png',
        featureTitle: 'Step 2: Execution',
        featureSubtitle:
          'We bring you access to the best techies you can find in Vietnam through our vast recruitment network.',
      },
      {
        featureTheme: '/images/service/ServiceFeatureTheme18.png',
        featureTitle: 'Step 3: Long-term sustainability',
        featureSubtitle:
          "The consultant will guide your local staff to take over the team's management when they’re thoroughly trained and proficient, thereby allowing full control and sustainability for independent growth into the future for your organisation.",
      },
    ],
  },
]
