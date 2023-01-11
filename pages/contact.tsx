import React from 'react'

import type { InferGetStaticPropsType } from 'next'
import Head from 'next/head'

import useSWR from 'swr'

import { PORTAL_STAGING_API } from '@/config/global'

import Page from '@/components/Page'

import FormStepProvider from '@/context/FormStepContext'

import {
  API_LIST_JOB_DESC_ATTRIBUTES,
  API_LIST_QUESTIONS,
  API_TECH,
} from '@/routes/api'

import ContactMultiStep from '@/sections/contact'

import {
  IListQuestionsResponse,
  IRequirementResponse,
  IResponsibilitiesResponse,
  ISkillResponse,
} from '@/types/contact'

import fetcher from '@/utils/fetcher'

export const getStaticProps = async () => {
  const res = await fetch(`${PORTAL_STAGING_API}/${API_LIST_QUESTIONS}`)

  const data: IListQuestionsResponse = await res.json()

  const skillResponse = await fetch(`${PORTAL_STAGING_API}/${API_TECH}`)

  const skillData: ISkillResponse = await skillResponse.json()

  const requirementResponse = await fetch(
    `${PORTAL_STAGING_API}/${API_LIST_JOB_DESC_ATTRIBUTES}?type=requirement`,
  )

  const requirementData: IRequirementResponse = await requirementResponse.json()

  const responsibilitiesResponse = await fetch(
    `${PORTAL_STAGING_API}/${API_LIST_JOB_DESC_ATTRIBUTES}?type=responsibilities`,
  )

  const responsibilitiesData: IResponsibilitiesResponse =
    await responsibilitiesResponse.json()

  return {
    props: {
      fallback: data,
      fallbackSkill: skillData,
      fallbackRequirement: requirementData,
      fallbackResponsibilities: responsibilitiesData,
    },
  }
}

function ContactPage({
  fallback,
  fallbackSkill,
  fallbackRequirement,
  fallbackResponsibilities,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { data } = useSWR(
    `${PORTAL_STAGING_API}/${API_LIST_QUESTIONS}`,
    fetcher,
    { fallbackData: fallback },
  )

  const { data: skillData } = useSWR(
    `${PORTAL_STAGING_API}/${API_TECH}`,
    fetcher,
    { fallbackData: fallbackSkill },
  )

  const { data: requirementData } = useSWR(
    `${PORTAL_STAGING_API}/${API_LIST_JOB_DESC_ATTRIBUTES}?type=requirement`,
    fetcher,
    { fallbackData: fallbackRequirement },
  )

  const { data: responsibilitiesData } = useSWR(
    `${PORTAL_STAGING_API}/${API_LIST_JOB_DESC_ATTRIBUTES}?type=responsibilities`,
    fetcher,
    { fallbackData: fallbackResponsibilities },
  )

  const dataQuestion: IListQuestionsResponse = data as IListQuestionsResponse
  const { list: questions = [] } = dataQuestion?.data || {}

  const dataSkill: ISkillResponse = skillData as ISkillResponse

  const dataRequirement: IRequirementResponse =
    requirementData as IRequirementResponse
  const { list: requirements = [] } = dataRequirement?.data || {}

  const dataResponsibilities: IResponsibilitiesResponse =
    responsibilitiesData as IResponsibilitiesResponse
  const { list: responsibilities = [] } = dataResponsibilities?.data || {}

  return (
    <>
      <Head>
        <meta name='description' content='Contact pages' />
      </Head>

      <Page title=''>
        <FormStepProvider
          questions={questions}
          skills={dataSkill}
          requirements={requirements}
          responsibilities={responsibilities}
        >
          <ContactMultiStep />
        </FormStepProvider>
      </Page>
    </>
  )
}

export default ContactPage
