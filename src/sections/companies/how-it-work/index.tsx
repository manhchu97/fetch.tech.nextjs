import React, { useCallback, useEffect, useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import clsx from 'clsx'

import { clientServices } from '@/config/company'

import AnimatiopnOnScrollWrap from '@/components/AnimationOnScrollWrap'

import { IClientService } from '@/types/company'

import FeatureCell from './FeatureCell'
import FeatureLine from './FeatureLine'
import styles from './HowItWork.module.scss'

const HowItWork = (): React.ReactElement => {
  const [isAnimated, setIsAnimated] = useState<boolean>(false)
  const [detailService, setDetailService] = useState<IClientService>()
  const { url: serviceUrl = '', desc: serviceDesc = '' } = detailService || {}

  const handleClickClientService = useCallback(
    (clientId: string) => () => {
      setIsAnimated(false)

      const detailService = clientServices.find(
        (value) => value.id === clientId,
      )

      setDetailService(detailService || clientServices[0])
    },
    [],
  )

  useEffect(() => {
    setDetailService(clientServices[0])
  }, [])

  useEffect(() => {
    setIsAnimated(true)
  }, [detailService])

  return (
    <section className={styles['company-how-it-work-container']}>
      <div className='row div-center wrap-container '>
        <div className='col-xs-12 col-sm-12 col-lg-8 col-xl-8'>
          <div className='img-wrap mx-auto'>
            <Image
              src='/images/company/CompanyPic1.png'
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
          <div className='col-sm-12 col-lg-4 col-xl-4 left'>
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

          <div className='col-sm-12 col-lg-8 col-xl-8 right'>
            <div className='banner'>
              <div className='h5'>Client services</div>
            </div>

            <div className='row g-4'>
              {clientServices.map(
                ({
                  id = '',
                  title = '',
                  icon = '',
                  color = '',
                  bgColor = '',
                }) => (
                  <FeatureCell
                    key={id}
                    title={title}
                    icon={icon}
                    color={color}
                    bgColor={bgColor}
                    onClick={handleClickClientService(id)}
                  />
                ),
              )}
            </div>
          </div>
        </div>

        <div
          className={clsx({
            'text-group-with-button div-center mx-auto': true,
            animate__animated: isAnimated,
            animate__fadeInLeft: isAnimated,
          })}
        >
          <div className='h6' style={{ minWidth: '50%' }}>
            {serviceDesc}
          </div>

          <Link href={serviceUrl}>
            <a>
              <button className='btn-learn-more' style={{ background: '#fff' }}>
                Learn more
              </button>
            </a>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HowItWork
