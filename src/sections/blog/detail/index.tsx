import React from 'react'
import ReactMarkdown from 'react-markdown'

import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import clsx from 'clsx'
import rehypeRaw from 'rehype-raw'
import useSWR from 'swr'

import { PORTAL_API } from '@/config/global'

import BannerImageCover from '@/components/banner/image-cover'
import DetailPostSkeleton from '@/components/skeleton/post/detail'
import RelatedPostSkeleton from '@/components/skeleton/post/related-post'

import { API_BLOG_RELATED, API_LIST_PUBLIC_BLOG } from '@/routes/api'

import RelatedPost from '@/sections/blog/related'

import { IBlogItem, IDetailPostResponse } from '@/types/blog'

import fetcher from '@/utils/fetcher'
import { getImageWeserv } from '@/utils/getImageWeserv'

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
    meta,
  } = post
  const { name, linkAvatar } = user || {}
  const {
    title: metaTitle,
    keyword: metaKeyword,
    description: metaDescription,
  } = meta || {}

  const { data: relatedPostData, error } = useSWR(
    id ? API_BLOG_RELATED({ id, pageSize: 3 }) : null,
    (url: string) => fetcher(`${PORTAL_API}/${url}`),
  )

  const isLoading = !error && !relatedPostData
  const relatedPost = relatedPostData?.data?.list || []

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return (
      <section className={styles['blog-section']}>
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
    <>
      <Head>
        <title>{metaTitle || title}</title>
        <meta name='description' content={metaDescription || ''} />
        <meta name='keywords' content={metaKeyword || ''} />
      </Head>

      <BannerImageCover
        imageSource='/images/CompanyHeaderBackground.png'
        mobileImageSource='/images/CompanyHeaderBackgroundMobile.png'
        hasMultipleSource
      />

      <section className={styles['blog-section']}>
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
                      return (
                        <Link
                          key={tag.title}
                          href={{
                            pathname: '/blog',
                            query: { page: 1, tags: tag.title },
                          }}
                        >
                          <a>
                            <span>{tag.title}</span>
                          </a>
                        </Link>
                      )
                    }

                    return (
                      <Link
                        key={tag.title}
                        href={{
                          pathname: '/blog',
                          query: { page: 1, tags: tag.title },
                        }}
                      >
                        <a>
                          <span>{tag.title}</span>,
                        </a>
                      </Link>
                    )
                  })}
                </span>

                <span className='blog-meta-detail blog-meta-time'>
                  <time>
                    {new Date(updatedTimestamp).toLocaleDateString('en-us', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </time>
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

              <div className='sun-editor-editable'>
                <ReactMarkdown
                  rehypePlugins={[rehypeRaw]}
                  components={{
                    a: ({ ...rest }) => (
                      <a
                        href={rest?.href}
                        {...rest}
                        target='_blank'
                        rel='noreferrer'
                      >
                        {rest?.children}
                      </a>
                    ),
                    div: ({ ...rest }) => (
                      <div {...rest} suppressContentEditableWarning>
                        {rest?.children}
                      </div>
                    ),
                  }}
                >
                  {content}
                </ReactMarkdown>
              </div>
            </div>
          </article>

          <div className='blog-section-related'>
            <h4>Related Posts:</h4>

            <div className='container-fluid px-0'>
              <div className='row gx-4'>
                {(() => {
                  if (isLoading) {
                    return Array.from({ length: 3 }, (v, i) => (
                      <div key={i} className='col-xs-12 col-md-4 g-4'>
                        <RelatedPostSkeleton />
                      </div>
                    ))
                  }

                  if (!Array.isArray(relatedPost) || !relatedPost.length)
                    return null

                  return relatedPost.map((post: IBlogItem) => (
                    <div key={post.id} className='col-xs-12 col-md-4 g-4'>
                      <RelatedPost key={post.id} post={post} />
                    </div>
                  ))
                })()}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default BlogDetail
