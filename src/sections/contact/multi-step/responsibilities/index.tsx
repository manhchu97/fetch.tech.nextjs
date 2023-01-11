import React, { useEffect, useState } from 'react'

import dynamic from 'next/dynamic'

import clsx from 'clsx'

import Autocomplete from '@/components/autocomplete'
import ClientAction from '@/components/client-action'

import { useFormStepContext } from '@/context/FormStepContext'
import { useToastContext } from '@/context/ToastContext'

import { INextQuestionValue, IOption } from '@/types/contact'

import { replaceAll } from '@/utils/replace'

import styles from './Responsibilities.module.scss'

const DroppableSection = dynamic(() => import('@/components/drag-drop'), {
  ssr: false,
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
  } = useFormStepContext()

  const data: INextQuestionValue | null = getNextQuestionValue()
  const { currentStep = 0, resultAnswer } = data || {}
  const { answer, inputData } = resultAnswer || {}
  const { title: questionTitle = '' } = inputData || {}

  const listResponsibilitiesOptions = responsibilities.map((item, index) => ({
    value: index,
    label: item,
  }))

  const onSelectOption = (item: IOption) => {
    setListResponsibilities(listResponsibilities.concat(item))
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
    if (listResponsibilities.length < 4) {
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

    setListResponsibilities(
      (answer as []).map((label: string) => ({
        label,
        value: replaceAll(label.trim().toLowerCase(), ' ', '-'),
      })) || [],
    )
  }, [answer])

  return (
    <div
      className={clsx(
        'ft-full-screen',
        styles['responsibilities-step-container'],
      )}
    >
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
        onAddOption={onSelectOption}
      />

      <DroppableSection
        id='responsibilities'
        title='Responsibilities'
        list={listResponsibilities}
        onUpdateOption={onUpdateOption}
        onUpdateDrag={onUpdateDrag}
        style={{ marginBottom: 32 }}
        isError={isError}
        validation
      />

      <form onSubmit={handleSubmit}>
        <ClientAction onClickPreviousButton={handlePreviousStep} />
      </form>
    </div>
  )
}

export default ResponsibilitiesStep
