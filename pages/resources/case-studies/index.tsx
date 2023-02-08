import type { InferGetStaticPropsType } from 'next'
import Head from 'next/head'

import { CASE_STUDIES_LIST_DATA } from '@/config/resources'

import Page from '@/components/Page'
import BannerContact from '@/components/banner/contact'
import BannerImageCover from '@/components/banner/image-cover'

import { PATH_CONFIG } from '@/routes/paths'

import ListCaseStudiesSection from '@/sections/resources/case-studies/list'

export const getStaticProps = async () => {
  return {
    props: {
      listCaseStudies: CASE_STUDIES_LIST_DATA,
    },
  }
}

const CaseStudiesPage = ({
  listCaseStudies = [],
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

        <ListCaseStudiesSection listCaseStudies={listCaseStudies} />

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
