import ListBlog from '@sections/blog/list'
import type { NextPage } from 'next'

import Page from '@components/Page'

const BlogPage: NextPage = () => {
  return (
    <Page title='Blog'>
      <ListBlog />
    </Page>
  )
}

export default BlogPage
