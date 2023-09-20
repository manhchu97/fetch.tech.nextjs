import Image from 'next/image'

import clsx from 'clsx'

import AnimatiopnOnScrollWrap from '@/components/AnimationOnScrollWrap'
import ReactSlick from '@/components/ReactSlick'

import useTranslation from '@/hooks/useTranslation'

import style from './Career.module.scss'

const Career = () => {
  const { translate } = useTranslation()

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  }

  return (
    <div className={style['career-container']}>
      <div className='career-header-img div-center'>
        <Image
          alt='background'
          src='/images/LogoDefault.svg'
          layout='fill'
          objectFit='cover'
          objectPosition='top left'
        />
      </div>

      <div className='career-desktop-container'>
        <Image
          alt='background'
          src='/images/home-page/AboutTheme.png'
          layout='fill'
          objectFit='cover'
          objectPosition='top left'
        />

        <div className='z-2 mb-5 position-relative row d-flex justify-content-center align-items-center'>
          <div className='col-9 col-lg-7 col-xl-8  col-xxl-7 career-info-container'>
            <div className='h3'>{translate('hunt.career.title')}</div>
            <div className='h6'>{translate('hunt.career.sub_title')}</div>
          </div>
        </div>

        <div className='z-2 position-relative row mb-5'>
          <div className='col-3' />

          <div className={clsx('col-3', 'career-card-container')}>
            <AnimatiopnOnScrollWrap
              render={(ref, animate) => (
                <div
                  ref={ref}
                  className={clsx('h2', {
                    animate__animated: true,
                    animate__bounceIn: animate,
                  })}
                >
                  {translate('hunt.career.card.card_1.title')}
                </div>
              )}
            />

            <div className='h6'>
              {translate('hunt.career.card.card_1.sub_title')}
            </div>
          </div>

          <div className='col-3' />

          <div className={clsx('col-3', 'career-card-container')}>
            <AnimatiopnOnScrollWrap
              render={(ref, animate) => (
                <div
                  ref={ref}
                  className={clsx('h2', {
                    animate__animated: true,
                    animate__bounceIn: animate,
                  })}
                >
                  {translate('hunt.career.card.card_2.title')}
                </div>
              )}
            />

            <div className='h6'>
              {translate('hunt.career.card.card_2.sub_title')}
            </div>
          </div>
        </div>

        <div className='z-2 position-relative row mb-5'>
          <div className={clsx('col-3', 'career-card-container')}>
            <AnimatiopnOnScrollWrap
              render={(ref, animate) => (
                <h2
                  ref={ref}
                  className={clsx('h2', {
                    animate__animated: true,
                    animate__bounceIn: animate,
                  })}
                >
                  {translate('hunt.career.card.card_3.title')}
                </h2>
              )}
            />

            <h6 className='h6'>
              {translate('hunt.career.card.card_3.sub_title')}
            </h6>
          </div>

          <div className='col-3' />

          <div className={clsx('col-3', 'career-card-container')}>
            <AnimatiopnOnScrollWrap
              render={(ref, animate) => (
                <h2
                  ref={ref}
                  className={clsx('h2', {
                    animate__animated: true,
                    animate__bounceIn: animate,
                  })}
                >
                  {translate('hunt.career.card.card_4.title')}
                </h2>
              )}
            />
            <h6 className='h6'>
              {translate('hunt.career.card.card_4.sub_title')}
            </h6>
          </div>

          <div className='col-3' />
        </div>
      </div>

      <div className='career-mobile-container'>
        <div className='row d-flex justify-content-center align-items-center m-0'>
          <div className='col-11 career-info-container'>
            <div className='h3'>{translate('hunt.career.title')}</div>
            <div className='h6'>{translate('hunt.career.sub_title')}</div>
          </div>

          <div className='position-relative mb-5 row d-flex justify-content-center align-items-center'>
            <div className='position-relative col-10 col-sm-9 p-3'>
              <Image
                alt='background'
                src='/images/home-page/AboutTheme.png'
                layout='fill'
                objectFit='cover'
                objectPosition='top left'
              />

              <div className='z-2 position-relative'>
                <ReactSlick settings={settings}>
                  <div className='row d-flex justify-content-center align-items-center mb-4'>
                    <div className='col-12 col-sm-10 p-3'>
                      <div className={clsx('career-card-container')}>
                        <AnimatiopnOnScrollWrap
                          render={(ref, animate) => (
                            <div
                              ref={ref}
                              className={clsx('h2', {
                                animate__animated: true,
                                animate__bounceIn: animate,
                              })}
                            >
                              {translate('hunt.career.card.card_1.title')}
                            </div>
                          )}
                        />

                        <div className='h6'>
                          {translate('hunt.career.card.card_1.sub_title')}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='row d-flex justify-content-center align-items-center mb-4'>
                    <div className='col-12 col-sm-10 p-3'>
                      <div className={clsx('career-card-container')}>
                        <AnimatiopnOnScrollWrap
                          render={(ref, animate) => (
                            <div
                              ref={ref}
                              className={clsx('h2', {
                                animate__animated: true,
                                animate__bounceIn: animate,
                              })}
                            >
                              {translate('hunt.career.card.card_2.title')}
                            </div>
                          )}
                        />

                        <div className='h6'>
                          {translate('hunt.career.card.card_2.sub_title')}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='row d-flex justify-content-center align-items-center mb-4'>
                    <div className='col-12 col-sm-10 p-3'>
                      <div className={clsx('career-card-container')}>
                        <AnimatiopnOnScrollWrap
                          render={(ref, animate) => (
                            <h2
                              ref={ref}
                              className={clsx('h2', {
                                animate__animated: true,
                                animate__bounceIn: animate,
                              })}
                            >
                              {translate('hunt.career.card.card_3.title')}
                            </h2>
                          )}
                        />

                        <h6 className='h6'>
                          {translate('hunt.career.card.card_3.sub_title')}
                        </h6>
                      </div>
                    </div>
                  </div>

                  <div className='row d-flex justify-content-center align-items-center mb-4'>
                    <div className='col-12 col-sm-10 p-3'>
                      <div className={clsx('career-card-container')}>
                        <AnimatiopnOnScrollWrap
                          render={(ref, animate) => (
                            <h2
                              ref={ref}
                              className={clsx('h2', {
                                animate__animated: true,
                                animate__bounceIn: animate,
                              })}
                            >
                              {translate('hunt.career.card.card_4.title')}
                            </h2>
                          )}
                        />
                        <h6 className='h6'>
                          {translate('hunt.career.card.card_4.sub_title')}
                        </h6>
                      </div>
                    </div>
                  </div>
                </ReactSlick>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Career
