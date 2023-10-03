import React, { useCallback, useState } from 'react'

import dynamic from 'next/dynamic'

import LazyLoadComponent from '@/components/LazyLoadComponent'
import BannerContact from '@/components/banner/contact'

import { PATH_CONFIG } from '@/routes/paths'

import ClientInfoPopup from './client-info-popup'

const Cooperate = dynamic(() => import('./cooperate'))
const Introduction = dynamic(() => import('./introduction'))
const ProcessingSteps = dynamic(() => import('./processing-steps'))

const HiringFreelancersSections = ({}): React.ReactElement => {
  const [isOpenClientPopup, setIsOpenClientPopup] = useState(true)

  const handleCloseClientInfoPopup = useCallback(() => {
    setIsOpenClientPopup(false)
  }, [])

  const handleOpenClientInfoPopup = useCallback(() => {
    setIsOpenClientPopup(true)
  }, [])

  return (
    <>
      {isOpenClientPopup && (
        <ClientInfoPopup isOpen onClose={handleCloseClientInfoPopup} />
      )}

      <LazyLoadComponent>
        <Introduction handleOpenClientInfoPopup={handleOpenClientInfoPopup} />
      </LazyLoadComponent>

      <LazyLoadComponent>
        <Cooperate />
      </LazyLoadComponent>

      <LazyLoadComponent>
        <ProcessingSteps />
      </LazyLoadComponent>

      <LazyLoadComponent>
        <BannerContact
          title='Build your career with Fetch'
          subTitle='Join our team of talented and like-minded individuals and let your aspirations soar today.'
          buttonText='Contact us'
          linkTo={PATH_CONFIG.contact}
        />
      </LazyLoadComponent>
    </>
  )
}

export default HiringFreelancersSections
