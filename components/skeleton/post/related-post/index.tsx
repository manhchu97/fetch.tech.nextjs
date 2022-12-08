import React from 'react'

import imagePlaceholder from '@public/images/image-placeholder.png'
import Image from 'next/image'

import styles from './RelatedPostSkeleton.module.scss'

const RelatedPostSkeleton = (): React.ReactElement => {
  return (
    <div className={styles['post-skeleton-wrapper']}>
      <div className='placeholder-glow post-skeleton-thumbnail'>
        <Image
          alt='Image placeholder'
          src={imagePlaceholder}
          width={700}
          height={350}
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
