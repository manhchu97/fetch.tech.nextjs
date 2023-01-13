import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

import clsx from 'clsx'

import AnimatiopnOnScrollWrap from '@/components/AnimationOnScrollWrap'

import FeatureCell from './FeatureCell'
import FeatureLine from './FeatureLine'
import styles from './HowItWork.module.scss'

const HowItWork = (): React.ReactElement => {
  return (
    <section className={styles['company-how-it-work-container']}>
      <div className='row div-center wrap-container '>
        <div className='col-xs-12 col-sm-12 col-lg-8 col-xl-8'>
          <div className='img-wrap mx-auto'>
            <Image
              src='/images/company/CompanyPic1.svg'
              width={96}
              height={96}
              alt='heart'
            />
          </div>

          <AnimatiopnOnScrollWrap
            render={(ref, animate) => (
              <div
                ref={ref}
                className={clsx({
                  animate__animated: animate,
                  animate__fadeInLeft: animate,
                })}
              >
                <div className='h3'>
                  We offer customised packages to each client
                </div>

                <div className='h6-p-color'>
                  No longer is hiring and managing offshore staff daunting. With
                  Fetch, you get to build your remote dream.
                </div>
              </div>
            )}
          />
        </div>
      </div>

      <div className='detail'>
        <div className='row div-center wrap-container'>
          <div className='col-sm-12 col-md-4 col-xl-4 left'>
            <AnimatiopnOnScrollWrap
              render={(ref, animate) => (
                <div
                  ref={ref}
                  className={clsx({
                    animate__animated: animate,
                    animate__fadeInLeft: animate,
                  })}
                >
                  <div className='h5'>We offer a diverse range of products</div>

                  <div className='par-grey-color'>
                    From team management to project consultancy, we will always
                    have a service available to meet your business requirements.
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
                  <div className='h5'>Flexible and catered to your needs</div>

                  <div className='par-grey-color'>
                    Don&apos;t need a particular feature in the service
                    selected? No problem. Our plans are designed to be adaptable
                    to match your requests accordingly.
                  </div>
                </div>
              )}
            />

            <FeatureLine feature='Talent acquisition' />

            <FeatureLine feature='Services management' />

            <FeatureLine feature='Payroll and compliances' />

            <FeatureLine feature='Full-suite project consultancy' />
          </div>

          <div className='col-sm-12 col-md-8 col-xl-8 right'>
            <div className='banner'>
              <div className='h5'>Client services</div>
            </div>

            <div className='row g-4'>
              <FeatureCell
                feature='Talent acquisition'
                icon='/images/company/Feature1.svg'
                color='black'
                bgColor='#D2E2ED'
              />

              <FeatureCell
                feature='Services management'
                icon='/images/company/Feature3.svg'
                color='white'
                bgColor='#FF6847'
              />

              <FeatureCell
                feature='Payroll and compliances'
                icon='/images/company/Feature2.svg'
                color='white'
                bgColor='#17274E'
              />

              <FeatureCell
                feature='Full-suite project consultancy'
                icon='/images/company/Feature4.svg'
                color='white'
                bgColor='#FFBE16'
              />
            </div>
          </div>
        </div>

        <AnimatiopnOnScrollWrap
          render={(ref, animate) => (
            <div
              ref={ref}
              className={clsx({
                'text-group-with-button div-center mx-auto': true,
                animate__animated: animate,
                animate__zoomIn: animate,
              })}
            >
              <div className='h6' style={{ minWidth: '50%' }}>
                Enjoy tailormade, flexible solutions, designed for your business
                needs.
              </div>

              <Link href='/services/4'>
                <button
                  className='btn-learn-more'
                  style={{ background: '#fff' }}
                >
                  Learn more
                </button>
              </Link>
            </div>
          )}
        />
      </div>
    </section>
  )
}

export default HowItWork
