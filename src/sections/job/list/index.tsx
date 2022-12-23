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

import JobItem from './JobItem'
import JobTableToolbar from './JobTableToolbar'
import styles from './ListJob.module.scss'

interface IListJobProps {
  fallback: IListJobResponse
}

enum SearchToolbarType {
  CHANGE = 'CHANGE',
}

interface SearchToolbarAction {
  type: SearchToolbarType
  payload: SearchToolbarState
}

interface SearchToolbarState {
  location: string
  skill: string
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

const ListJob = ({ fallback }: IListJobProps): React.ReactElement => {
  const [mounted, setMounted] = useState<boolean>(false)
  const [pageNumber, setPage] = useState<number>(DEFAULT_PAGE_NUMBER)
  const [currentListJobs, setCurrentListJobs] = useState<IJobItem[]>([])

  const [searchFormValues, dispatch] = useReducer(reducer, {
    location: '',
    skill: '',
  })

  const methods = useForm<JobToolbarFormValue>()

  const { control, watch } = methods

  useEffect(() => setMounted(true), [])

  useEffect(() => {
    const subscription = watch(({ location, skill }) => {
      dispatch({
        type: SearchToolbarType.CHANGE,
        payload: {
          location: location || '',
          skill: skill?.map((item) => item?.value)?.join(',') || '',
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
    () => jobData?.data?.list || {},
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
      let currentJobs = []

      if (data.length > 5) {
        const lengthShowJob = Math.min(
          pageNumber * DEFAULT_PAGE_SIZE,
          data.length,
        )
        for (
          let i = (pageNumber - 1) * DEFAULT_PAGE_SIZE;
          i < lengthShowJob;
          i++
        ) {
          currentJobs.push(data[i])
        }
      } else {
        currentJobs = data
      }

      setCurrentListJobs(currentJobs)
    },
    [pageNumber],
  )

  useEffect(() => {
    getDataWithPagination(listJobs)
  }, [listJobs, getDataWithPagination])

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

          <div className='job-section-header mb-4'>
            <h2>All Open Positions</h2>
          </div>

          <div className='row'>
            <main className='col-12'>
              <ul className='job-section-list'>
                {(() => {
                  if (
                    !Array.isArray(currentListJobs) ||
                    !currentListJobs.length
                  )
                    return <div>No Data</div>

                  return (
                    <>
                      {currentListJobs?.map((job) => (
                        <JobItem key={job.id} job={job} />
                      ))}
                    </>
                  )
                })()}
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
