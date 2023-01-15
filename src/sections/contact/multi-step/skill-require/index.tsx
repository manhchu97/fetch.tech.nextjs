import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'

import { yupResolver } from '@hookform/resolvers/yup'
import clsx from 'clsx'
import { paramCase } from 'param-case'
import * as Yup from 'yup'

import Autocomplete from '@/components/autocomplete'
import ClientAction from '@/components/client-action'

import { useFormStepContext } from '@/context/FormStepContext'
import { useToastContext } from '@/context/ToastContext'

import {
  INextQuestionValue,
  ISkillChildFormat,
  ISkillOption,
  ISkillParentFormat,
} from '@/types/contact'

import { formatSkillTree } from '@/utils/contact'

import styles from './SkillRequire.module.scss'

type SkillRequiredForm = {
  skills: { label: string; value: string }[]
}

const SkillRequireStep = (): React.ReactElement => {
  const {
    skills,
    listResultAnswers,
    isAnimatedComponent,
    animation,
    handleNextStep,
    saveAnswerByQuestion,
    updateAnswerByQuestion,
    getNextQuestionValue,
    handlePreviousStep,
  } = useFormStepContext()
  const { errorToast } = useToastContext()

  const data: INextQuestionValue | null = getNextQuestionValue()
  const { currentStep = 0, resultAnswer } = data || {}
  const { answer, inputData } = resultAnswer || {}
  const { title: questionTitle = '' } = inputData || {}

  const gridQuestionResult = listResultAnswers[0]

  const gridAnswerResult = useMemo(
    () =>
      gridQuestionResult.inputData.answers.find(
        (answer) => answer.id === gridQuestionResult.answer,
      ),
    [gridQuestionResult],
  )

  const { data: skillTree, skill: listAllSkill } = skills

  const [history, setHistory] = useState<ISkillChildFormat[]>([
    {
      parentTitle: 'Skills',
      data: formatSkillTree(skillTree[gridAnswerResult?.title || '']),
    },
  ])

  const current = history[history.length - 1]

  const listAllSkillOptions = useMemo(() => {
    return listAllSkill?.map((skill) => ({
      label: skill,
      value: paramCase(skill),
    }))
  }, [listAllSkill])

  const validationSchema = Yup.object().shape({
    skills: Yup.array()
      .of(
        Yup.object().shape({
          value: Yup.string(),
          label: Yup.string(),
        }),
      )
      .min(1, 'Please select your skills requirement!'),
  })

  const {
    handleSubmit,
    watch,
    control,
    setValue,
    getValues,
    reset,
    clearErrors,
    formState: { errors },
  } = useForm<SkillRequiredForm>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      skills: [],
    },
  })

  const selectedSkills = watch('skills')

  const handleSelectSkillMenuItem = (
    isParent: boolean,
    { id, title, children }: ISkillParentFormat,
  ) => {
    if (isParent) {
      setHistory((prev) => {
        if (children) {
          return [...prev, children]
        }

        return prev
      })

      return
    }

    clearErrors()
    setValue('skills', [...getValues('skills'), { value: id, label: title }])
  }

  const handleRemoveSkillSelected = (item: ISkillOption) => {
    setValue(
      'skills',
      getValues('skills').filter((skill) => skill.value !== item.value),
    )
  }

  const handleBackMenu = () => {
    setHistory((prev) => {
      if (prev.length === 1) return prev

      return prev.slice(0, prev.length - 1)
    })
  }

  const handlePreviousQuestion = useCallback(() => {
    handlePreviousStep()
  }, [handlePreviousStep])

  const handleSubmitQuestion = useCallback(
    (data: SkillRequiredForm) => {
      const { skills } = data

      const skillsFormat = skills.map((item) => item.label)

      updateAnswerByQuestion({
        currentStep,
        answer: skillsFormat,
        answerRaw: skillsFormat,
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

  useEffect(() => {
    if (!answer) return

    const selectedSkills = (answer as []).map((label: string) => ({
      label,
      value: paramCase(label),
    }))

    setValue('skills', selectedSkills || [])
  }, [answer, setValue])

  const isMenuScrollable = current.data && current?.data?.length > 6
  const isSelectedSkillScrollable = selectedSkills.length > 8

  return (
    <div className={styles['skill-require-step-container']}>
      <div
        className={clsx({
          animate__animated: isAnimatedComponent,
          [animation]: isAnimatedComponent,
        })}
      >
        <form
          onSubmit={handleSubmit(handleSubmitQuestion)}
          className='answer-form-container'
        >
          <div className='question-answers-container mb-5'>
            <div className='container'>
              {!!errors?.skills?.message && (
                <div className='alert alert-danger' role='alert'>
                  {errors?.skills?.message}
                </div>
              )}

              <div className='h5 question-content'>
                {questionTitle ||
                  'What skills would you like to see in your new hire?'}
              </div>

              <div className='row'>
                <div className='col'>
                  <div className='answers-container mb-4'>
                    <div className='answers-helper'>
                      <Controller
                        name='skills'
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <Autocomplete
                            placeholder='Desired areas of expertise (e.g., UX, UI, App Design, Wireframing, Branding, etc.)'
                            isAddOption
                            options={listAllSkillOptions || []}
                            listOptionDisabled={value}
                            onSelectOption={(option) => {
                              const isExist = value.some(
                                (item) => item.value === option.value,
                              )

                              onChange(
                                isExist
                                  ? value.filter(
                                      (item) => item.value !== option.value,
                                    )
                                  : [...value, option],
                              )
                            }}
                            onAddOption={(option) => {
                              const isExist = value.some(
                                (item) => item.value === option.value,
                              )

                              if (isExist) {
                                errorToast('Skill already added')
                                return
                              }

                              onChange([...value, option])
                            }}
                          />
                        )}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className='row gy-2'>
                <div className='col-md'>
                  <div className='card answer-list'>
                    <div className='card-title'>
                      {history.length > 1 && (
                        <span
                          className='card-menu-back'
                          onClick={handleBackMenu}
                        >
                          <i className='bi bi-chevron-left'></i>
                        </span>
                      )}

                      {current.parentTitle}
                    </div>

                    <div
                      className='card-body'
                      style={{
                        ...(isMenuScrollable && { overflowY: 'scroll' }),
                      }}
                    >
                      <div className='card-content'>
                        {(current.data || []).map((item) => {
                          const isParent = !!item?.children?.data
                          const isSelected =
                            !isParent &&
                            selectedSkills.some(
                              (skill) =>
                                skill.value === item.id ||
                                skill.label === item.title,
                            )

                          return (
                            <div
                              key={item.id}
                              className={clsx({
                                'answer-item': true,
                                'answer-item-hover': !isSelected,
                                'my-3': true,
                                'justify-content-start': !isParent,
                                disabled: isSelected,
                              })}
                              onClick={() =>
                                !isSelected &&
                                handleSelectSkillMenuItem(isParent, item)
                              }
                            >
                              {!isParent && (
                                <span className='answer-item-icon spacing'>
                                  <i className='bi bi-plus-circle'></i>
                                </span>
                              )}

                              <span className='answer-item-title'>
                                {item.title}
                              </span>

                              {isParent && (
                                <span className='answer-item-icon'>
                                  <i className='bi bi-chevron-right'></i>
                                </span>
                              )}
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                </div>

                <div className='col-md-1'>
                  <div className='d-flex justify-content-center align-items-center answer-direction'>
                    <div className='d-flex justify-content-center align-items-center answer-direction-icon'>
                      <i className='bi bi-chevron-right'></i>
                    </div>
                  </div>
                </div>

                <div className='col-md'>
                  <div className='card answer-list'>
                    <div
                      className='card-body'
                      style={{
                        ...(isSelectedSkillScrollable && {
                          overflowY: 'scroll',
                        }),
                      }}
                    >
                      <div className='card-content answer-list-selected'>
                        {selectedSkills.map((item) => (
                          <div
                            key={item.value}
                            className='answer-item answer-item-hover answer-item-selected my-2'
                          >
                            <span className='answer-item-title'>
                              {item.label}
                            </span>
                            <span
                              className='answer-item-icon'
                              onClick={() => handleRemoveSkillSelected(item)}
                            >
                              <i className='bi bi-x-lg'></i>
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <hr />

          <ClientAction onClickPreviousButton={handlePreviousQuestion} />
        </form>
      </div>
    </div>
  )
}

export default SkillRequireStep
