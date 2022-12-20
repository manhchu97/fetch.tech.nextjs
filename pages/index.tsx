import Page from '@/components/Page'
import BannerContact from '@/components/banner/contact'
import { PATH_CONFIG } from '@/routes/paths'
import type { NextPage } from 'next'

const HomePage: NextPage = () => {
  return (
    <Page title=''>
      <BannerContact
        title='Find the perfect fit with Fetch'
        subTitle='Find the perfect fit with Fetch'
        buttonText='Sign Up'
        linkTo={PATH_CONFIG.contact}
      />
    </Page>
  )
}

export default HomePage
