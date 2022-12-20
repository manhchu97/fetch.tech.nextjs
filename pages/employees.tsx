import Page from '@/components/Page'
import BannerContact from '@/components/banner/contact'
import BannerImageCover from '@/components/banner/image-cover'
import { PATH_CONFIG } from '@/routes/paths'
import type { NextPage } from 'next'

const EmployeesPage: NextPage = () => {
  return (
    <Page title=''>
      <BannerImageCover
        imageSource='/images/bannerEmployees.png'
        className='company-banner-img-container'
      />

      <BannerContact
        title='Build your career with Fetch'
        subTitle='Join our team of talented and like-minded individuals and let your aspirations soar today.'
        buttonText='Contact us'
        linkTo={PATH_CONFIG.contact}
      />
    </Page>
  )
}

export default EmployeesPage
