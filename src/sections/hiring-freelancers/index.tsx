import React, { useCallback, useState } from 'react'

import dynamic from 'next/dynamic'

import LazyLoadComponent from '@/components/LazyLoadComponent'

import { PATH_CONFIG } from '@/routes/paths'

import { ISkillData } from '@/types/hiring-freelancers'

import Introduction from './introduction'

const Cooperate = dynamic(() => import('./cooperate'))
const ProcessingSteps = dynamic(() => import('./processing-steps'))
const ClientReviews = dynamic(() => import('./client-reviews'))
const Suggestion = dynamic(() => import('./suggestion'))
const ClientInfoPopup = dynamic(() => import('./client-info-popup'))
const NotificationPopup = dynamic(() => import('./notification-popup'))
const BannerContact = dynamic(() => import('@/components/banner/contact'))

type HiringFreelancersSectionProps = {
  skills: ISkillData[]
}

const HiringFreelancersSections = ({
  skills,
}: HiringFreelancersSectionProps): React.ReactElement => {
  const [isOpenClientPopup, setIsOpenClientPopup] = useState(false)
  const [isOpenNotificationPopup, setIsOpenNotificationPopup] = useState(false)

  const handleCloseClientInfoPopup = useCallback(() => {
    setIsOpenClientPopup(false)
  }, [])

  const handleOpenClientInfoPopup = useCallback(() => {
    setIsOpenClientPopup(true)
  }, [])

  const handleCloseNotificationPopup = useCallback(() => {
    setIsOpenNotificationPopup(false)
  }, [])

  const handleOpenNotificationPopup = useCallback(() => {
    setIsOpenNotificationPopup(true)
  }, [])

  return (
    <>
      {isOpenClientPopup && (
        <ClientInfoPopup
          skills={skills}
          isOpen
          onClose={handleCloseClientInfoPopup}
          handleOpenNotificationPopup={handleOpenNotificationPopup}
        />
      )}

      {isOpenNotificationPopup && (
        <NotificationPopup isOpen onClose={handleCloseNotificationPopup} />
      )}

      <Introduction handleOpenClientInfoPopup={handleOpenClientInfoPopup} />

      <LazyLoadComponent>
        <Cooperate />
      </LazyLoadComponent>

      <LazyLoadComponent>
        <ProcessingSteps
          handleOpenClientInfoPopup={handleOpenClientInfoPopup}
        />
      </LazyLoadComponent>

      <LazyLoadComponent>
        <ClientReviews />
      </LazyLoadComponent>

      <LazyLoadComponent>
        <Suggestion handleOpenClientInfoPopup={handleOpenClientInfoPopup} />
      </LazyLoadComponent>

      <LazyLoadComponent>
        <BannerContact
          title='Find the perfect fit with Fetch'
          subTitle='Find the perfect fit with Fetch'
          buttonText='Sign up'
          linkTo={PATH_CONFIG.contact}
        />
      </LazyLoadComponent>
    </>
  )
}

export default HiringFreelancersSections
