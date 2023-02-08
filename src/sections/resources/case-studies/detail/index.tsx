import React from 'react'

import Image from 'next/image'

import clsx from 'clsx'

import AnimatiopnOnScrollWrap from '@/components/AnimationOnScrollWrap'

// import scrollToElement from 'scroll-to-element'
import { TabContentProps } from '@/types/resources'

import styles from './DetailCaseStudies.module.scss'

interface ISectionProps {
  tabBodyConfig: TabContentProps | undefined
}

const DetailCaseStudiesSection = ({
  tabBodyConfig,
}: ISectionProps): React.ReactElement => {
  const {
    customerInfo,
    teamInfo,
    projectInfo,
    bannerImage = '',
  } = tabBodyConfig || {}
  const { general = [], logoImg = '' } = customerInfo || {}
  const { title = '', subTitle = '', description = [] } = teamInfo || {}
  const { preriod = '', mainInfo = [] } = projectInfo || {}

  return (
    <div className={styles['case-studies-container']}>
      <div className='image-cover-container'>
        <Image
          alt='Image cover larger'
          src={bannerImage}
          layout='responsive'
          objectFit='cover'
          objectPosition='top left'
          priority
          width={2032}
          height={845}
        />
      </div>

      <div className='container'>
        <div className='row div-center'>
          <div className='col-xl-10'>
            <div className='tab-content-container'>
              {/* Customer info */}
              <div className='customer-info-container row'>
                <div className='col-lg-8'>
                  {general?.map(({ key, value }, index) => (
                    <div
                      key={`customer-info-${index}`}
                      className='customer-detail-info'
                    >
                      <div className='subtitle1'>{`${key}:`}</div>
                      <div className='h6-bold'>{value}</div>
                    </div>
                  ))}
                </div>

                <div className='customer-img-container col-lg-4'>
                  <Image
                    alt={logoImg}
                    src={logoImg || ''}
                    layout='fill'
                    objectFit='contain'
                  />
                </div>
              </div>

              {/* Team info */}
              <div className='fetch-team-info-container'>
                <div className='h2 text-center'>{title}</div>

                {subTitle && <div className='h5 text-center'>{subTitle}</div>}

                {description?.map((value, index) => (
                  <div className='p-text' key={index}>
                    {value}
                  </div>
                ))}
              </div>

              {/* Project info */}
              <div className='project-info-container'>
                <AnimatiopnOnScrollWrap
                  render={(ref, animate) => (
                    <div
                      ref={ref}
                      className={clsx({
                        'text-center': true,
                        animate__animated: animate,
                        animate__bounceInUp: animate,
                      })}
                    >
                      <div className='h2'>Project Preriod</div>
                      <div className='h5'>{preriod}</div>
                    </div>
                  )}
                />

                {mainInfo?.map((value, index) => (
                  <div key={index}>
                    <div className='h3'>{value?.title}</div>

                    {value?.description?.map((description, subIndex) => (
                      <div className='p-text' key={`${index}-${subIndex}`}>
                        {description}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailCaseStudiesSection
