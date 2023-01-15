import React from 'react'

import Image from 'next/image'

import clsx from 'clsx'

import { ServiceHeaderProps } from '@/types/services'

import styles from './ServiceHeader.module.scss'

interface IProps {
  headerConfig: ServiceHeaderProps
}

const ServiceHeader = ({ headerConfig }: IProps): React.ReactElement => {
  const {
    title = '',
    subTitle = '',
    imageSource = '',
    imgWidth = 0,
    imgHeight = 0,
    className: imgClassName = '',
  } = headerConfig || {}

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
            imgClassName,
            'service-header__inner__right col-xs-12 col-lg-4',
          )}
        >
          <Image
            alt={title}
            src={imageSource}
            width={imgWidth}
            height={imgHeight}
            priority
            quality={100}
          />
        </div>
      </div>
    </div>
  )
}

export default ServiceHeader
