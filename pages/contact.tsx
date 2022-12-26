import type { NextPage } from 'next'

import Page from '@/components/Page'

import ContactSections from '@/sections/contact/multi-step/client-info'

const ContactPage: NextPage = () => {
  return (
    <Page title=''>
      <ContactSections />
    </Page>
  )
}

export default ContactPage
