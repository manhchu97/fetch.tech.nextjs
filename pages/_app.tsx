import { TrackingHeadScript } from '@phntms/next-gtm'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import type { AppProps } from 'next/app'
import Script from 'next/script'

import '@styles/fonts.scss'
import '@styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        id='bootstrap-cdn'
        src='https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js'
      />
      <TrackingHeadScript id='GTM-WNH5KRZ' />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
