import React, {
  Fragment,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'

import { NextSeo } from 'next-seo'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'

import clsx from 'clsx'
import rehypeRaw from 'rehype-raw'
import useSWR from 'swr'

import { FACEBOOK_APP_ID, FACEBOOK_PAGE_ID, HOST_API } from '@/config/global'
import { JOB_STATUS, formatSalary } from '@/config/job'

import CustomerMessengerChat from '@/components/Messenger'
import Page from '@/components/Page'
import BannerContact from '@/components/banner/contact'

import { API_JOB_DETAIL, API_LIST_SKILL } from '@/routes/api'
import { PATH_CONFIG } from '@/routes/paths'

import ApplyPopup from '@/sections/job/apply-popup'
import JobError from '@/sections/job/job-error/JobError'

import {
  IDetailTagItem,
  IJobDetail,
  IJobDetailResponse,
  ISkillItem,
} from '@/types/job'

import fetcher from '@/utils/fetcher'

import styles from './JobDetail.module.scss'

const GoogleMap = dynamic(() => import('@/components/google-map'), {
  ssr: false,
})

interface IJobDetailProps {
  fallback: IJobDetailResponse
  previousRoute: string
}

const JobDetail = ({
  fallback,
  previousRoute,
}: IJobDetailProps): React.ReactElement => {
  const [mounted, setMounted] = useState<boolean>(false)
  const [isShowPopup, setIsShowPopup] = useState<boolean>(false)

  const router = useRouter()
  const { query } = router

  const idJob = query.slug?.slice(-36) || ''
  const codeBitly = (query.slug?.slice(-47, -37) as string) || 'false'

  useEffect(() => setMounted(true), [])

  const { data } = useSWR(
    mounted ? [API_JOB_DETAIL, idJob] : null,
    (url: string, idJob: string) => fetcher(`${HOST_API}/${url}/${idJob}`),
    { fallbackData: fallback },
  )

  const { data: skillData } = useSWR(
    mounted ? [API_LIST_SKILL] : null,
    (url: string) => fetcher(`${HOST_API}/${url}`),
  )

  const skillOptions = useMemo(
    () =>
      (skillData?.data?.skills || [])
        .filter(
          (skill: ISkillItem) =>
            Array.isArray(skill.JobSkills) && skill.JobSkills.length > 0,
        )
        .map((skill: ISkillItem) => {
          return {
            value: skill?.id || '',
            label: skill?.name || '',
          }
        }),
    [skillData],
  )

  const jobDetail: IJobDetail = data?.data || {}

  const {
    titlePage: pageTitle = '',
    metaJob: metaDescription = '',
    title,
    salaryJob,
    tags,
    type,
    locations,
    time,
    aboutFetch,
    responsibilities,
    requirement,
    niceToHave,
    timeLocation,
    benefit,
    client,
    arr_skill_required,
    arr_skill,
    jobStatus,
  } = jobDetail

  const salaryFormat = useMemo(() => formatSalary(salaryJob), [salaryJob])

  const hasLocation = Array.isArray(locations) && locations.length

  const address =
    (hasLocation && locations.map(({ address }) => address).join(', ')) || ''

  const jobDescription = useMemo(
    () =>
      [
        aboutFetch,
        client?.about,
        responsibilities,
        requirement,
        niceToHave,
        benefit,
        timeLocation,
      ]
        .filter(Boolean)
        .join(''),
    [
      aboutFetch,
      client,
      responsibilities,
      requirement,
      niceToHave,
      benefit,
      timeLocation,
    ],
  )

  const handleShowPopup = useCallback(() => {
    setIsShowPopup(true)
  }, [])

  const handleClosePopup = useCallback(() => {
    setIsShowPopup(false)
  }, [])

  const handleBackToListJob = useCallback(() => {
    if (previousRoute) {
      router.back()
    } else {
      router.replace(PATH_CONFIG.careers.root)
    }
  }, [previousRoute, router])

  return (
    <Page title={pageTitle}>
      <NextSeo
        title={pageTitle}
        description={metaDescription}
        canonical={'https://fetch.tech/careers'}
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
        openGraph={{
          url: 'https://fetch.tech/careers',
          title: pageTitle,
          description: metaDescription,
          images: [
            {
              url: 'https://fetch.tech/_next/image?url=%2Fimages%2Fcareers%2Fcareers-thumbnail.png&w=1080&q=75',
              width: 200,
              height: 100,
              alt: 'job share thumbnail',
              type: 'image/png',
            },
          ],
          siteName: 'Fetch Careers Page',
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />

      <div className={clsx(styles['line-header'], 'my-4')}>
        <section id='job' className='job-detail-container mt-4'>
          {Object.keys(jobDetail).length ? (
            <>
              <div className='container contain-job-detail-content'>
                <div className='row'>
                  <div className='col-md-9 content-detail'>
                    <div className='job-detail-title'>
                      <div className='content-detail-title'>
                        <h1>
                          {title}
                          <span>{` (${salaryFormat})`}</span>
                        </h1>
                      </div>

                      <div className='job-detail-tag'>
                        {(tags || []).map(
                          ({ id, title, background }: IDetailTagItem) => (
                            <div
                              key={id}
                              className='tag-item'
                              style={{ background }}
                            >
                              <span>{title}</span>
                            </div>
                          ),
                        )}
                      </div>
                    </div>

                    <div className='job-detail-type'>
                      <div className='detail-type'>{type}</div>
                    </div>

                    <div className='job-detail-info'>
                      <div className='overview-detail-info'>
                        <div>{salaryFormat}</div>
                      </div>

                      <div className='overview-detail-info'>
                        <div className='detail-info-icon'>
                          <i className='bi bi-geo-alt-fill' />
                        </div>
                        <div>{address}</div>
                      </div>

                      <div className='overview-detail-info'>
                        <div className='detail-info-icon'>
                          <i className='bi bi-calendar-week-fill' />
                        </div>
                        <div>{time}</div>
                      </div>
                    </div>
                  </div>

                  <div className='col-md-3'>
                    <div className='container'>
                      {jobStatus === JOB_STATUS.ACTIVE && (
                        <div className='row mb-3'>
                          <div className='col-md-4' />
                          <div
                            className='col-md-8 job-detail-apply'
                            onClick={handleShowPopup}
                          >
                            <div>Apply Now</div>
                          </div>
                        </div>
                      )}

                      <div className='row'>
                        <div className='col-md-4' />
                        <div
                          className='col-md-8 job-detail-apply'
                          onClick={handleBackToListJob}
                        >
                          <div>Back to list jobs</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='line-detail' />

              <div className='container job-description-container'>
                <div className='row pt-5 g-5'>
                  <div className='col-md-8 job-description'>
                    <div className='markdown-container'>
                      <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                        {jobDescription}
                      </ReactMarkdown>
                    </div>
                  </div>

                  <div className='col-md-4 pl-4 job-description-sub-info'>
                    <div className='job-description-sub-info-wrapper'>
                      <label className='job-description-sub-info-title'>
                        Skills required
                      </label>
                      <div className='job-content-container'>
                        {(arr_skill_required || []).map(
                          (skill: string, index) => (
                            <div
                              key={skill || index}
                              className='job-detail-skill-item'
                            >
                              {skill}
                            </div>
                          ),
                        )}
                      </div>
                    </div>

                    <div className='job-description-sub-info-wrapper'>
                      <label className='job-description-sub-info-title'>
                        Skills
                      </label>
                      <div className='job-content-container'>
                        {(arr_skill || []).map((skill: string, index) => (
                          <div
                            key={skill || index}
                            className='job-detail-skill-item'
                          >
                            {skill}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className='job-description-sub-info-wrapper'>
                      <label className='job-description-sub-info-title mb-3'>
                        Locations
                      </label>

                      {hasLocation &&
                        locations.map(({ id, linkMap, descLocation }) => (
                          <Fragment key={id}>
                            <div className='row mb-3 mt-3'>
                              <div className='col-md'>
                                <GoogleMap linkMap={linkMap} />
                              </div>
                            </div>

                            <div className='job-content-container'>
                              <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                                {descLocation}
                              </ReactMarkdown>
                            </div>
                          </Fragment>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <JobError />
          )}
        </section>
      </div>

      {isShowPopup && (
        <ApplyPopup
          isShowPopup
          codeBitly={codeBitly}
          chosenJob={jobDetail}
          skillOptions={skillOptions}
          handleClosePopup={handleClosePopup}
        />
      )}

      <BannerContact
        title='Find the perfect fit with Fetch'
        subTitle='Find the perfect fit with Fetch'
        buttonText='Sign Up'
        linkTo={PATH_CONFIG.contact}
      />

      <CustomerMessengerChat
        fbAppId={FACEBOOK_APP_ID}
        fbPageId={FACEBOOK_PAGE_ID}
      />
    </Page>
  )
}

export default JobDetail
