import React from 'react'

import Image from 'next/image'

import clsx from 'clsx'

import AnimatiopnOnScrollWrap from '@/components/AnimationOnScrollWrap'

import styles from './EmployeeUSP.module.scss'

const EmployeeUSP = (): React.ReactElement => (
  <section className={styles['employee-usp']}>
    <div className='top-section usp-row'>
      <div className='row wrap-container gx-4 d-flex align-items-center'>
        <div className='col-sm-12 col-md-6'>
          <AnimatiopnOnScrollWrap
            render={(ref, animate) => (
              <div
                ref={ref}
                className={clsx({
                  'h3 mb-5': true,
                  animate__animated: animate,
                  animate__fadeInLeft: animate,
                  animate__faster: animate,
                })}
              >
                Fetch lets you to grow from where you are
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
                  <div className='h5'>Gain global exposure from home</div>

                  <div className='par-grey-color'>
                    Experience working with international organisations without
                    stepping outside of Vietnam.
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
                  <div className='h5'>Develop and enhance your craft</div>

                  <div className='par-grey-color'>
                    Expand your opportunities and hone your expertise to forge a
                    stronger career path.
                  </div>
                </div>
              </div>
            )}
          />
        </div>

        <div className='col-sm-12 col-md-6'>
          <AnimatiopnOnScrollWrap
            ratio={0.5}
            render={(ref, animate) => (
              <div
                ref={ref}
                className={clsx({
                  'frame-usp': true,
                  animate__animated: animate,
                  animate__fadeInTopRight: animate,
                })}
              >
                <Image
                  src='/images/employee/FrameUsp.png'
                  alt='usp'
                  layout='fill'
                  objectFit='contain'
                />
              </div>
            )}
          />
        </div>
      </div>
    </div>

    <div className='bottom-section usp-row'>
      <div className='row wrap-container gx-4 d-flex align-items-center'>
        <div className='col-sm-12 col-md-6'>
          <AnimatiopnOnScrollWrap
            render={(ref, animate) => (
              <div
                ref={ref}
                className={clsx({
                  'frame-usp': true,
                  animate__animated: animate,
                  animate__fadeInTopLeft: animate,
                })}
              >
                <Image
                  src='/images/employee/healthcare.png'
                  alt='healthcare'
                  layout='fill'
                  objectFit='contain'
                />
              </div>
            )}
          />
        </div>

        <div className='col-sm-12 col-md-6'>
          <AnimatiopnOnScrollWrap
            render={(ref, animate) => (
              <div
                ref={ref}
                className={clsx({
                  'h3 mb-5': true,
                  animate__animated: animate,
                  animate__fadeInRight: animate,
                  animate__faster: animate,
                })}
              >
                Every member of the Fetch community is valued
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
                  animate__fadeInRight: animate,
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
                  <div className='h5'>Get comprehensive healthcare</div>

                  <div className='par-grey-color'>
                    Fetch employees are entitled to health insurance with
                    medical expenses covered.
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
                  animate__fadeInRight: animate,
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
                  <div className='h5'>Explore our range of benefits</div>

                  <div className='par-grey-color'>
                    We provide all employees with a personal laptop, as well as
                    perks like a fully-stocked pantry and a weekly sports
                    program.
                  </div>
                </div>
              </div>
            )}
          />
        </div>
      </div>
    </div>

    <div className='more-section usp-row'>
      <div className='row wrap-container gx-4 d-flex justify-content-between align-items-center'>
        <div className='col-sm-12 col-md-4'>
          <AnimatiopnOnScrollWrap
            render={(ref, animate) => (
              <div
                ref={ref}
                className={clsx({
                  animate__animated: animate,
                  animate__fadeInUp: animate,
                })}
              >
                <div className='h3 mb-5 '>In search of a career instead?</div>

                <div className='h5'>A career with Fetch is like no other</div>

                <div className='par'>Pursue your profession with us today</div>

                <button className='btn-find-more'>Find out more</button>
              </div>
            )}
          />
        </div>

        <div className='col-sm-12 col-md-6'>
          <AnimatiopnOnScrollWrap
            render={(ref, animate) => (
              <div
                ref={ref}
                className={clsx({
                  'frame-usp': true,
                  animate__animated: animate,
                  animate__fadeInDown: animate,
                })}
              >
                <Image
                  src='/images/employee/findMore.png'
                  alt='usp'
                  layout='fill'
                  objectFit='contain'
                />
              </div>
            )}
          />
        </div>
      </div>
    </div>
  </section>
)

export default EmployeeUSP
