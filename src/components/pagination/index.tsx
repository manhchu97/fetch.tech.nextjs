import React from 'react'

import Link from 'next/link'
import { useRouter } from 'next/router'

import clsx from 'clsx'

import { DOTS } from '@/config/global'

import { usePagination } from '@/hooks/usePagination'

import { PATH_CONFIG } from '@/routes/paths'

import styles from './Pagination.module.scss'

interface IPaginationProps {
  totalCount: number
  siblingCount?: number
  currentPage: number
  pageSize: number
  className?: string
}

const Pagination = ({
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize,
  className,
}: IPaginationProps) => {
  const router = useRouter()
  const { tags } = router.query

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  })

  if (currentPage === 0 || paginationRange.length < 2) {
    return null
  }

  const lastPage = paginationRange[paginationRange.length - 1]

  return (
    <nav aria-label='...' className={styles['pagination-wrapper']}>
      <ul
        className={clsx({
          pagination: true,
          [styles['styled-pagination']]: true,
          'flex-wrap': true,
          [className as string]: className,
        })}
      >
        <li
          className={clsx({
            'page-item': true,
            disabled: currentPage === 1,
          })}
        >
          {currentPage === 1 ? (
            <span className='page-link'>Previous</span>
          ) : (
            <Link
              href={PATH_CONFIG.blog.query({
                page: currentPage - 1,
                ...(tags ? { tags: tags as string } : {}),
              })}
            >
              <a className='page-link'>Previous</a>
            </Link>
          )}
        </li>

        {paginationRange.map((pageNumber: string | number, index) => {
          if (pageNumber === DOTS) {
            return (
              <li key={index} className='page-item'>
                <span className='page-link'>&#8230;</span>
              </li>
            )
          }

          return (
            <li
              key={index}
              className={clsx({
                'page-item': true,
                active: pageNumber === currentPage,
              })}
            >
              <Link
                href={PATH_CONFIG.blog.query({
                  page: pageNumber,
                  ...(tags ? { tags: tags as string } : {}),
                })}
              >
                <a className='page-link'>{pageNumber}</a>
              </Link>
            </li>
          )
        })}

        <li
          className={clsx({
            'page-item': true,
            disabled: currentPage === lastPage,
          })}
        >
          {currentPage === lastPage ? (
            <span className='page-link'>Next</span>
          ) : (
            <Link
              href={PATH_CONFIG.blog.query({
                page: currentPage + 1,
                ...(tags ? { tags: tags as string } : {}),
              })}
            >
              <a className='page-link'>Next</a>
            </Link>
          )}
        </li>
      </ul>
    </nav>
  )
}

export default Pagination
