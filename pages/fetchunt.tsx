import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import dynamic from 'next/dynamic'

import { SCREEN } from '@/config/global'

import LazyLoadComponent from '@/components/LazyLoadComponent'

import Header from '@/sections/fetchunt/header'
import Introduction from '@/sections/fetchunt/introduction'
import Messenger from '@/sections/fetchunt/messenger'
import Zalo from '@/sections/fetchunt/zalo'

const Banner = dynamic(() => import('@/sections/fetchunt/banner'))
const Career = dynamic(() => import('@/sections/fetchunt/career'))
const Cooperate = dynamic(() => import('@/sections/fetchunt/cooperate'))
const Footer = dynamic(() => import('@/sections/fetchunt/footer'))
const MainContent = dynamic(() => import('@/sections/fetchunt/main-content'), {
  loading: () => <p>Loading...</p>,
})

export const getStaticProps = async () => {
  return {
    props: {
      pageName: SCREEN.FETCHUNT_PAGE,
    },
  }
}

const FetchuntPage: NextPage = () => {
  return (
    <>
      <NextSeo
        title='Fetchunt | Nền tảng cho nhà tuyển dụng giới thiệu ứng viên'
        description='Fetchunt là nền tảng mạng lưới công việc trực tuyến cho nhà tuyển dụng giới thiệu, trao đổi ứng viên trên toàn quốc. Đây là cơ hội cho nhà tuyển dụng tăng thu nhập không giới hạn. Bạn chỉ cần giới thiệu ứng viên, việc còn lại hãy để đội ngũ của Fetchunt lo.'
        themeColor='#ffbf14'
        additionalLinkTags={[
          {
            rel: 'icon',
            href: '/favicon.ico',
          },
          {
            rel: 'apple-touch-icon',
            href: '/logo192.png',
            sizes: '192x192',
          },
          {
            rel: 'manifest',
            href: '/manifest.json',
          },
        ]}
      />

      <Header />

      <Introduction />

      <LazyLoadComponent>
        <MainContent />
      </LazyLoadComponent>

      <LazyLoadComponent>
        <Cooperate />
      </LazyLoadComponent>

      <LazyLoadComponent>
        <Career />
      </LazyLoadComponent>

      <LazyLoadComponent>
        <Banner
          title='Lựa chọn phù hợp nhất với bạn'
          subTitle='Gia tăng thu nhập của bạn bằng cách đăng ký ngay!'
          buttonText='Liên hệ chúng tôi'
          linkTo='https://www.facebook.com/Fetch.Technology'
        />
      </LazyLoadComponent>

      <LazyLoadComponent>
        <Footer />
      </LazyLoadComponent>

      <Zalo />

      <Messenger />
    </>
  )
}

export default FetchuntPage
