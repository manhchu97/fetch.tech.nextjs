import type { GetStaticPaths, NextPage } from 'next'
import Head from 'next/head'

import { PRIMARY_COLOR, SCREEN } from '@/config/global'

import Page from '@/components/Page'

import FAQ from '@/sections/faq'

export const getStaticProps = async () => {
  return {
    props: {
      pageName: SCREEN.FAQ_PAGE,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  }
}

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
