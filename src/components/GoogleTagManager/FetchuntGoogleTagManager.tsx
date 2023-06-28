import { useEffect } from 'react'

const FetchuntGoogleTagManager = () => {
  useEffect(() => {
    if (process.env.NEXT_PUBLIC_NODE_ENV !== 'production') return

    let timer: ReturnType<typeof setTimeout> = setTimeout(() => {})
    let cleanupFn: () => void

    const loadGTMScript = async () => {
      const {
        initGTMScriptWithDelay,
        initGTMEventListener,
        removeGTMEventListener,
      } = await import('@/utils/gtm')

      timer = initGTMScriptWithDelay()
      cleanupFn = removeGTMEventListener
      initGTMEventListener()
    }

    loadGTMScript()

    return () => {
      clearTimeout(timer)
      cleanupFn?.()
    }
  }, [])

  return null
}

export default FetchuntGoogleTagManager
