import type { InferGetStaticPropsType } from 'next'

import { PORTAL_API } from '@/config/global'

import Page from '@/components/Page'
import BannerContact from '@/components/banner/contact'

import { API_LIST_JOB } from '@/routes/api'
import { PATH_CONFIG } from '@/routes/paths'

import ListJob from '@/sections/job/list'

import { IListJobResponse } from '@/types/job'

export const getStaticProps = async () => {
  const res = await fetch(`${PORTAL_API}/${API_LIST_JOB}`)
  const data: IListJobResponse = await res.json()

  return {
    props: {
      fallback: data,
    },
  }
}

const ListJobPage = ({
  fallback,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Page title='Job'>
      <ListJob fallback={fallback} />

      <BannerContact
        title='Find the perfect fit with Fetch'
        subTitle='Find the perfect fit with Fetch'
        buttonText='Sign Up'
        linkTo={PATH_CONFIG.contact}
      />
    </Page>
  )
}

export default ListJobPage
