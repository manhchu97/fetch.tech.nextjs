import { useMemo, useRef, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import PhoneInput, { CountryData } from 'react-phone-input-2'
import Select from 'react-select'
import CreatableSelect from 'react-select/creatable'

import Image from 'next/image'

import { yupResolver } from '@hookform/resolvers/yup'
import clsx from 'clsx'
import * as Yup from 'yup'

import { PHONE_COUNTRIES } from '@/config/phone'
import {
  CLIENT_INFO_DEFAULT_VALUES,
  CLIENT_INFO_FORM_FIELD_VALUES,
  ENGAGEMENT_MODEL_OPTIONS,
} from '@/config/services'

import Modal from '@/components/modal/Modal'

import { useToastContext } from '@/context/ToastContext'

import { API_CLIENT_HIRING_FREELANCERS_INFO } from '@/routes/api'

import { ISkillData } from '@/types/hiring-freelancers'

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

type SelectOption = {
  value: string
  label: string
}

const colourStyles = {
  multiValue: (styles: object) => {
    return {
      ...styles,
      backgroundColor: '#fccc4b',
      color: 'white',
    }
  },
  multiValueLabel: (styles: object) => ({
    ...styles,
    color: 'white',
  }),
  option: (
    styles: object,
    { isDisabled, isSelected }: { isDisabled: boolean; isSelected: boolean },
  ) => {
    return {
      ...styles,
      backgroundColor: 'white',
      color: 'black',
      cursor: isDisabled ? 'not-allowed' : 'default',
      padding: '6px 12px',
      ...(isSelected && {
        backgroundColor: '#f8e7be',
        borderRadius: '6px',
        padding: '6px 12px',
      }),

      ':hover': {
        backgroundColor: '#f8e7be',
        borderRadius: '6px',
        padding: '6px 12px',
      },
    }
  },
}

type ClientInfoPopupProps = {
  isOpen: boolean
  skills: ISkillData[]
  onClose: () => void
  handleOpenNotificationPopup: () => void
}

const ClientInfoPopup = ({
  isOpen = false,
  skills,
  onClose,
  handleOpenNotificationPopup,
}: ClientInfoPopupProps): React.ReactElement => {
  const { errorToast } = useToastContext()
  const [countryCode, setCountryCode] = useState('')
  const submitRef = useRef<HTMLButtonElement>(null)

  const validationSchema = Yup.object().shape({
    [CLIENT_INFO_FORM_FIELD_VALUES.COMPANY_NAME]: Yup.string().required(
      'Company name is required',
    ),
    [CLIENT_INFO_FORM_FIELD_VALUES.CONTACT_NAME]: Yup.string().required(
      'Contact name is required',
    ),
    [CLIENT_INFO_FORM_FIELD_VALUES.EMAIL]: Yup.string()
      .required('Email is required')
      .email('Email is invalid'),
    [CLIENT_INFO_FORM_FIELD_VALUES.PHONE]: Yup.string().test(
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
    [CLIENT_INFO_FORM_FIELD_VALUES.SKILL]: Yup.array()
      .of(
        Yup.object().shape({
          value: Yup.string().required(),
          label: Yup.string().required(),
        }),
      )
      .nullable()
      .required('Key skillsets needed is required'),
    [CLIENT_INFO_FORM_FIELD_VALUES.PROJECT_REQUIREMENT]: Yup.string().required(
      'Project requirement is required',
    ),
    [CLIENT_INFO_FORM_FIELD_VALUES.DURATION]: Yup.string().required(
      'Estimated duration needed is required',
    ),
    [CLIENT_INFO_FORM_FIELD_VALUES.ENGAGEMENT_MODEL]: Yup.object()
      .shape({ value: Yup.string().required(), label: Yup.string().required() })
      .nullable()
      .required('Preferred engagement model is required'),
  })

  const skillsFormat = useMemo(
    () =>
      (skills || []).map((item) => ({
        value: item?.id,
        label: item?.name,
      })),
    [skills],
  )

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    control,
    trigger,
  } = useForm<ClientInfoSubmitForm>({
    defaultValues: CLIENT_INFO_DEFAULT_VALUES as ClientInfoSubmitForm,
    resolver: yupResolver(validationSchema),
  })

  const onSubmit = async (data: ClientInfoSubmitForm) => {
    try {
      const {
        [CLIENT_INFO_FORM_FIELD_VALUES.SKILL]: skills = [],
        [CLIENT_INFO_FORM_FIELD_VALUES.ENGAGEMENT_MODEL]: engagementModel = {},
      } = data || {}

      const skillFormat = (skills as SelectOption[])
        ?.map((item: SelectOption) => item?.label || '')
        .filter(Boolean)
        .join(', ')

      const engagementFormat = (engagementModel as SelectOption)?.label || ''

      const dataFormat = {
        ...data,
        [CLIENT_INFO_FORM_FIELD_VALUES.SKILL]: skillFormat,
        [CLIENT_INFO_FORM_FIELD_VALUES.ENGAGEMENT_MODEL]: engagementFormat,
      }

      const response = await _postApi(
        API_CLIENT_HIRING_FREELANCERS_INFO,
        dataFormat,
      )

      if (!response?.data?.success) {
        throw new Error(response?.data?.success?.message)
      }

      handleOpenNotificationPopup()
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
              height={695}
              width={633}
              priority
            />
          </div>

          <form
            className='contact-form-container'
            onSubmit={handleSubmit(onSubmit)}
            onKeyDown={(e) => {
              if (
                e.key === 'Enter' ||
                e.code === 'Enter' ||
                e.which === 13 ||
                e.charCode === 13
              )
                e.preventDefault()
            }}
          >
            <div className='contact-form-header-container'>
              <div className='contact-form-header-logo'>
                <Image
                  src='/images/hiring-freelancers/FetchPolygonLogo.png'
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
                    {...register(CLIENT_INFO_FORM_FIELD_VALUES.COMPANY_NAME)}
                    className={`form-control ${
                      errors?.[CLIENT_INFO_FORM_FIELD_VALUES.COMPANY_NAME]
                        ? 'is-invalid'
                        : ''
                    }`}
                    placeholder='Company Co. Ltd'
                  />

                  <div className='invalid-feedback'>
                    {
                      errors?.[CLIENT_INFO_FORM_FIELD_VALUES.COMPANY_NAME]
                        ?.message
                    }
                  </div>
                </div>

                <div className='form-group required'>
                  <label className='control-label'>Contact Name</label>

                  <input
                    type='text'
                    {...register(CLIENT_INFO_FORM_FIELD_VALUES.CONTACT_NAME)}
                    className={`form-control ${
                      errors?.[CLIENT_INFO_FORM_FIELD_VALUES.CONTACT_NAME]
                        ? 'is-invalid'
                        : ''
                    }`}
                    placeholder='E.g John Micheal Doe'
                  />

                  <div className='invalid-feedback'>
                    {
                      errors?.[CLIENT_INFO_FORM_FIELD_VALUES.CONTACT_NAME]
                        ?.message
                    }
                  </div>
                </div>

                <div className='form-group required'>
                  <label className='control-label'>Email Address</label>

                  <Controller
                    name={CLIENT_INFO_FORM_FIELD_VALUES.EMAIL}
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
                    {errors?.[CLIENT_INFO_FORM_FIELD_VALUES.EMAIL]?.message}
                  </div>
                </div>

                <div className='form-group'>
                  <label className='control-label'>Phone number</label>

                  <Controller
                    name={CLIENT_INFO_FORM_FIELD_VALUES.PHONE}
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
                    {errors?.[CLIENT_INFO_FORM_FIELD_VALUES.PHONE]?.message}
                  </div>
                </div>

                <div className='form-group required'>
                  <label className='control-label'>Key skillsets needed</label>

                  <Controller
                    name={CLIENT_INFO_FORM_FIELD_VALUES.SKILL}
                    control={control}
                    render={({ field: { onChange, name } }) => (
                      <CreatableSelect
                        styles={colourStyles}
                        name={name}
                        options={skillsFormat}
                        isMulti
                        className={`skill-input-container ${
                          errors?.skill ? 'is-invalid' : ''
                        }`}
                        classNamePrefix='multi-select'
                        onChange={(selectedOption) => {
                          onChange(selectedOption)
                        }}
                        placeholder='Select skills...'
                      />
                    )}
                  />

                  <div className='invalid-feedback'>
                    {errors?.[CLIENT_INFO_FORM_FIELD_VALUES.SKILL]?.message}
                  </div>
                </div>

                <div className='form-group required'>
                  <label className='control-label'>Project requirement</label>

                  <Controller
                    name={CLIENT_INFO_FORM_FIELD_VALUES.PROJECT_REQUIREMENT}
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
                    {
                      errors?.[
                        CLIENT_INFO_FORM_FIELD_VALUES.PROJECT_REQUIREMENT
                      ]?.message
                    }
                  </div>
                </div>

                <div className='form-group required'>
                  <label className='control-label'>
                    Estimated duration needed
                  </label>

                  <Controller
                    name={CLIENT_INFO_FORM_FIELD_VALUES.DURATION}
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
                    {errors?.[CLIENT_INFO_FORM_FIELD_VALUES.DURATION]?.message}
                  </div>
                </div>

                <div className='form-group required'>
                  <label className='control-label'>
                    Preferred engagement model
                  </label>

                  <Controller
                    name={CLIENT_INFO_FORM_FIELD_VALUES.ENGAGEMENT_MODEL}
                    control={control}
                    render={({ field: { onChange, name } }) => (
                      <Select
                        styles={colourStyles}
                        name={name}
                        options={ENGAGEMENT_MODEL_OPTIONS}
                        // isMulti
                        className={`engagement-model-input-container ${
                          errors?.engagementModel ? 'is-invalid' : ''
                        }`}
                        classNamePrefix='multi-select'
                        menuPlacement='top'
                        onChange={(selectedOption) => {
                          onChange(selectedOption)
                        }}
                        placeholder='Select engagment model...'
                      />
                    )}
                  />

                  <div className='invalid-feedback'>
                    {
                      errors?.[CLIENT_INFO_FORM_FIELD_VALUES.ENGAGEMENT_MODEL]
                        ?.message
                    }
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
