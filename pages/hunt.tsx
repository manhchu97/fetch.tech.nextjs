import type { InferGetStaticPropsType } from 'next'
import { NextSeo } from 'next-seo'
import dynamic from 'next/dynamic'

import qs from 'query-string'

import { DEFAULT_PAGE_SIZE, SHARE_STATUS } from '@/config/fetchunt'
import { DEFAULT_PAGE_NUMBER, HOST_API, SCREEN } from '@/config/global'

import LazyLoadComponent from '@/components/LazyLoadComponent'
import { SWRConfigProvider } from '@/components/SwrConfig'

import useTranslation from '@/hooks/useTranslation'

import { API_LIST_JOB } from '@/routes/api'

import Introduction from '@/sections/hunt/introduction'
import Messenger from '@/sections/hunt/messenger'

import { IListJobResponse } from '@/types/fetchunt'

import { getDataFromLocales } from '@/utils/getLocalesData'

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
      translations: await getDataFromLocales(['hunt']),
    },
  }
}

const FetchuntPage = ({
  fallback,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { translate } = useTranslation()

  return (
    <SWRConfigProvider>
      <NextSeo
        title={translate('hunt.SEO_title')}
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
          buttonText={translate('hunt.advertisement.button_text')}
          linkTo='https://portal.fetch.tech/auth/login?tab=signin'
          time={translate('hunt.advertisement.time')}
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
          title={translate('hunt.banner.title')}
          subTitle={translate('hunt.banner.sub_title')}
          buttonText={translate('hunt.banner.button_text')}
          linkTo='https://www.fetch.tech/'
        />
      </LazyLoadComponent>

      <Footer />

      <Messenger />
    </SWRConfigProvider>
  )
}

export default FetchuntPage
