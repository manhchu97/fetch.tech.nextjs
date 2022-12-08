import React from 'react'

import Image from 'next/image'

import styles from './Company.module.scss'

interface BannerCompanyProps {
  desktopImgSrc: string
  mobileImgSrc: string
}

const BannerCompany = ({
  desktopImgSrc = '',
  mobileImgSrc,
}: BannerCompanyProps): React.ReactElement => {
  return (
    <div className={styles['banner-company-container']}>
      <Image
        className='desktop-image-container'
        src={desktopImgSrc}
        alt='Desktop company banner image'
        layout='fill'
        objectFit='contain'
      />

      <Image
        className='mobile-image-container'
        src={mobileImgSrc}
        alt='Mobile company banner image'
        layout='fill'
        objectFit='contain'
      />
    </div>
  )
}

export default BannerCompany
