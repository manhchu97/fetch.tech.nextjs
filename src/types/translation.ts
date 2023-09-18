export interface TranslateContextType {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  translate: (key: string, replacements?: Record<string, any>) => string
  currentLang: string
  setCurrentLang: React.Dispatch<React.SetStateAction<string>>
  handleChangeLanguage: (newLocale: string) => void
}
