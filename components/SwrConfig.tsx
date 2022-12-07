/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactNode } from 'react'

import { AxiosRequestConfig, AxiosResponse } from 'axios'
import { Cache, SWRConfig } from 'swr'
import { Fetcher, PublicConfiguration } from 'swr/dist/types'
import { _getApi } from 'utils/portalAxios'

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

export function customFetcher(
  url: string,
  options?: AxiosRequestConfig,
): Promise<AxiosResponse<any>> {
  return _getApi(url, options)
}
