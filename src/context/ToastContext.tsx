import React, { createContext, useCallback, useMemo, useState } from 'react'

import clsx from 'clsx'

type ToastContextType = {
  successToast: (msg: string, autoClose?: number) => void
  errorToast: (msg: string, autoClose?: number) => void
}

const ToastContext = createContext<ToastContextType | null>(null)

interface IToastProvider {
  children: React.ReactNode
}

let timeoutId: ReturnType<typeof setTimeout>

const ToastProvider = ({ children }: IToastProvider) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [toastMsg, setToastMsg] = useState<string>('')
  const [toastType, setToastType] = useState<string>('success')

  const handleClose = useCallback(() => {
    setIsOpen(false)
    setToastMsg('')
    setToastType('')
  }, [])

  const handleAutoCloseToast = useCallback(
    (autoClose = 0) => {
      if (timeoutId) clearTimeout(timeoutId)

      timeoutId = setTimeout(() => {
        handleClose()
      }, autoClose)
    },
    [handleClose],
  )

  const showToast = useCallback(
    (msg = '', autoClose = 0) => {
      setToastMsg(msg)
      setIsOpen(true)
      handleAutoCloseToast(autoClose)
    },
    [handleAutoCloseToast],
  )

  const successToast = useCallback(
    (msg = '', autoClose = 3000): void => {
      setToastType('success')
      showToast(msg, autoClose)
    },
    [showToast],
  )

  const errorToast = useCallback(
    (msg = '', autoClose = 5000): void => {
      setToastType('error')
      showToast(msg, autoClose)
    },
    [showToast],
  )

  const toastCtx = useMemo(
    () => ({ successToast, errorToast }),
    [successToast, errorToast],
  )

  return (
    <ToastContext.Provider value={toastCtx}>
      {children}

      {isOpen && (
        <div className='cus-toast-container'>
          <div
            className={clsx({
              'cus-toast': true,
              'toast-error': toastType === 'error',
              'toast-success': toastType === 'success',
            })}
          >
            <div className='cus-toast-content'>
              <i
                className={`bi ${
                  toastType === 'success'
                    ? 'bi-check-circle-fill'
                    : 'bi-x-circle-fill'
                }`}
              />

              <span className='cus-toast-msg'>{toastMsg}</span>
            </div>

            <i className='bi bi-x-lg' onClick={handleClose} />
          </div>
        </div>
      )}
    </ToastContext.Provider>
  )
}

export default ToastProvider

export const useToastContext = (): ToastContextType => {
  const toast = React.useContext(ToastContext)

  if (!toast) throw Error('ToastProvider not found')

  return toast
}
