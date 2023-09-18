import { useContext } from 'react'

import { TranslateContext } from '@/context/TranslateContext'

import { TranslateContextType } from '@/types/translation'

const useTranslation = (): TranslateContextType => {
  const translate = useContext(TranslateContext)

  if (!translate) throw Error('TranslationProvider not found')

  return translate
}

export default useTranslation
