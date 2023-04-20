import React, {
  Fragment,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react'

import dynamic from 'next/dynamic'
import Head from 'next/head'
import { useRouter } from 'next/router'

import qs from 'query-string'
import useSWR from 'swr'

import {
  DEFAULT_PAGE_NUMBER,
  DEFAULT_PAGE_SIZE,
  HOST_API,
} from '@/config/global'

import LocalPaging from '@/components/pagination/LocalPaging'

import { API_LIST_JOB, API_LIST_LOCATION, API_LIST_SKILL } from '@/routes/api'
import { PATH_CONFIG } from '@/routes/paths'

import JobError from '@/sections/job/job-error/JobError'

import {
  IJobItem,
  IJobQuerySearch,
  IListJobResponse,
  ILocationItem,
  ISkillItem,
} from '@/types/job'

import fetcher from '@/utils/fetcher'

import JobItem from './JobItem'
import JobTableToolbar from './JobTableToolbar'
import styles from './ListJob.module.scss'

const ApplyPopup = dynamic(() => import('@/sections/job/apply-popup'))

interface IListJobProps {
  fallback: IListJobResponse
}

const ListJob = ({ fallback }: IListJobProps): React.ReactElement => {
  const router = useRouter()
  const {
    page = '',
    location = '',
    skills = '',
  } = router.query as IJobQuerySearch

  const [mounted, setMounted] = useState<boolean>(false)
  const [isShowPopup, setIsShowPopup] = useState<boolean>(false)
  const [chosenJob, setChosenJob] = useState<IJobItem | null>(null)

  useEffect(() => setMounted(true), [])

  const { data: jobData } = useSWR(
    mounted ? [API_LIST_JOB, location, skills, page] : null,
    (url: string, location: string, skills: string, page: string) => {
      const params = {
        ...(location && { location }),
        ...(skills && { skills }),
        pageSize: DEFAULT_PAGE_SIZE,
        pageNumber: page ? parseInt(page, 10) : DEFAULT_PAGE_NUMBER,
      }

      return fetcher(`${HOST_API}/${url}?${qs.stringify(params)}`)
    },
    { fallbackData: fallback },
  )

  const { data: locationData } = useSWR(
    mounted ? [API_LIST_LOCATION] : null,
    (url: string) => fetcher(`${HOST_API}/${url}`),
  )

  const { data: skillData } = useSWR(
    mounted ? [API_LIST_SKILL] : null,
    (url: string) => fetcher(`${HOST_API}/${url}`),
  )

  const listJobs: IJobItem[] = useMemo(
    () => jobData?.data?.list || jobData?.data?.jobs || [],
    [jobData],
  )

  const totalRecord: number = useMemo(
    () => jobData?.data?.total || 0,
    [jobData],
  )

  const locationOptions = useMemo(
    () =>
      (locationData?.data?.list || []).map((location: ILocationItem) => ({
        value: location?.id || '',
        label: location?.name || '',
      })),
    [locationData],
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

  const isEmptyJobs = useMemo(
    () => !Array.isArray(listJobs) || !listJobs.length,
    [listJobs],
  )

  const pageNumber = useMemo(
    () => (page ? parseInt(page, 10) : DEFAULT_PAGE_NUMBER),
    [page],
  )

  const handleShowPopup = useCallback((job: IJobItem) => {
    setIsShowPopup((prev) => !prev)
    setChosenJob(job)
  }, [])

  const handleClosePopup = useCallback(() => {
    setIsShowPopup(false)
    setChosenJob(null)
  }, [])

  const onPageChange = useCallback(
    (newPage: number) => {
      router.push({
        pathname: PATH_CONFIG.careers.root,
        query: {
          ...(location && { location }),
          ...(skills && { skills }),
          page: newPage,
        },
      })
    },
    [location, router, skills],
  )

  return (
    <>
      <Head>
        <meta name='description' content='List jobs pages' />
      </Head>

      <div className={styles['line-header']}>
        <section id='job' className='job-section-container mt-4'>
          <div className='container job-section-list-wrapper'>
            <JobTableToolbar
              locationOptions={locationOptions}
              skillOptions={skillOptions}
            />

            {!isEmptyJobs && (
              <div className='job-section-header mb-4'>
                <h2>All Open Positions</h2>
              </div>
            )}

            <div className='row'>
              <main className='col-12'>
                <ul className='job-section-list'>
                  {isEmptyJobs ? (
                    <JobError />
                  ) : (
                    <>
                      {listJobs?.map((job, index) => (
                        <Fragment key={job.id}>
                          <JobItem
                            job={job}
                            handleShowPopup={handleShowPopup}
                          />

                          {index !== listJobs.length - 1 && <hr />}
                        </Fragment>
                      ))}
                    </>
                  )}
                </ul>
              </main>
            </div>

            <LocalPaging
              className='justify-content-center pagination-lg mt-4'
              onPageChange={onPageChange}
              totalCount={totalRecord}
              pageSize={DEFAULT_PAGE_SIZE}
              currentPage={pageNumber}
            />
          </div>
        </section>
      </div>

      {isShowPopup && (
        <ApplyPopup
          isShowPopup
          chosenJob={chosenJob}
          skillOptions={skillOptions}
          handleClosePopup={handleClosePopup}
        />
      )}
    </>
  )
}

export default ListJob
