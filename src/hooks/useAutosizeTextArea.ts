import { useEffect } from 'react'

const useAutosizeTextArea = (textAreaRef: HTMLTextAreaElement | null) => {
  useEffect(() => {
    if (!textAreaRef) return

    const { scrollHeight } = textAreaRef

    textAreaRef.style.height = '0px'
    textAreaRef.style.height = scrollHeight + 'px'
  }, [textAreaRef])
}

export default useAutosizeTextArea
