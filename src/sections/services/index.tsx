import React, { useEffect } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import clsx from 'clsx'

import AnimatiopnOnScrollWrap from '@/components/AnimationOnScrollWrap'
import ServiceHeader from '@/components/service-header'

import { ServiceBodyProps, ServiceHeaderProps } from '@/types/services'

import styles from './Services.module.scss'

interface ServiceProps {
  header: ServiceHeaderProps
  serviceBody: ServiceBodyProps[]
}

const ServiceSections = ({
  header,
  serviceBody,
}: ServiceProps): React.ReactElement => {
  const {
    title = '',
    subTitle = '',
    imageSource = '',
    className: imgClassName = '',
  } = header || {}

  useEffect(() => {
    const onScroll = () => {
      const arrContentDOM = document.querySelectorAll('.service-feature')

      if (!arrContentDOM.length) return

      arrContentDOM.forEach((contentDOM) => {
        const { top, height } = contentDOM?.getBoundingClientRect() || {}
        const contentId = contentDOM?.getAttribute('id') || ''
        const isMovedContentDOM = top <= 60 && -top <= height + 60

        if (!isMovedContentDOM) return

        const sidebarOptions = Array.from(
          document.querySelectorAll('.sidebar-option-container-wrapper'),
        )
        const currentOption = sidebarOptions.find(
          (option) => option.getAttribute('data-option') === contentId,
        )

        currentOption
          ?.querySelector('.sidebar-option-container')
          ?.classList.add('active')

        sidebarOptions.forEach((option) => {
          const dataOption = option.getAttribute('data-option') || ''
          const optionIndex = parseInt(dataOption[1], 10)
          const currentContentIndex = parseInt(contentId[1], 10)

          // remove active class
          if (dataOption !== contentId) {
            option
              ?.querySelector('.sidebar-option-container.active')
              ?.classList.remove('active')
          }

          // add scrolled class
          if (optionIndex < currentContentIndex) {
            option
              ?.querySelector('.sidebar-option-container')
              ?.classList.add('scrolled')
          }
          // remove scrolled class
          else if (optionIndex > currentContentIndex) {
            option
              ?.querySelector('.sidebar-option-container.scrolled')
              ?.classList.remove('scrolled')
          }
        })
      })

      const serviceBody = document.querySelector('.service-body')
      const sidebar = document.querySelector('.sidebar')
      const { top = 0, bottom = 0 } = serviceBody?.getBoundingClientRect() || {}

      if (top < 0 && bottom >= window.innerHeight) {
        sidebar?.classList.add('sidebar--fixed')
        sidebar?.classList.remove('sidebar--bottom')
      } else if (top > 0) {
        sidebar?.classList.remove('sidebar--fixed')
        sidebar?.classList.remove('sidebar--bottom')
      } else if (bottom < window.innerHeight) {
        sidebar?.classList.remove('sidebar--fixed')
        sidebar?.classList.add('sidebar--bottom')
      }
    }

    window.addEventListener('scroll', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <>
      <ServiceHeader
        title={title}
        subTitle={subTitle}
        imageSource={imageSource}
        className={imgClassName}
      />

      <div
        className={clsx(styles['service-body-container'], 'service-body row')}
      >
        <div className='service-body__left col-lg-4'>
          <div className='sidebar' data-aos='fade-down'>
            <div className='sidebar-content'>
              <div className='sidebar-title h5'>{title}</div>

              <div className='sidebar-options'>
                {serviceBody?.map((serviceItem: ServiceBodyProps, index) => (
                  <Link key={index} href={`#a${index}`}>
                    <a
                      data-option={`a${index}`}
                      className='sidebar-option-container-wrapper'
                    >
                      <div className='sidebar-option-container' role='button'>
                        <div className='a-wrapper sidebar-option subtitle1'>
                          {serviceItem?.featureTitle}
                        </div>
                      </div>
                    </a>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className='service-body__right col-lg-8'>
          {serviceBody?.map((serviceItem: ServiceBodyProps, index) => {
            const {
              featureTheme,
              featureTitle,
              featureSubtitle,
              width,
              height,
            } = serviceItem
            const fadePostion =
              index % 2 === 0
                ? 'animate__fadeInLeft'
                : 'animate__fadeInTopRight'

            return (
              <div
                key={`service-body-${index}`}
                id={`a${index}`}
                className='service-feature'
              >
                <div className='service-feature__inner row'>
                  <div className='col-lg-6 service-feature__text-side'>
                    <div>
                      <AnimatiopnOnScrollWrap
                        ratio={0}
                        render={(ref, animate) => (
                          <div
                            ref={ref}
                            className={clsx({
                              'h4 service-feature__title': true,
                              animate__animated: animate,
                              [fadePostion]: animate,
                              animate__faster: animate,
                            })}
                          >
                            {featureTitle}
                          </div>
                        )}
                      />

                      <AnimatiopnOnScrollWrap
                        ratio={0}
                        render={(ref, animate) => (
                          <div
                            ref={ref}
                            className={clsx({
                              'subtitle1 service-feature__title': true,
                              animate__animated: animate,
                              [fadePostion]: animate,
                              animate__faster: animate,
                            })}
                          >
                            {featureSubtitle}
                          </div>
                        )}
                      />
                    </div>
                  </div>

                  <div className='col-lg-6 service-feature__right'>
                    <Image
                      src={featureTheme}
                      alt={featureTitle}
                      width={width}
                      height={height}
                      quality={100}
                    />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default ServiceSections
