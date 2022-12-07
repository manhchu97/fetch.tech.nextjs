import React from 'react'

import { Post } from '@sections/blog/config'
import Image from 'next/image'
import Link from 'next/link'

import styles from './BlogItem.module.scss'

interface BlogItemProps {
  post: Post
}

const BlogItem = ({ post }: BlogItemProps): React.ReactElement => {
  const { title, slug, imageCover, description, tags, createdTimestamp, user } =
    post
  const { name, linkAvatar } = user

  const formatTags = tags.map((tag, index) => {
    if (index === tags.length - 1) {
      return tag.title
    }

    return `${tag.title},`
  })

  return (
    <article className={styles['blog-item']}>
      <div className='blog-item-thumbnail'>
        <Link href='/'>
          <a>
            <Image
              alt={slug}
              src={`http://139.59.117.75:3008/${imageCover}`}
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
          <div className='blog-meta-tags'>
            Tags:
            {formatTags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>

          <div className='blog-meta-time'>
            <time>{new Date(createdTimestamp).toDateString()}</time>
          </div>

          <div className='blog-meta-author'>
            <Image
              alt={name}
              src={`http://139.59.117.75:3008/${linkAvatar}`}
              width={25}
              height={25}
            />

            <span>{name}</span>
          </div>
        </div>

        <div className='blog-item-content mt-3'>
          <p>{description}</p>
        </div>

        <div className='blog-item-control'>
          <Link href='/'>
            <button className='btn btn-outline-warning styled-button'>
              Continue Reading
            </button>
          </Link>
        </div>
      </div>
    </article>
  )
}

export default BlogItem
