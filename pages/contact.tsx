import React from 'react'

import type { InferGetStaticPropsType } from 'next'

import useSWR from 'swr'

import { PORTAL_STAGING_API } from '@/config/global'

import Page from '@/components/Page'

import FormStepProvider from '@/context/FormStepContext'

import { API_LIST_QUESTIONS, API_TECH } from '@/routes/api'

import ContactMultiStep from '@/sections/contact'

import { IListQuestionsResponse, ISkillResponse } from '@/types/contact'

import fetcher from '@/utils/fetcher'

export const getStaticProps = async () => {
  const res = await fetch(`${PORTAL_STAGING_API}/${API_LIST_QUESTIONS}`)

  const data: IListQuestionsResponse = await res.json()

  const skillResponse = await fetch(`${PORTAL_STAGING_API}/${API_TECH}`)

  const skillData: ISkillResponse = await skillResponse.json()

  return {
    props: {
      fallback: data,
      fallbackSkill: skillData,
    },
  }
}

function ContactPage({
  fallback,
  fallbackSkill,
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

  const dataQuestion: IListQuestionsResponse = data as IListQuestionsResponse
  const { list: questions = [] } = dataQuestion?.data || {}

  const dataSkill: ISkillResponse = skillData as ISkillResponse

  return (
    <Page title=''>
      <FormStepProvider questions={questions} skills={dataSkill}>
        <ContactMultiStep />
      </FormStepProvider>
    </Page>
  )
}

export default ContactPage
