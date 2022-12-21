import React from 'react'

import Image from 'next/image'

import styles from './Page404.module.scss'

const Page404 = (): React.ReactElement => {
  return (
    <div className={styles['not-found-container']}>
      <div className='ft-container'>
        <div className='text-wrap'>
          <div className='c-h1-title'>It’s a</div>
        </div>

        <div className='row img-container'>
          <div className='col-12 col-md-8 image-inner-container'>
            <Image alt='404' src='/images/404-2.png' width={763} height={335} />

            <div className='fetch-yellow-container'>
              <Image
                alt='FetchYellow'
                src='/images/FetchYellow.png'
                width={96}
                height={57}
              />
            </div>

            <div className='fetch-red-container'>
              <Image
                alt='FetchRed'
                src='/images/FetchRed.png'
                width={96}
                height={57}
              />
            </div>
          </div>
        </div>

        <div className='row body-container'>
          <div className='col-12 col-md-6 body-inner-container'>
            <div className='c-h6-title'>
              Oh no! The page you’re looking for is currently unavailable.
              Please try again later.
            </div>

            <div className='btn-direct'>
              <button>Go Back</button>
              <button>Go Home</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page404
