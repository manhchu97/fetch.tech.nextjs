import React from 'react'
import clsx from 'clsx'
import Link from 'next/link'

import styles from './Contact.module.scss'

interface BannerContactProps {
  title: string
  subTitle: string
  buttonText: string
  linkTo: string
}

const BannerContact = ({
  title = '',
  subTitle = '',
  buttonText = '',
  linkTo = '',
}: BannerContactProps): React.ReactElement => {
  return (
    <div className={clsx('ft-full-screen', styles['contact-container'])}>
      <div className='contact-content-container'>
        <div className='text-title'>{title}</div>
        <div className='text-sub-title'>{subTitle}</div>
      </div>

      <div className='contact-button-container'>
        <Link href={linkTo}>
          <a>
            <div className='contact-button' role='button'>
              {buttonText}
            </div>
          </a>
        </Link>
      </div>
    </div>
  )
}

export default BannerContact
