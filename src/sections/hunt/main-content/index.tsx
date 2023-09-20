import React, { useEffect, useMemo, useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import clsx from 'clsx'
import ldDebounce from 'lodash.debounce'

import { GA_EVENT_NAME } from '@/config/global'

import AnimatiopnOnScrollWrap from '@/components/AnimationOnScrollWrap'
import Button from '@/components/button/Button'

import useTranslation from '@/hooks/useTranslation'

import { PATH_CONFIG } from '@/routes/paths'

import { handleTrackingEvent } from '@/utils/googleAnalytics'

import styles from './MainContent.module.scss'

const MainContent = (): React.ReactElement => {
  const { translate, currentLang } = useTranslation()
  const [isMobileScreen, setIsMobileScreen] = useState(false)

  useEffect(() => {
    let unmounted = false

    const handleResize = ldDebounce(() => {
      const width = Math.max(
        document.documentElement.clientWidth,
        window.innerWidth || 0,
      )

      if (unmounted) return

      setIsMobileScreen(width < 991)
    }, 100)

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => {
      unmounted = true
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const sections = useMemo(
    () => [
      {
        id: 'ft-policy',
        render: (
          <div className='card-container refer-friends-container d-flex justify-content-xl-between align-items-center'>
            <AnimatiopnOnScrollWrap
              render={(ref, animate) => (
                <div
                  ref={ref}
                  className={clsx(
                    'position-relative div-center refer-friends-img',
                    {
                      animate__animated: true,
                      animate__slideInLeft: !isMobileScreen && animate,
                      animate__fadeInDown: isMobileScreen && animate,
                    },
                  )}
                >
                  <Image
                    src='/images/fetchunt/register-member.svg'
                    alt='register-member'
                    layout='fill'
                    objectFit='cover'
                    quality={100}
                  />
                </div>
              )}
            />

            <AnimatiopnOnScrollWrap
              render={(ref, animate) => (
                <div
                  ref={ref}
                  className={clsx('content-container', {
                    animate__animated: true,
                    animate__slideInRight: !isMobileScreen && animate,
                    animate__fadeInUp: isMobileScreen && animate,
                  })}
                >
                  <h3 className='card-title'>
                    {translate('hunt.main_content.content_1.title')}
                  </h3>

                  <div className='list-items-container'>
                    <div className='d-flex'>
                      <div className='check-icon-container'>
                        <div className='position-relative check-icon-img'>
                          <Image
                            src='/images/home-page/CheckIcon.png'
                            alt='check-icon'
                            layout='fill'
                            objectFit='cover'
                          />
                        </div>
                      </div>

                      <div className='h6'>
                        {translate('hunt.main_content.content_1.sub_title_1')}
                      </div>
                    </div>

                    <div className='d-flex'>
                      <div className='check-icon-container'>
                        <div className='position-relative check-icon-img'>
                          <Image
                            src='/images/home-page/CheckIcon.png'
                            alt='check-icon'
                            layout='fill'
                            objectFit='cover'
                          />
                        </div>
                      </div>

                      <div className='h6'>
                        {translate('hunt.main_content.content_1.sub_title_2')}
                      </div>
                    </div>
                  </div>

                  <div className='div-center btn-text'>
                    <Link href={PATH_CONFIG.privacyPolicy}>
                      <a target='_blank' rel='noopener noreferrer'>
                        {translate('hunt.main_content.content_1.action')}
                      </a>
                    </Link>
                  </div>
                </div>
              )}
            />
          </div>
        ),
      },
      {
        id: 'ft-increase-money',
        render: (
          <div className='card-container refer-friends-container d-flex justify-content-xl-between align-items-center'>
            <AnimatiopnOnScrollWrap
              render={(ref, animate) => (
                <div
                  ref={ref}
                  className={clsx('content-container', {
                    animate__animated: true,
                    animate__slideInLeft: !isMobileScreen && animate,
                    animate__fadeInDown: isMobileScreen && animate,
                  })}
                >
                  <h3 className='card-title'>
                    {translate('hunt.main_content.content_2.title')}
                  </h3>

                  <div className='list-items-container'>
                    <div className='h6'>
                      {translate('hunt.main_content.content_2.sub_title_1')}
                    </div>

                    <div className='d-flex ms-3'>
                      <div className='check-icon-container'>
                        <div className='position-relative check-icon-img'>
                          <Image
                            src='/images/home-page/CheckIcon.png'
                            alt='check-icon'
                            layout='fill'
                            objectFit='cover'
                          />
                        </div>
                      </div>

                      <div className='h6'>
                        {translate('hunt.main_content.content_2.sub_title_2')}
                      </div>
                    </div>

                    <div className='d-flex ms-3'>
                      <div className='check-icon-container'>
                        <div className='position-relative check-icon-img'>
                          <Image
                            src='/images/home-page/CheckIcon.png'
                            alt='check-icon'
                            layout='fill'
                            objectFit='cover'
                          />
                        </div>
                      </div>

                      <div className='h6'>
                        {translate('hunt.main_content.content_2.sub_title_3')}
                      </div>
                    </div>

                    <div className='d-flex ms-3'>
                      <div className='check-icon-container'>
                        <div className='position-relative check-icon-img'>
                          <Image
                            src='/images/home-page/CheckIcon.png'
                            alt='check-icon'
                            layout='fill'
                            objectFit='cover'
                          />
                        </div>
                      </div>

                      <div className='h6'>
                        {translate('hunt.main_content.content_2.sub_title_4')}
                      </div>
                    </div>
                  </div>

                  <div className='div-center btn-text'>
                    <Link href='https://www.linkedin.com/pulse/b%E1%BA%A1n-s%E1%BA%BD-kh%C3%B4ng-mu%E1%BB%91n-b%E1%BB%8F-l%E1%BB%A1-3-c%C6%A1-h%E1%BB%99i-tuy%E1%BB%87t-v%E1%BB%9Di-n%C3%A0y?trk=public_post_feed-article-content'>
                      <a target='_blank' rel='noopener noreferrer'>
                        {translate('hunt.main_content.content_2.action')}
                      </a>
                    </Link>
                  </div>
                </div>
              )}
            />

            <AnimatiopnOnScrollWrap
              render={(ref, animate) => (
                <div
                  ref={ref}
                  className={clsx(
                    'position-relative div-center refer-friends-img',
                    {
                      animate__animated: true,
                      animate__slideInRight: !isMobileScreen && animate,
                      animate__fadeInUp: isMobileScreen && animate,
                    },
                  )}
                >
                  <Image
                    src='/images/fetchunt/money.svg'
                    alt='money'
                    layout='fill'
                    objectFit='cover'
                    quality={100}
                  />
                </div>
              )}
            />
          </div>
        ),
      },
      {
        id: 'ft-opportunity',
        render: (
          <div className='card-container refer-friends-container d-flex justify-content-xl-between align-items-center'>
            <AnimatiopnOnScrollWrap
              render={(ref, animate) => (
                <div
                  ref={ref}
                  className={clsx(
                    'position-relative div-center refer-friends-img',
                    {
                      animate__animated: true,
                      animate__slideInLeft: !isMobileScreen && animate,
                      animate__fadeInDown: isMobileScreen && animate,
                    },
                  )}
                >
                  <Image
                    src={`/images/fetchunt/why-should-chose-we-${currentLang}.svg`}
                    alt='why-should-chose-we'
                    layout='fill'
                    objectFit='cover'
                    quality={100}
                  />
                </div>
              )}
            />

            <AnimatiopnOnScrollWrap
              render={(ref, animate) => (
                <div
                  ref={ref}
                  className={clsx('content-container', {
                    animate__animated: true,
                    animate__slideInRight: !isMobileScreen && animate,
                    animate__fadeInUp: isMobileScreen && animate,
                  })}
                >
                  <h3 className='card-title'>
                    {translate('hunt.main_content.content_3.title')}
                  </h3>

                  <div className='list-items-container'>
                    <div className='d-flex'>
                      <div className='check-icon-container'>
                        <div className='position-relative check-icon-img'>
                          <Image
                            src='/images/home-page/CheckIcon.png'
                            alt='check-icon'
                            layout='fill'
                            objectFit='cover'
                          />
                        </div>
                      </div>

                      <div className='h6'>
                        {translate('hunt.main_content.content_3.sub_title_1')}
                      </div>
                    </div>

                    <div className='d-flex'>
                      <div className='check-icon-container'>
                        <div className='position-relative check-icon-img'>
                          <Image
                            src='/images/home-page/CheckIcon.png'
                            alt='check-icon'
                            layout='fill'
                            objectFit='cover'
                          />
                        </div>
                      </div>

                      <div className='h6'>
                        {translate('hunt.main_content.content_3.sub_title_2')}
                      </div>
                    </div>
                  </div>

                  <div className='div-center'>
                    <Link href='https://portal.fetch.tech/auth/login?tab=signin'>
                      <a target='_blank' rel='noopener noreferrer'>
                        <Button
                          type='button'
                          size='large'
                          variant='filled'
                          title={translate(
                            'hunt.main_content.content_3.action',
                          )}
                          onClick={() =>
                            handleTrackingEvent(GA_EVENT_NAME.USER_SIGN_UP)
                          }
                        />
                      </a>
                    </Link>
                  </div>
                </div>
              )}
            />
          </div>
        ),
      },
    ],
    [isMobileScreen, translate, currentLang],
  )

  return (
    <div className={clsx(styles['content-wrapper'])}>
      <div className={clsx(styles['content-container'])}>
        <div className='d-flex justify-content-lg-between ft-main-content-container'>
          <div className='main-header'>
            {translate('hunt.main_content_title')}
          </div>

          <div className='main-content'>
            {sections.map((section) => (
              <React.Fragment key={section.id}>{section.render}</React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainContent
