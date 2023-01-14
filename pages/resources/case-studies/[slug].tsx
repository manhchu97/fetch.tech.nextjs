import type { GetStaticPaths, InferGetStaticPropsType } from 'next'
import Head from 'next/head'

import {
  CASE_STUDIES_TAB_BODY_CONFIG,
  CASE_STUDIES_TAB_HEADER_CONFIG,
  CASE_STUDIES_TYPE,
} from '@/config/resources'

import Page from '@/components/Page'
import BannerContact from '@/components/banner/contact'
import BannerImageCover from '@/components/banner/image-cover'

import { PATH_CONFIG } from '@/routes/paths'

import CaseStudiesSection from '@/sections/resources/case-studies'

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
  const tabHeaders = CASE_STUDIES_TAB_HEADER_CONFIG
  const tabBodyConfig = CASE_STUDIES_TAB_BODY_CONFIG.find(
    (config) => config.type === slug,
  )?.render()

  return {
    props: {
      slug,
      tabHeaders,
      tabBodyConfig,
    },
  }
}

const CaseStudiesPage = ({
  slug,
  tabHeaders,
  tabBodyConfig,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <meta name='description' content='Resources Case studies pages' />
      </Head>

      <Page title=''>
        <BannerImageCover
          imageSource='/images/employee/bannerEmployees.png'
          className='company-banner-img-container'
        />

        <CaseStudiesSection
          slug={slug}
          tabHeaders={tabHeaders}
          tabBodyConfig={tabBodyConfig}
        />

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

export default CaseStudiesPage
