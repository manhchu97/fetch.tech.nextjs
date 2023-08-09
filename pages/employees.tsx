import type { NextPage } from 'next'
import Head from 'next/head'

import { SCREEN } from '@/config/global'

import Page from '@/components/Page'
import BannerContact from '@/components/banner/contact'
import BannerImageCover from '@/components/banner/image-cover'

import { PATH_CONFIG } from '@/routes/paths'

import Employee from '@/sections/employees'

export const getStaticProps = async () => {
  return {
    props: {
      pageName: SCREEN.EMPLOYEE_PAGE,
    },
  }
}

const EmployeesPage: NextPage = () => {
  return (
    <>
      <Head>
        <meta name='description' content='Employee pages' />
      </Head>

      <Page title=''>
        <BannerImageCover
          imageSource='/images/employee/bannerEmployees.png'
          className='company-banner-img-container'
        />
        <Employee />

        <BannerContact
          title='Build your career with Fetch'
          subTitle='Join our team of talented and like-minded individuals and let your aspirations soar today.'
          buttonText='Contact us'
          linkTo={PATH_CONFIG.contact}
        />
      </Page>
    </>
  )
}

export default EmployeesPage
