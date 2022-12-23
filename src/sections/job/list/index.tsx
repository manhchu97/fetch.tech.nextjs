import React, {
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from 'react'
import { useForm } from 'react-hook-form'

import clsx from 'clsx'
import useSWR from 'swr'

import {
  DEFAULT_PAGE_NUMBER,
  DEFAULT_PAGE_SIZE,
  PORTAL_API,
} from '@/config/global'
import {
  SearchToolbarAction,
  SearchToolbarState,
  SearchToolbarType,
} from '@/config/job'

import LocalPaging from '@/components/pagination/LocalPaging'

import { API_LIST_JOB, API_LIST_LOCATION, API_LIST_SKILL } from '@/routes/api'

import {
  IJobItem,
  IListJobResponse,
  ILocationItem,
  ISkillItem,
  JobToolbarFormValue,
} from '@/types/job'

import fetcher from '@/utils/fetcher'

import JobError from './JobError'
import JobItem from './JobItem'
import JobTableToolbar from './JobTableToolbar'
import styles from './ListJob.module.scss'

interface IListJobProps {
  fallback: IListJobResponse
  listJobPaginate: IJobItem[]
}

function reducer(state: SearchToolbarState, action: SearchToolbarAction) {
  const { type, payload = {} } = action
  switch (type) {
    case SearchToolbarType.CHANGE:
      return {
        ...state,
        ...payload,
      }
    default:
      throw new Error()
  }
}

const ListJob = ({
  fallback,
  listJobPaginate,
}: IListJobProps): React.ReactElement => {
  const [mounted, setMounted] = useState<boolean>(false)
  const [pageNumber, setPage] = useState<number>(DEFAULT_PAGE_NUMBER)
  const [currentListJobs, setCurrentListJobs] = useState<IJobItem[]>(
    listJobPaginate || [],
  )

  const [searchFormValues, dispatch] = useReducer(reducer, {
    location: '',
    skill: '',
  })

  const methods = useForm<JobToolbarFormValue>()

  const { control, watch } = methods

  useEffect(() => setMounted(true), [])

  useEffect(() => {
    const subscription = watch(({ location, skill }) => {
      const skillString = skill?.map((item) => item?.value)?.join(',') || ''

      dispatch({
        type: SearchToolbarType.CHANGE,
        payload: {
          location: location || '',
          skill: skillString,
        },
      })
    })

    return () => subscription.unsubscribe()
  }, [watch, dispatch])

  const { location, skill } = searchFormValues

  const { data: jobData } = useSWR(
    mounted ? [API_LIST_JOB, location, skill] : null,
    (url: string, location: string, skill: string) => {
      if (location) {
        return fetcher(
          `${PORTAL_API}/${url}/location/${location}?skills=${skill}`,
        )
      }

      return fetcher(`${PORTAL_API}/${url}?skills=${skill}`)
    },
    { fallbackData: fallback },
  )

  const { data: locationData } = useSWR(
    mounted ? [API_LIST_LOCATION] : null,
    (url: string) => fetcher(`${PORTAL_API}/${url}`),
  )

  const { data: skillData } = useSWR(
    mounted ? [API_LIST_SKILL] : null,
    (url: string) => fetcher(`${PORTAL_API}/${url}`),
  )

  const listJobs: IJobItem[] = useMemo(
    () => jobData?.data?.list || [],
    [jobData],
  )

  const locationOptions = useMemo(
    () =>
      (locationData?.data?.location || []).map((location: ILocationItem) => ({
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

  const getDataWithPagination = useCallback(
    (data: IJobItem[]) => {
      if (data.length <= DEFAULT_PAGE_SIZE)
        return setCurrentListJobs(data || [])

      const currentJobs = data.slice(
        (pageNumber - 1) * DEFAULT_PAGE_SIZE,
        (pageNumber - 1) * DEFAULT_PAGE_SIZE + DEFAULT_PAGE_SIZE,
      )

      setCurrentListJobs(currentJobs)
    },
    [pageNumber],
  )

  useEffect(() => {
    getDataWithPagination(listJobs)
  }, [listJobs, getDataWithPagination])

  const isEmptyCurrentListJobs =
    !Array.isArray(currentListJobs) || !currentListJobs.length

  return (
    <div className={clsx(styles['line-header'], 'mt-4')}>
      <section id='job' className='job-section-container mt-4'>
        <div className='container job-section-list-wrapper'>
          <form>
            <JobTableToolbar
              locationOptions={locationOptions}
              skillOptions={skillOptions}
              control={control}
            />
          </form>

          {!isEmptyCurrentListJobs && (
            <div className='job-section-header mb-4'>
              <h2>All Open Positions</h2>
            </div>
          )}

          <div className='row'>
            <main className='col-12'>
              <ul className='job-section-list'>
                {isEmptyCurrentListJobs ? (
                  <JobError />
                ) : (
                  <>
                    {currentListJobs?.map((job) => (
                      <JobItem key={job.id} job={job} />
                    ))}
                  </>
                )}
              </ul>
            </main>
          </div>

          <LocalPaging
            className='justify-content-end'
            onPageChange={setPage}
            totalCount={listJobs.length}
            pageSize={DEFAULT_PAGE_SIZE}
            currentPage={pageNumber}
          />
        </div>
      </section>
    </div>
  )
}

export default ListJob
