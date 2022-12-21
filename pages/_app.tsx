import type { AppProps } from 'next/app'
import Script from 'next/script'

import { TrackingHeadScript } from '@phntms/next-gtm'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { SWRConfigProvider } from '@/components/SwrConfig'

import ToastProvider from '@/context/ToastContext'

import '@/styles/fonts.scss'
import '@/styles/globals.scss'
// overrides CSS
import '@/styles/overrides/typography.scss'
import '@/styles/toast.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        id='bootstrap-cdn'
        src='https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js'
      />
      <TrackingHeadScript id='GTM-WNH5KRZ' />

      <ToastProvider>
        <SWRConfigProvider>
          <Component {...pageProps} />
        </SWRConfigProvider>
      </ToastProvider>
    </>
  )
}

export default MyApp
