import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

import clsx from 'clsx'

import AnimatiopnOnScrollWrap from '@/components/AnimationOnScrollWrap'
import ReactSlick from '@/components/ReactSlick'

import styles from './Company.module.scss'

const Company = () => {
  return (
    <div className={styles.company}>
      <div className='company-section'>
        <section className='company-header'>
          <div className='row div-center wrap-container '>
            <div className='col-xs-12 col-md-12 col-lg-8 col-xl-8'>
              <div className='h1'>
                Let Fetch scale your business to new heights
              </div>

              <div className='h6-p-color'>
                What really matters while running a business is time and
                productivity. With Fetch, you get to place greater focus on
                these details with a robust team.
              </div>
            </div>
          </div>
        </section>

        <section className='company-how-it-work'>
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
                      No longer is hiring and managing offshore staff daunting.
                      With Fetch, you get to build your remote dream.
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
                      <div className='h5'>
                        We offer a diverse range of products
                      </div>

                      <div className='par-grey-color'>
                        From team management to project consultancy, we will
                        always have a service available to meet your business
                        requirements.
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
                      <div className='h5'>
                        Flexible and catered to your needs
                      </div>

                      <div className='par-grey-color'>
                        Don&apos;t need a particular feature in the service
                        selected? No problem. Our plans are designed to be
                        adaptable to match your requests accordingly.
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
                    Enjoy tailormade, flexible solutions, designed for your
                    business needs.
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

        <section className='company-key-feature'>
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
                      src='/images/company/Theme1.svg'
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
                      <div className='h5-bold'>
                        Quality talents at the right cost
                      </div>

                      <div className='par-grey-color'>
                        All specialists are vetted and guaranteed to deliver
                        results without any additional fees.
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

        <section className='company-trusted-by wrap-container'>
          <div className='row div-center'>
            <div className='col-xs-12 col-sm-12 col-md-8 col-lg-6'>
              <AnimatiopnOnScrollWrap
                render={(ref, animate) => (
                  <div
                    ref={ref}
                    className={clsx({
                      animate__animated: animate,
                      animate__zoomIn: animate,
                    })}
                  >
                    <div className='h3'>Trusted by many</div>

                    <div className='par-grey-color'>
                      Being one of the first in the industry has allowed us to
                      gain a strong grasp of the Vietnamese market.
                    </div>
                  </div>
                )}
              />
            </div>
          </div>

          <div className='row div-center'>
            <div className='col-xs-12 col-sm-12 col-md-8 col-lg-8'>
              <TrustedSlide />
            </div>
          </div>
        </section>

        <section className='company-example'>
          <div className='row banner'>
            <div className='col-md-7 left'>
              <AnimatiopnOnScrollWrap
                render={(ref, animate) => (
                  <div
                    ref={ref}
                    className={clsx({
                      left: true,
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

                <div className='h5'>saved in expenses</div>

                <div className='par-grey-color'>
                  since moving part of their operations to Vietnam for the same
                  output quality and time they would have spent locally.
                </div>
              </div>
            </div>
          </div>

          <div className='row content'>
            <div className='col-md-6 left'>
              <div className='divider d-md-none '></div>

              <div
                className='collaspe-toggle d-md-none collapsed'
                data-toggle='collapse'
                data-bs-toggle={'collapse'}
                data-bs-target='#chartdesk-info'
                data-target='#chartdesk-info'
                aria-expanded='false'
                aria-controls='chartdesk-info'
              >
                <div className='h6-bold'>About Chart Desk</div>

                <Image
                  src='/images/company/DownArrow.svg'
                  alt='down'
                  width={16}
                  height={8}
                />
              </div>

              <div id='chartdesk-info' className='collapse d-md-block mb-4'>
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
                        ChartDesk is a shared inbox—built for teams to
                        efficiently manage business emails exchanged with shared
                        mailboxes
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
                        Back in 2016, Chartdesk was a relatively new startup.
                        Being a new startup, the high cost of tech talents in
                        Singapore was simply out of their reach. They needed a
                        low cost solution to build up their tech capabilities.
                      </div>
                    </div>
                  )}
                />
              </div>
              
              <div className='divider d-md-none '></div>
              
              <div
                className='collaspe-toggle d-md-none collapsed'
                data-toggle='collapse'
                data-bs-toggle={'collapse'}
                data-bs-target='#how-we-tackled'
                data-target='#how-we-tackled'
                aria-expanded='false'
                aria-controls='how-we-tackled'
              >
                <div className='h6-bold'>How we tackled</div>

                <Image
                  src='/images/company/DownArrow.svg'
                  alt='down'
                  width={16}
                  height={8}
                />
              </div>

              <div className='collapse d-md-block ' id='how-we-tackled'>
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
                        Fetch was able to help chartdesk leverage on the much
                        lower cost in Vietnam to help Chartdesk build a small
                        but high impact team of developers to build their
                        product
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
                        Chartdesk is today up and running with multiple
                        international clients using their product.
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
                        Fetch is able to help startups scale up and build their
                        tech team in a affordable manner
                      </div>
                    </div>
                  </div>
                )}
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

const FeatureLine = ({ feature }: { feature: string }) => {
  return (
    <AnimatiopnOnScrollWrap
      render={(ref, animate) => (
        <div
          ref={ref}
          className={clsx({
            checkpoint: true,
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

          <div className='par'>{feature}</div>
        </div>
      )}
    />
  )
}

const FeatureCell = ({
  feature,
  icon,
  color,
  bgColor,
}: {
  feature: string
  icon: string
  color: string
  bgColor: string
}) => {
  return (
    <div className='col-6'>
      <AnimatiopnOnScrollWrap
        render={(ref, animate) => (
          <div
            ref={ref}
            className={clsx({
              'feature-cell': true,
              animate__animated: animate,
              animate__fadeInUp: animate,
            })}
            style={{ color, backgroundColor: bgColor }}
          >
            <div className='icon-wrap'>
              <Image src={icon} alt='check' width={36} height={36} />
            </div>

            <div className='h6-bold'>{feature}</div>
          </div>
        )}
      />
    </div>
  )
}

const TrustedSlide = () => {
  const settings = {
    className: 'company-slide',
    infinite: true,
    dots: false,
    autoplaySpeed: 1200,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    centerMode: true,
    centerPadding: '0px',
    responsive: [],
  }

  return (
    <ReactSlick settings={settings}>
      <div className='slick-card'>
        <div className='brand-wrap'>
          <Image
            src='/images/company/Cus1.svg'
            width={93}
            height={46}
            alt='customer1'
          />
        </div>
      </div>

      <div className='slick-card'>
        <div className='brand-wrap'>
          <Image
            src='/images/company/Cus2.svg'
            width={54}
            height={46}
            alt='customer1'
          />
        </div>
      </div>

      <div className='slick-card'>
        <div className='brand-wrap'>
          <Image
            src='/images/company/Cus3.svg'
            width={99}
            height={27}
            alt='customer1'
          />
        </div>
      </div>

      <div className='slick-card'>
        <div className='brand-wrap'>
          <Image
            src='/images/company/Cus4.svg'
            width={91}
            height={89}
            alt='customer1'
          />
        </div>
      </div>

      <div className='slick-card'>
        <div className='brand-wrap'>
          <Image
            src='/images/company/Cus5.svg'
            width={71}
            height={47}
            alt='customer1'
          />
        </div>
      </div>
    </ReactSlick>
  )
}

export default Company
