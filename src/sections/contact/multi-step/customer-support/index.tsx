import React from 'react'

import ClientAction from '@/components/client-action'

import styles from './CustomerSupport.module.scss'

const CustomerSupportStep = (): React.ReactElement => {
  return (
    <div className={styles['customer-support-container']}>
      <div className='h4 customer-support-title'>Let&apos;s get started!</div>

      <div className='customer-support-message'>
        Thank you for choosing Fetch for your project. A Fetch specialist will
        call you to discuss the scope of your project, talent preferences (e.g.
        required skills, rate, time zone), and determine your job
        specifications. Then we&apos;ll find and send you the best matches for
        your job from our expert-vetted talent network, typically within 24
        hours. After the interview, work with your new hire on a no-risk trial.
      </div>

      <hr />

      <ClientAction
        action={
          <>
            <button className='action-btn action-btn-contained' type='submit'>
              <div className='action-label'>Finish</div>
            </button>
          </>
        }
      />
    </div>
  )
}

export default CustomerSupportStep
