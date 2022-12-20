import Page from '@/components/Page'
import {
  HEADER_CONFIG,
  SERVICE_BODY_CONFIG,
  SERVICE_TYPE,
} from '@/config/services'
import ServiceSections from '@/sections/services'
import type { GetStaticPaths, InferGetStaticPropsType } from 'next'

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
      header,
      serviceBody,
    },
  }
}

const ServiceDetailPage = ({
  header,
  serviceBody,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Page title=''>
      <ServiceSections header={header} serviceBody={serviceBody} />
    </Page>
  )
}

export default ServiceDetailPage
