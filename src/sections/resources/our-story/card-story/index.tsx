import React, { useEffect, useRef, useState } from 'react'

import Image from 'next/image'

import clsx from 'clsx'

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

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ref = useRef() as any

  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const top = ref.current.getBoundingClientRect().top
      const bottom = ref.current.getBoundingClientRect().bottom
      const heightElement = bottom - top

      if (top + heightElement >= window.innerHeight) return

      setAnimate(true)
    }

    window.addEventListener('scroll', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
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
  )
}

export default CardStory
