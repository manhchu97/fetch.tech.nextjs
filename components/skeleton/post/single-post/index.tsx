import React from 'react'

import Image from 'next/image'

import styles from './PostSkeleton.module.scss'

const PostSkeleton = (): React.ReactElement => {
  return (
    <article className={styles['post-skeleton']}>
      <div className='post-skeleton-thumbnail'>
        <Image
          alt='Image placeholder'
          src='/images/image-placeholder.png'
          width={900}
          height={450}
          placeholder='blur'
          blurDataURL='/images/image-placeholder.png'
        />
      </div>

      <div className='post-skeleton-info'>
        <div className='placeholder-glow post-skeleton-title'>
          {Array.from({ length: 2 }, (v, i) => (
            <span key={i} className='placeholder col-12' />
          ))}
        </div>

        <div className='placeholder-glow post-skeleton-meta'>
          {Array.from({ length: 3 }, (v, i) => (
            <span key={i} className='placeholder col-3' />
          ))}
        </div>

        <div className='placeholder-glow post-skeleton-content mt-3'>
          {Array.from({ length: 4 }, (v, i) => (
            <span key={i} className='placeholder col-12' />
          ))}
        </div>

        <div className='placeholder-glow post-skeleton-control'>
          <button className='btn placeholder col-3 styled-button' />
        </div>
      </div>
    </article>
  )
}

export default PostSkeleton
