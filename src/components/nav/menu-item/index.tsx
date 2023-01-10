import React, { useEffect, useMemo, useState } from 'react'

import Image from 'next/image'

import ldDebounce from 'lodash.debounce'

interface MenuItemProps {
  title: string
  id?: string
  target?: string
  hasIcon?: boolean
}

const MenuItem = (props: MenuItemProps): React.ReactElement => {
  const { id = '', title = '', target = '', hasIcon = false } = props
  const [isMobileScreen, setIsMobileScreen] = useState(false)

  useEffect(() => {
    let unmounted = false

    const handleResize = ldDebounce(() => {
      // https://stackoverflow.com/a/8876069
      const width = Math.max(
        document.documentElement.clientWidth,
        window.innerWidth || 0,
      )

      if (unmounted) return

      // md screen
      setIsMobileScreen(width < 768)
    }, 100)

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => {
      unmounted = true
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const toggleValue = useMemo(
    () => (!isMobileScreen && hasIcon ? 'dropdown' : ''),
    [hasIcon, isMobileScreen],
  )

  return (
    <div
      role='button'
      id={id}
      className='menu-item-container'
      data-bs-toggle={toggleValue}
      data-bs-target={`#${target}`}
      aria-expanded='false'
    >
      {title}
      {hasIcon && (
        <div className='menu-icon-container'>
          <Image
            className='menu-icon'
            src='/images/Vector_15.png'
            alt='arrow'
            width={10}
            height={5}
          />
        </div>
      )}
    </div>
  )
}

export default MenuItem
