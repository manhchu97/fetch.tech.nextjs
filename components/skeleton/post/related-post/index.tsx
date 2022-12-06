import React from 'react'

import styles from './RelatedPostSkeleton.module.scss'

const RelatedPostSkeleton = (): React.ReactElement => {
  return (
    <div className={styles['post-skeleton-wrapper']}>
      <div className='placeholder-glow post-skeleton-thumbnail'>
        <span className='placeholder col-12' />
      </div>

      <div className='placeholder-glow post-skeleton-title'>
        <span className='placeholder col-12' />
        <span className='placeholder col-12' />
      </div>
    </div>
  )
}

export default RelatedPostSkeleton
