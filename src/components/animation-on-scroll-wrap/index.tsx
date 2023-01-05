import React from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll'

const durationMap = {
  slow: 2,
  slower: 3,
  fast: 0.8,
  faster: 0.7,
  normal: 1,
} as const

export type animateDuration = keyof typeof durationMap
interface Props {
  children: React.ReactNode
  animateClass: string
  speed?: animateDuration
  className?: string
}

const AnimatiopnOnScrollWrap = ({
  children,
  animateClass,
  speed = 'normal',
  className,
}: Props) => {
  return (
    <AnimationOnScroll
      animateOnce
      initiallyVisible
      animateIn={animateClass}
      duration={durationMap[speed]}
      className={className}
    >
      {children}
    </AnimationOnScroll>
  )
}

export default AnimatiopnOnScrollWrap
