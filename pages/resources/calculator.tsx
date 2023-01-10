import type { NextPage } from 'next'

import Page from '@/components/Page'

import Calculator from '@/sections/resources/calculator'

import variables from '@/styles/variables.module.scss'

const CalculatorPage: NextPage = () => {
  return (
    <Page title='' themeColor={variables.primaryColor}>
      <Calculator />
    </Page>
  )
}

export default CalculatorPage
