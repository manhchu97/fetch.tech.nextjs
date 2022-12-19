import { PATH_CONFIG } from '@routes/paths'
import type { NextPage } from 'next'

import Page from '@components/Page'
import BannerContact from '@components/banner/contact'
import BannerImageCover from '@components/banner/image-cover'

const CompanyPage: NextPage = () => {
  return (
    <Page title=''>
      <BannerImageCover
        imageSource='/images/CompanyHeaderBackground.png'
        mobileImageSource='/images/CompanyHeaderBackgroundMobile.png'
        hasMultipleSource
      />

      <BannerContact
        title='Run your business effortlessly with Fetch'
        subTitle='Connect with us to find a fitting solution today.'
        buttonText='Contact us'
        linkTo={PATH_CONFIG.contact}
      />
    </Page>
  )
}

export default CompanyPage
