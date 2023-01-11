import React from 'react'

import clsx from 'clsx'

import { QUIZ_RESULT_KEY, TYPE_SUBMIT_FINISH } from '@/config/contact'

import ClientAction from '@/components/client-action'
import ClientLabel from '@/components/client-label'

import { useFormStepContext } from '@/context/FormStepContext'
import { useToastContext } from '@/context/ToastContext'

import { API_FINISH_SURVEY } from '@/routes/api'

import { _postApi } from '@/utils/axios'
import { removeDataFromStorage } from '@/utils/storage'

const CustomerSupportStep = (): React.ReactElement => {
  const { successToast, errorToast } = useToastContext()
  const { clientId, isAnimatedComponent, animation } = useFormStepContext()

  const handleSubmit = async () => {
    try {
      const response = await _postApi(API_FINISH_SURVEY, {
        clientId,
        type: TYPE_SUBMIT_FINISH.SEND_INFO,
      })

      if (!response?.data?.success) throw new Error(response?.data?.message)

      successToast('Submit survey success! Our specialist will call you soon')
      removeDataFromStorage(QUIZ_RESULT_KEY)
    } catch (error) {
      errorToast((error as Error).message || 'Fail to submit! Please try again')
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={clsx({
        animate__animated: isAnimatedComponent,
        [`${animation}`]: isAnimatedComponent,
      })}
    >
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
