/* eslint-disable @typescript-eslint/no-explicit-any */
interface CustomWindow extends Window {
  gtag?: (type: string, eventName: string, options: any) => void
}

export const handleTrackingEvent = (eventName: string, options?: any): void => {
  const w: CustomWindow = window

  if (!w.gtag) return

  w.gtag('event', eventName, options)
}
