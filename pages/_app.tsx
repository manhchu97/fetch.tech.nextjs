import type { AppProps } from 'next/app'
import Script from 'next/script'

import 'animate.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { GOOGLE_TAG_MANAGER_KEY } from '@/config/global'

import ToastProvider from '@/context/ToastContext'

import '@/styles/fonts.scss'
import '@/styles/globals.scss'
import '@/styles/modal.scss'
// overrides CSS
import '@/styles/overrides/typography.scss'
import '@/styles/toast.scss'

interface CustomPageProps {
  pageName: string
}

function MyApp({ Component, pageProps }: AppProps<CustomPageProps>) {
  const { pageName = '' } = pageProps

  return (
    <>
      <ToastProvider>
        <Component {...pageProps} />
      </ToastProvider>

      <Script
        strategy='afterInteractive'
        src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_TAG_MANAGER_KEY}`}
      />

      <Script
        src='/js/gtm.js'
        strategy='lazyOnload'
        onLoad={async () => {
          const { loadGtm } = await import('@/utils/gtm')
          loadGtm(GOOGLE_TAG_MANAGER_KEY)
        }}
      />

      <Script
        src='/js/firebase.js'
        strategy='lazyOnload'
        onLoad={async () => {
          console.log(process.env.NEXT_PUBLIC_NODE_ENV)
          if (process.env.NEXT_PUBLIC_NODE_ENV !== 'production') return

          const { loadFirebase } = await import('@/utils/firebase')
          loadFirebase(pageName)
        }}
      />
    </>
  )
}

export default MyApp
