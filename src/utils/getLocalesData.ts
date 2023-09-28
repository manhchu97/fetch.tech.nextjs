import { promises as fs } from 'fs'
import path from 'path'

import { LOCALES } from '@/config/global'

const readLocaleFromFiles = async (namespaces: string[], locale: string) => {
  const localesDirectory = path.join(process.cwd(), `src/locales/${locale}`)
  const fileNames = await fs.readdir(localesDirectory)

  return await Promise.all(
    fileNames
      .filter((fileName) => namespaces?.includes(path.parse(fileName).name))
      .map(async (fileName) => {
        const namespace = path.parse(fileName).name

        const filePath = path.join(localesDirectory, fileName)
        const fileContents = await fs.readFile(filePath, 'utf8')

        return {
          [namespace]: JSON.parse(fileContents),
        }
      }),
  )
}

export async function getDataFromLocales(namespaces: string[]) {
  return Promise.all(
    LOCALES.map(async (locale) => {
      return Promise.resolve({
        locale,
        data: await readLocaleFromFiles(namespaces, locale),
      })
    }),
  )
    .then((response) => {
      return Promise.resolve(
        response?.reduce((acc, curr) => {
          const { locale = '', data = [] } = curr || {}
          return {
            ...acc,
            [locale]: data?.reduce((subAcc, subCurr) => {
              return {
                ...subAcc,
                ...subCurr,
              }
            }, {}),
          }
        }, {}),
      )
    })
    .catch((error) => {
      console.error('error', error)
      return Promise.resolve({})
    })
}
