import type { InferGetStaticPropsType } from 'next'

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
      <Page title='Job'>
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
