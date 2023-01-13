import React from 'react'

import dynamic from 'next/dynamic'

import CompanyHeader from '@/sections/companies/header'
import HowItWork from '@/sections/companies/how-it-work'

import styles from './Company.module.scss'

const KeyFeature = dynamic(() => import('@/sections/companies/key-feature'))
const CompanyTrustedBy = dynamic(
  () => import('@/sections/companies/trusted-by'),
)
const FetchHelp = dynamic(() => import('@/sections/companies/fetch-help'))

const Company = () => {
  return (
    <div className={styles.company}>
      <div className='company-section'>
        <CompanyHeader />

        <HowItWork />

        <KeyFeature />

        <CompanyTrustedBy />

        <FetchHelp />
      </div>
    </div>
  )
}

export default Company
