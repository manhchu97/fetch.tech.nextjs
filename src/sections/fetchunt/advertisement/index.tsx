/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useRef, useState } from 'react'
import Lottie from 'react-lottie'

import Image from 'next/image'
import Link from 'next/link'

import clickData from '@/lotties/click.json'
import fireworkData from '@/lotties/firework.json'
import clsx from 'clsx'
import { logEvent } from 'firebase/analytics'

import AnimatiopnOnScrollWrap from '@/components/AnimationOnScrollWrap'
import Button from '@/components/button/Button'

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
        className={clsx('ft-full-screen', styles['advertisement-container'], {
          ['position-fixed']: isSticky,
        })}
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
              <div className='position-absolute'>
                <Lottie options={fireworkOptions} height={100} width={120} />
              </div>

              <Image
                src='/images/fetchunt/advertisement_bg.png'
                alt='Advertisement content'
                width={370}
                height={100}
                quality={100}
              />
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
              <div className='advertisement-main-action position-relative'>
                <Link href={linkTo}>
                  <a target='_blank' rel='noopener noreferrer'>
                    <Button
                      type='button'
                      size='large'
                      variant='filled'
                      fullWidth
                      frontClassName='front-primary'
                      edgeClassName='edge-primary'
                      title={buttonText}
                      className='btn-primary'
                      onClick={async () => {
                        const { initializeFirebase } = await import(
                          '@/utils/firebase'
                        )

                        const analytics = await initializeFirebase()
                        if (analytics) {
                          logEvent(
                            analytics,
                            '#clickthrough_banner_advertisement',
                          )
                        }
                      }}
                    />
                  </a>
                </Link>

                <div className='position-absolute click'>
                  <Lottie options={clickOptions} height={100} width={120} />
                </div>

                <div className='h6'>{time}</div>
              </div>

              <div className='advertisment-image'>
                <Image
                  src='/images/fetchunt/advertisement.png'
                  alt='Advertisement image'
                  width={120}
                  height={100}
                  quality={100}
                />
              </div>
            </div>
          )}
        />
      </div>
    </div>
  )
}

export default Advertisement
