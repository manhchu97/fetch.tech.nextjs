import React from 'react'

import { PORTAL_API } from '@config/global'
import { IBlogItem } from '@type/blog'
import Image from 'next/image'
import Link from 'next/link'

import styles from './BlogItem.module.scss'

interface BlogItemProps {
  post: IBlogItem
}

const BlogItem = ({ post }: BlogItemProps): React.ReactElement => {
  const { title, slug, imageCover, description, tags, createdTimestamp, user } =
    post
  const { name, linkAvatar } = user

  return (
    <article className={styles['blog-item']}>
      <div className='blog-item-thumbnail'>
        <Link href='/'>
          <a>
            <Image
              alt={slug}
              src={`${PORTAL_API}/${imageCover}`}
              width={900}
              height={450}
            />
          </a>
        </Link>
      </div>

      <div className='blog-item-info'>
        <div className='blog-item-title'>
          <h2>
            <Link href='/'>{title}</Link>
          </h2>
        </div>

        <div className='blog-item-meta'>
          <span className='blog-meta-item blog-meta-tags'>
            Tags:
            {tags.map((tag, index) => {
              if (index === tags.length - 1) {
                return <span key={tag.title}>{tag.title}</span>
              }

              return (
                <>
                  <span key={tag.title}>{tag.title}</span>,
                </>
              )
            })}
          </span>

          <span className='blog-meta-item blog-meta-time'>
            <time>{new Date(createdTimestamp).toDateString()}</time>
          </span>

          <span className='blog-meta-item blog-meta-author'>
            <Link href='#'>
              <a>
                <Image
                  alt={name}
                  src={`${PORTAL_API}/${linkAvatar}`}
                  width={25}
                  height={25}
                />
              </a>
            </Link>

            <span>{name}</span>
          </span>
        </div>

        <div className='blog-item-content '>
          <p className='my-3'>{description}</p>
        </div>

        <div className='blog-item-control'>
          <Link href='/'>
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
