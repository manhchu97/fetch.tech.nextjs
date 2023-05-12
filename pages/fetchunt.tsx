import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'

import { SCREEN } from '@/config/global'

import Banner from '@/sections/fetchunt/banner'
import Career from '@/sections/fetchunt/career'
import Cooperate from '@/sections/fetchunt/cooperate'
import Footer from '@/sections/fetchunt/footer'
import Header from '@/sections/fetchunt/header'
import Introduction from '@/sections/fetchunt/introduction'
import MainContent from '@/sections/fetchunt/main-content'

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

      <MainContent />

      <Cooperate />

      <Career />

      <Banner
        title='Lựa chọn phù hợp nhất với bạn'
        subTitle='Gia tăng thu nhập của bạn bằng cách đăng ký ngay!'
        buttonText='Liên hệ chúng tôi'
        linkTo='https://www.facebook.com/Fetch.Technology'
      />

      <Footer />
    </>
  )
}

export default FetchuntPage
