import React, { useEffect } from 'react'

import Link from 'next/link'

import clsx from 'clsx'
import scrollToElement from 'scroll-to-element'

import { PATH_CONFIG } from '@/routes/paths'

import { CSTabHeaderProps, TabContentProps } from '@/types/resources'

import styles from './CaseStudies.module.scss'
import CustomerInfo from './CustomerInfo'
import ProjectInfo from './ProjectInfo'
import TeamInfo from './TeamInfo'

interface ISectionProps {
  slug: string
  tabHeaders: CSTabHeaderProps[]
  tabBodyConfig: TabContentProps | undefined
}

const CaseStudiesSection = ({
  slug = '',
  tabHeaders = [],
  tabBodyConfig,
}: ISectionProps): React.ReactElement => {
  const { customerInfo, teamInfo, projectInfo } = tabBodyConfig || {}

  useEffect(() => {
    if (!slug) return

    setTimeout(() => {
      scrollToElement(`#${slug}`, {
        offset: -50,
        ease: 'out-bounce',
        duration: 100,
      })
    }, 200)
  }, [slug])

  return (
    <div className={styles['case-studies-container']}>
      <div className='container' id={slug}>
        <div className='row div-center'>
          <div className='col-xl-10'>
            <div className='tab-nav-container'>
              {tabHeaders?.map(
                ({ type, title: tabTitle }: CSTabHeaderProps, index) => {
                  const isActive = slug === type

                  return (
                    <Link href={PATH_CONFIG.caseStudy.view(type)} key={index}>
                      <a
                        className={clsx({
                          'subtitle1 tab-title': true,
                          active: isActive,
                        })}
                      >
                        {tabTitle}
                      </a>
                    </Link>
                  )
                },
              )}
            </div>

            <div className='tab-content-container'>
              <CustomerInfo customerInfo={customerInfo} />

              <TeamInfo teamInfo={teamInfo} />

              <ProjectInfo projectInfo={projectInfo} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CaseStudiesSection
