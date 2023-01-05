import React from 'react'

import Image from 'next/image'

import clsx from 'clsx'

import { careerData } from '@/config/employees'

import AnimatiopnOnScrollWrap from '@/components/AnimationOnScrollWrap'

import styles from './Employee.module.scss'

const Employee = () => {
  return (
    <div className={styles.employee}>
      <div className='employee-section'>
        <section className='employee-header'>
          <div className='row div-center wrap-container'>
            <div className='col-xs-12 col-sm-12 col-lg-8 col-xl8'>
              <AnimatiopnOnScrollWrap
                render={(ref, animate) => (
                  <div
                    ref={ref}
                    className={clsx({
                      animate__animated: true,
                      animate__zoomIn: animate,
                    })}
                  >
                    <div className='h1'>Work globally, stay locally</div>

                    <div className='h6-p-color'>
                      Experience the world without stepping out of Vietnam. Get
                      unrestricted international exposure while applying your
                      expertise from the comforts of home with Fetch.
                    </div>

                    <button className='btn-learn-more'>Learn More</button>
                  </div>
                )}
              />
            </div>
          </div>
        </section>

        <section className='employee-career '>
          <div className='row div-center wrap-container'>
            <div className='col-sm-12 col-lg-6 mb-5'>
              <AnimatiopnOnScrollWrap
                render={(ref, animate) => (
                  <div
                    ref={ref}
                    className={clsx({
                      h2: true,
                      animate__animated: true,
                      animate__faster: true,
                      animate__lightSpeedInLeft: animate,
                    })}
                  >
                    Why build your career with Fetch?
                  </div>
                )}
              />

              <AnimatiopnOnScrollWrap
                render={(ref, animate) => (
                  <div
                    ref={ref}
                    className={clsx({
                      'par-grey-color': true,
                      animate__animated: true,
                      animate__fast: true,
                      animate__lightSpeedInLeft: animate,
                    })}
                  >
                    It&apos;s simple, Fetch cares. We are committed to nurturing
                    every employee to be the best developer they can be. To
                    provide you with the right tools and opportunities to a
                    global audience, expanding their horizons beyond Vietnam.
                  </div>
                )}
              />
            </div>

            <div className='col-sm-12 col-lg-6'>
              <ul className='list-wrap'>
                {careerData?.map((career) => (
                  <AnimatiopnOnScrollWrap
                    key={career.id}
                    render={(ref, animate) => (
                      <li
                        ref={ref}
                        className={clsx({
                          animate__animated: true,
                          animate__fast: true,
                          animate__lightSpeedInRight: animate,
                        })}
                      >
                        <div className='head'>
                          <span>{career?.id}</span>
                        </div>

                        <div className='content'>
                          <div className='h5 h5-bold'>{career?.title}</div>

                          <div className='par-grey-color'>
                            {career?.subtitle}
                          </div>
                        </div>
                      </li>
                    )}
                  />
                ))}

                <AnimatiopnOnScrollWrap
                  ratio={1.1}
                  render={(ref, animate) => (
                    <div
                      ref={ref}
                      className={clsx({
                        'horizontal-line': true,
                        animate__animated: true,
                        animate__slower: true,
                        animate__flipInX: animate,
                      })}
                    ></div>
                  )}
                />
              </ul>
            </div>
          </div>
        </section>

        <section className='employee-usp'>
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
                          className='check-icon'
                          src='/images/tick15.svg'
                          alt='check'
                          width={16}
                          height={16}
                        />
                      </div>

                      <div className='text'>
                        <div className='h5'>Gain global exposure from home</div>

                        <div className='par-grey-color'>
                          Experience working with international organisations
                          without stepping outside of Vietnam.
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
                          src='/images/tick15.svg'
                          alt='check'
                          width={16}
                          height={16}
                        />
                      </div>

                      <div className='text'>
                        <div className='h5'>Develop and enhance your craft</div>

                        <div className='par-grey-color'>
                          Expand your opportunities and hone your expertise to
                          forge a stronger career path.
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
                        src='/images/FrameUsp.png'
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
                        src='/images/healthcare.png'
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
                          className='check-icon'
                          src='/images/tick15.svg'
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
                          src='/images/tick15.svg'
                          alt='check'
                          width={16}
                          height={16}
                        />
                      </div>

                      <div className='text'>
                        <div className='h5'>Explore our range of benefits</div>

                        <div className='par-grey-color'>
                          We provide all employees with a personal laptop, as
                          well as perks like a fully-stocked pantry and a weekly
                          sports program.
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
                      <div className='h3 mb-5 '>
                        In search of a career instead?
                      </div>

                      <div className='h5'>
                        A career with Fetch is like no other
                      </div>

                      <div className='par'>
                        Pursue your profession with us today
                      </div>

                      <button className='btn-find-more'>Learn More</button>
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
                        src='/images/findMore.png'
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

        <section className='employee-member'>
          <div className='wrap-container'>
            <div className='row justify-content-center'>
              <div className='col col-sm-12 col-md-10 col-xl-6'>
                <div className='heart-img mx-auto'>
                  <Image
                    src='/images/heart.png'
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
                        'big-text': true,
                        animate__animated: animate,
                        animate__bounceIn: animate,
                      })}
                    >
                      150+
                    </div>
                  )}
                />

                <div className='subtext'>associates and growing</div>

                <div className='paragraph'>
                  You don&apos;t just play a role on our client&apos;s team.
                  First and foremost, you are a part of the Fetch family. As a
                  valued member of our community, you stand to enjoy bonuses
                  like company trips and more.
                </div>

                <button className='btn-learn-more'>Learn more</button>
              </div>
            </div>

            <div className='row justify-content-center emp-row'>
              <div className='col-sm-12 col-md-6 emp-col'>
                <AnimatiopnOnScrollWrap
                  render={(ref, animate) => (
                    <div
                      ref={ref}
                      className={clsx({
                        'emp-wrap': true,
                        animate__animated: animate,
                        animate__bounceIn: animate,
                      })}
                    >
                      <div className='emp-img'>
                        <Image
                          src={'/images/avt1.jpg'}
                          width={540}
                          height={720}
                          objectFit='contain'
                          alt='avt1'
                          id='1'
                        />
                      </div>

                      <div className='quote-wrap'>
                        <div className='quote-text'>
                          “I’ve been working at Fetch for some years. Not only
                          do I tackle meaningful challenges and projects, I also
                          get to enjoy valuable team-bonding sessions through
                          company dinners and activities that allow me to
                          exchange and learn new skills with my coworkers.”
                        </div>

                        <div className='sign'>
                          Tran Bao Tram,
                          <br />
                          Marketer
                        </div>
                      </div>
                    </div>
                  )}
                />
              </div>

              <div className='col-sm-12 col-md-6 emp-col'>
                <AnimatiopnOnScrollWrap
                  render={(ref, animate) => (
                    <div
                      ref={ref}
                      className={clsx({
                        'emp-wrap': true,
                        animate__animated: animate,
                        animate__bounceIn: animate,
                      })}
                    >
                      <div className='emp-img'>
                        <Image
                          src={'/images/avt2.jpg'}
                          width={540}
                          height={720}
                          objectFit='contain'
                          alt='avt2'
                        />
                      </div>

                      <div className='quote-wrap'>
                        <div className='quote-text'>
                          “I just graduated from college and I’m glad to be able
                          to begin my employment with Fetch. I get the
                          opportunity of working with a global team while still
                          living in Vietnam. This allows me to broaden my
                          horizon without having to making additional expenses
                          such as rent in a foreign country.”
                        </div>

                        <div className='sign'>
                          Duc Tran,
                          <br />
                          Front-end Developer
                        </div>
                      </div>
                    </div>
                  )}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Employee
