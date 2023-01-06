import { CSTabHeaderProps, CaseStudiesTypeProps } from '@/types/resources'

export const CASE_STUDIES_TYPE: CaseStudiesTypeProps = {
  ACCORPLUS: 'accorplus',
  TOKENIZE_EXCHANGE: 'tokenizeexchange',
  CHART_DESK: 'chartdesk',
}

// Our Story
export const DATA_OUR_STORY_PAGE = {
  header: {
    srcImage: '/images/resources/our-story/books.png',
    title: 'Making the tech world more accessible since 2014.',
    content:
      'Grown from humble roots to becoming one of the leaders of our industry in less than a decade, Fetch is now synonymous with the tech world and the best it can offer.',
  },
  main: [
    {
      labelBtn: 'Our history',
      cards: [
        {
          srcImage: '/images/resources/our-story/tag_name.png',
          content:
            'Launched in 2014, Fetch begins operations in Ho Chi Minh City with just 12 staff.',
        },
        {
          srcImage: '/images/resources/our-story/idea.png',
          content:
            'In just two years, Fetch has expanded and increased its headcount to 80, now extending its service to the public, providing tech talents to businesses.',
        },
      ],
    },
    {
      labelBtn: 'Our future',
      cards: [
        {
          srcImage: '/images/resources/our-story/financial.png',
          content:
            'As of 2021, Fetch has over 150 employees across offices in Ho Chi Minh City and Hanoi. Its range of services has also since grown to cater to a spectrum of clients with more dynamic needs.',
        },
        {
          srcImage: '/images/resources/our-story/star.png',
          content:
            'Fetch aims to make hiring in the tech world boundless – connecting both clients and tech talents on a global scale.',
        },
      ],
    },
  ],
  footer: {
    title: 'Creating stronger communities for our team',
    content:
      'Our employees are the reason for our success. At Fetch, we pleasant and healthy work environment for everyone.',
  },
}

export const CASE_STUDIES_TAB_HEADER_CONFIG: CSTabHeaderProps[] = [
  {
    type: CASE_STUDIES_TYPE.ACCORPLUS,
    title: 'AccorPlus (Part of Accor Group)',
  },
  {
    type: CASE_STUDIES_TYPE.TOKENIZE_EXCHANGE,
    title: 'Tokenize Exchange',
  },
  {
    type: CASE_STUDIES_TYPE.CHART_DESK,
    title: 'ChartDesk',
  },
]

