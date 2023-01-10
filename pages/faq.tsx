import type { NextPage } from 'next'

import Page from '@/components/Page'

import variables from '@/styles/variables.module.scss'

const FAQPage: NextPage = () => {
  return (
    <Page title='' themeColor={variables.primaryColor}>
      FAQ Page
    </Page>
  )
}

export default FAQPage
