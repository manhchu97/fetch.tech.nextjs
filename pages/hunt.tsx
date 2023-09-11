import type { InferGetStaticPropsType } from 'next'
import { NextSeo } from 'next-seo'
import dynamic from 'next/dynamic'

import qs from 'query-string'

import { DEFAULT_PAGE_SIZE, SHARE_STATUS } from '@/config/fetchunt'
import { DEFAULT_PAGE_NUMBER, HOST_API, SCREEN } from '@/config/global'

import LazyLoadComponent from '@/components/LazyLoadComponent'
import { SWRConfigProvider } from '@/components/SwrConfig'

import { API_LIST_JOB } from '@/routes/api'

import Introduction from '@/sections/hunt/introduction'
import Messenger from '@/sections/hunt/messenger'

import { IListJobResponse } from '@/types/fetchunt'

const Banner = dynamic(() => import('@/sections/hunt/banner'))
const Advertisement = dynamic(() => import('@/sections/hunt/advertisement'))
const JobList = dynamic(() => import('@/sections/hunt/job-list'))
const Career = dynamic(() => import('@/sections/hunt/career'))
const Cooperate = dynamic(() => import('@/sections/hunt/cooperate'))
const JoinSteps = dynamic(() => import('@/sections/hunt/join-steps'))
const Footer = dynamic(() => import('@/sections/hunt/footer'))
const MainContent = dynamic(() => import('@/sections/hunt/main-content'))

export const getStaticProps = async () => {
  const params = {
    pageSize: DEFAULT_PAGE_SIZE,
    pageNumber: DEFAULT_PAGE_NUMBER,
    status: SHARE_STATUS,
  }

  const res = await fetch(`${HOST_API}/${API_LIST_JOB}?${qs.stringify(params)}`)
  const data: IListJobResponse = await res.json()

  return {
    props: {
      fallback: data,
      pageName: SCREEN.FETCHUNT_PAGE,
    },
  }
}

const FetchuntPage = ({
  fallback,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <SWRConfigProvider>
      <NextSeo
        title='Fetch | Nền tảng cho nhà tuyển dụng giới thiệu ứng viên'
        description='Fetch là nền tảng mạng lưới công việc trực tuyến cho nhà tuyển dụng giới thiệu, trao đổi ứng viên trên toàn quốc. Đây là cơ hội cho nhà tuyển dụng tăng thu nhập không giới hạn. Bạn chỉ cần giới thiệu ứng viên, việc còn lại hãy để đội ngũ của Fetch lo.'
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

      <Introduction />

      <Cooperate />

      <LazyLoadComponent>
        <Advertisement
          buttonText='THAM GIA NGAY'
          linkTo='https://portal.fetch.tech/auth/login?tab=signin'
          time='Thời gian: 01/09 - 30/09/2023'
        />
      </LazyLoadComponent>

      <LazyLoadComponent>
        <JobList fallback={fallback} />
      </LazyLoadComponent>

      <LazyLoadComponent>
        <JoinSteps />
      </LazyLoadComponent>

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

      <Footer />

      <Messenger />
    </SWRConfigProvider>
  )
}

export default FetchuntPage
