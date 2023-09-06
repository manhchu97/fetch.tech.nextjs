import { useEffect, useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import clsx from 'clsx'
import ldDebounce from 'lodash.debounce'

import AnimatiopnOnScrollWrap from '@/components/AnimationOnScrollWrap'
import Button from '@/components/button/Button'

import styles from './JoinSteps.module.scss'
import JoinStepsAccordion from './accordion'

const joinSteps = [
  {
    step: 1,
    icon: '/images/fetchunt/step_1.png',
    title: <>Đăng ký thành viên</>,
    content: (
      <>
        Truy cập&nbsp;
        <Link href='https://portal.fetch.tech/auth/login?tab=signin'>
          <a target='_blank' rel='noopener noreferrer'>
            <u>tại đây</u>
          </a>
        </Link>
        &nbsp;và điền đầy đủ thông tin theo mẫu. Chọn <strong>Đăng ký</strong>
        &nbsp; để hoàn thành bước 1.
      </>
    ),
  },
  {
    step: 2,
    icon: '/images/fetchunt/step_2.png',
    title: <>Tìm kiếm công việc & ứng viên phù hợp</>,
    content: (
      <>
        Đăng nhập nền tảng và tìm hiểu thông tin các vị trí có ứng viên phù hợp.
      </>
    ),
  },
  {
    step: 3,
    icon: '/images/fetchunt/step_3.png',
    title: <>Giới thiệu ứng viên</>,
    content: (
      <>
        Tải và nhập lên đầy đủ thông tin ứng viên, kiểm tra lại hồ sơ trong danh
        sách vị trí ứng tuyển.
      </>
    ),
  },
  {
    step: 4,
    icon: '/images/fetchunt/step_4.png',
    title: <>Theo dõi trạng thái ứng viên & chờ xét duyệt phần thưởng</>,
    content: (
      <>
        Theo dõi trạng thái ứng viên trên hệ thống sẽ giúp bạn dễ dàng tính được
        tiền thưởng nhờ cơ chế hoa hồng minh bạch cho từng vị trí tuyển.
      </>
    ),
  },
  {
    step: 5,
    icon: '/images/fetchunt/step_5.png',
    title: <>Rút tiền thưởng về tài khoản của bạn</>,
    content: (
      <>
        Sau khi được xác nhận điểm thưởng, bạn có thể đổi điểm thưởng thành tiền
        mặt và rút về tài khoản ngân hàng bạn đã đăng ký trong mục Hồ sơ.
      </>
    ),
  },
]

const JoinSteps = () => {
  const [open, setOpen] = useState(false)
  const [isMobileScreen, setIsMobileScreen] = useState(false)

  useEffect(() => {
    let unmounted = false

    const handleResize = ldDebounce(() => {
      const width = Math.max(
        document.documentElement.clientWidth,
        window.innerWidth || 0,
      )

      if (unmounted) return

      setIsMobileScreen(width <= 990)
    }, 100)

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => {
      unmounted = true
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className={styles['join-steps-container']}>
      <div className='join-steps-header'>Các bước để gia nhập nhà FETCHUNT</div>

      {isMobileScreen ? (
        <AnimatiopnOnScrollWrap
          render={(ref, animate) => (
            <div
              className={clsx('join-steps-main m-auto', {
                animate__animated: true,
                animate__bounceIn: animate,
              })}
              ref={ref}
            >
              {joinSteps.map((item) => (
                <JoinStepsAccordion
                  key={item.step}
                  step={item.step}
                  icon={item.icon}
                  title={item.title}
                  content={item.content}
                />
              ))}
            </div>
          )}
        />
      ) : (
        <AnimatiopnOnScrollWrap
          render={(ref, animate) => (
            <div
              className={clsx('join-steps-main ', {
                animate__animated: true,
                animate__bounceIn: animate,
              })}
              ref={ref}
            >
              <div className='container'>
                <div className='row gy-3'>
                  {joinSteps.map((item, index) => (
                    <div
                      key={index}
                      className='col position-relative d-flex flex-column'
                    >
                      <div
                        className='step-title-container'
                        role='button'
                        onClick={() => setOpen((prev) => !prev)}
                      >
                        <div className='step-image-container'>
                          <Image
                            src={item.icon}
                            alt={item.step.toString()}
                            width={120}
                            height={120}
                          />

                          {item.step < joinSteps.length && (
                            <div className='step-arrow-container position-absolute'>
                              <Image
                                src='/images/fetchunt/double_arrow_right.png'
                                alt='arrow step'
                                width={40}
                                height={40}
                                quality={100}
                              />
                            </div>
                          )}
                        </div>

                        <div className='step-title-main'>
                          <div className='h6'>{item.title}</div>
                          {isMobileScreen && (
                            <div
                              role='button'
                              className={clsx('show-more-btn text-center', {
                                initial: !open,
                                reverse: open,
                              })}
                              onClick={() => setOpen((prev) => !prev)}
                            >
                              <Image
                                src='/images/fetchunt/double_arrow_down.png'
                                alt='show more'
                                width={16}
                                height={16}
                              />
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div
                role='button'
                className={clsx('show-more-btn text-center', {
                  initial: !open,
                  reverse: open,
                })}
                onClick={() => setOpen((prev) => !prev)}
              >
                <Image
                  src='/images/fetchunt/double_arrow_down.png'
                  alt='show more'
                  width={32}
                  height={32}
                />
              </div>

              {open && (
                <div className='container'>
                  <div className='row gy-3'>
                    {joinSteps.map((item, index) => (
                      <div key={index} className='col d-flex flex-column'>
                        <div className='step-content-container'>
                          <div className='h6'>{item.content}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        />
      )}

      <div className='join-steps-footer'>
        <Link href='https://m.me/fetchvietnam' passHref>
          <a target='_blank' rel='noopener noreferrer'>
            <Button
              className='btn-primary'
              type='button'
              variant='filled'
              size='large'
              title='Hướng dẫn tôi'
            />
          </a>
        </Link>
      </div>
    </div>
  )
}

export default JoinSteps
