import React from 'react'

import clsx from 'clsx'

import Modal from '@/components/modal/Modal'

import styles from './ConfirmDialog.module.scss'

interface ConfirmDialogProps {
  className?: string
  isOpen: boolean
  title: string
  actions: React.ReactNode
  onClose: () => void
}

const ConfirmDialog = ({
  className,
  isOpen = false,
  title = '',
  actions,
  onClose = () => {},
}: ConfirmDialogProps): React.ReactElement => {
  return (
    <Modal
      className={clsx(styles['confirm-dialog'], className)}
      isOpen={isOpen}
      footer={actions}
      onClose={onClose}
    >
      <div className='subtitle1'>{title}</div>
    </Modal>
  )
}

export default ConfirmDialog
