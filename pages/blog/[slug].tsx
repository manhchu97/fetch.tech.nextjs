import BlogDetail from '@sections/blog/detail'
import type { NextPage } from 'next'

import Page from '@components/Page'

const BlogDetailPage: NextPage = () => {
  return (
    <Page title='Blog Detail'>
      <BlogDetail />
    </Page>
  )
}

export default BlogDetailPage
