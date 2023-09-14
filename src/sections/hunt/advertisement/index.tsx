/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useRef, useState } from 'react'
import Lottie from 'react-lottie'

import Image from 'next/image'
import Link from 'next/link'

import clickData from '@/lotties/click.json'
import fireworkData from '@/lotties/firework.json'
import clsx from 'clsx'

import { GA_EVENT_BUTTON_ID, GA_EVENT_NAME } from '@/config/global'

import AnimatiopnOnScrollWrap from '@/components/AnimationOnScrollWrap'
import Button from '@/components/button/Button'

import { handleTrackingEvent } from '@/utils/googleAnalytics'

import styles from './Advertisement.module.scss'

interface AdvertisementProps {
  buttonText: string
  linkTo: string
  time: string
}

const Advertisement = ({
  buttonText = '',
  linkTo = '',
  time = '',
}: AdvertisementProps): React.ReactElement => {
  const containerRef = useRef<any>(null)
  const [isSticky, setIsSticky] = useState<boolean>(false)

  const fireworkOptions = {
    loop: true,
    autoplay: true,
    animationData: fireworkData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  const clickOptions = {
    loop: true,
    autoplay: true,
    animationData: clickData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  useEffect(() => {
    const onScroll = () => {
      const element = containerRef.current

      if (!element) return

      const { top } = element.getBoundingClientRect()

      setIsSticky(top <= 0)
    }

    window.addEventListener('scroll', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <div ref={containerRef}>
      <div
        className={clsx(styles['advertisement-wrapper'], {
          ['position-fixed']: isSticky,
        })}
      >
        <div
          className={clsx('ft-full-screen', styles['advertisement-container'])}
        >
          <AnimatiopnOnScrollWrap
            render={(ref, animate) => (
              <div
                className={clsx(
                  'advertisement-content-container position-relative',
                  {
                    animate__animated: true,
                    animate__bounceIn: animate,
                  },
                )}
                ref={ref}
              >
                <div className='position-absolute firework-animation'>
                  <Lottie options={fireworkOptions} height={140} width={168} />
                </div>

                <Image
                  src='/images/fetchunt/advertisement_bonus_points.png'
                  alt='Advertisement content'
                  width={281}
                  height={160}
                  quality={100}
                />

                <div className='advertisement-main-action position-relative'>
                  <Link href={linkTo}>
                    <a
                      target='_blank'
                      rel='noopener noreferrer'
                      id={GA_EVENT_BUTTON_ID.USER_CAMPAIGN}
                    >
                      <Button
                        type='button'
                        size='large'
                        variant='filled'
                        fullWidth
                        frontClassName='front-primary'
                        edgeClassName='edge-primary'
                        title={buttonText}
                        className='btn-primary'
                        onClick={() =>
                          handleTrackingEvent(GA_EVENT_NAME.USER_CAMPAIGN)
                        }
                      />
                    </a>
                  </Link>

                  <div className='h6'>
                    {time}
                    <div className='position-absolute click'>
                      <Lottie options={clickOptions} height={100} width={120} />
                    </div>
                  </div>
                </div>
              </div>
            )}
          />

          <AnimatiopnOnScrollWrap
            render={(ref, animate) => (
              <div
                className={clsx('advertisement-action-container', {
                  animate__animated: true,
                  animate__bounceIn: animate,
                })}
                ref={ref}
              >
                <div className='advertisement-image'>
                  <Image
                    src='/images/fetchunt/introduction_ver_2.png'
                    alt='Advertisement image'
                    width={210}
                    height={173}
                    quality={100}
                  />
                </div>

                <div className='advertisement-main-content position-relative'>
                  <div className='advertisement-image-logo'>
                    <Image
                      src='/images/fetchunt/advertisement_fetch_logo.png'
                      alt='Advertisement logo'
                      width={108}
                      height={45}
                      quality={100}
                    />
                  </div>

                  <div className='advertisement-fetchunt-introdution'>
                    <div className='h6'>
                      Fetch - Nền tảng cung ứng nhân lực dành cho các nhà phát
                      triển
                    </div>
                  </div>
                </div>
              </div>
            )}
          />
        </div>
      </div>

      <div
        className={clsx({
          [styles['advertisement-frame']]: isSticky,
        })}
      ></div>
    </div>
  )
}

export default Advertisement
