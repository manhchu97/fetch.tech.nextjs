import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import PhoneInput from 'react-phone-input-2'

import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

import { PHONE_COUNTRIES } from '@/config/phone'

import { useFormStepContext } from '@/context/FormStepContext'
import { useToastContext } from '@/context/ToastContext'

import { API_SUBMIT_CLIENT_INFO } from '@/routes/api'

import { _postApi } from '@/utils/axios'

import styles from './ClientInfo.module.scss'

type ClientInfoSubmitForm = {
  companyName: string
  contactName: string
  email: string
  phone: string
  acceptTerms: boolean
}

type CountryData = {
  name: string
  countryCode: string
  dialCode: string
}

const defaultValues: ClientInfoSubmitForm = {
  companyName: '',
  contactName: '',
  email: '',
  phone: '65',
  acceptTerms: false,
}

const ClientInfoStep = (): React.ReactElement => {
  const { errorToast } = useToastContext()
  const { handleNextStep, handleGetClientAnswers } = useFormStepContext()
  const [countryCode, setCountryCode] = useState('')

  const validationSchema = Yup.object().shape({
    companyName: Yup.string().required('Company name is required'),
    contactName: Yup.string().required('Contact name is required'),
    email: Yup.string().required('Email is required').email('Email is invalid'),
    phone: Yup.string()
      .required('Phone is required')
      .test('validator-custom-phone', function (value, { createError, path }) {
        const currentPhoneCountry = PHONE_COUNTRIES.find(
          (country) => country.iso2 === countryCode.toUpperCase(),
        )

        const isValid =
          currentPhoneCountry && value
            ? new RegExp(currentPhoneCountry.validation).test(
                value?.replace(/ /g, ''),
              )
            : false

        if (!isValid)
          return createError({
            path,
            message: 'Please enter a valid phone',
          })

        return true
      }),
    acceptTerms: Yup.bool().oneOf([true], 'Accept Terms is required'),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<ClientInfoSubmitForm>({
    defaultValues,
    resolver: yupResolver(validationSchema),
  })

  const onSubmit = async (data: ClientInfoSubmitForm) => {
    try {
      const { companyName } = data
      const response = await _postApi(API_SUBMIT_CLIENT_INFO, {
        ...data,
        name: companyName,
      })

      const { data: clientData } = response || {}
      const { success, clientId, result, message } = clientData

      if (!success) {
        throw new Error(message)
      }

      handleGetClientAnswers(clientId, result)

      if (!result) handleNextStep()
    } catch (error) {
      errorToast(
        (error as Error).message ||
          'Something went wrong! Please try again later',
      )
    }
  }

  return (
    <div className={styles['contact-container']}>
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
                    <label className='control-label'>Company Name</label>

                    <input
                      type='text'
                      {...register('companyName')}
                      className={`form-control ${
                        errors.companyName ? 'is-invalid' : ''
                      }`}
                      placeholder='Company Co. Ltd'
                    />

                    <div className='invalid-feedback'>
                      {errors.companyName?.message}
                    </div>
                  </div>

                  <div className='form-group required'>
                    <label className='control-label'>Contact Name</label>

                    <input
                      type='text'
                      {...register('contactName')}
                      className={`form-control ${
                        errors.contactName ? 'is-invalid' : ''
                      }`}
                      placeholder='E.g John Micheal Doe'
                    />

                    <div className='invalid-feedback'>
                      {errors.contactName?.message}
                    </div>
                  </div>

                  <div className='form-group required'>
                    <label className='control-label'>Email Address</label>

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

                  <div className='form-group'>
                    <label className='control-label'>Phone number</label>

                    <Controller
                      name='phone'
                      control={control}
                      rules={{ required: true }}
                      render={({ field: { onChange, value } }) => (
                        <PhoneInput
                          value={value}
                          enableSearch
                          onChange={(
                            value,
                            country: CountryData,
                            e,
                            formattedValue,
                          ) => {
                            const { countryCode } = country

                            setCountryCode(countryCode)
                            onChange(value, country, e, formattedValue)
                          }}
                          country='sg'
                          containerClass={`${errors.phone ? 'is-invalid' : ''}`}
                        />
                      )}
                    />

                    <div className='invalid-feedback'>
                      {errors.phone?.message}
                    </div>
                  </div>

                  <div className='contact-submit-container row'>
                    <div className='col-8 col-sm-9 col-md-10'>
                      <div className='form-check'>
                        <input
                          type='checkbox'
                          {...register('acceptTerms')}
                          className={`form-check-input ${
                            errors.acceptTerms ? 'is-invalid' : ''
                          }`}
                        />

                        <label
                          className='form-check-label'
                          htmlFor='acceptTerms'
                        >
                          Any follow up action regarding my request to build a
                          technical team enquiry
                        </label>

                        <div className='invalid-feedback'>
                          {errors.acceptTerms?.message}
                        </div>
                      </div>
                    </div>

                    <div className='col-4 col-sm-3 col-md-2'>
                      <button
                        type='submit'
                        className='btn btn-lg submit-button'
                      >
                        Next
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

export default ClientInfoStep
