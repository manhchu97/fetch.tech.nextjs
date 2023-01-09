import type { NextPage } from 'next'

import Page from '@/components/Page'

import Calculator from '@/sections/resources/calculator'

const CalculatorPage: NextPage = () => {
  return (
    <Page title='' overrideHeaderColor>
      <Calculator />
    </Page>
  )
}

export default CalculatorPage
