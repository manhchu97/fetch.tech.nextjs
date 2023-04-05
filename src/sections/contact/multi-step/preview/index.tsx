import React, { useMemo } from 'react'
import ReactMarkdown from 'react-markdown'

import clsx from 'clsx'
import rehypeRaw from 'rehype-raw'

import {
  COMPONENT_TYPE,
  QUIZ_RESULT_KEY,
  TYPE_SUBMIT_FINISH,
  aboutFetch,
  getAboutClient,
  getInterviewProcess,
  getLocation,
  getNiceToHave,
  getRequirement,
  getResponsibilities,
  getSkillRequired,
} from '@/config/contact'

import ClientAction from '@/components/client-action'

import { useFormStepContext } from '@/context/FormStepContext'
import { useToastContext } from '@/context/ToastContext'

import { API_FINISH_SURVEY } from '@/routes/api'

import { _postApi } from '@/utils/axios'
import { removeDataFromStorage } from '@/utils/storage'

import styles from './Preview.module.scss'

const PreviewStep = (): React.ReactElement => {
  const { successToast, errorToast } = useToastContext()
  const {
    clientId,
    listResultAnswers,
    isAnimatedComponent,
    animation,
    handleBackFromPreview,
    handleFinishStep,
  } = useFormStepContext()

  const skillsRequiredAnswer = useMemo(() => {
    const skills = listResultAnswers.find(
      (item) => item.inputData.type === COMPONENT_TYPE.TREE,
    )

    const skillTagsFormat = (skills?.answer as [])
      .map((skill) => `<div className="skill-tag-item">${skill}</div>`)
      .join('')

    return getSkillRequired(skillTagsFormat)
  }, [listResultAnswers])

  const aboutClientAnswer = useMemo(() => {
    const aboutClient = listResultAnswers.find(
      (item) => item.inputData.type === COMPONENT_TYPE.TEXT,
    )
    return getAboutClient((aboutClient?.answerRaw || [])[0] || '')
  }, [listResultAnswers])

  const responsibilitiesAnswer = useMemo(() => {
    const responsibilities = listResultAnswers.find(
      (item) => item.inputData.type === COMPONENT_TYPE.CHECKBOX_REPONSIBILITY,
    )

    return getResponsibilities((responsibilities?.answerRaw || [])[0] || '')
  }, [listResultAnswers])

  const requirementAnswer = useMemo(() => {
    const requirement = listResultAnswers.find(
      (item) => item.inputData.type === COMPONENT_TYPE.CHECKBOX_REQUIREMENT,
    )

    return `${getRequirement((requirement?.answerRaw || [])[0])}${getNiceToHave(
      (requirement?.answerRaw || [])[1],
    )}`
  }, [listResultAnswers])

  const locationAnswer = useMemo(() => {
    const location = listResultAnswers.find(
      (item) => item.inputData.type === COMPONENT_TYPE.CHECKBOX_LOCATIONS,
    )

    return getLocation(location?.answerRaw?.join('') || '')
  }, [listResultAnswers])

  const interviewProcessAnswer = useMemo(() => {
    const interviewProcess = listResultAnswers.find(
      (item) => item.inputData.type === COMPONENT_TYPE.CHECKBOX_INTERVIEWS,
    )

    return getInterviewProcess((interviewProcess?.answerRaw || [])[0] || '')
  }, [listResultAnswers])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      const response = await _postApi(API_FINISH_SURVEY, {
        clientId,
        type: TYPE_SUBMIT_FINISH.ADD_JOB,
      })

      if (!response?.data?.success) throw new Error(response?.data?.message)

      successToast('Submit survey success!')
      removeDataFromStorage(QUIZ_RESULT_KEY)
      handleFinishStep()
    } catch (error) {
      errorToast((error as Error).message || 'Fail to submit survey!')
    }
  }

  return (
    <div
      className={clsx({
        [styles['preview-step-container']]: true,
        animate__animated: isAnimatedComponent,
        [animation]: isAnimatedComponent,
      })}
    >
      <form onSubmit={handleSubmit}>
        <div className='container '>
          <div className='h4 preview-header'>Job Description Preview</div>

          <div className='row mb-5'>
            <div className='col'>
              <div className='card prevew-content'>
                <div className='card-body'>
                  <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                    {`${aboutFetch}${aboutClientAnswer}${responsibilitiesAnswer}${requirementAnswer}
                    ${locationAnswer}${skillsRequiredAnswer}${interviewProcessAnswer}`}
                  </ReactMarkdown>
                </div>
              </div>
            </div>
          </div>

          <hr />

          <ClientAction
            nextButtonText='Finish'
            onClickPreviousButton={handleBackFromPreview}
          />
        </div>
      </form>
    </div>
  )
}

export default PreviewStep
