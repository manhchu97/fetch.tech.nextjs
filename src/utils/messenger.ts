/* eslint-disable @typescript-eslint/no-explicit-any */
import waitForLoad from './waitForLoad'

declare global {
  interface Window {
    fbSDKDidInit: boolean
    fbPreconnectDidInit: boolean
    FB: any
    fbAsyncInit: any
  }
}

export const preconnectFBSDK = (): boolean => {
  if (window.fbPreconnectDidInit) return false

  // flag to ensure script does not get added to DOM more than once.
  window.fbPreconnectDidInit = true

  const link = document.createElement('link')
  link.id = 'facebook-linksdk'
  link.rel = 'preconnect'
  link.href = 'https://connect.facebook.net'
  document.head.appendChild(link)

  return true
}

export const loadFBSDK = (): boolean => {
  if (window.FB) return false
  ;(function loadFacebookSDK(d, s, id) {
    // fetch customerchat.js
    const fjs = d.getElementsByTagName(s)[0]
    if (d.getElementById(id)) {
      return
    }
    const js = d.createElement(s) as any
    js.id = id
    js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js'
    if (fjs) {
      fjs.parentNode?.insertBefore(js, fjs)
    } else {
      d.body.appendChild(js)
    }
  })(window.document, 'script', 'facebook-jssdk')

  return true
}

export const loadCustomerChat = ({
  appID,
  onReady = () => undefined,
}: {
  appID?: string
  onReady?: () => void
}): boolean => {
  if (window.fbSDKDidInit) return false

  // flag to ensure script does not get added to DOM more than once.
  window.fbSDKDidInit = true

  const loaded = loadFBSDK()

  if (loaded) {
    // https://developers.facebook.com/docs/javascript/reference/FB.init
    window.fbAsyncInit = () => {
      window.FB.init(
        Object.assign(
          {
            autoLogAppEvents: true,
            status: true,
            cookie: true,
            xfbml: true,
            version: 'v16.0',
          },
          appID ? { appId: appID } : {},
        ),
      )

      window.FB.Event.subscribe('customerchat.load', () => {
        // Allow messenger to complete loading before removing fake widget
        setTimeout(() => {
          onReady()
        }, 2000)
      })
    }
  }

  return loaded
}

export const openChat = (): void => {
  waitForLoad(
    () => !!window.FB?.CustomerChat?.show,
    // messenger is slow to show once it has loaded
    () => setTimeout(() => window.FB.CustomerChat.show(true), 2000),
  )
}
