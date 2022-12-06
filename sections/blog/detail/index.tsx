import React from 'react'

import clsx from 'clsx'

import DetailPostSkeleton from '@components/skeleton/post/detail'
import RelatedPostSkeleton from '@components/skeleton/post/related-post'

import styles from './BlogDetail.module.scss'

const BlogDetail = (): React.ReactElement => {
  return (
    <section id='content' className={styles['blog-section']}>
      <div className={clsx('container', styles['blog-section-detail'])}>
        <DetailPostSkeleton />

        <div className='blog-section-related'>
          <h4>Related Posts:</h4>

          <div className='container px-0'>
            <div className='row gx-4'>
              {Array.from({ length: 3 }, (v, i) => (
                <div key={i} className='col-sm-12 col-md-4 '>
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
