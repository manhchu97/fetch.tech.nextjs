import React, { useEffect, useMemo, useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import clsx from 'clsx'
import ldDebounce from 'lodash.debounce'
import qs from 'query-string'
import useSWR from 'swr'

import { DEFAULT_PAGE_SIZE, SHARE_STATUS } from '@/config/fetchunt'
import { DEFAULT_PAGE_NUMBER, GA_EVENT_NAME, HOST_API } from '@/config/global'

import AnimatiopnOnScrollWrap from '@/components/AnimationOnScrollWrap'
import Button from '@/components/button/Button'

import { API_LIST_JOB } from '@/routes/api'
import { PATH_CONFIG } from '@/routes/paths'

import { IJobItem, IListJobResponse } from '@/types/fetchunt'

import fetcher from '@/utils/fetcher'
import { handleTrackingEvent } from '@/utils/googleAnalytics'

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

      setIsMobileScreen(width < 991)
    }, 100)

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => {
      unmounted = true
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className={styles['job-list-wrapper']}>
      <div className={styles['job-list-container']}>
        <div className='job-list-header'>
          Khám phá ngay các{' '}
          <strong className='highlight'>TIN TUYỂN DỤNG NỔI BẬT</strong> của
          FETCH
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
              <AnimatiopnOnScrollWrap
                key={index}
                render={(ref, animate) => (
                  <div
                    className={clsx(
                      'job-item',
                      isMobileScreen ? 'mb-4' : 'mb-5',
                      {
                        animate__animated: true,
                        animate__zoomIn: animate && isMobileScreen,
                        animate__fadeInLeft:
                          index % 2 === 0 && animate && !isMobileScreen,
                        animate__fadeInRight:
                          index % 2 !== 0 && animate && !isMobileScreen,
                      },
                    )}
                    ref={ref}
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
                        <Link
                          href={`https://portal.fetch.tech/job-detail/${id}`}
                        >
                          <a target='_blank' rel='noopener noreferrer'>
                            <Button
                              type='button'
                              title='Giới thiệu ứng viên'
                              size='small'
                              variant='filled'
                            />
                          </a>
                        </Link>

                        <Link
                          href={PATH_CONFIG.careers.view(jobSlug({ slug, id }))}
                        >
                          <a target='_blank' rel='noopener noreferrer'>
                            <Button
                              type='button'
                              title='Ứng tuyển'
                              size='small'
                              variant='outlined'
                            />
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
                )}
              />
            ),
          )}
        </div>

        <AnimatiopnOnScrollWrap
          render={(ref, animate) => (
            <div
              ref={ref}
              className={clsx('job-list-footer', {
                animate__animated: true,
                animate__slideInUp: animate,
              })}
            >
              <div className='h5'>
                <Link href='https://portal.fetch.tech/jobs'>
                  <a target='_blank' rel='noopener noreferrer'>
                    <span
                      role='button'
                      onClick={() =>
                        handleTrackingEvent(GA_EVENT_NAME.USER_JOB_INTEREST)
                      }
                    >
                      Xem thêm
                    </span>
                  </a>
                </Link>
              </div>
            </div>
          )}
        />
      </div>
    </div>
  )
}

export default JobList
