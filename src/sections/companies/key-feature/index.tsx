import React from 'react'

import Image from 'next/image'

import clsx from 'clsx'

import AnimatiopnOnScrollWrap from '@/components/AnimationOnScrollWrap'

import styles from './KeyFeature.module.scss'

const KeyFeature = (): React.ReactElement => (
  <section className={styles['company-key-feature-container']}>
    <div className='row wrap-container gx-4 d-flex'>
      <div className='col-sm-12 col-md-6 col-xl-6 left'>
        <AnimatiopnOnScrollWrap
          render={(ref, animate) => (
            <div
              ref={ref}
              className={clsx({
                'img-container': true,
                animate__animated: animate,
                animate__fadeInTopLeft: animate,
              })}
            >
              <Image
                src='/images/company/Theme1.png'
                alt='theme1'
                layout='fill'
                objectFit='contain'
              />
            </div>
          )}
        />
      </div>

      <div className='col-sm-12 col-md-6 right'>
        <AnimatiopnOnScrollWrap
          render={(ref, animate) => (
            <div
              ref={ref}
              className={clsx({
                'h2 mb-4': true,
                animate__animated: animate,
                animate__fadeInLeft: animate,
                animate__faster: animate,
              })}
            >
              What makes Fetch different?
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
                <div className='h5-bold'>Quality talents at the right cost</div>

                <div className='par-grey-color'>
                  All specialists are vetted and guaranteed to deliver results
                  without any additional fees.
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
                <div className='h5-bold'>All-in-one service</div>

                <div className='par-grey-color'>
                  We&apos;re always available to support you whenever you
                  require our assistance regarding our partnership.
                </div>
              </div>
            </div>
          )}
        />
      </div>
    </div>
  </section>
)

export default KeyFeature
