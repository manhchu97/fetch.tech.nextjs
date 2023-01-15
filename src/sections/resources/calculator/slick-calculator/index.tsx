import React from 'react'

import Image from 'next/image'

import { CACULATOR_SLICK_DATA } from '@/config/resources'

import ReactSlick from '@/components/ReactSlick'

import styles from './SlickCalculator.module.scss'

const SlickCalculator = (): React.ReactElement => {
  const settings = {
    className: 'slick-salary',
    infinite: true,
    dots: false,
    autoplaySpeed: 800,
    responsive: [
      {
        breakpoint: 5000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: false,
          autoplay: true,
          centerMode: true,
          centerPadding: '130px',
        },
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: false,
          autoplay: true,
          centerMode: true,
          centerPadding: '60px',
        },
      },
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true,
          autoplay: false,
          centerMode: false,
        },
      },
      {
        breakpoint: 940,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
          autoplay: false,
          centerMode: false,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          autoplay: false,
          centerMode: false,
        },
      },
    ],
  }

  return (
    <div className={styles['slick-calculator-container']}>
      <ReactSlick settings={settings}>
        {[...Array(5)].map((_, index) => (
          <SlickCard key={index} />
        ))}
      </ReactSlick>
    </div>
  )
}

const SlickCard = (): React.ReactElement => {
  const {
    srcAvatar = '',
    name = '',
    role = '',
    location = '',
    desc = '',
    features = [],
  } = CACULATOR_SLICK_DATA

  return (
    <div className='slick-card'>
      <div className='card-headder'>
        <div className='avatar-img'>
          <Image
            alt='avatar'
            src={srcAvatar}
            layout='fill'
            objectFit='contain'
            quality={100}
          />
        </div>

        <div className='user-info'>
          <div className='subtitle1'>{name}</div>
          <div className='p-subtitle2'>{role}</div>
          <div className='p-subtitle2'>{location}</div>
        </div>
      </div>

      <div className='p-subtitle2 description'>{desc}</div>

      <hr className='my-3 text-black-50 divider' />

      <div className='features'>
        <div className='p-subtitle2'>Feature one</div>

        <ul>
          {features.map((feature, index) => (
            <li key={index} className='p-subtitle2'>
              <i className='bi bi-check-lg me-1' />
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className='btn-interest'>I’m interested</div>

      <div className='btn-see-profile'>
        <span className='see-text'>See full profile</span>
        <i className='bi bi-chevron-right ms-1' />
      </div>
    </div>
  )
}

export default SlickCalculator
