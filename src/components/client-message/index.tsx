import React from 'react'

import styles from './ClientMessage.module.scss'

interface IClientMessage {
  children?: React.ReactNode
}

const ClientMessage = ({ children }: IClientMessage): React.ReactElement => {
  return (
    <div className={styles['client-message-container']}>
      <div className='client-message-section-container'>
        <div className='h6 client-message-content'>
          {children ||
            `Thanks for your interest in hiring through Fetch! Before we get
            started, we’d like to ask a few questions to better understand your
            business needs.`}
        </div>
      </div>
    </div>
  )
}

export default ClientMessage
