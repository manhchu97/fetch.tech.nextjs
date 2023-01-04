import type { GetStaticPaths, InferGetStaticPropsType } from 'next'

import { DEFAULT_PAGE_SIZE, PORTAL_API } from '@/config/global'

import CustomerMessengerChat from '@/components/CustomerMessengerChat'
import Page from '@/components/Page'
import BannerContact from '@/components/banner/contact'

import { API_JOB_DETAIL, API_LIST_JOB } from '@/routes/api'
import { PATH_CONFIG } from '@/routes/paths'

import JobDetail from '@/sections/job/detail'

import { IJobDetailResponse, IListJobResponse } from '@/types/job'

type IPatch = {
  slug: string
}

type IPrams = {
  params: IPatch
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`${PORTAL_API}/${API_LIST_JOB}`)
  const data: IListJobResponse = await res.json()

  const listJobs = data?.data?.list || []

  const listJobPaginate = listJobs.slice(0, DEFAULT_PAGE_SIZE)

  const paths = listJobPaginate.map(({ slug, id }) => {
    const slugArray = slug.split('-')
    slugArray[slugArray.length - 1] = id

    return {
      params: { slug: slugArray.join('-') },
    }
  })

  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps = async ({ params }: IPrams) => {
  const idJob = params.slug.slice(-36)

  const res = await fetch(`${PORTAL_API}/${API_JOB_DETAIL}/${idJob}`)
  const data: IJobDetailResponse = await res.json()

  return {
    props: {
      fallback: data,
    },
  }
}

const JobDetailPage = ({
  fallback,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Page title='Job Detail'>
      <JobDetail fallback={fallback} />

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

export default JobDetailPage
