import type { AppProps } from 'next/app'
import Head from 'next/head'
import Script from 'next/script'

import 'animate.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { GOOGLE_TAG_MANAGER_KEY } from '@/config/global'

import FirebaseComp from '@/components/Firebase'
import GoogleTagManager from '@/components/GoogleTagManager'

import ToastProvider from '@/context/ToastContext'
import TranslationProvider from '@/context/TranslateContext'

import '@/styles/fonts.scss'
import '@/styles/globals.scss'
import '@/styles/modal.scss'
// overrides CSS
import '@/styles/overrides/typography.scss'
import '@/styles/toast.scss'

interface CustomPageProps {
  pageName?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  translations: Record<string, any>
}

const MyApp = ({ Component, pageProps }: AppProps<CustomPageProps>) => {
  const { pageName = '' } = pageProps

  return (
    <>
      <Script
        id='bootstrap-cdn'
        src='https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js'
      />

      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>

      <ToastProvider>
        <TranslationProvider translations={pageProps?.translations}>
          <Component {...pageProps} />

          <GoogleTagManager
            gtmId={GOOGLE_TAG_MANAGER_KEY}
            pageName={pageName}
          />
          <FirebaseComp pageName={pageName} />
        </TranslationProvider>
      </ToastProvider>
    </>
  )
}

export default MyApp
