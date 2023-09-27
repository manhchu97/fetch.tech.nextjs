import { useCallback, useEffect, useRef, useState } from 'react'

import Image from 'next/image'

import clsx from 'clsx'

import { ALL_LANGUAGES } from '@/config/global'

import useTranslation from '@/hooks/useTranslation'

import styles from './LanguageSwitcher.module.scss'

const LanguageSwitcher = (): React.ReactElement => {
  const languageRef = useRef<HTMLDivElement>(null)
  const {
    currentLang = 'en',
    handleChangeLanguage,
    translate,
  } = useTranslation()
  const [showDropdownMenu, setShowDropdownMenu] = useState(false)
  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLDivElement

      if (languageRef?.current?.contains(target)) return

      setShowDropdownMenu(false)
    }

    document.addEventListener('click', handleClickOutside)

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [languageRef])

  const onClickDropdownMenuItem = useCallback(() => {
    setShowDropdownMenu((prev) => !prev)
  }, [])

  return (
    <div className={styles['switch-language']}>
      <div
        className='switch-language__img-container'
        ref={languageRef}
        onClick={onClickDropdownMenuItem}
      >
        <Image
          src={`/images/nav/icon_${currentLang}.svg`}
          alt='language icon'
          layout='fill'
          objectFit='contain'
          priority
        />
      </div>

      <div className='switch-language__text-container'>
        {translate('common.change_language')}
      </div>

      <div
        className={clsx(
          'switch-language__drop-down',
          showDropdownMenu && 'show',
        )}
      >
        <ul className='switch-language__drop-down-menu'>
          {ALL_LANGUAGES.map(({ value, label: language = '', icon = '' }) => (
            <li
              key={value}
              className={clsx({
                'switch-language__drop-down-menu-item': true,
                'dropdown-menu-item-selected': value === currentLang,
              })}
              onClick={() => handleChangeLanguage(value)}
            >
              <div className='position-relative drop-down-img-container'>
                <Image
                  src={icon}
                  alt='language icon'
                  layout='fill'
                  objectFit='contain'
                />
              </div>
              {language}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default LanguageSwitcher
