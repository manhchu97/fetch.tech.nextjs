import { InferGetStaticPropsType } from 'next'

import { HOST_API } from '@/config/global'

import Page from '@/components/Page'
import BannerContact from '@/components/banner/contact'

import { API_LIST_PUBLIC_BLOG } from '@/routes/api'
import { PATH_CONFIG } from '@/routes/paths'

import ListBlog from '@/sections/blog/list'

import { IListPostsResponse } from '@/types/blog'

export const getStaticProps = async () => {
  const res = await fetch(
    `${HOST_API}/${API_LIST_PUBLIC_BLOG}?pageSize=10&pageNumber=1`,
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
