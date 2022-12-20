import React from 'react'

import Image from 'next/image'

import clsx from 'clsx'

import styles from './ImageCover.module.scss'

interface BannerImageCoverProps {
  className?: string
  imageSource: string
  mobileImageSource?: string
  hasMultipleSource?: boolean
}

const BannerImageCover = ({
  className = '',
  imageSource = '',
  mobileImageSource = '',
  hasMultipleSource = false,
}: BannerImageCoverProps): React.ReactElement => {
  return (
    <div className={clsx(className, styles['banner-image-cover-container'])}>
      {hasMultipleSource ? (
        <>
          <div className='image-cover-container image-larger-container'>
            <Image
              alt='Image cover larger'
              src={imageSource}
              layout='fill'
              objectFit='cover'
            />
          </div>

          <div className='image-cover-container image-small-container'>
            <Image
              alt='Image cover smaller'
              src={mobileImageSource}
              layout='fill'
              objectFit='cover'
              priority
            />
          </div>
        </>
      ) : (
        <div className='image-cover-container'>
          <Image
            alt='Image cover larger'
            src={imageSource}
            layout='fill'
            objectFit='cover'
          />
        </div>
      )}
    </div>
  )
}

export default BannerImageCover
