import BlogDetail from '@sections/blog/detail'
import type { NextPage } from 'next'

import Page from '@components/Page'

const DETAIL_POST = {
  id: 'e082ea5a-e721-4b68-98db-55dc731c656d',
  title:
    'Lorem Ipsum "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."',
  slug: 'lorem_ipsum_neque_porro_quisquam_est_qui_dolorem_ipsum_quia_dolor_sit_amet_consectetur_adipisci_velit',
  imageCover: 'uploads/1669866409755-andrew-neel-cckf4TsHAuw-unsplash.jpg',
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
  content:
    'Being creative within the constraints of client briefs, budgets and timelines is the norm for most agencies. However, investing in research and development as a true, creative outlet is a powerful addition. In these side projects alone, your team members can pool their expertise to create and shape their own vision — a powerful way to develop motivation, interdisciplinary skills and close relationships.',
  view: 4,
  status: '1',
  userId: 'abc',
  createdTimestamp: new Date('2022-12-01T03:49:17.000Z'),
  updatedTimestamp: new Date('2022-12-01T03:49:17.000Z'),
  user: {
    email: 'test@gmail.com',
    name: 'Blogger Anonymous',
    linkAvatar: 'uploads/1669866409755-andrew-neel-cckf4TsHAuw-unsplash.jpg',
  },
  meta: {
    title: 'Lorem ipsum',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500",
    keyword: 'Lorem ipsum, my keyword',
  },
  tags: [
    {
      title: 'Explore',
    },
    {
      title: 'Explaination',
    },
  ],
}

const BlogDetailPage: NextPage = () => {
  return (
    <Page title='Blog Detail'>
      <BlogDetail post={DETAIL_POST} />
    </Page>
  )
}

export default BlogDetailPage
