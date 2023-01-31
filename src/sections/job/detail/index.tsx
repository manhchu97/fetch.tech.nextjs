import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'

import dynamic from 'next/dynamic'
import Head from 'next/head'
import { useRouter } from 'next/router'

import clsx from 'clsx'
import rehypeRaw from 'rehype-raw'
import useSWR from 'swr'

import { HOST_API } from '@/config/global'

import { API_JOB_DETAIL, API_LIST_SKILL } from '@/routes/api'

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
}

const JobDetail = ({ fallback }: IJobDetailProps): React.ReactElement => {
  const [mounted, setMounted] = useState<boolean>(false)
  const [isShowPopup, setIsShowPopup] = useState<boolean>(false)

  const { query } = useRouter()
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
    title,
    salary,
    tags,
    type,
    location,
    time,
    aboutFetch,
    responsibilities,
    requirement,
    niceToHave,
    benefit,
    client,
    arr_skill_required,
    arr_skill,
  } = jobDetail

  const { linkMap, address, descLocation } = location || {}

  const jobDescription = useMemo(
    () =>
      `${aboutFetch}${client?.about || ''}${responsibilities || ''}${
        requirement || ''
      }${niceToHave || ''}${benefit || ''}`,
    [aboutFetch, client, responsibilities, requirement, niceToHave, benefit],
  )

  const handleShowPopup = useCallback(() => {
    setIsShowPopup(true)
  }, [])

  const handleClosePopup = useCallback(() => {
    setIsShowPopup(false)
  }, [])

  return (
    <>
      <Head>
        <meta name='description' content='Detail job pages' />
      </Head>

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
                          <span>{` (${salary})`}</span>
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
                        <div className='detail-info-icon'>
                          <i className='bi bi-currency-dollar' />
                        </div>
                        <div>{salary}</div>
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
                      <div className='row'>
                        <div className='col-md-4' />
                        <div className='col-md-8 job-detail-apply'>
                          <div onClick={handleShowPopup}>Apply Now</div>
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

                      {linkMap && (
                        <div className='row mb-3'>
                          <div className='col-md'>
                            <GoogleMap linkMap={linkMap} />
                          </div>
                        </div>
                      )}

                      <div className='job-content-container'>
                        <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                          {descLocation}
                        </ReactMarkdown>
                      </div>
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
    </>
  )
}

export default JobDetail
