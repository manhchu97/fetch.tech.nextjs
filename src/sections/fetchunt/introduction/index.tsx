import React from 'react'
import Lottie from 'react-lottie'

import Image from 'next/image'
import Link from 'next/link'

import animationData from '@/lotties/blink_blink.json'
import { logEvent } from 'firebase/analytics'

import Button from '@/components/button/Button'

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

  return (
    <div className={styles['introduction-container']}>
      <div className='header d-flex'>
        <div className='header-logo-container div-center flex-grow-1'>
          <Link href={PATH_CONFIG.fetchunt}>
            <a className='header-logo-img' rel='noopener noreferrer'>
              <Image
                src='/images/FetchWhite.svg'
                alt='Picture of the author'
                width={180}
                height={40}
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
