import React from 'react'

import Image from 'next/image'

import styles from './RelatedPostSkeleton.module.scss'

const RelatedPostSkeleton = (): React.ReactElement => {
  return (
    <div className={styles['post-skeleton-wrapper']}>
      <div className='placeholder-glow post-skeleton-thumbnail'>
        <Image
          alt='Image placeholder'
          src='/images/image-placeholder.png'
          width={600}
          height={300}
        />
      </div>

      <div className='placeholder-glow post-skeleton-title'>
        <span className='placeholder col-12 placeholder-sm' />
        <span className='placeholder col-12 placeholder-sm' />
      </div>
    </div>
  )
}

export default RelatedPostSkeleton
