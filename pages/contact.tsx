import type { NextPage } from 'next'

import Page from '@/components/Page'

import ContactSections from '@/sections/contact'

const ContactPage: NextPage = () => {
  return (
    <Page title=''>
      <ContactSections />
    </Page>
  )
}

export default ContactPage
