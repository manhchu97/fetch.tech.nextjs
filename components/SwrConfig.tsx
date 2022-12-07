/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactNode } from 'react'

import customFetcher from '@utils/fetcher'
import { Cache, SWRConfig } from 'swr'
import { Fetcher, PublicConfiguration } from 'swr/dist/types'

type Provider = { provider?: (cache: Readonly<Cache<any>>) => Cache<any> }

export function SWRConfigProvider({
  children,
  swrConfig,
}: {
  children?: ReactNode
  swrConfig?: Partial<PublicConfiguration<any, any, Fetcher<any>>> & Provider
}) {
  return (
    <SWRConfig value={{ fetcher: customFetcher, ...swrConfig }}>
      {children}
    </SWRConfig>
  )
}
