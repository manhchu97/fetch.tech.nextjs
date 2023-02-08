import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

import { CSListData } from '@/types/resources'

import styles from './ListCaseStudies.module.scss'

interface IListCaseStudies {
  listCaseStudies: CSListData[]
}
const ListCaseStudiesSection = ({
  listCaseStudies = [],
}: IListCaseStudies): React.ReactElement => {
  return (
    <div className={styles['case-studies-container']}>
      <div className='container'>
        {listCaseStudies?.map(({ image, slug, title }: CSListData, index) => (
          <div className='div-center' key={index}>
            <div className='case-studie-item-container'>
              <Link href={slug}>
                <a>
                  <div className='img-container'>
                    <Image
                      alt={slug}
                      src={image}
                      layout='fill'
                      objectFit='contain'
                      priority
                    />
                  </div>
                </a>
              </Link>

              <div className='my-3 h4'>
                <Link href={slug}>{title}</Link>
              </div>

              <Link href={slug}>
                <a>
                  <button className='btn btn-outline-warning styled-button'>
                    Continue Reading
                  </button>
                </a>
              </Link>
            </div>
          </div>
        )) || null}
      </div>
    </div>
  )
}

export default ListCaseStudiesSection
