import { useRef, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import PhoneInput, { CountryData } from 'react-phone-input-2'

import Image from 'next/image'

import { yupResolver } from '@hookform/resolvers/yup'
import clsx from 'clsx'
import * as Yup from 'yup'

import { PHONE_COUNTRIES } from '@/config/phone'

import Modal from '@/components/modal/Modal'

import { useToastContext } from '@/context/ToastContext'

import { API_CLIENT_HIRING_FREELANCERS_INFO } from '@/routes/api'

import { _postApi } from '@/utils/axios'

import styles from './ClientInfoPopup.module.scss'

type ClientInfoSubmitForm = {
  companyName: string
  contactName: string
  email: string
  phone: string
  skill: string
  projectRequirement: string
  duration: string
  engagementModel: string
}

const defaultValues: ClientInfoSubmitForm = {
  companyName: '',
  contactName: '',
  email: '',
  phone: '',
  skill: '',
  projectRequirement: '',
  duration: '',
  engagementModel: '',
}

const ClientInfoPopup = ({
  isOpen = false,
  onClose = () => {},
}): React.ReactElement => {
  const { errorToast, successToast } = useToastContext()
  const [countryCode, setCountryCode] = useState('')
  const submitRef = useRef<HTMLButtonElement>(null)

  const validationSchema = Yup.object().shape({
    companyName: Yup.string().required('Company name is required'),
    contactName: Yup.string().required('Contact name is required'),
    email: Yup.string().required('Email is required').email('Email is invalid'),
    phone: Yup.string().test(
      'validator-custom-phone',
      function (value, { createError, path }) {
        if (!value) return true

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
      },
    ),
    skill: Yup.string().required('Key skillsets needed is required'),
    projectRequirement: Yup.string().required(
      'Project requirement is required',
    ),
    duration: Yup.string().required('Estimated duration needed is required'),
    engagementModel: Yup.string().required(
      'Preferred engagement model is required',
    ),
  })

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    control,
    trigger,
  } = useForm<ClientInfoSubmitForm>({
    defaultValues,
    resolver: yupResolver(validationSchema),
  })

  const onSubmit = async (data: ClientInfoSubmitForm) => {
    try {
      console.log(data)
      const response = await _postApi(API_CLIENT_HIRING_FREELANCERS_INFO, data)

      if (!response?.data?.success) {
        throw new Error(response?.data?.success?.message)
      }

      successToast('Thank you for connecting with Fetch!')
      onClose()
    } catch (error) {
      errorToast(
        (error as Error).message ||
          'Something went wrong! Please try again later',
      )
    }
  }

  return (
    <div className={styles['client-info-container']}>
      <Modal
        className='custom-modal'
        isOpen={isOpen}
        onClose={onClose}
        header={
          <div className='client-info-header'>
            <span className='client-info-header-close' onClick={onClose}>
              <i className='bi bi-x-lg'></i>
            </span>
          </div>
        }
        footer={
          <div className='client-info-footer'>
            <button
              type='button'
              className={clsx({
                'button-cancel': true,
                disabled: isSubmitting,
              })}
              onClick={() => submitRef?.current?.click()}
              disabled={isSubmitting}
            >
              Submit
            </button>
          </div>
        }
      >
        <div className='client-info-body'>
          <div className='client-info-body-image'>
            <Image
              src='/images/hiring-freelancers/client_form_bg.png'
              alt='Client form image'
              height={520}
              width={633}
              priority
            />
          </div>

          <form
            className='contact-form-container'
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className='contact-form-header-container'>
              <div className='contact-form-header-logo'>
                <Image
                  src='/images/contact/FetchPolygonLogo.png'
                  alt='Fetch logo'
                  width={69}
                  height={72}
                  quality={100}
                />
              </div>

              <div className='h4'>
                Hire the top freelance engineers from Vietnam today
              </div>

              <div className='contact-form-message-container'>
                <div className='contact-form-message-section-container'>
                  <div className='h6 contact-form-message-content'>
                    Thank you for your interest in FETCH! Speed-up your projects
                    with high skilled software engineers and developers.
                  </div>
                </div>
              </div>
            </div>

            <div className='contact-body-form-container row'>
              <div className='col-12 px-3'>
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

                  <Controller
                    name='email'
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <input
                        type='text'
                        value={value}
                        className={`form-control ${
                          errors.email ? 'is-invalid' : ''
                        }`}
                        onChange={async (value) => {
                          onChange(value)
                          await trigger('email')
                        }}
                        placeholder='yourcompany@gmail.com'
                      />
                    )}
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

                <div className='form-group required'>
                  <label className='control-label'>Key skillsets needed</label>

                  <Controller
                    name='skill'
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <input
                        type='text'
                        value={value}
                        className={`form-control ${
                          errors.skill ? 'is-invalid' : ''
                        }`}
                        onChange={async (value) => {
                          onChange(value)
                        }}
                      />
                    )}
                  />

                  <div className='invalid-feedback'>
                    {errors.skill?.message}
                  </div>
                </div>

                <div className='form-group required'>
                  <label className='control-label'>Project requirement</label>

                  <Controller
                    name='projectRequirement'
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <input
                        type='text'
                        value={value}
                        className={`form-control ${
                          errors.projectRequirement ? 'is-invalid' : ''
                        }`}
                        onChange={async (value) => {
                          onChange(value)
                        }}
                      />
                    )}
                  />

                  <div className='invalid-feedback'>
                    {errors.projectRequirement?.message}
                  </div>
                </div>

                <div className='form-group required'>
                  <label className='control-label'>
                    Estimated duration needed
                  </label>

                  <Controller
                    name='duration'
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <input
                        type='text'
                        value={value}
                        className={`form-control ${
                          errors.duration ? 'is-invalid' : ''
                        }`}
                        onChange={async (value) => {
                          onChange(value)
                        }}
                      />
                    )}
                  />

                  <div className='invalid-feedback'>
                    {errors.duration?.message}
                  </div>
                </div>

                <div className='form-group required'>
                  <label className='control-label'>
                    Preferred engagement model
                  </label>

                  <Controller
                    name='engagementModel'
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <input
                        type='text'
                        value={value}
                        className={`form-control ${
                          errors.engagementModel ? 'is-invalid' : ''
                        }`}
                        onChange={async (value) => {
                          onChange(value)
                        }}
                      />
                    )}
                  />

                  <div className='invalid-feedback'>
                    {errors.engagementModel?.message}
                  </div>
                </div>

                <button type='submit' className='button-submit' ref={submitRef}>
                  submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  )
}

export default ClientInfoPopup
