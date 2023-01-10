import React, { useMemo } from 'react'
import ReactMarkdown from 'react-markdown'

import rehypeRaw from 'rehype-raw'

import {
  COMPONENT_TYPE,
  aboutFetch,
  getAboutClient,
  getNiceToHave,
  getRequirement,
  getResponsibilities,
  getSkillRequired,
} from '@/config/contact'

import ClientAction from '@/components/client-action'

import { useFormStepContext } from '@/context/FormStepContext'

import styles from './Preview.module.scss'

const PreviewStep = (): React.ReactElement => {
  const { listResultAnswers, handleBackFromPreview } = useFormStepContext()

  const skillsRequiredAnswer = useMemo(() => {
    const skills = listResultAnswers.find(
      (item) => item.inputData.type === COMPONENT_TYPE.TREE,
    )

    const skillTagsFormat = (skills?.answer as string)
      .split(',')
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

  const content = useMemo(
    () =>
      `${aboutFetch}${aboutClientAnswer}${responsibilitiesAnswer}${requirementAnswer}${skillsRequiredAnswer}`,
    [
      aboutClientAnswer,
      responsibilitiesAnswer,
      skillsRequiredAnswer,
      requirementAnswer,
    ],
  )

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(listResultAnswers)
    // call API finish
  }

  return (
    <div className={styles['preview-step-container']}>
      <form onSubmit={handleSubmit}>
        <div className='container '>
          <div className='h4 preview-header'>Job Description Preview</div>

          <div className='row mb-5'>
            <div className='col'>
              <div className='card prevew-content'>
                <div className='card-body'>
                  <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                    {content}
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
