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
      <div className='messenger-img-container'>
        <Link href='https://m.me/fetchvietnam' passHref>
          <a target='_blank' rel='noreferrer'>
            <Image
              alt='messenger'
              src='/images/fetchunt/facebook-messenger.png'
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
