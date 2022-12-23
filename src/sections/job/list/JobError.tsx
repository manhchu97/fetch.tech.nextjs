import React from 'react'

import Image from 'next/image'

const JobError = (): React.ReactElement => {
  return (
    <div className='container'>
      <div className='logo-container'>
        <Image
          src='/images/404-2.png'
          alt='Fetch Logo'
          width={763}
          height={335}
        />
      </div>

      <div className='job-error-message'>
        The position you are looking for is no longer available due to hiring or
        temporary stop recruiting.
      </div>
    </div>
  )
}

export default JobError
