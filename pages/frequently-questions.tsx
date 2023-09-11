import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import dynamic from 'next/dynamic'

import { SCREEN } from '@/config/global'

import LazyLoadComponent from '@/components/LazyLoadComponent'

import Header from '@/sections/hunt/header'

const Banner = dynamic(() => import('@/sections/hunt/banner'))
const Career = dynamic(() => import('@/sections/hunt/career'))
const Footer = dynamic(() => import('@/sections/hunt/footer'))
const MainContent = dynamic(
  () => import('@/sections/frequently-questions/main-content'),
  {
    loading: () => <p>Loading...</p>,
  },
)

export const getStaticProps = async () => {
  return {
    props: {
      pageName: SCREEN.FREQUENTLY_QUESTIONS_PAGE,
    },
  }
}

const FrequentlyQuestionsPage: NextPage = () => {
  return (
    <>
      <NextSeo
        title='Fetch | Câu hỏi thường gặp'
        description='Câu hỏi thường gặp'
        themeColor='#ffbf14'
        additionalLinkTags={[
          {
            rel: 'icon',
            href: '/favicon.ico',
          },
          {
            rel: 'apple-touch-icon',
            href: '/apple-touch-icon.png',
            sizes: '192x192',
          },
          {
            rel: 'manifest',
            href: '/manifest.json',
          },
        ]}
      />

      <Header />

      <LazyLoadComponent>
        <MainContent />
      </LazyLoadComponent>

      <LazyLoadComponent>
        <Career />
      </LazyLoadComponent>

      <LazyLoadComponent>
        <Banner
          title='Lựa chọn phù hợp nhất với bạn'
          subTitle='Gia tăng thu nhập của bạn bằng cách đăng ký ngay!'
          buttonText='Liên hệ chúng tôi'
          linkTo='https://www.fetch.tech/'
        />
      </LazyLoadComponent>

      <LazyLoadComponent>
        <Footer />
      </LazyLoadComponent>
    </>
  )
}

export default FrequentlyQuestionsPage
