import { useEffect } from 'react'

const CommonFirebase = () => {
  useEffect(() => {
    let unmounted = false
    if (process.env.NEXT_PUBLIC_NODE_ENV !== 'production') return

    const loadFirebaseScript = async () => {
      const { initializeCommonFirebase } = await import('@/utils/firebase')
      if (unmounted) return

      initializeCommonFirebase()
    }

    loadFirebaseScript()

    return () => {
      unmounted = true
    }
  }, [])

  return null
}

export default CommonFirebase
