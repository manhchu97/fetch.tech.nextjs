import React, { Fragment } from 'react'
import ReactMarkdown from 'react-markdown'

import { PORTAL_API } from '@config/global'
import { API_BLOG_RELATED, API_LIST_PUBLIC_BLOG } from '@routes/api'
import RelatedPost from '@sections/blog/related'
import { IBlogItem, IDetailPostResponse } from '@type/blog'
import fetcher from '@utils/fetcher'
import { getImageWeserv } from '@utils/getImageWeserv'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import rehypeRaw from 'rehype-raw'
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

  const post: IBlogItem = data?.data?.blog || {}
  const {
    id,
    title,
    slug: postSlug,
    imageCover,
    content,
    tags,
    updatedTimestamp,
    user,
  } = post
  const { name, linkAvatar } = user || {}

  const { data: relatedPostData } = useSWR(
    id ? API_BLOG_RELATED(id) : null,
    (url: string) => fetcher(`${PORTAL_API}/${url}`),
  )

  const relatedPost = relatedPostData?.data?.list.slice(0, 3) || []

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
                  <div key={i} className='col-xs-12 col-md-4 g-3'>
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

  return (
    <section id='content' className={styles['blog-section']}>
      <div className={clsx('container-fluid', styles['blog-section-detail'])}>
        <article className='blog-detail'>
          <div className='blog-detail-thumbnail'>
            <Image
              alt={postSlug}
              src={getImageWeserv(imageCover, { w: 1000, h: 500 })}
              width={1000}
              height={500}
            />
          </div>

          <div className='blog-detail-info'>
            <div className='blog-detail-title'>
              <h2>{title}</h2>
            </div>

            <div className='blog-detail-meta'>
              <span className='blog-meta-detail blog-meta-tags'>
                Tags:
                {tags.map((tag, index) => {
                  if (index === tags.length - 1) {
                    return <span key={tag.id}>{tag.title}</span>
                  }

                  return (
                    <Fragment key={tag.id}>
                      <span>{tag.title}</span>,
                    </Fragment>
                  )
                })}
              </span>

              <span className='blog-meta-detail blog-meta-time'>
                <time>{new Date(updatedTimestamp).toDateString()}</time>
              </span>

              <span className='blog-meta-detail blog-meta-author'>
                <Link href='#'>
                  <a>
                    <Image
                      alt={name}
                      src={getImageWeserv(linkAvatar, { w: 25, h: 25 })}
                      width={25}
                      height={25}
                    />
                  </a>
                </Link>

                <span>{name}</span>
              </span>
            </div>

            <div className='blog-detail-content my-3'>
              <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                {content}
              </ReactMarkdown>
            </div>
          </div>
        </article>

        <div className='blog-section-related'>
          <h4>Related Posts:</h4>

          <div className='container-fluid px-0'>
            <div className='row gx-4'>
              {relatedPost && relatedPost.length
                ? relatedPost.map((post: IBlogItem) => (
                    <div key={post.id} className='col-xs-12 col-md-4 g-3'>
                      <RelatedPost key={post.id} post={post} />
                    </div>
                  ))
                : Array.from({ length: 3 }, (v, i) => (
                    <div key={i} className='col-xs-12 col-md-4 g-3'>
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
