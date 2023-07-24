import Script from 'next/script'

const FetchuntGoogleTagManager = ({ gtmId }: { gtmId: string }) => {
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

export default FetchuntGoogleTagManager
