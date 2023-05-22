import { useEffect } from 'react'

const FetchuntFirebase = () => {
  useEffect(() => {
    if (process.env.NEXT_PUBLIC_NODE_ENV !== 'production') return

    let timer: ReturnType<typeof setTimeout> = setTimeout(() => {})
    let cleanupFn: () => void

    const loadFirebaseScript = async () => {
      const {
        initFirebaseScriptWithDelay,
        initFirebaseEventListener,
        removeFirebaseEventListener,
      } = await import('@/utils/firebase')

      timer = initFirebaseScriptWithDelay()
      cleanupFn = removeFirebaseEventListener
      initFirebaseEventListener()
    }

    loadFirebaseScript()

    return () => {
      clearTimeout(timer)
      cleanupFn?.()
    }
  }, [])

  return null
}

export default FetchuntFirebase
