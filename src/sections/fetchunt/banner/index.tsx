import React from 'react'

import Link from 'next/link'

import clsx from 'clsx'

import styles from './Banner.module.scss'

interface BannerProps {
  title: string
  subTitle: string
  buttonText: string
  linkTo: string
}

const Banner = ({
  title = '',
  subTitle = '',
  buttonText = '',
  linkTo = '',
}: BannerProps): React.ReactElement => {
  return (
    <div className={clsx(styles['banner-wrapper'])}>
      <div className={clsx('ft-full-screen', styles['banner-container'])}>
        <div className='banner-content-container'>
          <div className='text-title'>{title}</div>
          <div className='text-sub-title'>{subTitle}</div>
        </div>

        <div className='banner-button-container'>
          <Link href={linkTo}>
            <a target='_blank' rel='noopener noreferrer'>
              <div className='banner-button div-center' role='button'>
                {buttonText}
              </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Banner
