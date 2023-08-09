import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

import { logEvent } from 'firebase/analytics'

import { PATH_CONFIG } from '@/routes/paths'

import styles from './Introduction.module.scss'

const Introduction = (): React.ReactElement => {
  return (
    <div className={styles['introduction-container']}>
      <div className='header d-flex'>
        <div className='header-logo-container div-center flex-grow-1'>
          <Link href={PATH_CONFIG.fetchunt}>
            <a className='header-logo-img' rel='noopener noreferrer'>
              <Image
                src='/images/LogoDefault.svg'
                alt='Picture of the author'
                layout='fill'
                objectFit='contain'
                priority
              />
            </a>
          </Link>
        </div>

        <div className='hstack gap-3 actions'>
          <Link href='https://www.fetch.tech/careers'>
            <a target='_blank' rel='noopener noreferrer'>
              <button type='button' className='btn btn-outline-primary'>
                Việc làm
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
              <button type='button' className='btn btn-primary'>
                Bắt đầu giới thiệu ứng viên
              </button>
            </a>
          </Link>
        </div>
      </div>

      <div className='main'>
        <div className='introduction-img'>
          <Image
            src='/images/fetchunt/introduction.png'
            alt='Picture of the author'
            layout='fill'
            objectFit='contain'
            priority
          />
        </div>

        <div className='main-content'>
          <div className='h3'>FETCHUNT</div>

          <div className='h5'>
            Fetchunt là một nền tảng tuyển dụng cho phép các nhà tuyển dụng và
            chuyên gia công nghệ giới thiệu, kết nối ứng viên và chia sẻ cơ hội
            việc làm, tạo ra giá trị mới với nỗ lực tối thiểu.{' '}
            <strong>100% người tham gia</strong> có thể nhận tiền thưởng từ việc
            giới thiệu ứng viên và tham gia cộng đồng đặc biệt của chúng tôi
          </div>

          <Link href='https://portal.fetch.tech/auth/login?tab=signin'>
            <a target='_blank' rel='noopener noreferrer'>
              <button
                type='button'
                className='btn btn-primary'
                onClick={async () => {
                  const { initializeFirebase } = await import(
                    '@/utils/firebase'
                  )

                  const analytics = await initializeFirebase()
                  if (analytics) {
                    logEvent(analytics, '#clickthrough_Signup_begin')
                  }
                }}
              >
                Tìm kiếm cơ hội nhận thưởng
              </button>
            </a>
          </Link>
        </div>
      </div>

      <div className='footer'>
        <div className='d-flex footer-item'>
          <div className='position-relative div-center process-recruiter-img'>
            <Image
              src='/images/fetchunt/process-recruiter.svg'
              alt='process-recruiter'
              layout='fill'
              objectFit='contain'
              quality={100}
            />
          </div>

          <div className='h6'>
            Sử dụng công nghệ trí tuệ nhân tạo (AI) giúp xử lý thông tin ứng
            viên và tuyển dụng viên nhanh hơn, chính xác hơn.
          </div>
        </div>

        <div className='d-flex footer-item'>
          <div className='position-relative div-center refer-friends-img'>
            <Image
              src='/images/fetchunt/refer-friends.svg'
              alt='refer-friends'
              layout='fill'
              objectFit='contain'
              quality={100}
            />
          </div>

          <div className='h6'>
            Thấp nhất 5.000.000 VND và không giới hạn tiền thưởng với mỗi vị trí
            trên job board- cập nhật liên tục
          </div>
        </div>
      </div>
    </div>
  )
}

export default Introduction
