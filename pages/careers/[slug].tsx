import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from 'next'

import { ParsedUrlQuery } from 'querystring'

import { HOST_API, SCREEN } from '@/config/global'

import { SWRConfigProvider } from '@/components/SwrConfig'

import { API_JOB_DETAIL } from '@/routes/api'

import JobDetail from '@/sections/job/detail'

import { IJobDetailResponse } from '@/types/job'

interface IPageQuery extends ParsedUrlQuery {
  slug: string
}

export const getServerSideProps = async (
  context: GetServerSidePropsContext,
) => {
  context.res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59',
  )

  const { slug = '' } = context.query as IPageQuery
  const idJob = slug?.slice(-36)

  const res = await fetch(`${HOST_API}/${API_JOB_DETAIL}/${idJob}`)
  const data: IJobDetailResponse = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      fallback: data,
      pageName: SCREEN.CAREERS_DETAIL_PAGE,
    },
  }
}

const JobDetailPage = ({
  fallback,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <SWRConfigProvider>
      <JobDetail fallback={fallback} />
    </SWRConfigProvider>
  )
}

export default JobDetailPage
