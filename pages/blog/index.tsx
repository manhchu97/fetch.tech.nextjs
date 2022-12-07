import { PORTAL_API } from '@config/global'
import { API_LIST_PUBLIC_BLOG } from '@routes/api'
import ListBlog from '@sections/blog/list'
import { IListPostsResponse } from '@type/blog'
import { InferGetStaticPropsType } from 'next'

import Page from '@components/Page'

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
      <ListBlog fallback={fallback} />
    </Page>
  )
}

export default BlogPage
