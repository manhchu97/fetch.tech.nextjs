import React, { useEffect, useMemo, useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import clsx from 'clsx'
import { logEvent } from 'firebase/analytics'
import ldDebounce from 'lodash.debounce'

import AnimatiopnOnScrollWrap from '@/components/AnimationOnScrollWrap'
import Button from '@/components/button/Button'

import { PATH_CONFIG } from '@/routes/paths'

import styles from './MainContent.module.scss'

const MainContent = (): React.ReactElement => {
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
                  <h3 className='card-title'>Bảo mật thông tin </h3>

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
                        Thông tin ứng viên và tuyển dụng viên được bảo mật và
                        đảm bảo sử dụng theo đúng chính sách nghiêm ngặt giữa
                        các bên.
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
                        Ngăn chặn tình trạng ứng viên và tuyển dụng viên bị lộ
                        thông tin liên hệ và bị làm phiền bởi các hệ thông không
                        đáng tin cậy.
                      </div>
                    </div>
                  </div>

                  <div className='div-center btn-text'>
                    <Link href={PATH_CONFIG.privacyPolicy}>
                      <a target='_blank' rel='noopener noreferrer'>
                        Tìm hiểu thêm: Chính sách bảo mật thông tin của Fetch
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
                  <h3 className='card-title'>Tăng thêm thu nhập</h3>

                  <div className='list-items-container'>
                    <div className='h6'>
                      Nguồn thu nhập đảm bảo từ 2 đến 5 triệu nhờ:
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

                      <div className='h6'>Giới thiệu thành viên mới</div>
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
                        Giới thiệu ứng viên phù hợp cho các vị trí
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
                        Chia sẻ #shareCV các ứng viên đang open-to-work sẵn có
                      </div>
                    </div>
                  </div>

                  <div className='div-center btn-text'>
                    <Link href='https://www.linkedin.com/pulse/b%E1%BA%A1n-s%E1%BA%BD-kh%C3%B4ng-mu%E1%BB%91n-b%E1%BB%8F-l%E1%BB%A1-3-c%C6%A1-h%E1%BB%99i-tuy%E1%BB%87t-v%E1%BB%9Di-n%C3%A0y?trk=public_post_feed-article-content'>
                      <a target='_blank' rel='noopener noreferrer'>
                        Tìm hiểu thêm: 3 cách tăng thu nhập cùng Fetch
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
                    src='/images/fetchunt/why-should-chose-we.svg'
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
                  <h3 className='card-title'>Cơ hội công bằng cho tất cả </h3>

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
                        Khác với các chương trình chỉ dành cho tuyển dụng viên
                        chuyên nghiệp, nền tảng của Fetch chào đón tất cả các
                        đối tượng có nhu cầu tìm kiếm hoặc giới thiệu việc làm
                        trên thị trường IT sôi động.
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
                        Bạn có thể cạnh tranh tiền thưởng công bằng khi giới
                        thiệu người thân, bạn bè, hoặc đồng nghiệp mà không cần
                        phải lo lắng rằng mình có quá ít CV hay chỉ quan tâm tới
                        một cơ hội đặc biệt nào đó.
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
                          title='Đăng ký tài khoản giới thiệu ngay'
                          onClick={async () => {
                            const { initializeFirebase } = await import(
                              '@/utils/firebase'
                            )

                            const analytics = await initializeFirebase()
                            if (analytics) {
                              logEvent(analytics, '#clickthrough_Signup_end')
                            }
                          }}
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
    [isMobileScreen],
  )

  return (
    <div className={clsx(styles['content-wrapper'])}>
      <div className={clsx(styles['content-container'])}>
        <div className='d-flex justify-content-lg-between ft-main-content-container'>
          <div className='main-header'>Tại sao chọn tin tưởng Fetch</div>

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
