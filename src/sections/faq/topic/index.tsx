import React, { useMemo } from 'react'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import clsx from 'clsx'

import AnimatiopnOnScrollWrap from '@/components/AnimationOnScrollWrap'

import { PATH_CONFIG } from '@/routes/paths'

import { IListTopic } from '@/types/faq'

import styles from './FAQTopic.module.scss'

interface IFAQTopicProps {
  data: IListTopic
  index: number
}

const FAQTopic = ({ data, index }: IFAQTopicProps): React.ReactElement => {
  const router = useRouter()
  const { rest = [] } = router?.query || {}
  const { title = '', desc = '', hiddenAction = false } = data || {}

  const redirectLink = useMemo(() => {
    if (!Array.isArray(rest) || !rest.length)
      return `${PATH_CONFIG.faq}/${title}`

    return `${PATH_CONFIG.faq}/${rest.join('/')}/${title}`
  }, [rest, title])

  return (
    <AnimatiopnOnScrollWrap
      render={(ref, animate) => (
        <div
          ref={ref}
          className={clsx({
            [styles['topic-container']]: true,
            animate__animated: animate,
            animate__slideInLeft: index % 2 === 0 ? animate : '',
            animate__slideInRight: index % 2 !== 0 ? animate : '',
          })}
        >
          <div className='row topic-section'>
            <div className='col-12 mb-4 col-sm-3 col-md-3 div-center'>
              <div className='icon-wrap'>
                <Image
                  src='/images/faq/Help.png'
                  layout='fill'
                  objectFit='contain'
                  objectPosition='center'
                  alt='help'
                />
              </div>
            </div>

            <div className='col-12 mb-4 col-sm-9 col-md-6'>
              <div className='content-wrap'>
                <Link href={redirectLink}>
                  <a>
                    <div className='h6-bold'>{title}</div>
                  </a>
                </Link>

                <div className='par'>{desc}</div>
              </div>
            </div>

            {!hiddenAction && (
              <div className='col-12 com-sm-12 col-md-3'>
                <div className='btn-wrap'>
                  <Link href={redirectLink}>
                    <a>
                      <button>
                        <div className='par'>65 Articles</div>

                        <Image
                          src='/images/arrowLeft.svg'
                          width={10}
                          height={16}
                          alt='help'
                        />
                      </button>
                    </a>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    />
  )
}

export default FAQTopic
