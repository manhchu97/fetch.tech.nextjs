import React, { createContext, useMemo, useState } from 'react'

type FormStepContextType = {
  step: number
  setStep: React.Dispatch<React.SetStateAction<number>>
}

const FormStepContext = createContext<FormStepContextType | null>(null)

interface IFormStepProvider {
  children: React.ReactNode
}

const FormStepProvider = ({ children }: IFormStepProvider) => {
  const [step, setStep] = useState<number>(0)

  const ctx = useMemo(() => ({ step, setStep }), [step, setStep])

  return (
    <FormStepContext.Provider value={ctx}>{children}</FormStepContext.Provider>
  )
}

export default FormStepProvider

export const useFormStepContext = () => {
  const formStep = React.useContext(FormStepContext)

  if (!formStep) throw Error('FormStepProvider not found')

  return formStep
}
