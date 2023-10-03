import React, { useEffect, useMemo, useState } from 'react'

import Image from 'next/image'

import clsx from 'clsx'
import ldDebounce from 'lodash.debounce'

import AnimatiopnOnScrollWrap from '@/components/AnimationOnScrollWrap'

import styles from './ProcessingSteps.module.scss'

const ProcessingSteps = (): React.ReactElement => {
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
        id: 'ft-presentation',
        render: (
          <div className='card-container three-first-steps d-flex justify-content-xl-around align-items-center'>
            <AnimatiopnOnScrollWrap
              render={(ref, animate) => (
                <div
                  ref={ref}
                  className={clsx(
                    'position-relative div-center processing-step-img',
                    {
                      animate__animated: true,
                      animate__slideInLeft: !isMobileScreen && animate,
                      animate__fadeInDown: isMobileScreen && animate,
                    },
                  )}
                >
                  <Image
                    src='/images/hiring-freelancers/processing_bg_1.png'
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
                  <ProcessingStep
                    title='Step 1'
                    content='Please fill up the following form to send us your request for any kind of engineering help you required'
                  />

                  <ProcessingStep
                    title='Step 2'
                    content='You will be assigned a dedicated account manager to assist you along the whole engagement. We will reach out shortly for an introductory meeting'
                  />

                  <ProcessingStep
                    title='Step 3'
                    content='Fetch will match your request to our database of over 20,000 of the top tech professionals to find you potential matches to your needs                    '
                  />
                </div>
              )}
            />
          </div>
        ),
      },
      {
        id: 'ft-connection',
        render: (
          <div className='card-container three-last-steps d-flex justify-content-xl-around align-items-center'>
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
                  <ProcessingStep
                    title='Step 4'
                    content='Receive email notification from your account manager when there is a match to download candidate CV'
                  />

                  <ProcessingStep
                    title='Step 5'
                    content='Your account manager will schedule interviews for your shortlisted candidates'
                  />

                  <ProcessingStep title='Step 6' content='Finalize engagement'>
                    <div className='list-items-container'>
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
                          Proper employment contracts and tax handling 
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

                        <div className='h6'>Fuss free monthly billing</div>
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
                          Dedicated account manager will continue to serve you
                          on any administrative matter
                        </div>
                      </div>
                    </div>
                  </ProcessingStep>
                </div>
              )}
            />

            <AnimatiopnOnScrollWrap
              render={(ref, animate) => (
                <div
                  ref={ref}
                  className={clsx(
                    'position-relative processing-step-img div-center refer-friends-img',
                    {
                      animate__animated: true,
                      animate__slideInRight: !isMobileScreen && animate,
                      animate__fadeInUp: isMobileScreen && animate,
                    },
                  )}
                >
                  <Image
                    src='/images/hiring-freelancers/processing_bg_2.png'
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
    ],
    [isMobileScreen],
  )

  return (
    <div className={clsx(styles['content-wrapper'])}>
      <div className={clsx(styles['content-container'])}>
        <div className='d-flex justify-content-lg-between ft-main-content-container'>
          <div className='main-header'>
            How it <span>works</span>
          </div>

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

export default ProcessingSteps

type ProcessingStepProps = {
  title: string
  content: string
  children?: React.ReactNode
}

const ProcessingStep = ({
  title,
  content,
  children,
}: ProcessingStepProps): React.ReactElement => {
  return (
    <div className={styles['step-container']}>
      <div className='step-title h4'>{title}</div>

      <div className='step-content h5'>{content}</div>

      <div className='step-list-children'>{children}</div>
    </div>
  )
}
