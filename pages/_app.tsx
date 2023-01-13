import type { AppProps } from 'next/app'
import Script from 'next/script'

import { TrackingHeadScript } from '@phntms/next-gtm'
import 'animate.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { GOOGLE_TAG_MANAGER_KEY } from '@/config/global'

import { SWRConfigProvider } from '@/components/SwrConfig'

import ToastProvider from '@/context/ToastContext'

import '@/styles/fonts.scss'
import '@/styles/globals.scss'
import '@/styles/modal.scss'
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
      <TrackingHeadScript id={GOOGLE_TAG_MANAGER_KEY} />

      <ToastProvider>
        <SWRConfigProvider>
          <Component {...pageProps} />
        </SWRConfigProvider>
      </ToastProvider>
    </>
  )
}

export default MyApp
