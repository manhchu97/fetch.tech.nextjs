import type { InferGetStaticPropsType } from 'next'
import Head from 'next/head'

import { PRIMARY_COLOR, SCREEN } from '@/config/global'

import Page from '@/components/Page'

import {
  API_EXCHANGE_RATE_BANK,
  API_EXCHANGE_RATE_REQUEST_API_KEY,
} from '@/routes/api'

import Calculator from '@/sections/resources/calculator'

import {
  ExchangeRateRequestApiResponse,
  ExchangeRateResponse,
} from '@/types/resources'

export const getStaticProps = async () => {
  const requestApiRes = await fetch(`${API_EXCHANGE_RATE_REQUEST_API_KEY}`)
  const requestApiFallback: ExchangeRateRequestApiResponse =
    await requestApiRes.json()

  const exchangeRateRes = await fetch(`${API_EXCHANGE_RATE_BANK}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${requestApiFallback?.results}`,
      'Content-Type': 'application/json',
    },
  })
  const exchangeRateFallback: ExchangeRateResponse =
    await exchangeRateRes.json()

  return {
    props: {
      requestApiFallback,
      exchangeRateFallback,
      pageName: SCREEN.CALCULATOR_PAGE,
    },
  }
}

const CalculatorPage = ({
  requestApiFallback,
  exchangeRateFallback,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <meta name='description' content='Resources Calculator pages' />
      </Head>

      <Page title='' themeColor={PRIMARY_COLOR}>
        <Calculator
          requestApiFallback={requestApiFallback}
          exchangeRateFallback={exchangeRateFallback}
        />
      </Page>
    </>
  )
}

export default CalculatorPage
