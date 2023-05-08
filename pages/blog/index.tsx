import { InferGetStaticPropsType } from 'next'

import {
  DEFAULT_PAGE_NUMBER,
  DEFAULT_PAGE_SIZE,
  HOST_API,
  SCREEN,
} from '@/config/global'

import Page from '@/components/Page'
import BannerContact from '@/components/banner/contact'

import { API_LIST_PUBLIC_BLOG } from '@/routes/api'
import { PATH_CONFIG } from '@/routes/paths'

import ListBlog from '@/sections/blog/list'

import { IListPostsResponse } from '@/types/blog'

export const getStaticProps = async () => {
  const res = await fetch(
    `${HOST_API}/${API_LIST_PUBLIC_BLOG}?pageSize=${DEFAULT_PAGE_SIZE}&pageNumber=${DEFAULT_PAGE_NUMBER}`,
  )
  const data: IListPostsResponse = await res.json()

  return {
    props: {
      fallback: data,
      pageName: SCREEN.BLOG_PAGE,
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
