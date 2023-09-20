import { useEffect, useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import clsx from 'clsx'
import ldDebounce from 'lodash.debounce'

import { GA_EVENT_NAME } from '@/config/global'

import AnimatiopnOnScrollWrap from '@/components/AnimationOnScrollWrap'
import Button from '@/components/button/Button'

import useTranslation from '@/hooks/useTranslation'

import { handleTrackingEvent } from '@/utils/googleAnalytics'

import styles from './JoinSteps.module.scss'
import JoinStepsAccordion from './accordion'

const JOIN_STEPS = (translate: (key: string) => string) => [
  {
    step: 1,
    icon: '/images/fetchunt/step_1.png',
    title: <>{translate('hunt.join_steps.step_1.title')}</>,
    content: (
      <>
        {translate('hunt.join_steps.step_1.description_1')}&nbsp;
        <Link href='https://portal.fetch.tech/auth/login?tab=signin'>
          <a target='_blank' rel='noopener noreferrer'>
            <u>{translate('hunt.join_steps.step_1.description_2')}</u>
          </a>
        </Link>
        &nbsp;{translate('hunt.join_steps.step_1.description_3')}&nbsp;
        <strong>{translate('hunt.join_steps.step_1.description_4')}</strong>
        &nbsp; {translate('hunt.join_steps.step_1.description_5')}
      </>
    ),
  },
  {
    step: 2,
    icon: '/images/fetchunt/step_2.png',
    title: <>{translate('hunt.join_steps.step_2.title')}</>,
    content: <>{translate('hunt.join_steps.step_2.description')}</>,
  },
  {
    step: 3,
    icon: '/images/fetchunt/step_3.png',
    title: <>{translate('hunt.join_steps.step_3.title')}</>,
    content: <>{translate('hunt.join_steps.step_3.description')}</>,
  },
  {
    step: 4,
    icon: '/images/fetchunt/step_4.png',
    title: <>{translate('hunt.join_steps.step_4.title')}</>,
    content: <>{translate('hunt.join_steps.step_4.description')}</>,
  },
  {
    step: 5,
    icon: '/images/fetchunt/step_5.png',
    title: <>{translate('hunt.join_steps.step_5.title')}</>,
    content: <>{translate('hunt.join_steps.step_5.description')}</>,
  },
]

const JoinSteps = () => {
  const { translate } = useTranslation()
  const [open, setOpen] = useState(false)
  const [isMobileScreen, setIsMobileScreen] = useState(false)

  const joinSteps = JOIN_STEPS(translate)

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
      <div className='join-steps-header'>
        {translate('hunt.join_steps.title')}
      </div>

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
              title={translate('hunt.join_steps.guide_me')}
              onClick={() => handleTrackingEvent(GA_EVENT_NAME.USER_INTEREST)}
            />
          </a>
        </Link>
      </div>
    </div>
  )
}

export default JoinSteps
