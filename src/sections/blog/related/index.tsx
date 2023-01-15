import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

import { IBlogItem } from '@/types/blog'

import { getImageWeserv } from '@/utils/getImageWeserv'

import styles from './RelatedPost.module.scss'

interface IRelatedBlog {
  post: IBlogItem
}

const RelatedPost = ({ post }: IRelatedBlog): React.ReactElement => {
  const { slug, imageCover, title } = post

  return (
    <div className={styles['related-post-wrapper']}>
      <div className='post-thumbnail'>
        <Link href={`/blog/${slug}`}>
          <a>
            <Image
              alt={slug}
              src={getImageWeserv(imageCover, { w: 700, h: 350 })}
              width={700}
              height={350}
            />
          </a>
        </Link>
      </div>

      <div className='post-title'>
        <Link href={`/blog/${slug}`}>
          <a>
            <h5>{title}</h5>
          </a>
        </Link>
      </div>
    </div>
  )
}

export default RelatedPost
