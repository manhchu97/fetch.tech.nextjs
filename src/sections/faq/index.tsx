import React, { useEffect, useMemo, useState } from 'react'

import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'

import { COMPONENT_TYPE, LIST_SUB_TOPIC, LIST_TOPIC } from '@/config/faq'

import FAQSearch from '@/sections/faq/search'
import FAQTopic from '@/sections/faq/topic'

import styles from './FAQ.module.scss'

const FAQArticle = dynamic(() => import('@/sections/faq/article'))
const FAQBreadcrumb = dynamic(() => import('@/sections/faq/breadcrumb'))

const FAQ = () => {
  const router = useRouter()
  const { rest } = router?.query || {}
  const [sectionType, setSectionType] = useState<string>(COMPONENT_TYPE.GENERAL)

  useEffect(() => {
    if (!Array.isArray(rest)) {
      setSectionType(COMPONENT_TYPE.GENERAL)
      return
    }

    if (rest.length === 1) {
      setSectionType(COMPONENT_TYPE.DETAIL)
      return
    }

    setSectionType(COMPONENT_TYPE.ARTICLE)
  }, [rest])

  const contentType = useMemo(() => {
    if (sectionType === COMPONENT_TYPE.GENERAL)
      return (
        <>
          {LIST_TOPIC.map((data, index) => (
            <FAQTopic key={index} index={index} data={data} />
          ))}
        </>
      )

    if (sectionType === COMPONENT_TYPE.DETAIL)
      return (
        <>
          {LIST_SUB_TOPIC.map((data, index) => (
            <FAQTopic key={index} index={index} data={data} />
          ))}
        </>
      )

    return <FAQArticle />
  }, [sectionType])

  const breadcrumb = useMemo(() => {
    if (
      sectionType === COMPONENT_TYPE.GENERAL ||
      !Array.isArray(rest) ||
      !rest.length
    )
      return null

    return <FAQBreadcrumb isShowBreadcrumb breadcrumbs={rest} />
  }, [sectionType, rest])

  return (
    <div className={styles['faq-container']}>
      <div className='faq-section'>
        <FAQSearch />

        <section className='faq-topic'>
          <div className='ft-container'>
            <div className='row justify-content-center'>
              <div className='col-xs-12 col-sm-12 col-lg-10 '>
                {breadcrumb}

                {contentType}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default FAQ
