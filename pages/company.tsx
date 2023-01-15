import type { NextPage } from 'next'
import Head from 'next/head'

import Page from '@/components/Page'
import BannerContact from '@/components/banner/contact'
import BannerImageCover from '@/components/banner/image-cover'

import { PATH_CONFIG } from '@/routes/paths'

import Company from '@/sections/companies'

const CompanyPage: NextPage = () => {
  return (
    <>
      <Head>
        <meta name='description' content='Company pages' />
      </Head>

      <Page title='Company pages'>
        <BannerImageCover
          imageSource='/images/CompanyHeaderBackground.png'
          mobileImageSource='/images/CompanyHeaderBackgroundMobile.png'
          hasMultipleSource
        />

        <Company />

        <BannerContact
          title='Run your business effortlessly with Fetch'
          subTitle='Connect with us to find a fitting solution today.'
          buttonText='Contact us'
          linkTo={PATH_CONFIG.contact}
        />
      </Page>
    </>
  )
}

export default CompanyPage
