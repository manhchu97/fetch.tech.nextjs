/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { createContext, useCallback, useEffect, useState } from 'react'
import reactStringReplace from 'react-string-replace'

import { DEFAULT_LOCALE, LOCALES } from '@/config/global'

import { TranslateContextType } from '@/types/translation'

export const TranslateContext = createContext<TranslateContextType | null>(null)

interface ITranslationProvider {
  children: React.ReactNode
  translations: Record<string, any>
}

const TranslationProvider = ({
  children,
  translations,
}: ITranslationProvider) => {
  const [currentLang, setCurrentLang] = useState<string>(DEFAULT_LOCALE)

  const handleChangeLanguage = useCallback((newLocale: string) => {
    const lang = newLocale || DEFAULT_LOCALE

    localStorage.setItem('LANGUAGE', lang)
    setCurrentLang(lang)
  }, [])

  const handleGetCurrentLanguage = useCallback(() => {
    try {
      const storageLang = localStorage.getItem('LANGUAGE')

      if (!storageLang) {
        setCurrentLang(DEFAULT_LOCALE)
        localStorage.setItem('LANGUAGE', DEFAULT_LOCALE)
        return
      }

      if (!LOCALES.includes(storageLang)) {
        localStorage.setItem('LANGUAGE', DEFAULT_LOCALE)
        return
      }

      setCurrentLang(storageLang)
    } catch (error) {
      setCurrentLang(DEFAULT_LOCALE)
    }
  }, [])

  // https://medium.com/geekculture/this-is-how-to-access-nested-objects-dynamically-in-javascript-a26c7cf52461
  const getValueFromKey = useCallback(
    (key: string): string => {
      return key
        .split('.')
        .reduce((o, i) => o?.[i], translations?.[currentLang] || {})
    },
    [translations, currentLang],
  )

  const translate = useCallback(
    (key: string, replacements?: Record<string, any>) => {
      let translated: React.ReactNode[] = [getValueFromKey(key)]

      Object.entries(replacements || {}).forEach(([key, value]) => {
        translated = reactStringReplace(translated, key, () => value)
      })

      return translated.join('')
    },
    [getValueFromKey],
  )

  useEffect(() => {
    handleGetCurrentLanguage()
  }, [handleGetCurrentLanguage])

  return (
    <TranslateContext.Provider
      value={{ translate, currentLang, setCurrentLang, handleChangeLanguage }}
    >
      {children}
    </TranslateContext.Provider>
  )
}

export default TranslationProvider
