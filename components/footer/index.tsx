import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'

import styles from './Footer.module.scss'

const Footer = () => {
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
          </div>
        </div>

        <div className='footer-nav-container col-xs-12 col-lg-4'>
          <div className='col-6'>
            <Link href='/employees'>
              <a>
                <span className='nav-title'>How It Works</span>
              </a>
            </Link>

            <Link href='/company'>
              <a>
                <span className='nav-title'>For Company</span>
              </a>
            </Link>

            <Link href='/ourstory'>
              <a>
                <span className='nav-title'>Our Story</span>
              </a>
            </Link>
          </div>

          <div className='col-6'>
            <Link href='/successstories'>
              <a>
                <span className='nav-title'>Success Stories</span>
              </a>
            </Link>

            <Link href='/faq'>
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
