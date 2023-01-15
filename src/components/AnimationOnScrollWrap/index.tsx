/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useRef, useState } from 'react'

interface Props {
  render: (ref: any, animate: boolean) => React.ReactElement
  ratio?: number
}

const AnimatiopnOnScrollWrap = ({ render, ratio = 0.25 }: Props) => {
  const containerRef = useRef<any>(null)
  const [animate, setAnimate] = useState<boolean>(false)

  useEffect(() => {
    const onScroll = () => {
      const element = containerRef.current

      if (!element) return

      const { top, bottom } = element.getBoundingClientRect()
      const heightElement = bottom - top

      if (top + ratio * heightElement < window.innerHeight) {
        setAnimate(true)
      }
    }

    window.addEventListener('scroll', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [ratio])

  return <>{render(containerRef, animate)}</>
}

export default AnimatiopnOnScrollWrap
