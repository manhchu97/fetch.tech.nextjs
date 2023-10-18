import type { InferGetStaticPropsType } from 'next'
import { NextSeo } from 'next-seo'

import qs from 'query-string'

import {
  DEFAULT_PAGE_NUMBER,
  DEFAULT_PAGE_SIZE,
  FACEBOOK_APP_ID,
  FACEBOOK_PAGE_ID,
  HOST_API,
  SCREEN,
} from '@/config/global'

import CustomerMessengerChat from '@/components/Messenger'
import Page from '@/components/Page'
import { SWRConfigProvider } from '@/components/SwrConfig'
import BannerContact from '@/components/banner/contact'

import { API_LIST_JOB } from '@/routes/api'
import { PATH_CONFIG } from '@/routes/paths'

import ListJob from '@/sections/job/list'

import { IListJobResponse } from '@/types/job'

export const getStaticProps = async () => {
  const params = {
    pageSize: DEFAULT_PAGE_SIZE,
    pageNumber: DEFAULT_PAGE_NUMBER,
  }

  const res = await fetch(`${HOST_API}/${API_LIST_JOB}?${qs.stringify(params)}`)
  const data: IListJobResponse = await res.json()

  return {
    props: {
      fallback: data,
      pageName: SCREEN.CAREERS_PAGE,
    },
  }
}

const ListJobPage = ({
  fallback,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <SWRConfigProvider>
      <Page title='Careers'>
        <NextSeo
          title='Fetch Technology | Careers'
          description='Fetch Technology Careers'
          canonical={'https://fetch.tech/careers'}
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
          openGraph={{
            url: 'https://fetch.tech/careers',
            title: 'Fetch Technology | Careers',
            description: 'Fetch Technology Careers',
            images: [
              {
                url: 'https://fetch.tech/_next/image?url=%2Fimages%2Fcareers%2Fcareers-thumbnail.png&w=1080&q=75',
                width: 200,
                height: 100,
                alt: 'careers page thumbnail',
                type: 'image/png',
              },
            ],
            siteName: 'Fetch Careers Page',
          }}
          twitter={{
            handle: '@handle',
            site: '@site',
            cardType: 'summary_large_image',
          }}
        />

        <ListJob fallback={fallback} />

        <BannerContact
          title='Find the perfect fit with Fetch'
          subTitle='Find the perfect fit with Fetch'
          buttonText='Sign Up'
          linkTo={PATH_CONFIG.contact}
        />

        <CustomerMessengerChat
          fbAppId={FACEBOOK_APP_ID}
          fbPageId={FACEBOOK_PAGE_ID}
        />
      </Page>
    </SWRConfigProvider>
  )
}

export default ListJobPage
