import React from 'react'

import ClientAction from '@/components/client-action'
import ClientLabel from '@/components/client-label'

const CustomerSupportStep = (): React.ReactElement => {
  const handleSubmit = () => {
    console.log('submit')
  }

  return (
    <form onSubmit={handleSubmit}>
      <ClientLabel
        action={
          <ClientAction
            action={
              <>
                <button
                  className='action-btn action-btn-contained'
                  type='submit'
                >
                  <div className='action-label'>Finish</div>
                </button>
              </>
            }
          />
        }
      >
        Thank you for choosing Fetch for your project. A Fetch specialist will
        call you to discuss the scope of your project, talent preferences (e.g.
        required skills, rate, time zone), and determine your job
        specifications. Then we&apos;ll find and send you the best matches for
        your job from our expert-vetted talent network, typically within 24
        hours. After the interview, work with your new hire on a no-risk trial.
      </ClientLabel>
    </form>
  )
}

export default CustomerSupportStep
