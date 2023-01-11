import React, { useCallback, useEffect } from 'react'
import { Controller, useForm } from 'react-hook-form'

import dynamic from 'next/dynamic'

import { yupResolver } from '@hookform/resolvers/yup'
import clsx from 'clsx'
import * as Yup from 'yup'

import { REGEX_REMOVE_HTML } from '@/config/global'

import ClientAction from '@/components/client-action'

import { useFormStepContext } from '@/context/FormStepContext'
import { useToastContext } from '@/context/ToastContext'

import { INextQuestionValue } from '@/types/contact'

import styles from './AboutClient.module.scss'

const Editor = dynamic(() => import('@/components/editor'), { ssr: false })

type EditorSubmitForm = {
  content: string
}

const defaultValues: EditorSubmitForm = {
  content: '',
}

const AboutClientStep = (): React.ReactElement => {
  const { errorToast } = useToastContext()
  const {
    isAnimatedComponent,
    animation,
    handleNextStep,
    handlePreviousStep,
    getNextQuestionValue,
    updateAnswerByQuestion,
    saveAnswerByQuestion,
  } = useFormStepContext()

  const data: INextQuestionValue | null = getNextQuestionValue()
  const { currentStep = 0, resultAnswer } = data || {}
  const { answerRaw, inputData } = resultAnswer || {}
  const { title: questionTitle = '' } = inputData || {}

  const EditorShema = Yup.object().shape({
    content: Yup.string().required('Content is required'),
  })

  const {
    setValue,
    reset,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<EditorSubmitForm>({
    defaultValues,
    resolver: yupResolver(EditorShema),
  })

  const onSubmit = useCallback(
    (data: EditorSubmitForm) => {
      const { content } = data

      updateAnswerByQuestion({
        currentStep,
        answer: content.replace(REGEX_REMOVE_HTML, ''),
        answerRaw: [content],
      })

      try {
        saveAnswerByQuestion()
        handleNextStep()
        reset()
      } catch (error) {
        errorToast(
          (error as Error)?.message || 'Fail to submit quiz! Please try again',
        )
      }
    },
    [
      saveAnswerByQuestion,
      handleNextStep,
      updateAnswerByQuestion,
      currentStep,
      reset,
      errorToast,
    ],
  )

  const handlePreviousQuestion = useCallback(() => {
    handlePreviousStep()
  }, [handlePreviousStep])

  useEffect(() => {
    if (!answerRaw) return

    setValue('content', answerRaw[0])
  }, [answerRaw, setValue])

  return (
    <div
      className={clsx({
        'ft-full-screen': true,
        [styles['about-client-container']]: true,
        animate__animated: isAnimatedComponent,
        [`${animation}`]: isAnimatedComponent,
      })}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='about-client-form-container'
      >
        {!!errors?.content?.message && (
          <div className='alert alert-danger' role='alert'>
            {errors?.content?.message}
          </div>
        )}

        <div className='about-client-title h5'>
          {questionTitle ||
            'Can you describe a little bit about your company and the project you need to hire by Fetch?'}
        </div>

        <div className='editor-section'>
          <Controller
            name='content'
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Editor
                value={field.value}
                onChange={field.onChange}
                style={{ minHeight: 400 }}
              />
            )}
          />
        </div>

        <ClientAction onClickPreviousButton={handlePreviousQuestion} />
      </form>
    </div>
  )
}

export default AboutClientStep
