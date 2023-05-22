import dynamic from 'next/dynamic'

import { SCREEN } from '@/config/global'

const CommonFirebase = dynamic(() => import('./CommonFirebase'))
const FetchuntFirebase = dynamic(() => import('./FetchuntFirebase'))

const FirebaseComp = ({ pageName }: { pageName: string }) => {
  if (
    [
      SCREEN.FETCHUNT_PAGE,
      SCREEN.PRIVACY_POLICY_PAGE,
      SCREEN.SERVICE_AGREEMENT_PAGE,
    ].includes(pageName)
  )
    return <FetchuntFirebase />

  return <CommonFirebase />
}

export default FirebaseComp
