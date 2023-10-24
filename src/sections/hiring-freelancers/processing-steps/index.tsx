import React, { useEffect, useMemo, useState } from 'react'

import Image from 'next/image'

import clsx from 'clsx'
import ldDebounce from 'lodash.debounce'

import AnimatiopnOnScrollWrap from '@/components/AnimationOnScrollWrap'
import Button from '@/components/button/Button'

import styles from './ProcessingSteps.module.scss'

type ProcessingProps = {
  handleOpenClientInfoPopup: () => void
}

const ProcessingSteps = ({
  handleOpenClientInfoPopup,
}: ProcessingProps): React.ReactElement => {
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
          <>
            <h2 className='main-header'>
              How we <span>help</span>
            </h2>

            <div className='main-content'>
              <div className='card-container how-we-help d-flex justify-content-xl-around align-items-center align-items-xl-end'>
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
                        width={592}
                        height={400}
                        quality={100}
                      />
                    </div>
                  )}
                />

                <AnimatiopnOnScrollWrap
                  render={(ref, animate) => (
                    <ul
                      ref={ref}
                      className={clsx('content-container', {
                        animate__animated: true,
                        animate__slideInRight: !isMobileScreen && animate,
                        animate__fadeInUp: isMobileScreen && animate,
                      })}
                    >
                      <ProcessingStep
                        title='Finding the correct talents'
                        content={
                          <>
                            Finding the correct freelance talents can be a long
                            and undulating task.
                            <br /> <br />
                            With over 10 years of experience in tech
                            recruitment, <strong>Fetch</strong> is able to help
                            connect you to the top tech talents in Vietnam.
                          </>
                        }
                      />

                      <ProcessingStep
                        title='Engage freelancers in reliable process'
                        content={
                          <>
                            The nightmare for many companies, freelancers
                            becoming uncontactable and it is hard to hold them
                            accountable.
                            <br /> <br />
                            At <strong>Fetch</strong>, we help you engage the
                            freelancers in proper legal manner with enforceable
                            contracts. This makes the engagement a more reliable
                            process.
                          </>
                        }
                      />
                    </ul>
                  )}
                />
              </div>
            </div>
          </>
        ),
      },
      {
        id: 'ft-connection',
        render: (
          <>
            <h2 className='main-header'>
              How it <span>work</span>
            </h2>
            <div className='main-content mt-4'>
              <div className='card-container how-it-work d-flex justify-content-xl-around align-items-center'>
                <AnimatiopnOnScrollWrap
                  render={(ref, animate) => (
                    <div
                      ref={ref}
                      className={clsx('content-container text-center', {
                        animate__animated: true,
                        animate__slideInLeft: !isMobileScreen && animate,
                        animate__fadeInDown: isMobileScreen && animate,
                      })}
                    >
                      <ul>
                        <ProcessingStep
                          number={1}
                          title='GET TO KNOW YOUR EXPECTATION'
                          content='Please fill up the following form to send us your request for any kind of engineering help you required'
                        />

                        <ProcessingStep
                          number={2}
                          title='FIGURE OUT THE DETAILS'
                          content='You will be assigned a dedicated account manager to assist you along the whole engagement. We will reach out shortly for an introductory meeting'
                        />

                        <ProcessingStep
                          number={3}
                          title='MATCH YOUR NEEDS'
                          content='Fetch will match your request to our database of over 20,000 of the top tech professionals to find you potential matches to your needs'
                        />

                        <ProcessingStep
                          number={4}
                          title='NOTIFY YOUR MATCHES AT ANY TIME'
                          content='Receive email notification from your account manager when there is a match to download candidate CV'
                        />

                        <ProcessingStep
                          number={5}
                          title='FIND YOUR BEST FIT'
                          content='Your account manager will schedule interviews for your shortlisted candidates'
                        />

                        <ProcessingStep number={6} title='FINALIZE ENGAGEMENT'>
                          <ul className='list-items-container'>
                            <li className='d-flex'>
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
                            </li>

                            <li className='d-flex'>
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
                                Fuss free monthly billing
                              </div>
                            </li>

                            <li className='d-flex'>
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
                                Dedicated account manager will continue to serve
                                you on any administrative matter
                              </div>
                            </li>
                          </ul>
                        </ProcessingStep>

                        <div className='horizontal-line' />
                      </ul>

                      <Button
                        className='btn-primary'
                        size='large'
                        variant='filled'
                        title='Start now >>>'
                        onClick={handleOpenClientInfoPopup}
                      />
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
                        width={798}
                        height={500}
                        quality={100}
                      />
                    </div>
                  )}
                />
              </div>
            </div>
          </>
        ),
      },
    ],
    [handleOpenClientInfoPopup, isMobileScreen],
  )

  return (
    <div className={clsx(styles['content-container'])}>
      <div className='d-flex justify-content-lg-between ft-main-content-container'>
        {sections.map((section) => (
          <React.Fragment key={section.id}>{section.render}</React.Fragment>
        ))}
      </div>
    </div>
  )
}

export default ProcessingSteps

type ProcessingStepProps = {
  number?: number
  title: string | React.ReactNode
  content?: string | React.ReactNode
  children?: React.ReactNode
}

const ProcessingStep = ({
  number,
  title,
  content,
  children,
}: ProcessingStepProps): React.ReactElement => {
  return (
    <li className={styles['step-container']}>
      {number && (
        <div className='step-number'>
          <span>{number}</span>
        </div>
      )}

      <div>
        <div className='step-title h4'>{title}</div>

        {content && <div className='step-content h5 mb-0'>{content}</div>}

        <div className='step-list-children'>{children}</div>
      </div>
    </li>
  )
}
