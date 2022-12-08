import { PORTAL_API } from '@config/global'
import { API_LIST_PUBLIC_BLOG } from '@routes/api'
import { PATH_CONFIG } from '@routes/paths'
import ListBlog from '@sections/blog/list'
import { IListPostsResponse } from '@type/blog'
import { InferGetStaticPropsType } from 'next'

import Page from '@components/Page'
import BannerCompany from '@components/banner/company'
import BannerContact from '@components/banner/contact'

export const getStaticProps = async () => {
  const res = await fetch(
    `${PORTAL_API}/${API_LIST_PUBLIC_BLOG}?pageSize=10&pageNumber=1`,
  )
  const data: IListPostsResponse = await res.json()

  return {
    props: {
      fallback: data,
    },
  }
}

const BlogPage = ({
  fallback,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Page title='Blog'>
      <BannerCompany
        desktopImgSrc='/images/CompanyHeaderBackground.svg'
        mobileImgSrc='/images/CompanyHeaderBackgroundMobile.svg'
      />

      <ListBlog fallback={fallback} />

      <BannerContact
        title='Find the perfect fit with Fetch'
        subTitle='Find the perfect fit with Fetch'
        buttonText='Sign Up'
        linkTo={PATH_CONFIG.contact}
      />
    </Page>
  )
}

export default BlogPage
