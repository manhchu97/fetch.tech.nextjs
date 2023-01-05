import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'

import dynamic from 'next/dynamic'

import { yupResolver } from '@hookform/resolvers/yup'
import clsx from 'clsx'
import * as Yup from 'yup'

import ClientAction from '@/components/client-action'

import { useFormStepContext } from '@/context/FormStepContext'

import styles from './AboutClient.module.scss'

const Editor = dynamic(() => import('@/components/editor'), { ssr: false })

type EditorSubmitForm = {
  content: string
}

const defaultValues: EditorSubmitForm = {
  content: '',
}

const AboutClientStep = (): React.ReactElement => {
  const [isEditorContentEmpty, setIsEditorContentEmpty] =
    useState<boolean>(false)
  const { handleNextStep } = useFormStepContext()

  const EditorShema = Yup.object().shape({
    content: Yup.string().required('Content is required'),
  })

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<EditorSubmitForm>({
    defaultValues,
    resolver: yupResolver(EditorShema),
  })

  const onSubmit = (data: EditorSubmitForm) => {
    setIsEditorContentEmpty(
      data.content.replace(/<(.|\n)*?>/g, '').trim().length === 0,
    )

    handleNextStep()
  }

  return (
    <div className={clsx('ft-full-screen', styles['about-client-container'])}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='about-client-form-container'
      >
          <div className='about-client-title h5'>
            Can you describe a little bit about your company and the project you
            need to hire by Fetch?
          </div>    

        <div
          className={clsx(
            { 'editor-section': true },
            {
              'is-invalid': errors?.content || isEditorContentEmpty,
            },
          )}
        >
          <Controller
            name='content'
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Editor
                value={field.value}
                onChange={field.onChange}
                style={{ minHeight: 400 }}
              />
            )}
          />
        </div>

        <div
          className={
            errors?.content || isEditorContentEmpty
              ? 'invalid-content'
              : 'valid-content'
          }
        >
          {errors.content?.message || 'Content is required'}
        </div>

        <ClientAction />
      </form>
    </div>
  )
}

export default AboutClientStep
