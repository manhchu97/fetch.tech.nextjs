import React, { createContext, useCallback, useMemo } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

type ToastContextType = {
  successToast: (message: string) => string | number
  errorToast: (message: string) => string | number
}

const ToastContext = createContext<ToastContextType | null>(null)

interface IToastProvider {
  children: React.ReactNode
}

const ToastProvider = ({ children }: IToastProvider) => {
  const successToast = useCallback(
    (message: string): string | number =>
      toast.success(message, {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        className: 'override__toast-success',
      }),
    [],
  )

  const errorToast = useCallback(
    (message: string): string | number =>
      toast.error(message, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }),
    [],
  )

  const toastCtx = useMemo(
    () => ({ successToast, errorToast }),
    [successToast, errorToast],
  )

  return (
    <ToastContext.Provider value={toastCtx}>
      {children}
      <ToastContainer />
    </ToastContext.Provider>
  )
}

export default ToastProvider

export const useToastContext = (): ToastContextType => {
  const toast = React.useContext(ToastContext)

  if (!toast) throw Error('ToastProvider not found')

  return toast
}
