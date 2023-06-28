import React from 'react'

import dynamic from 'next/dynamic'

import { SCREEN } from '@/config/global'

const FetchuntGoogleTagManager = dynamic(
  () => import('./FetchuntGoogleTagManager'),
)
const CommonGoogleTagManager = dynamic(() => import('./CommonGoogleTagManager'))

const GoogleTagManager = ({
  gtmId,
  pageName,
}: {
  gtmId: string
  pageName: string
}) => {
  if (
    [
      SCREEN.FETCHUNT_PAGE,
      SCREEN.PRIVACY_POLICY_PAGE,
      SCREEN.SERVICE_AGREEMENT_PAGE,
    ].includes(pageName)
  )
    return <FetchuntGoogleTagManager />

  return <CommonGoogleTagManager gtmId={gtmId} />
}

export default GoogleTagManager