export const CASE_STUDIES_TAB_BODY_CONFIG = [
  {
    type: CASE_STUDIES_TYPE.ACCORPLUS,
    render: () => ({
      customerInfo: {
        general: [
          {
            key: 'Industry',
            value: 'Hospitality',
          },
          {
            key: 'Business Lifecycle',
            value: 'Multi-National corporation',
          },
          {
            key: 'Objective',
            value: 'Augment software team',
          },
        ],
        logoImg: '/images/resources/case-studies/AccorPlus.png',
      },
      teamInfo: {
        title:
          'This global hospitality chain chose Fetch to Augment their software team.',
        subTitle:
          'Read how Fetch helped them reliable outsource Tech Talent team.',
        description: [
          'Accor Group is a multinational hospitality company that owns, manages and franchises hotels, resorts and vacation properties. It is the largest hospitality company in Europe, and the sixth largest hospitality company worldwide.',
          'Accor Plus is the Asia Pacific loyalty subscription programme of Accor Group. Accor Plus is Asia Pacific’s most expansive travel, dining and lifestyle program. In order to complete the development of the tech platform, Accor contacted Fetch along with several tech project management companies. We onboarded with Accor to provide them augmentation of technical talents within the SEA region.',
        ],
      },
      projectInfo: {
        preriod: '2018 – 2020',
        mainInfo: [
          {
            title: 'Provide a context/background',
            description: [
              'Being a global company, Accor needed developers in the South East Asian region that could be easily managed and with a high level of skillset to be able to integrate into their global network of tech capability. As a large company, one of their main concerns was the bureaucracy involved in setting up a team. They needed a fuss free solution that was quick and easy to manage. The key objective was to augment their tech team.',
            ],
          },
          {
            title: 'How you tackled the issue',
            description: [
              'Fetch was able to supply the high quality engineers demanded by Accor with our vast and capable recruitment network. From recruitment of full timers, freelancers and contract workers, we were able to cater to the dynamic technical needs of Accor, at speed and high quality of talent supply',
              'With our fully managed service, Accor could easily manage their developers in Vietnam without any administrative headaches. Everything from office space to legal and compliance, to payroll and leave administration were taken care by Fetch. Our fuss free billing from Singapore made it easy for Accor to handle payments from their global office. This is especially important for publicly listed companies that require financial and legal compliance from their vendors.',
            ],
          },
          {
            title: 'Impacts the project brought',
            description: [
              'Our service allowed a global company to setup capability of hiring tech talent in a remote country quickly and easily. Setting up a remote technical office would otherwise have consumed much time and resources.',
              'Our ability to recruit the best engineers ensured that the quality demanded by Accor could be met. Fetch’ wide network of tech talent additionally ensured that Accor could meet changing talent requirements without compromising of project speed.',
              'The ease of tech team management with every administrative matter taken care by Fetch made day to day operations easy and helped execution of the massive development project.',
            ],
          },
          {
            title: 'Summary/conclusion',
            description: [
              'No matter where you are operating, or where you are head-quartered, Fetch tech talent augmentation service, and tech project management service allows you to gain access to the best Vietnamese talents easily, managed timely and affordably.',
            ],
          },
        ],
      },
    }),
  },
  {
    type: CASE_STUDIES_TYPE.TOKENIZE_EXCHANGE,
    render: () => ({
      customerInfo: {
        general: [
          {
            key: 'Industry',
            value: 'Fintech',
          },
          {
            key: 'Business Lifecycle',
            value: 'Series A funded',
          },
          {
            key: 'Objective',
            value: 'Tech product development for a fast growing startup',
          },
        ],
        logoImg: '/images/resources/case-studies/Tokenize.png',
      },
      teamInfo: {
        title:
          'Should a fast growing tech startup rely on outsourced tech talent project management or even hire resources?',
        subTitle: 'Learn how Fetch supported exactly that.',
        description: [
          'Tokenize Xchange is one of South East Asia’s largest digital asset exchange by trading volume and users. They strive to be a reliable and secure platform for fiat currencies to crypto on-off ramp services while creating utility for our users’ digital assets.',
        ],
      },
      projectInfo: {
        preriod: '2016 to present',
        mainInfo: [
          {
            title: 'Provide a context/background',
            description: [
              'Being a local fast growing Fintech startup based in Singapore, one of the key challenges faced by Tokenize is the severe shortage of software engineers pool available in Singapore.',
              'To cater to their fast growing Tech Demands, Tokenize needed to build and expand a capable tech team quickly and had to look outside of Singapore for a solution.',
              'Tokenize evaluated Vietnam as the best potential market, over other APAC markets and partnered with Fetch to build and establish, and grow a tech team in Vietnam in early 2016. Today, the partnership has resulted in Tokenize having a trusted Tech Team of over 50 members in Vietnam, effectively and efficiently co-managed by Fetch. Tokenize went beyond establishing a tech and has mandated Fetch to run their Tokenize-branded office setup. These operation are fully managed and operated by Fetch.',
            ],
          },
          {
            title: 'How you tackled the issue',
            description: [
              'Fetch was able to secure the quality talents needed by Tokenize. Many companies trying to “do it themselves” face significant issues trying to secure the top and capable talents. With Fetch’s vast recruitment networks, we were able to find the best engineers for Tokenize with ease.',
              'Being a growing start-up, one of their main concerns was control over their team. While Fetch managed service takes care of all administrative needs like office space, legal and tax handling, payroll and other administrative matters, it still gave Tokenize full control over their staff like daily work matters and career progression matters, being in full control of things like salary and bonuses.',
              'One of the key concerns of Tokenize was longevity of their engagements with the local staff. Many other start up and SME often relay on casual arrangements to engage freelancers or contract workers. The lack of formal contractual engagement by a legal local company as a partner result in many “nightmare” stories like employees disappearing or very high abandonment rate. With Fetch managed service, all contracts are legal and compliant with local laws. The strong community within Fetch offices also made sure that there is a thriving environment for employees to grow their Careers in the long term with Fetch and Tokenize.',
            ],
          },
          {
            title: 'Impacts the project brought',
            description: [
              'Tokenize today has a reliable offshore tech team of over 50 full timers',
              'Tokenize has their own branded office, setup and operated by Fetch',
            ],
          },
          {
            title: 'Summary/conclusion',
            description: [
              'Fetch is able to help your growing company scale up fast giving you maximum control with zero worries',
            ],
          },
          {
            title: 'Types of technical skills outsourced',
            description: [
              'Nodejs / react js / angularjs / ruby / devops / solidity / Ruby',
            ],
          },
        ],
      },
    }),
  },
  {
    type: CASE_STUDIES_TYPE.CHART_DESK,
    render: () => ({
      customerInfo: {
        general: [
          {
            key: 'Industry',
            value: 'Email management for Shipping industry',
          },
          {
            key: 'Business Lifecycle',
            value: 'Bootstrapped company',
          },
          {
            key: 'Objective',
            value: 'Outsourced tech talent hiring',
          },
        ],
        logoImg: '/images/resources/case-studies/ChartDesk.jpeg',
      },
      teamInfo: {
        title:
          'If you are a Bootstrapped startup worried about remotely hiring tech talent, then Fetch has the perfect solution for you.',
        description: [
          'ChartDesk provides a shared inbox tool as a SaaS to their clients, primarily within the shipping sector. Traditionally, the operations in the shipping sectors makes it necessary for teams to handle thousands of emails a day and across many different departments. ChartDesk was built for teams to efficiently manage business emails exchanged with shared mailboxes, making it a breeze to handle large amount of emails.',
        ],
      },
      projectInfo: {
        preriod: '2016 to present',
        mainInfo: [
          {
            title: 'Provide a context/background',
            description: [
              'Back in 2016, Chartdesk was a relatively new, bootstrapped startup. Being a new startup, the high cost of tech talents in Singapore was not realistic for them to hire. They needed a low-cost solution to build up their tech capabilities.',
              'After research on several outsourcing markets within APAC, they found Vietnam to be the best place to hire and build their tech capabilities. The key factors were cost effective, project delivery efficiency and cultural match.',
            ],
          },
          {
            title: 'How you tackled the issue',
            description: [
              'Fetch was able to help Chartdesk leverage on the much lower cost in Vietnam to help Chartdesk build a small but high impact team of fulltime developers to build their product.',
            ],
          },
          {
            title: 'Impacts the project brought',
            description: [
              'Chartdesk is up and running with multiple international clients using their product, despite their humble bootstrapped status',
              'Chartdesk has grown their fulltime tech team based in Vietnam and co- managed by Fetch to in a very sustainable manner',
            ],
          },
          {
            title: 'Summary/conclusion',
            description: [
              'Fetch is able to help startups scale up and build their tech team in anaffordable manner',
            ],
          },
          {
            title: 'Types of technical skills outsourced',
            description: [
              'JavaScript, Angular/VueJS/React, redux / Nodejs / Python',
            ],
          },
        ],
      },
    }),
  },
]
