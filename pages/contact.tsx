import React from 'react'

import type { InferGetStaticPropsType } from 'next'

import useSWR from 'swr'

import { PORTAL_STAGING_API } from '@/config/global'

import Page from '@/components/Page'

import FormStepProvider from '@/context/FormStepContext'

import { API_LIST_QUESTIONS } from '@/routes/api'

import ContactMultiStep from '@/sections/contact'

import { IListQuestionsResponse } from '@/types/contact'

import fetcher from '@/utils/fetcher'

export const getStaticProps = async () => {
  const res = await fetch(`${PORTAL_STAGING_API}/${API_LIST_QUESTIONS}`)

  const data: IListQuestionsResponse = await res.json()

  return {
    props: {
      fallback: data,
    },
  }
}

function ContactPage({
  fallback,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { data } = useSWR(
    `${PORTAL_STAGING_API}/${API_LIST_QUESTIONS}`,
    fetcher,
    { fallbackData: fallback },
  )

  const dataQuestion: IListQuestionsResponse = data as IListQuestionsResponse
  const { list: questions = [] } = dataQuestion?.data || {}

  return (
    <Page title=''>
      <FormStepProvider questions={questions}>
        <ContactMultiStep />
      </FormStepProvider>
    </Page>
  )
}

export default ContactPage
