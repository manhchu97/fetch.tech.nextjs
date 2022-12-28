import React from 'react'

import type { InferGetStaticPropsType } from 'next'

import { questions } from '@/config/contact'

import Page from '@/components/Page'

import FormStepProvider from '@/context/FormStepContext'

import ContactMultiStep from '@/sections/contact'

// import { ComponentList } from '@/types/contact'

// import { buildMultiStep } from '@/utils/multiStep'

export const getStaticProps = async () => {
  return {
    props: {
      questions,
    },
  }
}

function ContactPage({
  questions,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  // const componentList: ComponentList[] = useMemo(
  //   () => buildMultiStep(questions),
  //   [questions],
  // )

  return (
    <Page title=''>
      <FormStepProvider questions={questions}>
        <ContactMultiStep />
      </FormStepProvider>
    </Page>
  )
}

export default ContactPage
