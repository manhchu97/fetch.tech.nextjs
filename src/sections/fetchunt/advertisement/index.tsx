import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

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
  return (
    <div className={clsx('ft-full-screen', styles['advertisement-container'])}>
      <AnimatiopnOnScrollWrap
        render={(ref, animate) => (
          <div
            className={clsx('advertisement-content-container', {
              animate__animated: true,
              animate__bounceIn: animate,
            })}
            ref={ref}
          >
            <Image
              src='/images/fetchunt/advertisement_bg.png'
              alt='Advertisement content'
              width={550}
              height={150}
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
            <div className='advertisement-main-action'>
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

              <div className='h6'>{time}</div>
            </div>

            <div className='advertisment-image'>
              <Image
                src='/images/fetchunt/advertisement.png'
                alt='Advertisement image'
                width={200}
                height={170}
                quality={100}
              />
            </div>
          </div>
        )}
      />
    </div>
  )
}

export default Advertisement
