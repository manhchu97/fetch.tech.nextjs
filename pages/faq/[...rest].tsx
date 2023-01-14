import type { NextPage } from 'next'
import Head from 'next/head'

import { PRIMARY_COLOR } from '@/config/global'

import Page from '@/components/Page'

import FAQ from '@/sections/faq'

const FAQPage: NextPage = () => {
  return (
    <>
      <Head>
        <meta name='description' content='FAQ pages' />
      </Head>

      <Page title='' themeColor={PRIMARY_COLOR}>
        <FAQ />
      </Page>
    </>
  )
}

export default FAQPage
