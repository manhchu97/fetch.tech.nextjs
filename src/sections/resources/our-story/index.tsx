import React, { useMemo } from 'react'

import Image from 'next/image'

import clsx from 'clsx'

import { DATA_OUR_STORY_PAGE } from '@/config/resources'

import CardStory from '@/sections/resources/our-story/card-story'

import styles from './OurStory.module.scss'

const OurStory = () => {
  const { header, footer } = DATA_OUR_STORY_PAGE
  const {
    srcImage: headerSrcImage,
    title: headerTitle,
    content: headerContent,
  } = header
  const { title: footerTitle, content: footerContent } = footer

  const renderDataContent = useMemo(() => {
    return DATA_OUR_STORY_PAGE.main.map((item, index) => (
      <div key={index}>
        <div className='label-btn div-center'>
          <div className='h6'>{item.labelBtn}</div>
        </div>

        <div className='list-card div-center'>
          <div className='col-xs-12 col-sm-10 col-md-4'>
            <CardStory
              srcIcon={item.cards[0].srcImage}
              content={item.cards[0].content}
              animateClassName='animate__animated animate__fadeInLeft'
            />
          </div>

          <div className='road-left col-xs-0 col-sm-0 col-md-1' />
          <div className='road-right col-xs-0 col-sm-0 col-md-1' />

          <div className='list-card__right col-xs-12 col-sm-10 col-md-4'>
            <CardStory
              srcIcon={item.cards[1].srcImage}
              content={item.cards[1].content}
              animateClassName='animate__animated animate__fadeInRight'
            />
          </div>
        </div>
      </div>
    ))
  }, [])

  return (
    <>
      <div className={clsx('container', styles['our-story-contain'])}>
        <div className='our-story-section'>
          <div className='div-center our-story-section__top'>
            <div className='col-xs-12 col-sm-10 col-md-9 col-lg-6'>
              <div className='wrap-icon div-center'>
                <Image
                  src={headerSrcImage}
                  alt='book_icon'
                  width={53}
                  height={32}
                  priority
                />
              </div>

              <div className='content'>
                <div className='h1'>{headerTitle}</div>
                <div className='h6-p-color'>{headerContent}</div>
                <div className='horizon-line' />
              </div>
            </div>
          </div>

          <div className='our-story-section__center'>
            {renderDataContent}
            <div className='horizon-line' />
          </div>

          <div className='our-story-section__bottom div-center'>
            <div className='our-story-section__bottom__content col-xs-12 col-sm-10'>
              <div className='h2'>{footerTitle}</div>
              <div className='h6'>{footerContent}</div>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </>
  )
}

export default OurStory
