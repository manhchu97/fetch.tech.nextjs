import type { InferGetStaticPropsType } from 'next'
import { NextSeo } from 'next-seo'
import dynamic from 'next/dynamic'

import qs from 'query-string'

import { DEFAULT_PAGE_SIZE, SHARE_STATUS } from '@/config/fetchunt'
import { DEFAULT_PAGE_NUMBER, HOST_API, SCREEN } from '@/config/global'

import LazyLoadComponent from '@/components/LazyLoadComponent'
import { SWRConfigProvider } from '@/components/SwrConfig'

import { API_LIST_JOB } from '@/routes/api'

import Introduction from '@/sections/fetchunt/introduction'
import Messenger from '@/sections/fetchunt/messenger'

import { IListJobResponse } from '@/types/fetchunt'

const Banner = dynamic(() => import('@/sections/fetchunt/banner'))
const JobList = dynamic(() => import('@/sections/fetchunt/job-list'))
const Career = dynamic(() => import('@/sections/fetchunt/career'))
const Cooperate = dynamic(() => import('@/sections/fetchunt/cooperate'))
const JoinSteps = dynamic(() => import('@/sections/fetchunt/join-steps'))
const Footer = dynamic(() => import('@/sections/fetchunt/footer'))
const MainContent = dynamic(() => import('@/sections/fetchunt/main-content'), {
  loading: () => <p>Loading...</p>,
})

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

      <LazyLoadComponent>
        <JobList fallback={fallback} />
      </LazyLoadComponent>

      <LazyLoadComponent>
        <MainContent />
      </LazyLoadComponent>

      <LazyLoadComponent>
        <Cooperate />
      </LazyLoadComponent>

      <LazyLoadComponent>
        <JoinSteps />
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

      <Messenger />
    </SWRConfigProvider>
  )
}

export default FetchuntPage
