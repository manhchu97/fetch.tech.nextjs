import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

import styles from './Zalo.module.scss'

const Zalo = (): React.ReactElement => {
  return (
    <div
      className={styles['zalo-container']}
      role='button'
      aria-label='Load Zalo Chat'
      aria-busy='true'
      aria-live='polite'
    >
      <div className='zalo-img-container'>
        <Link href='https://zalo.me/0977809723' passHref>
          <a target='_blank' rel='noreferrer'>
            <Image
              alt='messenger'
              src='/images/fetchunt/zalo.svg'
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

export default Zalo
