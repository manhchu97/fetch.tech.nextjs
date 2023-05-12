/* eslint-disable @typescript-eslint/no-explicit-any */
interface CustomWindow extends Window {
  dataLayer?: any[]
}

export const loadGtm = (gtmId: string) => {
  function gtag(...args: any[]) {
    const w = window as CustomWindow
    w.dataLayer = w.dataLayer || []
    w.dataLayer.push(args)
  }

  gtag('js', new Date())
  gtag('config', gtmId, {
    page_path: window.location.pathname,
  })
}
