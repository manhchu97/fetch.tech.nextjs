import React from 'react'

import Image from 'next/image'

import clsx from 'clsx'

import { ServiceHeaderProps } from '@/types/services'

import styles from './ServiceHeader.module.scss'

const ServiceHeader = ({
  title = '',
  subTitle = '',
  imageSource = '',
  className = '',
}: ServiceHeaderProps): React.ReactElement => {
  return (
    <div className={styles['service-header-container']}>
      <div className='service-header__inner row'>
        <div className='service-header__inner__left col-xs-12 col-lg-8'>
          <div>
            <div className='h1'>{title}</div>
            <div className='h6'>{subTitle}</div>
          </div>
        </div>

        <div
          className={clsx(
            className,
            'service-header__inner__right col-xs-12 col-lg-4',
          )}
        >
          <Image
            alt=''
            src={imageSource}
            layout='fill'
            objectFit='contain'
            priority
            quality={100}
          />
        </div>
      </div>
    </div>
  )
}

export default ServiceHeader
