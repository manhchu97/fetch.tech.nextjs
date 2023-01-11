import type { NextPage } from 'next'

import { PRIMARY_COLOR } from '@/config/global'

import Page from '@/components/Page'

import Calculator from '@/sections/resources/calculator'

const CalculatorPage: NextPage = () => {
  return (
    <Page title='' themeColor={PRIMARY_COLOR}>
      <Calculator />
    </Page>
  )
}

export default CalculatorPage
