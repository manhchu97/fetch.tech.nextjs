import React from 'react'

import Image from 'next/image'

import ReactSlick from '@/components/ReactSlick'

const TrustedSlide = (): React.ReactElement => {
  const settings = {
    className: 'company-slide',
    infinite: true,
    dots: false,
    autoplaySpeed: 1200,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    centerMode: true,
    centerPadding: '0px',
    responsive: [],
  }

  return (
    <ReactSlick settings={settings}>
      <div className='slick-card'>
        <div className='brand-wrap'>
          <Image
            src='/images/company/Cus1.svg'
            width={93}
            height={46}
            alt='customer1'
          />
        </div>
      </div>

      <div className='slick-card'>
        <div className='brand-wrap'>
          <Image
            src='/images/company/Cus2.svg'
            width={54}
            height={46}
            alt='customer1'
          />
        </div>
      </div>

      <div className='slick-card'>
        <div className='brand-wrap'>
          <Image
            src='/images/company/Cus3.svg'
            width={99}
            height={27}
            alt='customer1'
          />
        </div>
      </div>

      <div className='slick-card'>
        <div className='brand-wrap'>
          <Image
            src='/images/company/Cus4.svg'
            width={91}
            height={89}
            alt='customer1'
          />
        </div>
      </div>

      <div className='slick-card'>
        <div className='brand-wrap'>
          <Image
            src='/images/company/Cus5.svg'
            width={71}
            height={47}
            alt='customer1'
          />
        </div>
      </div>
    </ReactSlick>
  )
}

export default TrustedSlide
