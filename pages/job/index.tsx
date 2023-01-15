import type { InferGetStaticPropsType } from 'next'

import { DEFAULT_PAGE_SIZE, HOST_API } from '@/config/global'

import CustomerMessengerChat from '@/components/CustomerMessengerChat'
import Page from '@/components/Page'
import BannerContact from '@/components/banner/contact'

import { API_LIST_JOB } from '@/routes/api'
import { PATH_CONFIG } from '@/routes/paths'

import ListJob from '@/sections/job/list'

import { IListJobResponse } from '@/types/job'

export const getStaticProps = async () => {
  const res = await fetch(`${HOST_API}/${API_LIST_JOB}`)
  const data: IListJobResponse = await res.json()

  const listJobs = data?.data?.list || []

  const listJobPaginate = listJobs.slice(0, DEFAULT_PAGE_SIZE)

  return {
    props: {
      fallback: data,
      listJobPaginate,
    },
  }
}

const ListJobPage = ({
  fallback,
  listJobPaginate,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Page title='Job'>
      <ListJob fallback={fallback} listJobPaginate={listJobPaginate} />

      <BannerContact
        title='Find the perfect fit with Fetch'
        subTitle='Find the perfect fit with Fetch'
        buttonText='Sign Up'
        linkTo={PATH_CONFIG.contact}
      />

      <CustomerMessengerChat />
    </Page>
  )
}

export default ListJobPage
