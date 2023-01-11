import type { NextPage } from 'next'

import { PRIMARY_COLOR } from '@/config/global'

import Page from '@/components/Page'

const FAQPage: NextPage = () => {
  return (
    <Page title='' themeColor={PRIMARY_COLOR}>
      FAQ Page
    </Page>
  )
}

export default FAQPage
