import React, { useEffect, useMemo, useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import clsx from 'clsx'
import ldDebounce from 'lodash.debounce'
import qs from 'query-string'
import useSWR from 'swr'

import { DEFAULT_PAGE_SIZE, SHARE_STATUS } from '@/config/fetchunt'
import { DEFAULT_PAGE_NUMBER, HOST_API } from '@/config/global'

import { API_LIST_JOB } from '@/routes/api'
import { PATH_CONFIG } from '@/routes/paths'

import { IJobItem, IListJobResponse } from '@/types/fetchunt'

import fetcher from '@/utils/fetcher'

import styles from './JobList.module.scss'

interface IListJobProps {
  fallback: IListJobResponse
}

function JobList({ fallback }: IListJobProps) {
  const [isMobileScreen, setIsMobileScreen] = useState(false)
  const [mounted, setMounted] = useState<boolean>(false)

  useEffect(() => setMounted(true), [])

  const { data: jobData } = useSWR(
    mounted ? [API_LIST_JOB] : null,
    (url: string) => {
      const params = {
        pageSize: DEFAULT_PAGE_SIZE,
        pageNumber: DEFAULT_PAGE_NUMBER,
        status: SHARE_STATUS,
      }

      return fetcher(`${HOST_API}/${url}?${qs.stringify(params)}`)
    },
    { fallbackData: fallback },
  )

  const listJobs: IJobItem[] = useMemo(
    () => jobData?.data?.list || jobData?.data?.jobs || [],
    [jobData],
  )

  const jobSlug = ({ slug, id }: { slug: string; id: string }) => {
    const slugArray = slug.split('-')
    slugArray[slugArray.length - 1] = id

    return slugArray.join('-')
  }

  useEffect(() => {
    let unmounted = false

    const handleResize = ldDebounce(() => {
      // https://stackoverflow.com/a/8876069
      const width = Math.max(
        document.documentElement.clientWidth,
        window.innerWidth || 0,
      )

      if (unmounted) return

      // md screen
      setIsMobileScreen(width < 768)
    }, 100)

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => {
      unmounted = true
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className={styles['job-list-container']}>
      <div className='job-list-header'>
        + 1000 Cơ hội Nhận thưởng từ các Dự án Quốc tế lên tới 20.000 USD
      </div>

      <div className='job-list-main'>
        {listJobs.map(
          (
            {
              id,
              slug,
              title,
              type,
              salary,
              locations,
              Tags,
              time,
              totalBonus,
            },
            index,
          ) => (
            <div
              className={clsx('job-item', isMobileScreen ? 'mb-3' : 'mb-5')}
              key={index}
            >
              <div className='h5 mb-2'>{title}</div>

              <div className='d-flex mb-2 type-bonus-ref'>
                <div className='p'>{type}</div>

                <div className='p bonus'>
                  Thưởng giới thiệu:{' '}
                  {Number(totalBonus || 0).toLocaleString('it-IT')} VND
                </div>
              </div>

              <div
                className={clsx(
                  'list-icon-info hstack  mb-2',
                  isMobileScreen ? 'gap-1' : 'gap-4',
                )}
              >
                <div className='icon-info hstack gap-2'>
                  <Image
                    src='/images/fetchunt/coin.svg'
                    alt='coin'
                    width={15}
                    height={15}
                  />

                  {salary}
                </div>

                <div className='icon-info hstack gap-2'>
                  <i className='bi bi-calendar-week-fill' />

                  {time}
                </div>
              </div>

              <div
                className={clsx(
                  'list-icon-info hstack  mb-3',
                  isMobileScreen ? 'gap-1' : 'gap-4',
                )}
              >
                <div className='icon-info hstack gap-2'>
                  <i className='bi bi-geo-alt-fill' />

                  {locations.map((it) => it.office).join(', ')}
                </div>
              </div>

              <div className='d-flex justify-content-between actions-tags'>
                <div className={clsx('actions hstack gap-4')}>
                  <Link href={`https://portal.fetch.tech/job-detail/${id}`}>
                    <a target='_blank' rel='noopener noreferrer'>
                      <button type='button' className='btn btn-primary'>
                        Giới thiệu ứng viên
                      </button>
                    </a>
                  </Link>

                  <Link href={PATH_CONFIG.careers.view(jobSlug({ slug, id }))}>
                    <a target='_blank' rel='noopener noreferrer'>
                      <button type='button' className='btn btn-outline-primary'>
                        Ứng tuyển
                      </button>
                    </a>
                  </Link>
                </div>

                {Tags.length > 0 && (
                  <div className={clsx('tags hstack gap-1')}>
                    {Tags.map(({ id, title, background }, index) => (
                      <div
                        key={id || index}
                        className='tag-item'
                        style={{ background }}
                      >
                        {title}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ),
        )}
      </div>
    </div>
  )
}

export default JobList
