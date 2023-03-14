import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import Select from 'react-select'

import { yupResolver } from '@hookform/resolvers/yup'
import clsx from 'clsx'
import * as Yup from 'yup'

import { useToastContext } from '@/context/ToastContext'

import { API_SUBCRIBER_BY_EMAIL } from '@/routes/api'

import { _postApi } from '@/utils/axios'

import styles from './Contact.module.scss'

type ContactSubmitForm = {
  purpose: string
  name: string
  company: string
  email: string
  agree: boolean
}

interface IPurpose {
  value: string
  label: string
}

const purposeArr: IPurpose[] = [
  {
    value: 'I want to build my own in-house tech team using Fetch',
    label: 'I want to build my own in-house tech team using Fetch',
  },
  {
    value:
      'I am looking for short term tech assistance and consultancy with Fetch',
    label:
      'I am looking for short term tech assistance and consultancy with Fetch',
  },
  {
    value:
      'I need help with recruitment and talent acquisition of excellent software engineering and design talents',
    label:
      'I need help with recruitment and talent acquisition of excellent software engineering and design talents',
  },
  {
    value:
      'I am looking for fully remote tech, design and management resources.',
    label:
      'I am looking for fully remote tech, design and management resources.',
  },
  {
    value:
      'I am looking for help in payroll and compliances for my overseas employees',
    label:
      'I am looking for help in payroll and compliances for my overseas employees',
  },
  {
    value: 'I want to know more about Fetch services',
    label: 'I want to know more about Fetch services',
  },
]

const defaultValues: ContactSubmitForm = {
  purpose: purposeArr[0].value,
  name: '',
  company: '',
  email: '',
  agree: false,
}

const ContactInfo = (): React.ReactElement => {
  const { errorToast, successToast } = useToastContext()

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Please input your name'),
    company: Yup.string().required('Please input your company'),
    email: Yup.string()
      .required('Please input your email')
      .email('Email is invalid'),
    agree: Yup.bool().oneOf([true], 'This term is required'),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm<ContactSubmitForm>({
    defaultValues,
    resolver: yupResolver(validationSchema),
  })

  const onSubmit = async (data: ContactSubmitForm) => {
    try {
      const response = await _postApi(API_SUBCRIBER_BY_EMAIL, data)

      if (response) {
        successToast('Message successfully sent, please wait for our contact!')
      }

      reset()
    } catch (error) {
      errorToast((error as Error).message || 'Message cannot be sent!')
    }
  }

  return (
    <div
      className={clsx({
        [styles['contact-container']]: true,
      })}
    >
      <div className='ft-container'>
        <div className='contact-body-container row'>
          <div className='col-12 col-md-10 col-lg-8 contact-body-inner'>
            <form
              className='contact-form-container'
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className='contact-header-container'>
                <div className='h3'>
                  We’re more than the words you’ve read so far
                </div>
                <p>
                  It doesn’t matter what you require. Just select the right
                  option in our form and we will take it from there!
                </p>
              </div>

              <div className='contact-body-form-container row'>
                <div className='col-10'>
                  <div className='form-group required'>
                    <label className='control-label'>Purpose of message</label>

                    <Controller
                      name='purpose'
                      control={control}
                      render={({ field: { onChange, value, name } }) => {
                        return (
                          <Select
                            instanceId='long-value-select'
                            name={name}
                            value={purposeArr.find((c) => c.value === value)}
                            options={purposeArr}
                            onChange={(selectedOption: IPurpose | null) => {
                              onChange(selectedOption?.value)
                            }}
                            placeholder='Purpose of message'
                          />
                        )
                      }}
                    />
                  </div>

                  <div className='form-group required'>
                    <label className='control-label'>Name</label>

                    <input
                      type='text'
                      {...register('name')}
                      className={`form-control ${
                        errors.name ? 'is-invalid' : ''
                      }`}
                      placeholder='E.g John Micheal Doe'
                    />

                    <div className='invalid-feedback'>
                      {errors.name?.message}
                    </div>
                  </div>

                  <div className='form-group required'>
                    <label className='control-label'>Email</label>

                    <input
                      type='email'
                      {...register('email')}
                      className={`form-control ${
                        errors.email ? 'is-invalid' : ''
                      }`}
                      placeholder='yourcompany@gmail.com'
                    />

                    <div className='invalid-feedback'>
                      {errors.email?.message}
                    </div>
                  </div>

                  <div className='form-group required'>
                    <label className='control-label'>Company</label>

                    <input
                      type='text'
                      {...register('company')}
                      className={`form-control ${
                        errors.company ? 'is-invalid' : ''
                      }`}
                      placeholder='Your Company'
                    />

                    <div className='invalid-feedback'>
                      {errors.company?.message}
                    </div>
                  </div>

                  <div className='contact-submit-container row'>
                    <div className='col-8 col-sm-9 col-md-10'>
                      <div className='form-check'>
                        <input
                          id='agree'
                          type='checkbox'
                          {...register('agree')}
                          className={`form-check-input ${
                            errors.agree ? 'is-invalid' : ''
                          }`}
                        />

                        <label className='form-check-label' htmlFor='agree'>
                          I consent to be contacted by Fetch for any follow up
                          action regarding my enquiry
                        </label>

                        <div className='invalid-feedback'>
                          {errors.agree?.message}
                        </div>
                      </div>
                    </div>

                    <div className='col-4 col-sm-3 col-md-2'>
                      <button
                        type='submit'
                        className='btn btn-lg submit-button'
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactInfo
