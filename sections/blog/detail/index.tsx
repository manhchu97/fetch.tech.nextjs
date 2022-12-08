import React from 'react'

import { PORTAL_API } from '@config/global'
import { API_LIST_PUBLIC_BLOG } from '@routes/api'
import { IBlogItem, IDetailPostResponse } from '@type/blog'
import fetcher from '@utils/fetcher'
import clsx from 'clsx'
import { useRouter } from 'next/router'
import useSWR from 'swr'

import DetailPostSkeleton from '@components/skeleton/post/detail'
import RelatedPostSkeleton from '@components/skeleton/post/related-post'

import styles from './BlogDetail.module.scss'

interface IBlogDetail {
  fallback: IDetailPostResponse
}

const BlogDetail = ({ fallback }: IBlogDetail): React.ReactElement => {
  const router = useRouter()
  const { slug } = router.query

  const { data } = useSWR(
    slug ? [API_LIST_PUBLIC_BLOG, slug] : null,
    (url: string, slug: string) => fetcher(`${PORTAL_API}/${url}/${slug}`),
    { fallbackData: fallback },
  )

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return (
      <section id='content' className={styles['blog-section']}>
        <div className={clsx('container-fluid', styles['blog-section-detail'])}>
          <DetailPostSkeleton />

          <div className='blog-section-related'>
            <h4>Related Posts:</h4>

            <div className='container px-0'>
              <div className='row gx-4'>
                {Array.from({ length: 3 }, (v, i) => (
                  <div key={i} className='col-sm-12 col-md-4 g-3'>
                    <RelatedPostSkeleton />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  const post: IBlogItem = data?.data?.blog || {}
  console.log(post)

  return (
    <section id='content' className={styles['blog-section']}>
      <div className={clsx('container-fluid', styles['blog-section-detail'])}>
        <DetailPostSkeleton />

        <div className='blog-section-related'>
          <h4>Related Posts:</h4>

          <div className='container px-0'>
            <div className='row gx-4'>
              {Array.from({ length: 3 }, (v, i) => (
                <div key={i} className='col-sm-12 col-md-4 g-3'>
                  <RelatedPostSkeleton />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlogDetail
