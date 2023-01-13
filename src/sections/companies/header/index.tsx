import React from 'react'

import styles from './Header.module.scss'

const CompanyHeader = (): React.ReactElement => (
  <section className={styles['company-header-container']}>
    <div className='row div-center wrap-container'>
      <div className='col-xs-12 col-md-12 col-lg-8 col-xl-8'>
        <div className='h1'>Let Fetch scale your business to new heights</div>

        <div className='h6-p-color'>
          What really matters while running a business is time and productivity.
          With Fetch, you get to place greater focus on these details with a
          robust team.
        </div>
      </div>
    </div>
  </section>
)

export default CompanyHeader
