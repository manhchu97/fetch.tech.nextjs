import { useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import clsx from 'clsx'

import { CASE_STUDIES_TYPE } from '@/config/resources'

import DropdownItem from '@/components/nav/dropdown-item'
import MenuItem from '@/components/nav/menu-item'

import { PATH_CONFIG } from '@/routes/paths'

import styles from './Header.module.scss'

interface IHeaderProps {
  themeColor: string
}

const Header = ({ themeColor = '' }: IHeaderProps) => {
  const [isExpandContent, setIsExpandContent] = useState<boolean>(false)

  return (
    <div
      className='ft-full-screen'
      style={{ ...(themeColor && { backgroundColor: themeColor }) }}
    >
      <div
        className={clsx(
          styles['header-container'],
          themeColor && styles['header-theme-container'],
        )}
      >
        <Link href={PATH_CONFIG.root}>
          {/* https://github.com/vercel/next.js/issues/20434 */}
          <a className='header-logo-container'>
            <Image
              src='/images/LogoDefault.svg'
              alt='Picture of the author'
              width={126}
              height={54}
              priority
            />
          </a>
        </Link>

        <div
          className={clsx(
            'nav-container',
            isExpandContent && 'show-nav-container',
          )}
        >
          <div className='nav-group'>
            <div className='nav-group__first-container'>
              <Link href={PATH_CONFIG.company}>
                <a>
                  <MenuItem title='For Companies' />
                </a>
              </Link>

              <Link href={PATH_CONFIG.employees}>
                <a>
                  <MenuItem title='For Jobseekers' />
                </a>
              </Link>
            </div>

            <div className='dropdown'>
              <MenuItem
                title='Services'
                id='services'
                target='servicesMenu'
                hasIcon
              />

              <div
                className='dropdown-menu'
                id='servicesMenu'
                aria-labelledby='services'
              >
                <div className='dropdown-menu-container'>
                  <Link href={PATH_CONFIG.services.view(1)}>
                    <a>
                      <DropdownItem
                        title='Talent Acquisition'
                        text='Procure talents from Vietnam'
                        imageSrc='/images/TalentAcquisition.png'
                      />
                    </a>
                  </Link>

                  <Link href={PATH_CONFIG.services.view(2)}>
                    <a>
                      <DropdownItem
                        title='Services management'
                        text='Employee directives and administration'
                        imageSrc='/images/ServiceManageMent.png'
                      />
                    </a>
                  </Link>

                  <Link href={PATH_CONFIG.services.view(3)}>
                    <a>
                      <DropdownItem
                        title='Payroll and compliances'
                        text='Streamlined contracting and payroll process'
                        imageSrc='/images/Payroll.png'
                      />
                    </a>
                  </Link>

                  <Link href={PATH_CONFIG.services.view(4)}>
                    <a>
                      <DropdownItem
                        title='Full-suite project consultancy'
                        text='Comprehensive projects management'
                        imageSrc='/images/FullSuite.png'
                      />
                    </a>
                  </Link>
                </div>

                <div className='upperArrow'></div>
              </div>
            </div>

            <div className='dropdown'>
              <MenuItem
                title='Resources'
                id='resources'
                target='resourcesMenu'
                hasIcon
              />

              <div
                className='dropdown-menu'
                id='resourcesMenu'
                aria-labelledby='resources'
              >
                <div className='dropdown-menu-container'>
                  <Link href={PATH_CONFIG.resources.ourStory}>
                    <a>
                      <DropdownItem
                        title='Our story'
                        text='Learn more about us'
                        imageSrc='/images/OurStory.png'
                      />
                    </a>
                  </Link>

                  <Link
                    href={PATH_CONFIG.resources.caseStudies.view(
                      CASE_STUDIES_TYPE.ACCORPLUS,
                    )}
                  >
                    <a>
                      <DropdownItem
                        title='Case Studies'
                        text='Case studies'
                        imageSrc='/images/CaseStudies.png'
                      />
                    </a>
                  </Link>

                  <Link href={PATH_CONFIG.resources.calculator}>
                    <a>
                      <DropdownItem
                        title='Vietnam Calculator'
                        text='Assess estimated costs'
                        imageSrc='/images/Calculator.png'
                      />
                    </a>
                  </Link>
                </div>

                <div className='upperArrow'></div>
              </div>
            </div>

            <Link href={PATH_CONFIG.blog.root}>
              <a>
                <MenuItem title='Blogs' />
              </a>
            </Link>
          </div>

          <div className='header-contact-container'>
            <Link href={PATH_CONFIG.contact}>
              <a>
                <div role='button' className='header__contact-button'>
                  <span className='header__contact-button__content'>
                    Contact Us
                  </span>
                </div>
              </a>
            </Link>
          </div>
        </div>

        <div
          className='nav-toggler'
          role='button'
          onClick={() => setIsExpandContent((prev) => !prev)}
        >
          {isExpandContent ? (
            <Image
              src='/images/NavbarClose.png'
              alt='close'
              width={16}
              height={16}
            />
          ) : (
            <Image
              src='/images/NavbarOpen.png'
              alt='open'
              width={21}
              height={14}
              priority
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default Header
