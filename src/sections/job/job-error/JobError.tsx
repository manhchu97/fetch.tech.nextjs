import React from 'react'

import styles from './JobError.module.scss'

const JobError = (): React.ReactElement => {
  return (
    <div className='container'>
      <div className={styles['job-error-message']}>
        The position you are looking for is no longer available due to hiring or
        temporary stop recruiting.
      </div>
    </div>
  )
}

export default JobError
