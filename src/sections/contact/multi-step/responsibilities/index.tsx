import React, { useEffect, useState } from 'react'

import dynamic from 'next/dynamic'

import clsx from 'clsx'
import { paramCase } from 'param-case'

import { MIN_SELECTED_OPTION } from '@/config/contact'

import Autocomplete from '@/components/autocomplete'
import ClientAction from '@/components/client-action'
import QuestionSkeleton from '@/components/skeleton/question-answer'

import { useFormStepContext } from '@/context/FormStepContext'
import { useToastContext } from '@/context/ToastContext'

import { INextQuestionValue, IOption } from '@/types/contact'

import styles from './Responsibilities.module.scss'

const DroppableSection = dynamic(() => import('@/components/drag-drop'), {
  ssr: false,
  loading: () => <QuestionSkeleton style={{ height: 250 }} />,
})

const ResponsibilitiesStep = (): React.ReactElement => {
  const { errorToast } = useToastContext()
  const [listResponsibilities, setListResponsibilities] = useState<IOption[]>(
    [],
  )
  const [isError, setIsError] = useState<boolean>(false)

  const {
    responsibilities,
    handlePreviousStep,
    handleNextStep,
    saveAnswerByQuestion,
    updateAnswerByQuestion,
    getNextQuestionValue,
    isAnimatedComponent,
    animation,
  } = useFormStepContext()

  const data: INextQuestionValue | null = getNextQuestionValue()
  const { currentStep = 0, resultAnswer } = data || {}
  const { answer, inputData } = resultAnswer || {}
  const { title: questionTitle = '' } = inputData || {}

  const listResponsibilitiesOptions = responsibilities.map((label) => ({
    value: paramCase(label),
    label,
  }))

  const onSelectOption = (item: IOption) => {
    setListResponsibilities(listResponsibilities.concat(item))
  }

  const onAddOption = (responsibility: IOption) => {
    const isExist = listResponsibilities.some(
      (item) => item.value === responsibility.value,
    )

    if (isExist) {
      errorToast('Responsibility already added')
      return
    }

    setListResponsibilities(listResponsibilities.concat(responsibility))
  }

  const onUpdateOption = (
    index: number | string,
    label: string,
    type: string,
  ) => {
    if (type === 'DELETE') {
      setListResponsibilities((prevState) =>
        prevState.filter((item) => item.value !== index),
      )
      return
    }

    setListResponsibilities((prevState: IOption[]) => {
      return prevState
        .map((option) => {
          if (option.value === index) {
            return {
              ...option,
              value: paramCase(label),
              label,
            }
          }

          return option
        })
        .filter((option) => option.label)
    })
  }

  const onUpdateDrag = (listOption: IOption[]) => {
    setListResponsibilities(listOption)
  }

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()

    if (listResponsibilities.length < MIN_SELECTED_OPTION) {
      setIsError(true)
      return
    }

    setIsError(false)

    const responsibilitiesFormat = listResponsibilities.map(
      (item) => item.label,
    )

    const responsibilitiesFormatHtml = listResponsibilities
      .map(
        (item) =>
          `<li style="margin-top: 0.5em; margin-bottom: 0.5em">${item.label}</li>`,
      )
      .join('')

    updateAnswerByQuestion({
      currentStep,
      answer: responsibilitiesFormat,
      answerRaw: [responsibilitiesFormatHtml],
    })

    try {
      saveAnswerByQuestion()

      handleNextStep()
    } catch (error) {
      errorToast(
        (error as Error)?.message || 'Fail to submit quiz! Please try again',
      )
    }
  }

  useEffect(() => {
    if (!answer) return

    const selectedResponsibilities = (answer as []).map((label: string) => ({
      label,
      value: paramCase(label),
    }))

    setListResponsibilities(selectedResponsibilities || [])
  }, [answer])

  return (
    <div
      className={clsx({
        'ft-full-screen': true,
        [styles['responsibilities-step-container']]: true,
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
            <div className='alert alert-danger'>
              You must have chosen at least 4 responsibilities
            </div>
          </div>
        )}

        <div className='responsibilities-container-title h5'>
          {questionTitle ||
            'What responsibilities do you expect from the candidate?'}
        </div>

        <div className='responsibilities-container-subtitle'>
          (You need to select at least 4 responsibilities to be next page)
        </div>

        <Autocomplete
          options={listResponsibilitiesOptions}
          listOptionDisabled={listResponsibilities}
          onSelectOption={onSelectOption}
          isAddOption={true}
          onAddOption={onAddOption}
        />

        <DroppableSection
          id='responsibilities'
          title='Responsibilities'
          list={listResponsibilities}
          onUpdateOption={onUpdateOption}
          onUpdateDrag={onUpdateDrag}
          style={{ marginBottom: 32 }}
          validation
        />

        <hr className='hr' />

        <form onSubmit={handleSubmit}>
          <ClientAction onClickPreviousButton={handlePreviousStep} />
        </form>
      </div>
    </div>
  )
}

export default ResponsibilitiesStep
