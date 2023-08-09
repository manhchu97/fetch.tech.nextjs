import React, { useEffect, useRef, useState } from 'react'

interface Props {
  children: React.ReactNode
}

function LazyLoadComponent({ children }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const [isIntersecting, setIntersecting] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (
      typeof window !== 'undefined' &&
      'IntersectionObserver' in window &&
      'IntersectionObserverEntry' in window &&
      'intersectionRatio' in window.IntersectionObserverEntry.prototype
    ) {
      const currentEl = ref?.current
      if (!currentEl) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          setIntersecting(entry.isIntersecting)
        },
        { threshold: 0.5 },
      )

      observer.observe(currentEl)

      return () => {
        if (!currentEl) return
        observer.unobserve(currentEl)
      }
    } else {
      setIntersecting(true)
    }
  }, [])

  useEffect(() => {
    if (isVisible) return

    setIsVisible(isIntersecting)
  }, [isIntersecting, isVisible])

  return <div ref={ref}>{isVisible ? children : null}</div>
}

export default LazyLoadComponent
