import React from 'react'

import styles from './DetailPostSkeleton.module.scss'

const DetailPostSkeleton = (): React.ReactElement => {
  return (
    <article className={styles['post-skeleton']}>
      <div className='placeholder-glow post-skeleton-thumbnail'>
        <span className='placeholder col-12' />
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

        {Array.from({ length: 3 }, (v, i) => (
          <div key={i} className='placeholder-glow post-skeleton-content mt-3'>
            {Array.from({ length: 10 }, (v, i) => (
              <span key={i} className='placeholder col-12' />
            ))}
          </div>
        ))}
      </div>
    </article>
  )
}

export default DetailPostSkeleton
