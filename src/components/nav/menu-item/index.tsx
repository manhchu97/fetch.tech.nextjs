import React, { useCallback, useEffect, useRef, useState } from 'react'

import Image from 'next/image'

import clsx from 'clsx'
import ldDebounce from 'lodash.debounce'

interface MenuItemProps {
  title: string
  id?: string
  hasIcon?: boolean
  dropdownMenu?: React.ReactElement
}

const MenuItem = (props: MenuItemProps): React.ReactElement => {
  const menuItemRef = useRef<HTMLDivElement>(null)
  const { id = '', title = '', hasIcon = false, dropdownMenu } = props
  const [isMobileScreen, setIsMobileScreen] = useState(false)
  const [showDropdownMenu, setShowDropdownMenu] = useState(false)

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
      setIsMobileScreen(width < 992)
    }, 100)

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => {
      unmounted = true
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLDivElement

      if (menuItemRef?.current?.contains(target)) return

      setShowDropdownMenu(false)
    }

    document.addEventListener('click', handleClickOutside)

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [menuItemRef])

  useEffect(() => {
    setShowDropdownMenu(false)
  }, [isMobileScreen])

  const onClickMenuItem = useCallback(() => {
    if (!hasIcon || isMobileScreen) return

    setShowDropdownMenu((prev) => !prev)
  }, [hasIcon, isMobileScreen])

  return (
    <>
      <div
        role='button'
        id={id}
        className={clsx('menu-item-container', showDropdownMenu && 'show')}
        onClick={onClickMenuItem}
        ref={menuItemRef}
      >
        {title}
        {hasIcon && (
          <div className='menu-icon-container'>
            <Image
              className='menu-icon'
              src='/images/nav/Vector_15.png'
              alt='arrow'
              width={10}
              height={5}
            />
          </div>
        )}
      </div>

      <div
        className={clsx('dropdown-menu-container', showDropdownMenu && 'show')}
      >
        {dropdownMenu}
      </div>
    </>
  )
}

export default MenuItem
