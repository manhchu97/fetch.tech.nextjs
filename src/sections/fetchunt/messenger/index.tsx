import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

import styles from './Messenger.module.scss'

const Messenger = (): React.ReactElement => {
  return (
    <div
      className={styles['messenger-container']}
      role='button'
      aria-label='Load Messenger Chat'
      aria-busy='true'
      aria-live='polite'
    >
      <div
        style={{
          position: 'relative',
          width: '45px',
          height: '45px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Link href='https://www.facebook.com/Fetch.Technology' passHref>
          <a target='_blank' rel='noreferrer'>
            <Image
              alt='messenger'
              src='/images/fetchunt/facebook.svg'
              layout='fill'
              objectFit='cover'
              priority
            />
          </a>
        </Link>
      </div>
    </div>
  )
}

export default Messenger
