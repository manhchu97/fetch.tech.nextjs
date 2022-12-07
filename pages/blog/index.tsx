import { API_LIST_PUBLIC_BLOG } from '@routes/api'
import ListBlog from '@sections/blog/list'
import { _getApi } from '@utils/portalAxios'
import type { NextPage } from 'next'

import Page from '@components/Page'

export async function getStaticProps() {
  try {
    const result = await _getApi(API_LIST_PUBLIC_BLOG, {
      params: {
        pageSize: 10,
        pageNumber: 1,
      },
    })

    return {
      props: {
        fallback: {
          [API_LIST_PUBLIC_BLOG]: result,
        },
      },
    }
  } catch (error) {
    return {
      props: {
        fallback: {
          [API_LIST_PUBLIC_BLOG]: {},
        },
      },
    }
  }
}

const BlogPage: NextPage = () => {
  return (
    <Page title='Blog'>
      <ListBlog />
    </Page>
  )
}

export default BlogPage
