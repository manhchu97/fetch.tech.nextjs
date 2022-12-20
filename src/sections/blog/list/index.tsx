import React, { useEffect, useState } from 'react'

import Head from 'next/head'
import { useRouter } from 'next/router'

import clsx from 'clsx'
import useSWR from 'swr'

import { PORTAL_API } from '@/config/global'

import BannerImageCover from '@/components/banner/image-cover'
import Pagination from '@/components/pagination'
import PostSkeleton from '@/components/skeleton/post/single-post'

import { API_LIST_PUBLIC_BLOG } from '@/routes/api'

import BlogItem from '@/sections/blog/item'

import { IListPostsResponse } from '@/types/blog'

import fetcher from '@/utils/fetcher'

import styles from './ListBlog.module.scss'

interface IListBlog {
  fallback: IListPostsResponse
}

const ListBlog = ({ fallback }: IListBlog): React.ReactElement => {
  const router = useRouter()
  const { page, tags } = router.query

  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const { data, error } = useSWR(
    mounted ? [API_LIST_PUBLIC_BLOG, page, tags] : null,
    (url: string, currentPage: number, tags: string) =>
      fetcher(
        `${PORTAL_API}/${url}?pageSize=10&pageNumber=${
          Number(currentPage) || 1
        }&tags=${tags || ''}`,
      ),
    { fallbackData: fallback },
  )

  const isLoading = !error && !data
  const { list: listPosts = [], total: totalRecord = 0 } = data?.data || {}

  return (
    <>
      <Head>
        <meta
          name='description'
          content={`Author: Fetch Technology, Category: Blogs, Length: ${Math.ceil(
            totalRecord / 10,
          )} pages`}
        />
      </Head>

      <BannerImageCover
        imageSource='/images/CompanyHeaderBackground.png'
        mobileImageSource='/images/CompanyHeaderBackgroundMobile.png'
        hasMultipleSource
      />

      <section id='content' className={styles['blog-section']}>
        <div className={clsx('container-fluid', styles['blog-section-list'])}>
          <div className='blog-section-header'>
            <h1>Blog</h1>
          </div>

          <div className='row pt-5'>
            <main className='col-12'>
              {(() => {
                if (isLoading)
                  return (
                    <>
                      {Array.from({ length: 10 }, (_, index) => (
                        <PostSkeleton key={index} />
                      ))}
                    </>
                  )

                if (!Array.isArray(listPosts) || !listPosts.length) return null

                return (
                  <>
                    {(listPosts || [])?.map((post) => (
                      <BlogItem key={post.id} post={post} />
                    ))}
                  </>
                )
              })()}
            </main>
          </div>

          {totalRecord > 0 && (
            <Pagination
              className='justify-content-center pagination-lg'
              totalCount={totalRecord}
              currentPage={Number(page) || 1}
              pageSize={10}
            />
          )}
        </div>
      </section>
    </>
  )
}

export default ListBlog
