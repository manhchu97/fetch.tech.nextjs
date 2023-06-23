import React, { useEffect, useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import clsx from 'clsx'
import ldDebounce from 'lodash.debounce'

import { PATH_CONFIG } from '@/routes/paths'

import styles from './JobList.module.scss'
import mockJobList from './mock-job-list.json'

function JobList() {
  const [isMobileScreen, setIsMobileScreen] = useState(false)

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
        {mockJobList.map(
          (
            {
              id,
              slug,
              title,
              type,
              salaryJob,
              locations,
              Tags,
              createdAt,
              bonus,
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
                  {Number(bonus || 0).toLocaleString('it-IT')} VND
                </div>
              </div>

              <div
                className={clsx(
                  'list-icon-info hstack  mb-3',
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

                  {(() => {
                    const { min = 0, max = 0, currency } = salaryJob
                    const minSalary = Number(min).toLocaleString('it-IT')
                    const maxSalary = Number(max).toLocaleString('it-IT')

                    if (minSalary === '0') {
                      return `Up to ${maxSalary} ${currency}`
                    }

                    return `${minSalary} - ${maxSalary} ${currency}`
                  })()}
                </div>

                <div className='icon-info hstack gap-2'>
                  <i className='bi bi-geo-alt-fill' />

                  {locations.map((it) => it.office).join(', ')}
                </div>

                <div className='icon-info hstack gap-2'>
                  <i className='bi bi-calendar-week-fill' />

                  <time>
                    {new Date(createdAt).toLocaleDateString('en-us', {
                      year: 'numeric',
                      month: 'numeric',
                      day: 'numeric',
                    })}
                  </time>
                </div>
              </div>

              <div className='d-flex justify-content-between actions-tags'>
                <div className={clsx('actions hstack gap-4')}>
                  <button type='button' className='btn btn-primary'>
                    Giới thiệu ứng viên
                  </button>

                  <Link href={PATH_CONFIG.careers.view(jobSlug({ slug, id }))}>
                    <a target='_blank' rel='noopener noreferrer'>
                      <button type='button' className='btn btn-outline-primary'>
                        Ứng tuyển
                      </button>
                    </a>
                  </Link>
                </div>

                {Tags.length > 0 && (
                  <div
                    className={clsx(
                      'tags hstack gap-1',
                      isMobileScreen && 'mb-3',
                    )}
                  >
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
