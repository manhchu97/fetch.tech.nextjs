import React from 'react'

import styles from './ClientLabel.module.scss'

interface IClientLabelProps {
  children: React.ReactNode
  action?: React.ReactElement
}

const ClientLabel = ({
  children,
  action,
}: IClientLabelProps): React.ReactElement => {
  return (
    <div className={styles['client-label-container']}>
      <div className='h4 client-label-title'>Let&apos;s get started!</div>

      <div className='client-label-message'>{children}</div>

      <hr className='hr' />

      {action}
    </div>
  )
}

export default ClientLabel
