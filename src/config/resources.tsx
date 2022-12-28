interface CaseStudiesTypeProps {
  [name: string]: string
}

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
