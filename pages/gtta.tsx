import type { NextPage } from 'next'
import Head from 'next/head'

import Page from '@/components/Page'
import BannerContact from '@/components/banner/contact'
import BannerImageCover from '@/components/banner/image-cover'

import { PATH_CONFIG } from '@/routes/paths'

import GTTASection from '@/sections/gtta'

const GTTAPage: NextPage = () => {
  return (
    <>
      <Head>
        <meta name='description' content='GTTA pages' />
      </Head>

      <Page title=''>
        <BannerImageCover
          imageSource='/images/employee/bannerEmployees.png'
          className='company-banner-img-container'
        />

        <GTTASection />

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

export default GTTAPage
