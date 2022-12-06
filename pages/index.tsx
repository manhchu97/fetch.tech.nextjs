import type { NextPage } from 'next'

import Page from '@components/Page'
import BannerContact from '@components/banner/contact'

const Home: NextPage = () => {
  return (
    <Page title=''>
      <BannerContact
        title='Find the perfect fit with Fetch'
        subTitle='Find the perfect fit with Fetch'
        buttonText='Sign Up'
        linkTo='/contact'
      />
    </Page>
  )
}

export default Home
