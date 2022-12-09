import { PORTAL_API } from '@config/global'
import { API_LIST_PUBLIC_BLOG } from '@routes/api'
import BlogDetail from '@sections/blog/detail'
import { IBlogItem, IDetailPostResponse, IListPostsResponse } from '@type/blog'
import type { GetStaticPaths, InferGetStaticPropsType } from 'next'

import Page from '@components/Page'
import BannerContact from '@components/banner/contact'

type IPatch = {
  slug: string
}

type IPrams = {
  params: IPatch
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(
    `${PORTAL_API}/${API_LIST_PUBLIC_BLOG}?pageSize=10&pageNumber=1`,
  )
  const data: IListPostsResponse = await res.json()
  const listPosts: IBlogItem[] = data?.data?.list || []

  // Get the paths we want to pre-render based on posts
  const paths = listPosts.map(({ slug }) => ({
    params: { slug },
  }))

  return {
    paths,
    // Enable statically generating additional pages
    // For example: `/posts/3`
    fallback: true,
  }
}

export const getStaticProps = async ({ params }: IPrams) => {
  const res = await fetch(
    `${PORTAL_API}/${API_LIST_PUBLIC_BLOG}/${params.slug}`,
  )
  const data: IDetailPostResponse = await res.json()

  return {
    props: {
      fallback: data,
    },
  }
}

const BlogDetailPage = ({
  fallback,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Page title='Blog Detail'>
      <BlogDetail fallback={fallback} />

      <BannerContact
        title='Find the perfect fit with Fetch'
        subTitle='Find the perfect fit with Fetch'
        buttonText='Sign Up'
        linkTo='/contact'
      />
    </Page>
  )
}

export default BlogDetailPage
