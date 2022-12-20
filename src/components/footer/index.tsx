import { useForm } from 'react-hook-form'

import { useToastContext } from '@/context/ToastContext'
import { API_SUBCRIBER_BY_EMAIL } from '@/routes/api'
import { PATH_CONFIG } from '@/routes/paths'
import { _postApi } from '@/utils/axios'
import { yupResolver } from '@hookform/resolvers/yup'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import * as Yup from 'yup'

import styles from './Footer.module.scss'

type SubscribeSubmitForm = {
  email: string
}

const Footer = () => {
  const { successToast, errorToast } = useToastContext()
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required('Please input your email')
      .email('Email is invalid'),
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
              Join our newsletter to stay up to date on features and releases
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
                    placeholder='Enter your email address'
                  />

                  <div className='invalid-feedback'>
                    {errors.email?.message}
                  </div>
                </div>

                <div className='col-4'>
                  <button type='submit' className='subscribe-button'>
                    Subscribe
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className='footer-nav-container col-xs-12 col-lg-4'>
          <div className='col-6'>
            <Link href={PATH_CONFIG.employees}>
              <a>
                <span className='nav-title'>How It Works</span>
              </a>
            </Link>

            <Link href={PATH_CONFIG.company}>
              <a>
                <span className='nav-title'>For Company</span>
              </a>
            </Link>

            <Link href={PATH_CONFIG.ourStory}>
              <a>
                <span className='nav-title'>Our Story</span>
              </a>
            </Link>
          </div>

          <div className='col-6'>
            <Link href={PATH_CONFIG.successStories}>
              <a>
                <span className='nav-title'>Success Stories</span>
              </a>
            </Link>

            <Link href={PATH_CONFIG.faq}>
              <a>
                <span className='nav-title'>FAQ</span>
              </a>
            </Link>
          </div>
        </div>

        <div className='footer-social-container col-xs-12 col-lg-3'>
          <Link href='https://www.facebook.com/Fetch.Technology'>
            <a className='img-social-container'>
              <div className='img-social'>
                <Image
                  src='/images/BigFacebook.svg'
                  alt='facebook'
                  layout='fill'
                  objectFit='cover'
                />
              </div>

              <div className='img-title'>Facebook</div>
            </a>
          </Link>

          <Link href='https://www.linkedin.com/company/fetchtechnology/'>
            <a className='img-social-container'>
              <div className='img-social'>
                <Image
                  className='img-social'
                  src='/images/BigLinkedin.svg'
                  alt='linkedin'
                  layout='fill'
                  objectFit='cover'
                />
              </div>

              <div className='img-title'>Linkedin</div>
            </a>
          </Link>
        </div>
      </div>

      <div className='footer-copy-right'>
        © 2022 Fetch Technology Pte. Ltd. All Rights Reserved.
      </div>
    </div>
  )
}

export default Footer
