import type { NextPage } from 'next'
import Head from 'next/head'

import { PRIMARY_COLOR, SCREEN } from '@/config/global'

import Page from '@/components/Page'

import Calculator from '@/sections/resources/calculator'

export const getStaticProps = async () => {
  return {
    props: {
      pageName: SCREEN.CALCULATOR_PAGE,
    },
  }
}

const CalculatorPage: NextPage = () => {
  return (
    <>
      <Head>
        <meta name='description' content='Resources Calculator pages' />
      </Head>

      <Page title='' themeColor={PRIMARY_COLOR}>
        <Calculator />
      </Page>
    </>
  )
}

export default CalculatorPage
