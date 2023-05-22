import React from 'react'

import Script from 'next/script'

import { SCREEN } from '@/config/global'

const GoogleTagManagerScript = ({
  gtmId,
  pageName,
}: {
  gtmId: string
  pageName: string
}) => {
  if (
    [
      SCREEN.FETCHUNT_PAGE,
      SCREEN.PRIVACY_POLICY_PAGE,
      SCREEN.SERVICE_AGREEMENT_PAGE,
    ].includes(pageName)
  )
    return null

  return <GoogleTagManager gtmId={gtmId} />
}

const GoogleTagManager = ({ gtmId }: { gtmId: string }) => {
  return (
    <>
      <Script
        strategy='afterInteractive'
        src={`https://www.googletagmanager.com/gtag/js?id=${gtmId}`}
      />

      <Script
        id='gtm-script'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
                window.dataLayer = window.dataLayer || [];
                window['ga-disable-${gtmId}'] = 'false';

                function gtag() { dataLayer.push(arguments); }
                gtag('js', new Date());
                gtag('config', '${gtmId}', { page_path: window.location.pathname });
              `,
        }}
      />
    </>
  )
}

export default GoogleTagManagerScript
