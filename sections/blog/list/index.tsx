import React, { useMemo, useState } from 'react'

import { API_LIST_PUBLIC_BLOG } from '@routes/api'
import BlogItem from '@sections/blog/item'
import { _getApi } from '@utils/portalAxios'
import { AxiosRequestConfig } from 'axios'
import clsx from 'clsx'
import useSWR from 'swr'

import Pagination from '@components/pagination'
import PostSkeleton from '@components/skeleton/post/single-post'

import styles from './ListBlog.module.scss'

const ListBlog = (): React.ReactElement => {
  const [currentPage, setCurrentPage] = useState<number>(1)

  const params = useMemo(
    () => ({
      params: {
        pageSize: 10,
        pageNumber: currentPage,
      },
    }),
    [currentPage],
  )

  const { data, error } = useSWR(
    [API_LIST_PUBLIC_BLOG, params],
    (url: string, options?: AxiosRequestConfig) => _getApi(url, options),
  )

  const isLoading = !error && !data
  const { list: listPosts = [], total: totalRecord = 0 } = data?.data || {}

  const handleChangePage = (page: number) => {
    setCurrentPage(page)
  }

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
            onPageChange={handleChangePage}
            totalCount={totalRecord}
            currentPage={currentPage}
            pageSize={10}
          />
        )}
      </div>
    </section>
  )
}

export default ListBlog
