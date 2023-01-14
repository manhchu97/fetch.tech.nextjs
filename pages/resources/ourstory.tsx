import type { NextPage } from 'next'
import Head from 'next/head'

import Page from '@/components/Page'

import OurStory from '@/sections/resources/our-story'

const OurStoryPage: NextPage = () => {
  return (
    <>
      <Head>
        <meta name='description' content='Resources Our Story pages' />
      </Head>

      <Page title=''>
        <OurStory />
      </Page>
    </>
  )
}

export default OurStoryPage
