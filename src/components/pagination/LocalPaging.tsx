import React from 'react'

import clsx from 'clsx'

import { DOTS } from '@/config/global'

import { usePagination } from '@/hooks/usePagination'

import styles from './Pagination.module.scss'

interface IPaginationProps {
  onPageChange: (page: number) => void
  totalCount: number
  siblingCount?: number
  currentPage: number
  pageSize: number
  className?: string
}

const LocalPaging = ({
  onPageChange,
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize,
  className,
}: IPaginationProps) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  })

  if (currentPage === 0 || paginationRange.length < 2) {
    return null
  }

  const onNext = () => {
    onPageChange(currentPage + 1)
  }

  const onPrevious = () => {
    onPageChange(currentPage - 1)
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
          onClick={currentPage === 1 ? () => {} : onPrevious}
        >
          {currentPage === 1 ? (
            <span className='page-link'>Previous</span>
          ) : (
            <a className='page-link' rel='nofollow'>
              Previous
            </a>
          )}
        </li>

        {paginationRange.map((pageNumber: string | number, index) => {
          if (pageNumber === DOTS) {
            return (
              <li key={index} className='page-item disabled'>
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
              onClick={() => onPageChange(pageNumber as number)}
            >
              <a className='page-link' rel='nofollow'>
                {pageNumber}
              </a>
            </li>
          )
        })}

        <li
          className={clsx({
            'page-item': true,
            disabled: currentPage === lastPage,
          })}
          onClick={currentPage === lastPage ? () => {} : onNext}
        >
          {currentPage === lastPage ? (
            <span className='page-link'>Next</span>
          ) : (
            <a className='page-link' rel='nofollow'>
              Next
            </a>
          )}
        </li>
      </ul>
    </nav>
  )
}

export default LocalPaging
