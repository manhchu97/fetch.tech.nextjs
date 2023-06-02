import { useCallback, useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import clsx from 'clsx'

import { useToastContext } from '@/context/ToastContext'

import { useSubscribeFormValidator } from '@/hooks/useSubscribeFormValidator'

import { API_FETCHUNT_SUBCRIBER_BY_EMAIL } from '@/routes/api'
import { PATH_CONFIG } from '@/routes/paths'

import { ISubscribeForm } from '@/types/subscribeForm'

import styles from './Footer.module.scss'

const Footer = () => {
  const [form, setForm] = useState<ISubscribeForm>({
    email: '',
  })

  const { successToast, errorToast } = useToastContext()

  const validationSchema = {
    email: {
      required: 'Vui lòng nhập email để nhận thông báo từ chúng tôi.',
      email: 'Email không hợp lệ.',
    },
  }

  const { errors, validateForm, onBlurField } = useSubscribeFormValidator(
    form,
    validationSchema,
  )

  const handleResetForm = useCallback(() => {
    setForm({
      email: '',
    })
  }, [])

  const handleChangeField = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const fieldName = e.target.name
      const nextFormState = {
        ...form,
        [fieldName]: e.target.value,
      }

      setForm(nextFormState)

      if (!errors[fieldName].dirty) return

      validateForm({
        form: nextFormState,
        errors,
        fieldName,
      })
    },
    [errors, form, validateForm],
  )

  const onSubmitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault()

      const { isValid } = validateForm({ form, errors, forceTouchErrors: true })
      if (!isValid) return

      const { _postApi } = await import('@/utils/axios')
      const response = await _postApi(API_FETCHUNT_SUBCRIBER_BY_EMAIL, form)

      if (response) {
        handleResetForm()
        successToast('Cám ơn bạn đã nhập email để nhận thông báo từ chúng tôi.')
      }
    } catch (error) {
      errorToast('Đã có lỗi xảy ra. Vui lòng thử lại sau!')
    }
  }

  return (
    <div className={clsx('ft-full-screen', styles['footer-container'])}>
      <div className='footer-logo-container'>
        <Image
          src='/images/Logo.svg'
          alt='Picture of the author'
          width={107}
          height={45}
        />
      </div>

      <div className='footer-content-container'>
        <div className='footer-form-container col-xs-12 col-lg-5'>
          <div className='footer-form-inner'>
            <div className='text-form-input'>
              Đăng ký nhận tin từ chúng tôi!
            </div>

            <form onSubmit={onSubmitForm}>
              <div className='row'>
                <div className='col-8 form-group'>
                  <input
                    type='text'
                    name='email'
                    value={form?.email}
                    onChange={handleChangeField}
                    onBlur={onBlurField}
                    className={clsx({
                      'email-input': true,
                      'form-control': true,
                      'is-invalid': errors.email.dirty && errors.email.error,
                    })}
                    placeholder='Email của bạn'
                  />

                  <div className='invalid-feedback'>
                    {errors.email?.message}
                  </div>
                </div>

                <div className='col-4 p-0'>
                  <button type='submit' className='subscribe-button'>
                    Đăng ký
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className='footer-nav-container col-xs-12 col-lg-5'>
          <div className='col-6 col-lg-5'>
            <Link href='https://fetch.tech/resources/ourstory'>
              <a target='_blank' rel='noopener noreferrer'>
                <span className='nav-title'>Về chúng tôi</span>
              </a>
            </Link>

            <Link href='https://fetch.tech/resources/case-studies'>
              <a target='_blank' rel='noopener noreferrer'>
                <span className='nav-title'>Đối tác</span>
              </a>
            </Link>
          </div>

          <div className='col-6 col-lg-7'>
            <Link href={PATH_CONFIG.privacyPolicy}>
              <a target='_blank' rel='noopener noreferrer'>
                <span className='nav-title'>Chính sách bảo mật</span>
              </a>
            </Link>

            <Link href={PATH_CONFIG.serviceAgreement}>
              <a target='_blank' rel='noopener noreferrer'>
                <span className='nav-title'>Thoả thuận dịch vụ</span>
              </a>
            </Link>
          </div>
        </div>

        <div className='footer-social-container col-xs-12 col-lg-2'>
          <Link href='https://www.facebook.com/Fetch.Technology' passHref>
            <a
              className='img-social-container'
              target='_blank'
              rel='noreferrer'
            >
              <div className='img-social'>
                <Image
                  src='/images/footer/BigFacebook.svg'
                  alt='facebook'
                  layout='fill'
                  objectFit='cover'
                />
              </div>

              <div className='img-title'>Facebook</div>
            </a>
          </Link>

          <Link
            href='https://www.linkedin.com/company/fetchtechnology/'
            passHref
          >
            <a
              className='img-social-container'
              target='_blank'
              rel='noreferrer'
            >
              <div className='img-social'>
                <Image
                  className='img-social'
                  src='/images/footer/BigLinkedin.svg'
                  alt='linkedin'
                  layout='fill'
                  objectFit='cover'
                />
              </div>

              <div className='img-title'>Linkedin</div>
            </a>
          </Link>

          <Link href='tel:+842866547574' passHref>
            <a className='img-social-container' rel='noreferrer'>
              <div className='img-social'>
                <Image
                  className='img-social'
                  src='/images/footer/BigVietnamPhone.svg'
                  alt='tel'
                  layout='fill'
                  objectFit='cover'
                />
              </div>

              <div className='img-title'>VN: +84 28 6654 7574</div>
            </a>
          </Link>

          <Link href='mailto:recruitment@fetch.tech' passHref>
            <a
              className='img-social-container'
              target='_blank'
              rel='noopener noreferrer'
            >
              <div className='img-social'>
                <Image
                  className='img-social'
                  src='/images/footer/BigMail.svg'
                  alt='mail'
                  layout='fill'
                  objectFit='cover'
                />
              </div>

              <div className='img-title'>recruitment@fetch.tech</div>
            </a>
          </Link>
        </div>
      </div>

      <div className='footer-copy-right'>
        © {new Date().getFullYear()} Công ty TNHH Fetchunt
      </div>
    </div>
  )
}

export default Footer
