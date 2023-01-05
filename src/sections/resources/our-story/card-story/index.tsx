import React from 'react'

import Image from 'next/image'

import clsx from 'clsx'

import AnimatiopnOnScrollWrap from '@/components/AnimationOnScrollWrap'

import styles from './CardStory.module.scss'

interface IProps {
  srcIcon: string
  content: string
  width?: number
  height?: number
  animateClassName?: string
}

const CardStory = (props: IProps) => {
  const {
    srcIcon,
    content,
    width = 62,
    height = 44,
    animateClassName = '',
  } = props

  return (
    <AnimatiopnOnScrollWrap
      ratio={0}
      render={(ref, animate) => (
        <div
          className={clsx(animate && animateClassName, styles['card-story'])}
          ref={ref}
        >
          <div className='wrap-icon div-center'>
            <Image
              src={srcIcon}
              alt='icon'
              width={width}
              height={height}
              objectFit='contain'
            />
          </div>
          <div className='subtitle1'>{content}</div>
        </div>
      )}
    />
  )
}

export default CardStory
