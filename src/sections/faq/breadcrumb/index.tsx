import React from 'react'

import Link from 'next/link'

import clsx from 'clsx'

import { PATH_CONFIG } from '@/routes/paths'

import styles from './FAQBreadcrumb.module.scss'

interface IFAQBreadcrumbProps {
  isShowBreadcrumb: boolean
  breadcrumbs: string[]
}

const FAQBreadcrumb = ({
  isShowBreadcrumb = false,
  breadcrumbs = [],
}: IFAQBreadcrumbProps): React.ReactElement => {
  return (
    <nav
      className={clsx({
        [styles['breadcrumb-container']]: true,
        'd-none': !isShowBreadcrumb,
      })}
      aria-label='breadcrumb'
    >
      <ol className='breadcrumb'>
        <li className='breadcrumb-item'>
          <Link href={PATH_CONFIG.faq}>
            <a className='breadcrumb-root subtitle1'>All Collections</a>
          </Link>
        </li>

        {breadcrumbs.map((value, index) => (
          <li
            key={index}
            className='breadcrumb-child breadcrumb-item subtitle1'
          >
            <Link
              href={`${PATH_CONFIG.faq}/${breadcrumbs
                .slice(0, index + 1)
                .join('/')}`}
            >
              <a>{value}</a>
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  )
}

export default FAQBreadcrumb
