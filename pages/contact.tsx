import React from 'react'

import Head from 'next/head'

import { SCREEN } from '@/config/global'

import Page from '@/components/Page'

import ContactInfo from '@/sections/contact/original'

export const getStaticProps = async () => {
  return {
    props: {
      pageName: SCREEN.CONTACT_PAGE,
    },
  }
}

function ContactPage() {
  return (
    <>
      <Head>
        <meta name='description' content='Contact pages' />
      </Head>

      <Page title=''>
        <ContactInfo />
      </Page>
    </>
  )
}

export default ContactPage
