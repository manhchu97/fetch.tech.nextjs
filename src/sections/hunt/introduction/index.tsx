import React, { useState } from 'react'
import Lottie from 'react-lottie'

import Image from 'next/image'
import Link from 'next/link'

import animationData from '@/lotties/blink_blink.json'
import clsx from 'clsx'

import { GA_EVENT_NAME } from '@/config/global'

import Button from '@/components/button/Button'
import LanguageSwitcher from '@/components/language-switcher/LanguageSwitcher'
import MenuItem from '@/components/nav/menu-item'

import useTranslation from '@/hooks/useTranslation'

import { PATH_CONFIG } from '@/routes/paths'

import { handleTrackingEvent } from '@/utils/googleAnalytics'

import styles from './Introduction.module.scss'

const Introduction = (): React.ReactElement => {
  const { translate, currentLang } = useTranslation()

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  const [isExpandContent, setIsExpandContent] = useState<boolean>(false)

  return (
    <div className={styles['introduction-container']}>
      <div className='header-wrapper'>
        <div className='header d-flex'>
          <div className='header-logo-container div-center flex-grow-1'>
            <Link href={PATH_CONFIG.hunt}>
              <a className='header-logo-img' rel='noopener noreferrer'>
                <Image
                  src='/images/fetchunt/advertisement_fetch_logo.png'
                  alt='Picture of the author'
                  width={96}
                  height={40}
                  quality={100}
                  priority
                />
              </a>
            </Link>
          </div>

          <div className='hstack gap-3 actions'>
            <Link href='https://www.fetch.tech/careers'>
              <a target='_blank' rel='noopener noreferrer'>
                <button type='button' className='btn btn-outline-primary'>
                  {translate('hunt.introduction.header.itJobs')}
                </button>
              </a>
            </Link>

            <Link href='https://www.fetch.tech/company'>
              <a target='_blank' rel='noopener noreferrer'>
                <button type='button' className='btn btn-outline-primary'>
                  {translate('hunt.introduction.header.for_business')}
                </button>
              </a>
            </Link>
          </div>

          <div className='refer'>
            <Link href='https://portal.fetch.tech/auth/login?tab=signin'>
              <a target='_blank' rel='noopener noreferrer'>
                <Button
                  type='button'
                  title={translate(
                    'hunt.introduction.header.referring_candidates',
                  )}
                  frontClassName='front-primary'
                  edgeClassName='edge-primary'
                  size='small'
                  variant='filled'
                  onClick={() =>
                    handleTrackingEvent(GA_EVENT_NAME.RECRUITER_SIGN_IN)
                  }
                />
              </a>
            </Link>
          </div>

          <div className='switcher'>
            <LanguageSwitcher />
          </div>

          <div
            className={clsx(
              'nav-toggler',
              isExpandContent && 'show-nav-container',
            )}
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
                width={32}
                height={32}
                priority
              />
            )}
          </div>
        </div>
      </div>

      <div
        className={clsx(
          'nav-container',
          isExpandContent && 'show-nav-container',
        )}
      >
        <div className='nav-group-items'>
          <Link href='https://www.fetch.tech/careers'>
            <a>
              <MenuItem title={translate('hunt.introduction.header.itJobs')} />
            </a>
          </Link>

          <Link href='https://www.fetch.tech/company'>
            <a>
              <MenuItem
                title={translate('hunt.introduction.header.for_business')}
              />
            </a>
          </Link>

          <div className='refer'>
            <Link href='https://portal.fetch.tech/auth/login?tab=signin'>
              <a target='_blank' rel='noopener noreferrer'>
                <Button
                  type='button'
                  title={translate(
                    'hunt.introduction.header.referring_candidates',
                  )}
                  frontClassName='front-primary'
                  edgeClassName='edge-primary'
                  size='small'
                  variant='filled'
                />
              </a>
            </Link>
          </div>

          {/* <Link href={PATH_CONFIG.gtta}>
            <a>
              <MenuItem title='For GTTA' />
            </a>
          </Link> */}
        </div>
      </div>

      <div className='main'>
        <div className='row'>
          <div className='col-md-5 d-flex align-items-center'>
            <div className='main-content'>
              <div className='h3'>
                {translate('hunt.introduction.main.fetch')}
              </div>

              <div className='h4'>
                {translate('hunt.introduction.main.title')}
              </div>

              <div className='h5'>
                {translate('hunt.introduction.main.sub_title.sub_title_1')}{' '}
                <strong className='highlight'>
                  {translate('hunt.introduction.main.sub_title.highlight')}
                </strong>{' '}
                {translate('hunt.introduction.main.sub_title.sub_title_2')}
              </div>

              <Link href='https://portal.fetch.tech/auth/login?tab=signin'>
                <a target='_blank' rel='noopener noreferrer'>
                  <Button
                    className='btn-primary'
                    onClick={() =>
                      handleTrackingEvent(GA_EVENT_NAME.USER_SIGN_UP)
                    }
                    size='large'
                    variant='filled'
                    title={translate('hunt.introduction.main.start_now')}
                  />
                </a>
              </Link>
            </div>
          </div>

          <div className='col-md-7 d-flex justify-content-center align-items-end'>
            <div className='introduction-img d-flex justify-content-center'>
              <div className='introduction-img-bg'>
                <Lottie options={defaultOptions} style={{ width: '100%' }} />
              </div>

              <Image
                src={`/images/fetchunt/introduction_ver_2_${currentLang}.png`}
                alt='introduction banner'
                height={650}
                width={780}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Introduction
