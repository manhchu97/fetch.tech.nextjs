import Image from 'next/image'
import Link from 'next/link'

import { PATH_CONFIG } from '@/routes/paths'

import styles from './Header.module.scss'

const Header = () => {
  return (
    <div className={styles['header-container']}>
      <div className='header-logo-container d-flex justify-content-center align-items-center'>
        <Link href={PATH_CONFIG.hunt}>
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

      <div className='header-banner-container'>
        <div className='ft-container row div-center'>
          <div className='col-12 col-md-12 col-lg-8 div-center'>
            <div className='position-relative header-banner-img'>
              <Image
                alt='background'
                src='/images/fetchunt/header-banner.svg'
                layout='fill'
                objectFit='cover'
                priority
              />
            </div>
          </div>

          <div className='col-12 col-md-8 col-lg-4 d-flex flex-column align-items-center header-banner-content'>
            <div className='fetchunt-title'>FETCH</div>

            <div className='subtitle'>
              Nền tảng cho nhà tuyển dụng giới thiệu ứng viên
            </div>

            <div className='description'>
              Quy trình giới thiệu ứng viên nhanh chóng - Nhận thưởng không giới
              hạn
            </div>

            <Link href='https://portal.fetch.tech/auth/login?tab=signin'>
              <a target='_blank' rel='noopener noreferrer'>
                <div role='button' className='header-banner-action'>
                  Bắt đầu giới thiệu
                </div>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
