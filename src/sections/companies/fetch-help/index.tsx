import React from 'react'

import Image from 'next/image'

import clsx from 'clsx'

import AnimatiopnOnScrollWrap from '@/components/AnimationOnScrollWrap'

import styles from './FetchHelp.module.scss'

const FetchHelp = () => (
  <section className={styles['fetch-help-container']}>
    <div className='banner'>
      <Image
        className='banner__img-container'
        src='/images/company/Theme2.png'
        alt='company example'
        layout='fill'
        objectFit='cover'
        objectPosition='center'
      />

      <div className='row banner__inner'>
        <div className='col-md-7 left'>
          <AnimatiopnOnScrollWrap
            render={(ref, animate) => (
              <div
                ref={ref}
                className={clsx({
                  animate__animated: animate,
                  animate__fadeRight: animate,
                })}
              >
                <div className='h2'>
                  &quot;We maximised Chartdesk&apos;s budget to help build a
                  small yet effective team of developers.&quot;
                </div>

                <div className='h6'>Chartdesk</div>
              </div>
            )}
          />
        </div>

        <div className='col-md-5 right'>
          <div className='right-rec'>
            <AnimatiopnOnScrollWrap
              render={(ref, animate) => (
                <div
                  ref={ref}
                  className={clsx({
                    animate__animated: animate,
                    animate__bounceIn: animate,
                  })}
                >
                  <div className='big-text'>80%</div>
                </div>
              )}
            />

            <div className='h5-bold'>saved in expenses</div>

            <div className='par-grey-color'>
              since moving part of their operations to Vietnam for the same
              output quality and time they would have spent locally.
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className='row content'>
      <div className='col-md-6 left'>
        <div className='divider d-md-none '></div>

        <div
          className='collaspe-toggle d-md-none collapsed wrapper-collaspe-toggle'
          data-toggle='collapse'
          data-bs-toggle='collapse'
          data-bs-target='#chartdesk-info-container'
          data-target='#chartdesk-info-container'
        >
          <div className='h6-bold'>About Chart Desk</div>

          <Image
            src='/images/company/DownArrow.svg'
            alt='down'
            width={16}
            height={8}
          />
        </div>

        <div
          id='chartdesk-info-container'
          className='collapse d-md-block mb-4 wrapper-collaspe-toggle'
        >
          <AnimatiopnOnScrollWrap
            render={(ref, animate) => (
              <div
                ref={ref}
                className={clsx({
                  animate__animated: animate,
                  animate__fadeInLeft: animate,
                })}
              >
                <div className='h5-bold'>
                  ChartDesk is a shared inbox—built for teams to efficiently
                  manage business emails exchanged with shared mailboxes
                </div>
              </div>
            )}
          />

          <AnimatiopnOnScrollWrap
            render={(ref, animate) => (
              <div
                ref={ref}
                className={clsx({
                  animate__animated: animate,
                  animate__fadeInLeft: animate,
                })}
              >
                <div className='par-grey-color'>
                  Back in 2016, Chartdesk was a relatively new startup. Being a
                  new startup, the high cost of tech talents in Singapore was
                  simply out of their reach. They needed a low cost solution to
                  build up their tech capabilities.
                </div>
              </div>
            )}
          />
        </div>

        <div className='divider d-md-none '></div>

        <div
          className='collaspe-toggle d-md-none collapsed wrapper-collaspe-toggle'
          data-toggle='collapse'
          data-bs-toggle='collapse'
          data-bs-target='#how-we-tackled-container'
          data-target='#how-we-tackled-container'
        >
          <div className='h6-bold'>How we tackled</div>

          <Image
            src='/images/company/DownArrow.svg'
            alt='down'
            width={16}
            height={8}
          />
        </div>

        <div
          className='collapse d-md-block wrapper-collaspe-toggle'
          id='how-we-tackled-container'
        >
          <AnimatiopnOnScrollWrap
            render={(ref, animate) => (
              <div
                ref={ref}
                className={clsx({
                  'how-we-tackled': true,
                  animate__animated: animate,
                  animate__fadeInLeft: animate,
                })}
              >
                <div className='h6-bold mb-4'>How we tackled</div>

                <div className='par'>
                  Fetch was able to help chartdesk leverage on the much lower
                  cost in Vietnam to help Chartdesk build a small but high
                  impact team of developers to build their product
                </div>
              </div>
            )}
          />
        </div>
      </div>

      <div className='col-md-6 right'>
        <AnimatiopnOnScrollWrap
          render={(ref, animate) => (
            <div
              ref={ref}
              className={clsx({
                'achieve-item': true,
                animate__animated: animate,
                animate__fadeInLeft: animate,
                animate__fast: animate,
              })}
            >
              <div className='check-icon-wrap'>
                <Image
                  src='/images/employee/tick15.svg'
                  alt='check'
                  width={16}
                  height={16}
                />
              </div>

              <div className='text'>
                <div className='h5-bold'>The impacts</div>

                <div className='par-grey-color'>
                  Chartdesk is today up and running with multiple international
                  clients using their product.
                </div>
              </div>
            </div>
          )}
        />

        <AnimatiopnOnScrollWrap
          render={(ref, animate) => (
            <div
              ref={ref}
              className={clsx({
                'achieve-item': true,
                animate__animated: animate,
                animate__fadeInLeft: animate,
                animate__fast: animate,
              })}
            >
              <div className='check-icon-wrap'>
                <Image
                  src='/images/employee/tick15.svg'
                  alt='check'
                  width={16}
                  height={16}
                />
              </div>

              <div className='text'>
                <div className='h5-bold'>Conclusion</div>

                <div className='par-grey-color'>
                  Fetch is able to help startups scale up and build their tech
                  team in a affordable manner
                </div>
              </div>
            </div>
          )}
        />
      </div>
    </div>
  </section>
)

export default FetchHelp
