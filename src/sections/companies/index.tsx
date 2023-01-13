import React from 'react'

import FetchHelp from '@/sections/companies/fetch-help'
import CompanyHeader from '@/sections/companies/header'
import HowItWork from '@/sections/companies/how-it-work'
import KeyFeature from '@/sections/companies/key-feature'
import CompanyTrustedBy from '@/sections/companies/trusted-by'

import styles from './Company.module.scss'

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
