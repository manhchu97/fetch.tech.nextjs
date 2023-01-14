import type { NextPage } from 'next'

import { PRIMARY_COLOR } from '@/config/global'

import Page from '@/components/Page'

import FAQ from '@/sections/faq'

const FAQPage: NextPage = () => {
  return (
    <Page title='' themeColor={PRIMARY_COLOR}>
      <FAQ />
    </Page>
  )
}

export default FAQPage
