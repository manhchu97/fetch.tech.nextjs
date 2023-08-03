import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

import clsx from 'clsx'

import AnimatiopnOnScrollWrap from '@/components/AnimationOnScrollWrap'

import styles from './GTTA.module.scss'

const GTTA = () => {
  return (
    <div className={clsx('container', styles['gtta-container'])}>
      <div className='row div-center heading-title'>
        <div className='col-12 col-xl-10 col-xxl-9'>
          <AnimatiopnOnScrollWrap
            render={(ref, animate) => (
              <div
                ref={ref}
                className={clsx({
                  animate__animated: true,
                  animate__zoomIn: animate,
                })}
              >
                <div className='h1 text-center'>
                  Fetch Technology is part of StartupSG Global Tech Talent
                  Alliance
                </div>
              </div>
            )}
          />
        </div>
      </div>

      <div className='row contact-container d-flex justify-content-between'>
        <div className='col-12 col-lg-6'>
          <AnimatiopnOnScrollWrap
            render={(ref, animate) => (
              <div
                ref={ref}
                className={clsx({
                  animate__animated: animate,
                  animate__fadeInLeft: animate,
                })}
              >
                <div className='info-heading'>
                  <div className='h6'>
                    “The StartupSG Global Tech Talent Alliance is a great
                    initiative that helps Singaporean startups access a global
                    pool of tech talent and compete on a global scale.”
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
                  animate__animated: animate,
                  animate__fadeInLeft: animate,
                })}
              >
                <div className='contact-heading'>
                  <div className='h6'>
                    <Link href='https://form.gov.sg/641ab7a1ea947600128ec2f6'>
                      <a target='_blank' rel='noreferrer'>
                        <span className='contact-link'>Contact us</span>
                      </a>
                    </Link>
                    &nbsp;via this unique link to enjoy the benefits* of this
                    program
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
                  animate__animated: animate,
                  animate__fadeInLeft: animate,
                })}
              >
                <div className='terms-conditions-heading'>
                  <div className='subtitle2'>Terms and Conditions apply.</div>
                </div>
              </div>
            )}
          />
        </div>

        <div className='col-12 col-lg-4 d-flex justify-content-center'>
          <AnimatiopnOnScrollWrap
            render={(ref, animate) => (
              <div
                ref={ref}
                className={clsx({
                  'contact-img-container': true,
                  animate__animated: animate,
                  animate__fadeInUp: animate,
                })}
              >
                <Image
                  alt='sg icon'
                  src='/images/gtta/ic_sg.png'
                  layout='fill'
                  objectFit='cover'
                />
              </div>
            )}
          />
        </div>
      </div>

      <div className='row d-flex justify-content-between who-am-i-container'>
        <div className='col-12 col-lg-6'>
          <AnimatiopnOnScrollWrap
            render={(ref, animate) => (
              <div
                ref={ref}
                className={clsx({
                  animate__animated: animate,
                  animate__fadeInTopLeft: animate,
                })}
              >
                <div className='h4 who-am-i-heading mb-5'>
                  Who is StartupSG?
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
                  animate__fadeInTopLeft: animate,
                })}
              >
                <div className='h6'>
                  Established in 2017, Startup SG was created to showcase
                  Singapore’s vibrant startup ecosystem both locally and
                  overseas. It represents the shared interests of the startup
                  community and unifies efforts to support the ecosystem under
                  its various initiatives and programmes. With Startup SG,
                  startups and ecosystem partners can more easily discover and
                  access available avenues of support.
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
                  animate__fadeInTopLeft: animate,
                })}
              >
                <div className='h6'>
                  In 2018, Startup SG Network was launched to bring Singapore’s
                  tech startup ecosystem even closer together and encourage the
                  proliferation of innovative and collaborative partnerships. A
                  virtual ecosystem of entities in Singapore’s tech startup
                  community, the platform allows local tech startups to profile
                  and put themselves on the radars of both local and global
                  ecosystem players, expanding their opportunities for growth.
                </div>
              </div>
            )}
          />
        </div>

        <div className='col-12 col-lg-4 d-flex justify-content-center'>
          <AnimatiopnOnScrollWrap
            render={(ref, animate) => (
              <div
                ref={ref}
                className={clsx({
                  'who-am-i-img-container': true,
                  animate__animated: animate,
                  animate__fadeInLeft: animate,
                  animate__fast: animate,
                })}
              >
                <Image
                  alt='sg icon'
                  src='/images/gtta/ic_fetch_logo.png'
                  layout='fill'
                  objectFit='cover'
                />
              </div>
            )}
          />
        </div>
      </div>

      <div className='row d-flex justify-content-between align-items-end global-tech-container'>
        <div className='col-12 col-lg-4 global-tech-img-container'>
          <AnimatiopnOnScrollWrap
            render={(ref, animate) => (
              <div
                ref={ref}
                className={clsx({
                  animate__animated: animate,
                  animate__fadeInTopLeft: animate,
                })}
              >
                <div className='global-tech-img'>
                  <Image
                    alt='sg icon'
                    src='/images/gtta/ic_global_tech.png'
                    layout='fill'
                    objectFit='contain'
                  />
                </div>
              </div>
            )}
          />
        </div>

        <div className='col-12 col-lg-6'>
          <div className='row'>
            <div className='col-12'>
              <AnimatiopnOnScrollWrap
                render={(ref, animate) => (
                  <div
                    ref={ref}
                    className={clsx({
                      animate__animated: animate,
                      animate__fadeInRight: animate,
                      animate__faster: animate,
                    })}
                  >
                    <div className='h4 global-tech-heading'>
                      <span className='text-center'>
                        What is the Global Tech Talent Alliance (GTTA)?
                      </span>
                    </div>
                  </div>
                )}
              />
            </div>

            <div className='col-12 mt-5'>
              <AnimatiopnOnScrollWrap
                render={(ref, animate) => (
                  <div
                    ref={ref}
                    className={clsx({
                      animate__animated: animate,
                      animate__fadeInRight: animate,
                      animate__faster: animate,
                    })}
                  >
                    <div className='h6'>
                      Recognizing the challenges that startups face in hiring
                      tech talent, the Global Tech Talent Alliance (GTTA)
                      supports startups’ internationalization efforts by
                      facilitating access to in-market tech talents in Vietnam
                      and India.
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
                      animate__fadeInRight: animate,
                      animate__faster: animate,
                    })}
                  >
                    <div className='h6'>
                      Under the GTTA initiative, companies can leverage a
                      curated list of talent service providers with strong
                      market presence and track records to build local teams
                      that can help with navigating local regulations to achieve
                      more effective market entry. Companies will be able to
                      hire and manage in-market talent to streamline market
                      expansion, localisation and solution development.
                    </div>
                  </div>
                )}
              />
            </div>
          </div>
        </div>
      </div>

      <div className='row gy-5 d-flex justify-content-between align-items-center about-fetch-container'>
        <div className='col-12 col-lg-7'>
          <AnimatiopnOnScrollWrap
            render={(ref, animate) => (
              <div
                ref={ref}
                className={clsx({
                  animate__animated: animate,
                  animate__fadeInLeft: animate,
                  animate__faster: animate,
                })}
              >
                <div className='h4 about-heading'>About FETCH</div>
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
                  animate__faster: animate,
                })}
              >
                <div className='h6'>
                  Fetch Technology is a leading provider of tech manpower
                  solutions based in Vietnam. Founded and headquartered in
                  Singapore since 2014, FETCH has played a crucial role in
                  helping Singapore-based companies recruit and manage some of
                  the top tech talent from Vietnam. To date, Fetch Technology
                  has successfully placed over 500 top-tier IT developers to
                  companies in Singapore. With a commitment to quality and
                  reliability, Fetch Technology is poised to help more companies
                  Singapore Engage and manage Tech Teams easily.
                </div>
              </div>
            )}
          />

          <div className='row d-flex justify-content-center'>
            <div className='col-9'>
              <div className='d-flex flex-column'>
                <AnimatiopnOnScrollWrap
                  render={(ref, animate) => (
                    <div
                      ref={ref}
                      className={clsx({
                        animate__animated: animate,
                        animate__fadeInLeft: animate,
                        animate__faster: animate,
                      })}
                    >
                      <div className='h3 mb-4'>A pioneer in the industry</div>
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
                        animate__faster: animate,
                      })}
                    >
                      <div className='achieve-item d-flex'>
                        <div className='check-icon-wrap'>
                          <Image
                            src='/images/employee/tick15.svg'
                            alt='check'
                            width={16}
                            height={16}
                          />
                        </div>

                        <div className='text'>
                          <div className='h5-bold mb-2'>
                            We’re experienced and reliable
                          </div>

                          <div className='par-grey-color'>
                            Being one of the first in the field, we have gained
                            a strong grasp of the Vietnamese market.
                          </div>
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
                        animate__animated: animate,
                        animate__fadeInLeft: animate,
                        animate__faster: animate,
                      })}
                    >
                      <div className='achieve-item d-flex'>
                        <div className='check-icon-wrap'>
                          <Image
                            src='/images/employee/tick15.svg'
                            alt='check'
                            width={16}
                            height={16}
                          />
                        </div>

                        <div className='text'>
                          <div className='h5-bold mb-2'>{`We've streamlined the process`}</div>

                          <div className='par-grey-color'>
                            Confidently purvey from our vetted professionals
                            that have been thoroughly assessed prior.
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                />
              </div>
            </div>
          </div>
        </div>

        <div className='col-12 col-lg-5'>
          <AnimatiopnOnScrollWrap
            ratio={0.5}
            render={(ref, animate) => (
              <div
                ref={ref}
                className={clsx({
                  animate__animated: animate,
                  animate__fadeInTopRight: animate,
                })}
              >
                <Image
                  alt='sg icon'
                  src='/images/gtta/ic_about_fetch.png'
                  width={758}
                  height={420}
                />
              </div>
            )}
          />
        </div>
      </div>
    </div>
  )
}

export default GTTA
