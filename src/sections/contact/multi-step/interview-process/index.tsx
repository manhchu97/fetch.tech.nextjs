import { useCallback, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

import { yupResolver } from '@hookform/resolvers/yup'
import clsx from 'clsx'
import { paramCase } from 'param-case'
import * as Yup from 'yup'

import {
  MAX_INTERVIEW_PROCESS_OPTION,
  MIN_INTERVIEW_PROCESS_OPTION,
} from '@/config/contact'

import ClientAction from '@/components/client-action'
import DroppableSection from '@/components/drag-drop'

import { useFormStepContext } from '@/context/FormStepContext'
import { useToastContext } from '@/context/ToastContext'

import { INextQuestionValue, IOption } from '@/types/contact'

import styles from './InterviewProcess.module.scss'

type InputSubmitForm = {
  round: string
}

const InterviewProcessStep = (): React.ReactElement => {
  const { errorToast } = useToastContext()
  const [isError, setIsError] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<string>('')
  const [listInterviewProcess, setListInterviewProcess] = useState<IOption[]>(
    [],
  )

  const {
    isAnimatedComponent,
    animation,
    getNextQuestionValue,
    handlePreviousStep,
    updateAnswerByQuestion,
    saveAnswerByQuestion,
    handlePreview,
  } = useFormStepContext()

  const data: INextQuestionValue | null = getNextQuestionValue()
  const { currentStep = 0, resultAnswer } = data || {}
  const { answer, inputData } = resultAnswer || {}
  const { title: questionTitle = '' } = inputData || {}

  const validationSchema = Yup.object().shape({
    round: Yup.string()
      .trim()
      .required('Interview process content is required!'),
  })

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<InputSubmitForm>({
    resolver: yupResolver(validationSchema),
  })

  const watchRoundValue = watch('round')

  const onAddOption = useCallback(
    (round: IOption) => {
      const isExist = listInterviewProcess.some(
        (item) => item.value === round.value,
      )

      if (isExist) {
        errorToast('This process already added')
        return
      }

      setListInterviewProcess((prevState) => prevState.concat(round))
    },
    [errorToast, listInterviewProcess],
  )

  const labelInfo = useCallback((index: number) => {
    return (
      <div
        className={clsx({
          'dragglable-item-round-label': true,
        })}
      >
        {`Round ${index + 1}:`}
      </div>
    )
  }, [])

  const handleSubmitInput = useCallback(
    (data: InputSubmitForm) => {
      const { round: roundValue = '' } = data || {}

      onAddOption({
        label: roundValue,
        value: paramCase(roundValue),
        isAdded: true,
      })

      reset()
    },
    [onAddOption, reset],
  )

  const handleSubmitInterView = useCallback(
    (e: { preventDefault: () => void }) => {
      e.preventDefault()

      if (listInterviewProcess.length < MIN_INTERVIEW_PROCESS_OPTION) {
        setIsError(true)
        setErrorMessage(
          'You need to have at least 1 round of the interview process for candidates.',
        )
        return
      }

      if (listInterviewProcess.length > MAX_INTERVIEW_PROCESS_OPTION) {
        setIsError(true)
        setErrorMessage(
          'You can add a maximum of 4 rounds of the interview process for candidates.',
        )
        return
      }

      setIsError(false)
      setErrorMessage('')

      const interviewProcessFormat =
        listInterviewProcess?.map((item) => item.label) || []

      const interviewProcessFormatHtml = (
        listInterviewProcess?.map(
          (item, index) =>
            `<li style="margin-top: 0.5em; margin-bottom: 0.5em;">Round ${
              index + 1
            }: ${item.label}</li>`,
        ) || []
      ).join('')

      updateAnswerByQuestion({
        currentStep,
        answer: interviewProcessFormat,
        answerRaw: [interviewProcessFormatHtml],
      })

      try {
        saveAnswerByQuestion()

        handlePreview()
      } catch (error) {
        errorToast(
          (error as Error)?.message || 'Fail to submit quiz! Please try again',
        )
      }
    },
    [
      currentStep,
      errorToast,
      handlePreview,
      listInterviewProcess,
      saveAnswerByQuestion,
      updateAnswerByQuestion,
    ],
  )

  useEffect(() => {
    if (!answer || !answer.length) return

    const listData = (answer as []).map((label: string) => ({
      label,
      value: label,
    }))

    setListInterviewProcess(listData || [])
  }, [answer])

  return (
    <div
      className={clsx({
        'ft-full-screen': true,
        [styles['interview-process-step-container']]: true,
      })}
    >
      <div
        className={clsx({
          animate__animated: isAnimatedComponent,
          [animation]: isAnimatedComponent,
        })}
      >
        {isError && (
          <div className='error-container'>
            <div className='alert alert-danger'>{errorMessage}</div>
          </div>
        )}

        <div className='interview-process-container-title h5'>
          {questionTitle ||
            'How many round do you want to take to interview candidates?'}
        </div>

        <div className='interview-process-container-subtitle'>
          You can add a maximum of 4 round interview process for candidates.
        </div>

        <form
          className='interview-process-form-container'
          onSubmit={handleSubmit(handleSubmitInput)}
        >
          <div className='input-group mt-4 mb-3 col-6 mx-auto'>
            <input
              className={clsx({
                'form-control': true,
                rounded: true,
                'interview-process-search-input': true,
                'is-invalid': errors.round,
              })}
              placeholder=''
              autoComplete='off'
              onKeyDown={(e) => {
                if (e.key === 'Enter' && e.which === 13) {
                  e.preventDefault()

                  if (!String(watchRoundValue).trim()) return

                  e.currentTarget.blur()
                  handleSubmitInput({ round: watchRoundValue })
                }
              }}
              {...register('round')}
            />

            <div className='invalid-feedback'>{errors.round?.message}</div>
          </div>

          <button type='submit' className='btn-add-option'>
            Add
          </button>
        </form>

        <DroppableSection
          id='interview'
          title='Interview Process'
          list={listInterviewProcess}
          listSelectedOption={listInterviewProcess}
          updateListOption={setListInterviewProcess}
          style={{ marginBottom: 32 }}
          validation
          className='interview-process-item'
          labelInfo={labelInfo}
        />

        <hr className='hr' />

        <form
          onSubmit={handleSubmitInterView}
          className='interview-process-form-container'
        >
          <ClientAction
            nextButtonText='Preview'
            onClickPreviousButton={handlePreviousStep}
          />
        </form>
      </div>
    </div>
  )
}

export default InterviewProcessStep
