import React, { useEffect, useState } from 'react'

import dynamic from 'next/dynamic'

import clsx from 'clsx'

import Autocomplete from '@/components/autocomplete'
import ClientAction from '@/components/client-action'

import { useFormStepContext } from '@/context/FormStepContext'
import { useToastContext } from '@/context/ToastContext'

import { INextQuestionValue, IOption } from '@/types/contact'

import { replaceAll } from '@/utils/replace'

import styles from './Requirement.module.scss'
import { ACTION_TYPE, SECTIONS } from './config'

const DroppableSection = dynamic(() => import('@/components/drag-drop'), {
  ssr: false,
})

const RequirementStep = (): React.ReactElement => {
  const { errorToast } = useToastContext()

  const [listRequirements, setListRequirements] = useState<IOption[]>([])
  const [listNiceToHave, setListNiceToHave] = useState<IOption[]>([])
  const [sectionSelected, setSectionSelected] = useState<string>(
    SECTIONS.REQUIREMENT,
  )
  const [isError, setIsError] = useState<boolean>(false)

  const {
    handlePreviousStep,
    handlePreview,
    requirements,
    saveAnswerByQuestion,
    updateAnswerByQuestion,
    getNextQuestionValue,
  } = useFormStepContext()

  const data: INextQuestionValue | null = getNextQuestionValue()
  const { currentStep = 0, resultAnswer } = data || {}
  const { answer, inputData } = resultAnswer || {}
  const { title: questionTitle = '' } = inputData || {}

  const listRequirementOptions = requirements.map((item, index) => ({
    value: index,
    label: item,
  }))

  const onSelectOption = (item: IOption) => {
    if (sectionSelected === SECTIONS.REQUIREMENT) {
      setListRequirements(listRequirements.concat(item))
      return
    }

    setListNiceToHave(listNiceToHave.concat(item))
  }

  const onAddOption = (requirement: IOption) => {
    if (sectionSelected === SECTIONS.REQUIREMENT) {
      setListRequirements(listRequirements.concat(requirement))
      return
    }

    setListNiceToHave(listNiceToHave.concat(requirement))
  }

  const onUpdateOption = (
    index: number | string,
    label: string,
    type: string,
  ) => {
    const updateList =
      sectionSelected === SECTIONS.REQUIREMENT
        ? setListRequirements
        : setListNiceToHave

    if (type === ACTION_TYPE.DELETE) {
      updateList((prevState) =>
        prevState.filter((item) => item.value !== index),
      )
      return
    }

    updateList((prevState: IOption[]) => {
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
    const updateList =
      sectionSelected === SECTIONS.REQUIREMENT
        ? setListRequirements
        : setListNiceToHave

    updateList(listOption)
  }

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    if (listRequirements.length < 4) {
      setIsError(true)
      return
    }

    setIsError(false)

    const requirementFormat = listRequirements.map((item) => item.label)

    const requirementFormatHtml = listRequirements
      .map(
        (item) =>
          `<li style="margin-top: 0.5em; margin-bottom: 0.5em">${item.label}</li>`,
      )
      .join('')

    const niceToHaveFormat = listNiceToHave.map((item) => item.label)

    const niceToHaveFormatHtml = listNiceToHave
      .map(
        (item) =>
          `<li style="margin-top: 0.5em; margin-bottom: 0.5em">${item.label}</li>`,
      )
      .join('')

    updateAnswerByQuestion({
      currentStep,
      answer: [requirementFormat, niceToHaveFormat],
      answerRaw: [requirementFormatHtml, niceToHaveFormatHtml],
    })

    try {
      saveAnswerByQuestion()

      handlePreview()
    } catch (error) {
      errorToast(
        (error as Error)?.message || 'Fail to submit quiz! Please try again',
      )
    }
  }

  useEffect(() => {
    if (!answer || !answer.length) return

    setListRequirements(
      (answer[0] as []).map((label: string) => ({
        label,
        value: replaceAll(label.trim().toLowerCase(), ' ', '-'),
      })) || [],
    )

    setListNiceToHave(
      (answer[1] as []).map((label: string) => ({
        label,
        value: replaceAll(label.trim().toLowerCase(), ' ', '-'),
      })) || [],
    )
  }, [answer])

  return (
    <div
      className={clsx('ft-full-screen', styles['requirement-step-container'])}
    >
      <div className='requirement-container-title h5'>
        {questionTitle || 'What are your requirements for candidates?'}
      </div>

      <div className='requirement-container-subtitle'>
        (You need to select at least 4 requirements to be next page)
      </div>

      <Autocomplete
        options={listRequirementOptions}
        listOptionDisabled={listRequirements.concat(listNiceToHave)}
        onSelectOption={onSelectOption}
        isAddOption={true}
        onAddOption={onAddOption}
      />

      <DroppableSection
        id={SECTIONS.REQUIREMENT}
        title='Requirements'
        list={listRequirements}
        sectionSelected={sectionSelected}
        onUpdateOption={onUpdateOption}
        onUpdateDrag={onUpdateDrag}
        setSectionSelected={setSectionSelected}
        style={{ marginBottom: 32 }}
        isError={isError}
        validation
      />

      <DroppableSection
        id={SECTIONS.NICE_TO_HAVE}
        title='Nice to have'
        list={listNiceToHave}
        sectionSelected={sectionSelected}
        onUpdateOption={onUpdateOption}
        onUpdateDrag={onUpdateDrag}
        setSectionSelected={setSectionSelected}
      />

      <form onSubmit={handleSubmit} className='requirement-form-container'>
        <ClientAction nextButtonText='Preview' onClickPreviousButton={handlePreviousStep} />
      </form>
    </div>
  )
}

export default RequirementStep
