import type { NextPage } from 'next'

import Page from '@/components/Page'

import Page404 from '@/sections/404'

const Custom404Page: NextPage = () => {
  return (
    <Page title=''>
      <Page404 />
    </Page>
  )
}

export default Custom404Page
