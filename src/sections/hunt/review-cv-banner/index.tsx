import { useEffect, useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import ldDebounce from 'lodash.debounce'

import { GA_EVENT_NAME } from '@/config/global'

import useTranslation from '@/hooks/useTranslation'

import { handleTrackingEvent } from '@/utils/googleAnalytics'

import styles from './ReviewCVBanner.module.scss'

const ReviewCVBanner = (): React.ReactElement => {
  const { currentLang } = useTranslation()
  const [isMobileScreen, setIsMobileScreen] = useState(false)

  useEffect(() => {
    let unmounted = false

    const handleResize = ldDebounce(() => {
      // https://stackoverflow.com/a/8876069
      const width = Math.max(
        document.documentElement.clientWidth,
        window.innerWidth || 0,
      )

      if (unmounted) return

      setIsMobileScreen(width < 576)
    }, 100)

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => {
      unmounted = true
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div
      className={styles['review-cv-banner']}
      onClick={() => handleTrackingEvent(GA_EVENT_NAME.CV_REVIEW)}
    >
      <Link href='https://portal.fetch.tech/marketplace/my-list-cv'>
        <a target='_blank' rel='noopener noreferrer'>
          <Image
            src={`/images/fetchunt/review_cv_${currentLang}.png`}
            alt='get free cv review'
            width={isMobileScreen ? 240 : 300}
            height={isMobileScreen ? 120 : 150}
          />
        </a>
      </Link>
    </div>
  )
}

export default ReviewCVBanner
