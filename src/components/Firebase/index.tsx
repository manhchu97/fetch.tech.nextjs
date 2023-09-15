import dynamic from 'next/dynamic'

import { SCREEN } from '@/config/global'

const CommonFirebase = dynamic(() => import('./CommonFirebase'))

const FirebaseComp = ({ pageName }: { pageName: string }) => {
  if (
    [
      SCREEN.FETCHUNT_PAGE,
      SCREEN.PRIVACY_POLICY_PAGE,
      SCREEN.SERVICE_AGREEMENT_PAGE,
    ].includes(pageName)
  )
    return null

  return <CommonFirebase />
}

export default FirebaseComp
