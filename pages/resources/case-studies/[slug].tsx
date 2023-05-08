import type { GetStaticPaths, InferGetStaticPropsType } from 'next'
import Head from 'next/head'

import { SCREEN } from '@/config/global'
import {
  CASE_STUDIES_TAB_BODY_CONFIG,
  CASE_STUDIES_TYPE,
} from '@/config/resources'

import Page from '@/components/Page'
import BannerContact from '@/components/banner/contact'

import { PATH_CONFIG } from '@/routes/paths'

import DetailCaseStudiesSection from '@/sections/resources/case-studies/detail'

type Prams = {
  params: {
    slug: string
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = Object.keys(CASE_STUDIES_TYPE).map((key) => ({
    params: { slug: CASE_STUDIES_TYPE[key] },
  }))

  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps = async ({ params }: Prams) => {
  const { slug } = params
  const tabBodyConfig = CASE_STUDIES_TAB_BODY_CONFIG.find(
    (config) => config.type === slug,
  )?.render()

  return {
    props: {
      tabBodyConfig,
      pageName: SCREEN.CASE_STUDIES_DETAIL_PAGE,
    },
  }
}

const CaseStudiesDetailPage = ({
  tabBodyConfig,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <meta name='description' content='Resources Case studies pages' />
      </Head>

      <Page title=''>
        <DetailCaseStudiesSection tabBodyConfig={tabBodyConfig} />

        <BannerContact
          title='Find the perfect fit with Fetch'
          subTitle='Find the perfect fit with Fetch'
          buttonText='Sign Up'
          linkTo={PATH_CONFIG.contact}
        />
      </Page>
    </>
  )
}

export default CaseStudiesDetailPage
