import ToastProvider from '@context/ToastContext'
import { TrackingHeadScript } from '@phntms/next-gtm'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import type { AppProps } from 'next/app'
import Script from 'next/script'

import { SWRConfigProvider } from '@components/SwrConfig'

import '@styles/fonts.scss'
import '@styles/globals.scss'
import '@styles/toast.scss'

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
