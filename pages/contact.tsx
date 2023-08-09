import React from 'react'

import type { InferGetStaticPropsType } from 'next'
import Head from 'next/head'

import qs from 'query-string'
import useSWR from 'swr'

import { JOB_DESC_PARAMS } from '@/config/contact'
import { HOST_API, SCREEN } from '@/config/global'

import Page from '@/components/Page'
import { SWRConfigProvider } from '@/components/SwrConfig'

import FormStepProvider from '@/context/FormStepContext'

import {
  API_LIST_JOB_DESC_ATTRIBUTES,
  API_LIST_LOCATION,
  API_LIST_QUESTIONS,
  API_TECH,
} from '@/routes/api'

import ContactMultiStep from '@/sections/contact'

import {
  IListQuestionsResponse,
  ILocationResponse,
  IRequirementResponse,
  IResponsibilitiesResponse,
  ISkillResponse,
} from '@/types/contact'

import fetcher from '@/utils/fetcher'

export const getStaticProps = async () => {
  const res = await fetch(`${HOST_API}/${API_LIST_QUESTIONS}`)

  const data: IListQuestionsResponse = await res.json()

  const skillResponse = await fetch(`${HOST_API}/${API_TECH}`)

  const skillData: ISkillResponse = await skillResponse.json()

  const requirementResponse = await fetch(
    `${HOST_API}/${API_LIST_JOB_DESC_ATTRIBUTES}?${qs.stringify(
      JOB_DESC_PARAMS.REQUIREMENT,
    )}`,
  )

  const requirementData: IRequirementResponse = await requirementResponse.json()

  const responsibilitiesResponse = await fetch(
    `${HOST_API}/${API_LIST_JOB_DESC_ATTRIBUTES}?${qs.stringify(
      JOB_DESC_PARAMS.RESPONSIBILITIES,
    )}`,
  )

  const responsibilitiesData: IResponsibilitiesResponse =
    await responsibilitiesResponse.json()

  const locationResponse = await fetch(`${HOST_API}/${API_LIST_LOCATION}`)

  const locationData: ILocationResponse = await locationResponse.json()

  return {
    props: {
      fallback: data,
      fallbackSkill: skillData,
      fallbackRequirement: requirementData,
      fallbackResponsibilities: responsibilitiesData,
      fallbackLocations: locationData,
      pageName: SCREEN.CONTACT_PAGE,
    },
  }
}

function ContactPage({
  fallback,
  fallbackSkill,
  fallbackRequirement,
  fallbackResponsibilities,
  fallbackLocations,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { data } = useSWR(`${HOST_API}/${API_LIST_QUESTIONS}`, fetcher, {
    fallbackData: fallback,
  })

  const { data: skillData } = useSWR(`${HOST_API}/${API_TECH}`, fetcher, {
    fallbackData: fallbackSkill,
  })

  const { data: requirementData } = useSWR(
    `${HOST_API}/${API_LIST_JOB_DESC_ATTRIBUTES}?${qs.stringify(
      JOB_DESC_PARAMS.REQUIREMENT,
    )}`,
    fetcher,
    { fallbackData: fallbackRequirement },
  )

  const { data: responsibilitiesData } = useSWR(
    `${HOST_API}/${API_LIST_JOB_DESC_ATTRIBUTES}?${qs.stringify(
      JOB_DESC_PARAMS.RESPONSIBILITIES,
    )}`,
    fetcher,
    { fallbackData: fallbackResponsibilities },
  )

  const { data: locationsData } = useSWR(
    `${HOST_API}/${API_LIST_LOCATION}`,
    fetcher,
    {
      fallbackData: fallbackLocations,
    },
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

  const dataLocations: ILocationResponse = locationsData as ILocationResponse
  const { list: locations = [] } = dataLocations?.data || {}

  return (
    <SWRConfigProvider>
      <Head>
        <meta name='description' content='Contact pages' />
      </Head>

      <Page title=''>
        <FormStepProvider
          questions={questions}
          skills={dataSkill}
          requirements={requirements}
          responsibilities={responsibilities}
          locations={locations}
        >
          <ContactMultiStep />
        </FormStepProvider>
      </Page>
    </SWRConfigProvider>
  )
}

export default ContactPage
