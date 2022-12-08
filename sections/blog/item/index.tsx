import React from 'react'

import { IBlogItem } from '@type/blog'
import { getImageWeserv } from '@utils/getImageWeserv'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import styles from './BlogItem.module.scss'

interface BlogItemProps {
  post: IBlogItem
}

const BlogItem = ({ post }: BlogItemProps): React.ReactElement => {
  const { pathname } = useRouter()

  const { title, slug, imageCover, description, tags, updatedTimestamp, user } =
    post
  const { name, linkAvatar } = user

  return (
    <article className={styles['blog-item']}>
      <div className='blog-item-thumbnail'>
        <Link href={`/blog/${slug}`}>
          <a>
            <Image
              alt={slug}
              src={getImageWeserv(imageCover, { w: 1000, h: 500 })}
              width={1000}
              height={500}
            />
          </a>
        </Link>
      </div>

      <div className='blog-item-info'>
        <div className='blog-item-title'>
          <h2>
            <Link href={`/blog/${slug}`}>{title}</Link>
          </h2>
        </div>

        <div className='blog-item-meta'>
          <span className='blog-meta-item blog-meta-tags'>
            Tags:
            {tags.map((tag, index) => {
              if (index === tags.length - 1) {
                return (
                  <Link
                    key={tag.title}
                    href={{
                      pathname,
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
                    pathname,
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

          <span className='blog-meta-item blog-meta-time'>
            <time>
              {new Date(updatedTimestamp).toLocaleDateString('en-us', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
              })}
            </time>
          </span>

          <span className='blog-meta-item blog-meta-author'>
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

        <div className='blog-item-content my-3'>
          <p>{description}</p>
        </div>

        <div className='blog-item-control'>
          <Link href={`/blog/${slug}`}>
            <a>
              <button className='btn btn-outline-warning styled-button'>
                Continue Reading
              </button>
            </a>
          </Link>
        </div>
      </div>
    </article>
  )
}

export default BlogItem
