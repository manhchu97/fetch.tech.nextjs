import React from 'react'

import { DOTS, usePagination } from '@hooks/usePagination'
import clsx from 'clsx'

import styles from './Pagination.module.scss'

interface IPaginationProps {
  onPageChange: (page: number) => void
  totalCount: number
  siblingCount?: number
  currentPage: number
  pageSize: number
  className?: string
}

const Pagination = ({
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
    <nav aria-label='...'>
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
          onClick={onPrevious}
        >
          {currentPage === 1 ? (
            <span className='page-link'>Previous</span>
          ) : (
            <a className='page-link' href='#'>
              Previous
            </a>
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
              onClick={() => onPageChange(pageNumber as number)}
            >
              <a className='page-link' href='#'>
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
          onClick={onNext}
        >
          {currentPage === lastPage ? (
            <span className='page-link'>Next</span>
          ) : (
            <a className='page-link' href='#'>
              Next
            </a>
          )}
        </li>
      </ul>
    </nav>
  )
}

export default Pagination
