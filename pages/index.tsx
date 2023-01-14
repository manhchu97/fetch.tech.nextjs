import type { NextPage } from 'next'
import Head from 'next/head'

import Page from '@/components/Page'
import BannerContact from '@/components/banner/contact'

import { PATH_CONFIG } from '@/routes/paths'

import HomeSection from '@/sections/home'

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <meta name='description' content='Home pages' />
      </Head>

      <Page title=''>
        <HomeSection />

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

export default HomePage
