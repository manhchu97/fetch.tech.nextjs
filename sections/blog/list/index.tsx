import React from 'react'

import { PORTAL_API } from '@config/global'
import { API_LIST_PUBLIC_BLOG } from '@routes/api'
import BlogItem from '@sections/blog/item'
import { IListPostsResponse } from '@type/blog'
import fetcher from '@utils/fetcher'
import clsx from 'clsx'
import { useRouter } from 'next/router'
import useSWR from 'swr'

import Pagination from '@components/pagination'
import PostSkeleton from '@components/skeleton/post/single-post'

import styles from './ListBlog.module.scss'

interface IListBlog {
  fallback: IListPostsResponse
}

const ListBlog = ({ fallback }: IListBlog): React.ReactElement => {
  const router = useRouter()
  const { page } = router.query

  const { data, error } = useSWR(
    page ? [API_LIST_PUBLIC_BLOG, page] : null,
    (url: string, currentPage: number) =>
      fetcher(
        `${PORTAL_API}/${url}?pageSize=10&pageNumber=${
          Number(currentPage) || 1
        }`,
      ),
    { fallbackData: fallback },
  )

  const isLoading = !error && !data
  const { list: listPosts = [], total: totalRecord = 0 } = data?.data || {}

  return (
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
            totalCount={totalRecord}
            currentPage={Number(page) || 1}
            pageSize={10}
          />
        )}
      </div>
    </section>
  )
}

export default ListBlog
