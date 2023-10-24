import { InferGetStaticPropsType } from 'next'
import { NextSeo } from 'next-seo'
import Head from 'next/head'

import useSWR from 'swr'

import { HOST_API, SCREEN } from '@/config/global'

import Page from '@/components/Page'

import { API_LIST_SKILL } from '@/routes/api'

import HiringFreelancersSections from '@/sections/hiring-freelancers'

import { ISkillResponse } from '@/types/hiring-freelancers'

import fetcher from '@/utils/fetcher'

export const getStaticProps = async () => {
  const skillResponse = await fetch(`${HOST_API}/${API_LIST_SKILL}`)

  const skillData: ISkillResponse = await skillResponse.json()

  return {
    props: {
      fallback: skillData,
      pageName: SCREEN.SERVICE_PAGE,
    },
  }
}

const HiringFreelancePage = ({
  fallback,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { data: skillData } = useSWR(`${HOST_API}/${API_LIST_SKILL}`, fetcher, {
    fallbackData: fallback,
  })

  const dataSkill: ISkillResponse = skillData as ISkillResponse

  return (
    <>
      <Head>
        <meta name='description' content='Hiring freelancer pages' />
      </Head>

      <Page title=''>
        <NextSeo
          title='Fetch | Hiring freelancers'
          description='Hiring freelancers'
          themeColor='#ffbf14'
          additionalLinkTags={[
            {
              rel: 'icon',
              href: '/favicon.ico',
            },
            {
              rel: 'apple-touch-icon',
              href: '/apple-touch-icon.png',
              sizes: '192x192',
            },
            {
              rel: 'manifest',
              href: '/manifest.json',
            },
          ]}
        />

        <HiringFreelancersSections skills={dataSkill?.data?.skills || []} />
      </Page>
    </>
  )
}

export default HiringFreelancePage
