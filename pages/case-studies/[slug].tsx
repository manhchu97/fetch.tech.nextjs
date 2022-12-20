import Page from '@/components/Page'
import BannerContact from '@/components/banner/contact'
import BannerImageCover from '@/components/banner/image-cover'
import { CASE_STUDIES_TYPE } from '@/config/resources'
import { PATH_CONFIG } from '@/routes/paths'
import type { GetStaticPaths, InferGetStaticPropsType } from 'next'

type Prams = {
  params: {
    slug: string
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = Object.keys(CASE_STUDIES_TYPE).map((key) => ({
    params: { slug: CASE_STUDIES_TYPE[key] },
  }))

  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps = async ({ params }: Prams) => {
  const { slug } = params

  return {
    props: {
      slug,
    },
  }
}

const CaseStudiesPage = ({
  slug,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log('slug', slug)
  return (
    <Page title=''>
      <BannerImageCover
        imageSource='/images/bannerEmployees.png'
        className='company-banner-img-container'
      />

      <BannerContact
        title='Find the perfect fit with Fetch'
        subTitle='Find the perfect fit with Fetch'
        buttonText='Sign Up'
        linkTo={PATH_CONFIG.contact}
      />
    </Page>
  )
}

export default CaseStudiesPage
