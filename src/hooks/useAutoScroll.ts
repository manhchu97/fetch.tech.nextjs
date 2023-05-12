import React from 'react'

import ldDebounce from 'lodash.debounce'

interface ScrollOptions {
  top?: undefined | number
  left?: undefined | number
  behavior?: 'auto' | 'smooth'
}

const useAutoScroll = () => {
  const scrollElRef = React.useRef<null | HTMLElement>(null)
  const scrollEl = scrollElRef.current
  const isAutoScrollingRef = React.useRef(false)

  const isAutoScrolling = React.useCallback(
    () => isAutoScrollingRef.current,
    [],
  )
  const autoScrollEnd = React.useMemo(
    () => ldDebounce(() => (isAutoScrollingRef.current = false), 100),
    [],
  )
  const autoScroll = React.useCallback(
    (options: ScrollOptions) => {
      isAutoScrollingRef.current = true
      scrollElRef?.current?.scroll(options)
      autoScrollEnd()
    },
    [autoScrollEnd],
  )

  React.useEffect(() => {
    if (!scrollEl) return

    const el = scrollEl === document.documentElement ? window : scrollEl
    el.addEventListener('scroll', autoScrollEnd)

    return () => el.removeEventListener('scroll', autoScrollEnd)
  }, [scrollEl, autoScrollEnd])

  return {
    isAutoScrolling,
    autoScroll,
    scrollElRef,
  }
}

export default useAutoScroll
