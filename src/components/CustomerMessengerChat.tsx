/* eslint-disable @typescript-eslint/no-explicit-any */
import { memo, useCallback, useEffect } from 'react'

import { FACEBOOK_APP_ID, FACEBOOK_PAGE_ID } from '@/config/global'

declare global {
  interface Window {
    FB: any
    fbAsyncInit: any
  }
}

let promise: Promise<any>

// https://developers.facebook.com/docs/messenger-platform/discovery/customer-chat-plugin
const CustomerMessengerChat = (): null => {
  const addFBChatPlugin = useCallback(
    (FB: { XFBML: { parse: () => void } }) => {
      // Initialize Facebook widget(s) in 2 seconds after the component is mounted.
      setTimeout(() => {
        const el = document.createElement('div')
        el.className = 'fb-customerchat'
        el.setAttribute('attribution', 'setup_tool')
        el.setAttribute('page_id', FACEBOOK_PAGE_ID)

        document.body.appendChild(el)
        FB.XFBML.parse()
      }, 1000)
    },
    [],
  )

  useEffect(() => {
    if (promise) {
      promise.then(addFBChatPlugin)
      return
    }

    promise = new Promise((resolve) => {
      // https://developers.facebook.com/docs/javascript/reference/FB.init
      setTimeout(() => {
        window.fbAsyncInit = () => {
          window.FB.init({
            appId: FACEBOOK_APP_ID,
            autoLogAppEvents: true,
            status: true,
            cookie: true,
            xfbml: true,
            version: 'v10.0',
          })

          resolve(window.FB)
        }

        const script = document.createElement('script')
        script.src = `https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js`

        document.head.appendChild(script)
      }, 1000)
    })

    promise.then(addFBChatPlugin)
  }, [addFBChatPlugin])

  return null
}

export default memo(CustomerMessengerChat)
