import React, { useState } from 'react'

import { Post } from '@sections/blog/config'
import BlogItem from '@sections/blog/item'
import clsx from 'clsx'

import Pagination from '@components/pagination'
import PostSkeleton from '@components/skeleton/post/single-post'

import styles from './ListBlog.module.scss'

interface ListBlogProps {
  posts: Post[]
}

const ListBlog = ({ posts }: ListBlogProps): React.ReactElement => {
  const [currentPage, setCurrentPage] = useState<number>(1)

  const handleChangePage = (page: number) => {
    setCurrentPage(page)
  }

  return (
    <section id='content' className={styles['blog-section']}>
      <div className={clsx('container', styles['blog-section-list'])}>
        <div className='blog-section-header'>
          <h1>Blog</h1>
        </div>

        <div className='row pt-5'>
          <main className='col-md-12'>
            {posts.map((post) => (
              <BlogItem key={post.id} post={post} />
            ))}

            <PostSkeleton />
          </main>
        </div>

        <Pagination
          onPageChange={handleChangePage}
          totalCount={40}
          currentPage={currentPage}
          pageSize={5}
        />
      </div>
    </section>
  )
}

export default ListBlog
