import { NextSeo } from 'next-seo'
import Head from 'next/head'

import { SCREEN } from '@/config/global'

import Page from '@/components/Page'

import HiringFreelancersSections from '@/sections/hiring-freelancers'

export const getStaticProps = async () => {
  return {
    props: {
      pageName: SCREEN.SERVICE_PAGE,
    },
  }
}

const HiringFreelancePage = () => {
  return (
    <>
      <Head>
        <meta name='description' content='Hiring freelancer pages' />
      </Head>

      <Page title=''>
        <NextSeo
          title='Fetch | Hiring freelancers'
          description='Hiring freelancers'
          themeColor='#ffbf14'
          additionalLinkTags={[
            {
              rel: 'icon',
              href: '/favicon.ico',
            },
            {
              rel: 'apple-touch-icon',
              href: '/apple-touch-icon.png',
              sizes: '192x192',
            },
            {
              rel: 'manifest',
              href: '/manifest.json',
            },
          ]}
        />

        <HiringFreelancersSections />
      </Page>
    </>
  )
}

export default HiringFreelancePage
