import { useEffect } from 'react'

const useAutosizeTextArea = (textAreaRef: HTMLTextAreaElement | null) => {
  useEffect(() => {
    if (!textAreaRef) return
    textAreaRef.style.height = '0px'
    const scrollHeight = textAreaRef.scrollHeight

    textAreaRef.style.height = scrollHeight + 'px'
  }, [textAreaRef])
}

export default useAutosizeTextArea
