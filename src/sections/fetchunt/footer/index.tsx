import { useForm } from 'react-hook-form'

import Image from 'next/image'
import Link from 'next/link'

import { yupResolver } from '@hookform/resolvers/yup'
import clsx from 'clsx'
import * as Yup from 'yup'

import { useToastContext } from '@/context/ToastContext'

import { API_SUBCRIBER_BY_EMAIL } from '@/routes/api'

import { _postApi } from '@/utils/axios'

import styles from './Footer.module.scss'

type SubscribeSubmitForm = {
  email: string
}

const Footer = () => {
  const { successToast, errorToast } = useToastContext()
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required('Vui lòng nhập email của bạn')
      .email('Email không hợp lệ'),
  })

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SubscribeSubmitForm>({
    resolver: yupResolver(validationSchema),
  })

  const onSubmit = async (data: SubscribeSubmitForm) => {
    try {
      const { email: name = '' } = data

      const formData = {
        ...data,
        name,
        purpose: 'New Subscriber',
        company: 'Subscribe',
      }

      const response = await _postApi(API_SUBCRIBER_BY_EMAIL, formData)

      if (response) {
        successToast('Thank you for subscribing to Fetch. Keep in Touch!')
      }
    } catch (error) {
      errorToast('Something went wrong. Please try again later!')
    } finally {
      reset()
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

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className='row'>
                <div className='col-8 form-group'>
                  <input
                    type='text'
                    {...register('email')}
                    className={clsx({
                      'email-input': true,
                      'form-control': true,
                      'is-invalid': errors.email,
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
            <Link href='#'>
              <a target='_blank' rel='noopener noreferrer'>
                <span className='nav-title'>Chính sách bảo mật</span>
              </a>
            </Link>

            <Link href='#'>
              <a target='_blank' rel='noopener noreferrer'>
                <span className='nav-title'>Điều khoản dịch vụ</span>
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

          <Link href='mailto:sales@fetch.tech' passHref>
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

              <div className='img-title'>sales@fetch.tech</div>
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
