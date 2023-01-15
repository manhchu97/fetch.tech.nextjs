import React, { useState } from 'react'
import Recaptcha from 'react-grecaptcha'
import { Controller, useForm } from 'react-hook-form'
import Select from 'react-select'

import { yupResolver } from '@hookform/resolvers/yup'
import clsx from 'clsx'
import * as Yup from 'yup'

import { CAPTCHA_SITE_KEY } from '@/config/global'
import { FORM_FIELD_VALUES, fileAccept, fileMatch } from '@/config/job'

import Modal from '@/components/modal/Modal'

import { useToastContext } from '@/context/ToastContext'

import {
  API_APPLY_JOB,
  API_CHECK_CANDIDATE,
  API_UPLOAD_PORTFOLIO,
} from '@/routes/api'

import {
  IJobDetail,
  IJobItem,
  ISkillOption,
  JobApplyFormValue,
} from '@/types/job'

import { _postApi, _uploadApi } from '@/utils/axios'

import styles from './ApplyPopup.module.scss'

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
}

interface IApplyPopupProps {
  isShowPopup: boolean
  codeBitly?: string
  chosenJob?: IJobItem | IJobDetail | null
  skillOptions?: ISkillOption[]
  handleClosePopup: () => void
}

const ApplyPopup = ({
  isShowPopup,
  codeBitly = 'false',
  chosenJob,
  skillOptions,
  handleClosePopup,
}: IApplyPopupProps): React.ReactElement => {
  const { successToast, errorToast } = useToastContext()
  const [isOpenPortfolio, setIsOpenPortfolio] = useState<boolean>(false)
  const [isUpload, setIsUpload] = useState<boolean>(false)

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Please input your name'),
    email: Yup.string()
      .required('Please input your email')
      .email('Email is invalid'),

    phone: Yup.string().required('Please input your phone number'),
    file: Yup.mixed().test('required', 'Please input your CV', (value) => {
      return value.length === 1
    }),
  })

  const {
    register,
    handleSubmit,
    control,
    setValue,
    reset,
    formState: { errors },
  } = useForm<JobApplyFormValue>({
    resolver: yupResolver(validationSchema),
  })

  const onSubmit = async (data: JobApplyFormValue) => {
    const { captcha, ...rest } = data
    const { email, phone, name, skill, file } = rest
    const { id = '', title = '' } = chosenJob || {}

    const fileUpload = file[0] as File

    if (fileMatch.indexOf(fileUpload?.type) === -1) {
      errorToast('Only allowed to upload file pdf, doc or docx')
      return
    }

    if (!captcha) {
      errorToast('Please verify that you are not a robot')
      return
    }

    const isExistCandidate = await checkCandidateIsExists(email, phone, id)

    if (isExistCandidate) {
      errorToast('Candidate already exists in this job')
      return
    }

    try {
      setIsUpload(true)
      const nameFile = `${name.replace('/', '-')}_${title || ''}`

      const formData = {
        ...rest,
        [FORM_FIELD_VALUES.FILE]: file[0] as File,
        [FORM_FIELD_VALUES.SKILL]:
          skill?.map((item) => item.label).toString() || '',
        [FORM_FIELD_VALUES.NAME_FILE]: nameFile,
        [FORM_FIELD_VALUES.ID_JOB]: id || '',
        [FORM_FIELD_VALUES.CODE_BITLY]: codeBitly,
      }

      const response = await _uploadApi(API_APPLY_JOB, formData)

      if (!response?.data?.success) {
        throw new Error(response?.data?.message)
      }

      successToast('Apply success')
      reset()
      handleClosePopup()
    } catch (error) {
      errorToast((error as Error)?.message || 'Fail to apply job')
    } finally {
      setIsUpload(false)
    }
  }

  const handleChangeFilePortfolio = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const files = event.target.files as FileList
    const file = files[0] as File

    if (fileMatch.indexOf(file?.type) === -1) {
      errorToast('File Portfolio only allowed to upload file pdf, doc or docx')
      return
    }

    try {
      setIsUpload(true)

      const formData = {
        [FORM_FIELD_VALUES.FILE]: file,
        [FORM_FIELD_VALUES.NAME_FILE]: `Portfolio-${chosenJob?.title}`,
        [FORM_FIELD_VALUES.ID_JOB]: chosenJob?.id || '',
      }

      const response = await _uploadApi(API_UPLOAD_PORTFOLIO, formData)

      if (!response.data.success) throw new Error(response.data.message)

      if (response.data.fileName) {
        successToast('Upload portfolio success')
        setValue(FORM_FIELD_VALUES.LINK_PORTFOLIO, response.data.fileName)
      }
    } catch (error) {
      errorToast((error as Error)?.message || 'Fail to upload portfolio')
    } finally {
      setIsUpload(false)
    }
  }

  const checkCandidateIsExists = async (
    email: string,
    phone: string,
    jobId: string,
  ) => {
    const data = {
      email,
      phone,
      jobId,
    }

    const response = await _postApi(API_CHECK_CANDIDATE, data)

    return response.data.exists
  }

  return (
    <div className={styles['modal-container']}>
      <Modal
        className='modal-custom'
        isOpen={isShowPopup}
        header={
          <div className='modal-header-container'>
            <span
              className='modal-header-close'
              onClick={isUpload ? () => {} : handleClosePopup}
            >
              <i className='bi bi-x-lg'></i>
            </span>
          </div>
        }
        onClose={isUpload ? () => {} : handleClosePopup}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='popup'>
            <div className='popup-content'>
              <div className='row popup-detail'>
                <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
                  <div className='popup-detail-apply-title'>Start Applying</div>
                </div>

                <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
                  <div className='popup-your-information'>
                    Let us know more about you.
                  </div>
                </div>
              </div>

              <div className='row m-0 mt-3'>
                <div className='col-md-6'>
                  <div className='form-group required'>
                    <label className='control-label'>Full Name</label>
                    <input
                      type='text'
                      {...register(FORM_FIELD_VALUES.NAME)}
                      className={clsx({
                        'form-control': true,
                        'is-invalid': errors.name,
                      })}
                    />

                    <div className='invalid-feedback'>
                      {errors.name?.message}
                    </div>
                  </div>
                </div>

                <div className='col-md-6 popup-email-fix'>
                  <div className='form-group required'>
                    <label className='control-label'>Email Address</label>

                    <input
                      type='email'
                      {...register(FORM_FIELD_VALUES.EMAIL)}
                      className={clsx({
                        'form-control': true,
                        'is-invalid': errors.email,
                      })}
                    />

                    <div className='invalid-feedback'>
                      {errors.email?.message}
                    </div>
                  </div>
                </div>
              </div>

              <div className='row m-0 mt-3'>
                <div className='col-md-6'>
                  <div className='form-group required'>
                    <label className='control-label'>Phone Number</label>

                    <input
                      type='text'
                      {...register(FORM_FIELD_VALUES.PHONE)}
                      className={clsx({
                        'form-control': true,
                        'is-invalid': errors.phone,
                      })}
                    />

                    <div className='invalid-feedback'>
                      {errors.phone?.message}
                    </div>
                  </div>
                </div>

                <div className='col-md-6 popup-attach-file-fix'>
                  <div className='form-group required'>
                    <label className='control-label'>Curriculum Vitae</label>

                    <div className='form-group'>
                      <input
                        type='file'
                        accept={fileAccept}
                        {...register(FORM_FIELD_VALUES.FILE)}
                        className={clsx({
                          'form-control': true,
                          'is-invalid': errors.file,
                        })}
                      />

                      <div className='invalid-feedback'>
                        {errors.file?.message}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='row m-0 mt-3'>
                <div className='col-md-12'>
                  <div className='form-group'>
                    <label>Skills</label>

                    <Controller
                      name={FORM_FIELD_VALUES.SKILL}
                      control={control}
                      render={({ field: { onChange, name } }) => (
                        <Select
                          styles={colourStyles}
                          name={name}
                          options={skillOptions}
                          isMulti
                          onChange={(selectedOption) => {
                            onChange(selectedOption)
                          }}
                          placeholder='Select skills...'
                        />
                      )}
                    />
                  </div>
                </div>
              </div>

              <div className='row m-0 mt-3'>
                <div className='col-md-12'>
                  <div className='form-group'>
                    <label>Your Message</label>

                    <textarea
                      {...register(FORM_FIELD_VALUES.MESSAGE)}
                      rows={5}
                      className={clsx({
                        'form-control': true,
                      })}
                    />
                  </div>
                </div>
              </div>

              <div className='row m-0'>
                <div className='col-md-6'>
                  <div className='form-group'>
                    <label>
                      You can upload more Portfolio&nbsp;
                      <span
                        className='here-style'
                        onClick={() => setIsOpenPortfolio((prev) => !prev)}
                      >
                        here
                      </span>
                      .
                    </label>
                  </div>
                </div>

                {isOpenPortfolio && (
                  <div className='col-md-6 '>
                    <div className='form-group'>
                      <label htmlFor='file-3'>
                        <span>Portfolio File</span>
                      </label>

                      <input
                        type='file'
                        className={clsx({
                          'form-control': true,
                        })}
                        onChange={
                          isUpload ? () => {} : handleChangeFilePortfolio
                        }
                        accept={fileAccept}
                      />
                    </div>
                  </div>
                )}
              </div>

              <div className='row m-0 mt-3 mb-5'>
                <div className='col-lg-6'>
                  <div className='form-group'>
                    <Recaptcha
                      sitekey={CAPTCHA_SITE_KEY}
                      callback={(response: string) =>
                        setValue(FORM_FIELD_VALUES.CAPTCHA, response)
                      }
                      expiredCallback={() => {}}
                      locale='en'
                    />
                  </div>
                </div>

                <div className='col-lg-6'>
                  <button
                    type='submit'
                    className={clsx({
                      btn: true,
                      'popup-apply-now': true,
                      disabled: isUpload,
                    })}
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </Modal>
    </div>
  )
}

export default ApplyPopup
