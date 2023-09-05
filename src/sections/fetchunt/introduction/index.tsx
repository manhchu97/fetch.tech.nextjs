import React, { useState } from 'react'
import Lottie from 'react-lottie'

import Image from 'next/image'
import Link from 'next/link'

import animationData from '@/lotties/blink_blink.json'
import clsx from 'clsx'
import { logEvent } from 'firebase/analytics'

import Button from '@/components/button/Button'
import MenuItem from '@/components/nav/menu-item'

import { PATH_CONFIG } from '@/routes/paths'

import styles from './Introduction.module.scss'

const Introduction = (): React.ReactElement => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  const [isExpandContent, setIsExpandContent] = useState<boolean>(false)

  return (
    <div className={styles['introduction-container']}>
      <div className='header-wrapper'>
        <div className='header d-flex'>
          <div className='header-logo-container div-center flex-grow-1'>
            <Link href={PATH_CONFIG.fetchunt}>
              <a className='header-logo-img' rel='noopener noreferrer'>
                <Image
                  src='/images/fetchunt/advertisement_fetch_logo.png'
                  alt='Picture of the author'
                  width={96}
                  height={40}
                  quality={100}
                  priority
                />
              </a>
            </Link>
          </div>

          <div className='hstack gap-3 actions'>
            <Link href='https://www.fetch.tech/careers'>
              <a target='_blank' rel='noopener noreferrer'>
                <button type='button' className='btn btn-outline-primary'>
                  Việc làm IT
                </button>
              </a>
            </Link>

            <Link href='https://www.fetch.tech/company'>
              <a target='_blank' rel='noopener noreferrer'>
                <button type='button' className='btn btn-outline-primary'>
                  Dành cho doanh nghiệp
                </button>
              </a>
            </Link>
          </div>

          <div className='refer'>
            <Link href='https://portal.fetch.tech/auth/login?tab=signin'>
              <a target='_blank' rel='noopener noreferrer'>
                <Button
                  type='button'
                  title='Bắt đầu giới thiệu ứng viên'
                  frontClassName='front-primary'
                  edgeClassName='edge-primary'
                  size='small'
                  variant='filled'
                />
              </a>
            </Link>
          </div>

          <div
            className={clsx(
              'nav-toggler',
              isExpandContent && 'show-nav-container',
            )}
            role='button'
            onClick={() => setIsExpandContent((prev) => !prev)}
          >
            {isExpandContent ? (
              <Image
                src='/images/NavbarClose.png'
                alt='close'
                width={16}
                height={16}
              />
            ) : (
              <Image
                src='/images/NavbarOpen.png'
                alt='open'
                width={32}
                height={32}
                priority
              />
            )}
          </div>
        </div>
      </div>

      <div
        className={clsx(
          'nav-container',
          isExpandContent && 'show-nav-container',
        )}
      >
        <div className='nav-group-items'>
          <Link href='https://www.fetch.tech/careers'>
            <a>
              <MenuItem title='Việc làm IT' />
            </a>
          </Link>

          <Link href='https://www.fetch.tech/company'>
            <a>
              <MenuItem title='Dành cho doanh nghiệp' />
            </a>
          </Link>

          <div className='refer'>
            <Link href='https://portal.fetch.tech/auth/login?tab=signin'>
              <a target='_blank' rel='noopener noreferrer'>
                <Button
                  type='button'
                  title='Bắt đầu giới thiệu ứng viên'
                  frontClassName='front-primary'
                  edgeClassName='edge-primary'
                  size='small'
                  variant='filled'
                />
              </a>
            </Link>
          </div>

          {/* <Link href={PATH_CONFIG.gtta}>
            <a>
              <MenuItem title='For GTTA' />
            </a>
          </Link> */}
        </div>
      </div>

      <div className='main'>
        <div className='introduction-img'>
          <div className='introduction-img-bg'>
            <Lottie options={defaultOptions} style={{ width: '100%' }} />
          </div>

          <Image
            src='/images/fetchunt/introduction_ver_2.png'
            alt='Picture of the author'
            layout='fill'
            objectFit='contain'
            priority
          />
        </div>

        <div className='main-content'>
          <div className='h3'>FETCHUNT</div>

          <div className='h4'>Giới thiệu ứng viên Nhận thưởng hấp dẫn</div>

          <div className='h5'>
            Nền tảng cung ứng nhân lực đầu tiên giúp{' '}
            <strong className='highlight'>
              100% người tham gia nhận thưởng thành công
            </strong>{' '}
            khi giới thiệu ứng viên.
          </div>

          <Link href='https://portal.fetch.tech/auth/login?tab=signin'>
            <a target='_blank' rel='noopener noreferrer'>
              <Button
                className='btn-primary'
                onClick={async () => {
                  const { initializeFirebase } = await import(
                    '@/utils/firebase'
                  )

                  const analytics = await initializeFirebase()
                  if (analytics) {
                    logEvent(analytics, '#clickthrough_Signup_begin')
                  }
                }}
                size='large'
                variant='filled'
                title='Bắt đầu ngay'
              />
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Introduction
