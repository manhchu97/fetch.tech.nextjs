/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useRef } from 'react'

import clsx from 'clsx'

import styles from './Modal.module.scss'

interface ModalProps {
  className?: string
  children?: React.ReactNode
  header?: React.ReactNode
  footer?: React.ReactNode
  isOpen: boolean
  onClose: () => void
}

const Modal = ({
  className = '',
  children,
  header,
  footer,
  isOpen = false,
  onClose,
}: ModalProps): React.ReactElement => {
  const modalRef = useRef<any>(null)

  useEffect(() => {
    const element = modalRef.current

    if (!element) return

    const handleClickOutsideModal = (event: {
      target: { closest: (arg0: string) => any }
    }) => {
      const self = event.target.closest('.ft-modal-content')

      if (self) return

      onClose()
    }

    element.addEventListener('click', handleClickOutsideModal)

    return () => {
      element.removeEventListener('click', handleClickOutsideModal)
    }
  }, [modalRef, onClose])

  useEffect(() => {
    document.body.classList.toggle('modal-open', isOpen)

    return () => {
      document.body.classList.remove('modal-open')
    }
  }, [isOpen])

  return (
    <>
      {isOpen && (
        <div className={styles['ft-modal-container']}>
          <div>
            <div
              role='dialog'
              className={clsx('ft-modal', className)}
              ref={modalRef}
            >
              <div className='ft-modal-dialog'>
                <div className='ft-modal-content'>
                  <div className='ft-modal-header'>{header}</div>

                  <div className='ft-modal-body'>{children}</div>

                  <div className='ft-modal-footer'>{footer}</div>
                </div>
              </div>
            </div>

            <div className='ft-backdrop'></div>
          </div>
        </div>
      )}
    </>
  )
}

export default Modal
