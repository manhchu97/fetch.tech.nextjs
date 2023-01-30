import React from 'react'

import Head from 'next/head'

import Page from '@/components/Page'

import ContactInfo from '@/sections/contact/original'

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
