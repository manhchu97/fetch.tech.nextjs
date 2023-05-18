import React, { memo, useCallback, useEffect, useState } from 'react'

import Image from 'next/image'

import clsx from 'clsx'

import styles from './Messenger.module.scss'

declare global {
  interface Window {
    isClickedChatIcon: boolean
  }
}

// eslint-disable-next-line react/display-name
const CustomerChat = memo(
  ({ color, fbPageId }: { color: string; fbPageId: string }) => {
    const fields = {
      page_id: fbPageId,
      theme_color: color,
      greeting_dialog_display: 'hide',
    }

    return (
      <div>
        <div id='fb-root'></div>
        <div className='fb-customerchat' {...fields}></div>
      </div>
    )
  },
)

const Widget = ({
  color = '#0A7CFF',
  containerClass = '',
  fbAppId,
}: {
  color?: string
  containerClass?: string
  fbAppId?: string
}): React.ReactElement | null => {
  const [isLoadCompleteChat, setIsLoadCompleteChat] = useState<boolean>(false)

  const onReady = useCallback(() => {
    setIsLoadCompleteChat(true)
  }, [])

  const onMouseEnter = useCallback(async () => {
    const { preconnectFBSDK } = await import('@/utils/messenger')

    preconnectFBSDK()
  }, [])

  const handleClick = useCallback(async () => {
    if (window.isClickedChatIcon) return

    // flag to ensure click does not handle more than once.
    window.isClickedChatIcon = true

    const { loadCustomerChat, openChat } = await import('@/utils/messenger')

    loadCustomerChat({ onReady, appID: fbAppId })
    openChat()
  }, [fbAppId, onReady])

  useEffect(() => {
    return () => {
      const jsSDK = document.getElementById('facebook-jssdk')
      const stylesheet = document.getElementById('facebook-linksdk')

      jsSDK?.remove()
      stylesheet?.parentNode?.removeChild(stylesheet)

      window.FB = null
      window.fbPreconnectDidInit = false
      window.fbSDKDidInit = false
      window.isClickedChatIcon = false
    }
  }, [])

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> = setTimeout(() => {})

    const loadChat = async () => {
      const { loadCustomerChat } = await import('@/utils/messenger')
      loadCustomerChat({ onReady, appID: fbAppId })
    }

    timer = setTimeout(() => {
      loadChat()
    }, 3500)

    return () => clearTimeout(timer)
  }, [fbAppId, onReady])

  if (isLoadCompleteChat) return null

  return (
    <div
      className={clsx(styles['messenger-container'], containerClass)}
      role='button'
      aria-label='Load Messenger Chat'
      aria-busy='true'
      aria-live='polite'
      onClick={handleClick}
      onMouseEnter={onMouseEnter}
    >
      <div
        style={{
          width: '60px',
          height: '60px',
          backgroundColor: color ? color : '#0A7CFF',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '60px',
        }}
      >
        <Image
          alt='messenger'
          src='/images/Messenger.svg'
          width={36}
          height={36}
          priority
        />
      </div>
    </div>
  )
}

interface MessengerProps {
  color?: string
  containerClass?: string
  fbAppId?: string
  fbPageId: string
}

const Messenger = ({
  fbAppId,
  fbPageId,
  color = '#0A7CFF',
  containerClass = '',
}: MessengerProps): React.ReactElement => {
  return (
    <>
      <CustomerChat color={color} fbPageId={fbPageId} />
      <Widget fbAppId={fbAppId} color={color} containerClass={containerClass} />
    </>
  )
}

export default memo(Messenger)
