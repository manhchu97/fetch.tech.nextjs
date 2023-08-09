import type { GetStaticPaths, InferGetStaticPropsType } from 'next'
import Head from 'next/head'

import { PRIMARY_COLOR, SCREEN } from '@/config/global'
import {
  HEADER_CONFIG,
  SERVICE_BODY_CONFIG,
  SERVICE_TYPE,
} from '@/config/services'

import Page from '@/components/Page'

import ServiceSections from '@/sections/services'

type Prams = {
  params: {
    slug: string
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = Object.keys(SERVICE_TYPE).map((key) => ({
    params: { slug: SERVICE_TYPE[key] },
  }))

  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps = async ({ params }: Prams) => {
  const { slug } = params
  const header = HEADER_CONFIG.find((config) => config.type === slug)?.render()
  const serviceBody = SERVICE_BODY_CONFIG.find(
    (config) => config.type === slug,
  )?.render()

  return {
    props: {
      // https://stackoverflow.com/questions/68773115/next-js-routing-from-pages-slug-js-not-working
      key: slug,
      header,
      serviceBody,
      pageName: SCREEN.SERVICE_PAGE,
    },
  }
}

const ServiceDetailPage = ({
  header,
  serviceBody,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <meta name='description' content='Service pages' />
      </Head>

      <Page title='' themeColor={PRIMARY_COLOR}>
        <ServiceSections header={header} serviceBody={serviceBody} />
      </Page>
    </>
  )
}

export default ServiceDetailPage
