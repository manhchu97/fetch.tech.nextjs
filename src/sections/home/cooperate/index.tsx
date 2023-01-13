import Image from 'next/image'
import Link from 'next/link'

import clsx from 'clsx'

import AnimatiopnOnScrollWrap from '@/components/AnimationOnScrollWrap'
import ReactSlick from '@/components/ReactSlick'

import style from './Coopereate.module.scss'

const Cooperate = () => {
  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 3,
    dots: false,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 3000,
    draggable: true,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 2,
          dots: true,
          autoplay: true,
          centerMode: true,
        },
      },
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          dots: true,
          autoplay: true,
          centerMode: false,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          dots: false,
          autoplay: true,
          centerMode: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: false,
          autoplay: true,
          centerMode: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
          autoplay: true,
          centerMode: false,
        },
      },
    ],
  }

  return (
    <div className={style['cooperate']}>
      <AnimatiopnOnScrollWrap
        render={(ref, animate) => (
          <div
            className={clsx(
              'row',
              'align-items-center',
              style['cooperate__content'],
              {
                animate__animated: true,
                animate__fadeInRight: animate,
              },
            )}
            ref={ref}
          >
            <div className='col-md-9 col-12 text-center text-md-start mb-4'>
              <h3 className='h3'>Trusted by many</h3>

              <h6 className='h6'>
                We’re proud to share our growing list of satisfied partners
              </h6>
            </div>

            <div
              className={clsx(
                'col-md-3',
                'col-12',
                'text-md-end',
                'text-center',
                style['cooperate__content__right'],
              )}
            >
              <Link href='/contact'>
                <button type='button'>Learn more</button>
              </Link>
            </div>
          </div>
        )}
      />

      <AnimatiopnOnScrollWrap
        render={(ref, animate) => (
          <div
            ref={ref}
            className={clsx({
              animate__animated: true,
              animate__fadeInLeft: animate,
            })}
          >
            <ReactSlick settings={settings}>
              <div className={style['slide--item']}>
                <div className={style['slide--item__content']}>
                  <Image
                    src='/images/home-page/Customer1.png'
                    width={93}
                    height={46}
                    alt='customer'
                  />
                </div>
              </div>

              <div className={style['slide--item']}>
                <div className={style['slide--item__content']}>
                  <Image
                    src='/images/home-page/Customer2.png'
                    width={55}
                    height={46}
                    alt='customer'
                  />
                </div>
              </div>

              <div className={style['slide--item']}>
                <div className={style['slide--item__content']}>
                  <Image
                    src='/images/home-page/Customer3.png'
                    width={99}
                    height={27}
                    alt='customer'
                  />
                </div>
              </div>

              <div className={style['slide--item']}>
                <div className={style['slide--item__content']}>
                  <Image
                    src='/images/home-page/Customer4.png'
                    width={91}
                    height={89}
                    alt='customer'
                  />
                </div>
              </div>

              <div className={style['slide--item']}>
                <div className={style['slide--item__content']}>
                  <Image
                    src='/images/home-page/Customer5.png'
                    width={71}
                    height={47}
                    alt='customer'
                  />
                </div>
              </div>

              <div className={style['slide--item']}>
                <div className={style['slide--item__content']}>
                  <Image
                    src='/images/home-page/Customer6.png'
                    width={103}
                    height={35}
                    alt='customer'
                  />
                </div>
              </div>
            </ReactSlick>
          </div>
        )}
      />

      <div className='cooperate__services'>
        <div
          className={clsx(
            'row',
            'align-items-center',
            'flex-md-row flex-column-reverse',
            style['cooperate__services__item'],
          )}
        >
          <div className={clsx('col-md-6', 'col-12')}>
            <AnimatiopnOnScrollWrap
              render={(ref, animate) => (
                <h2
                  ref={ref}
                  className={clsx('h2', {
                    animate__animated: true,
                    animate__fadeInTopLeft: animate,
                  })}
                >
                  A pioneer in the industry
                </h2>
              )}
            />

            <AnimatiopnOnScrollWrap
              render={(ref, animate) => (
                <div
                  ref={ref}
                  className={clsx(style['cooperate__services__item__content'], {
                    animate__animated: true,
                    animate__fadeInLeft: animate,
                  })}
                >
                  <span>
                    <Image
                      src='/images/home-page/CheckIcon.png'
                      width={15}
                      height={11}
                      alt='check-icon'
                    />
                  </span>

                  <div>
                    <h6 className={style['h6']}>
                      We’re experienced and reliable
                    </h6>

                    <h6 className={style['subtitle1']}>
                      Being one of the first in the field, we have gained a
                      strong grasp of the Vietnamese market.
                    </h6>
                  </div>
                </div>
              )}
            />

            <AnimatiopnOnScrollWrap
              render={(ref, animate) => (
                <div
                  ref={ref}
                  className={clsx(style['cooperate__services__item__content'], {
                    animate__animated: true,
                    animate__fadeInLeft: animate,
                  })}
                >
                  <span>
                    <Image
                      src='/images/home-page/CheckIcon.png'
                      width={15}
                      height={11}
                      alt='check-icon'
                    />
                  </span>

                  <div>
                    <h6 className={style['h6']}>
                      We’ve streamlined the process
                    </h6>

                    <h6 className={style['subtitle1']}>
                      Confidently purvey from our vetted professionals that have
                      been thoroughly assessed prior.
                    </h6>
                  </div>
                </div>
              )}
            />
          </div>

          <div
            className={clsx('col-md-6', 'col-12', 'text-md-end', 'text-start')}
          >
            <AnimatiopnOnScrollWrap
              render={(ref, animate) => (
                <div
                  ref={ref}
                  className={clsx({
                    animate__animated: true,
                    animate__fadeInTopRight: animate,
                  })}
                >
                  <Image
                    src='/images/home-page/service-theme1.png'
                    width={594}
                    height={329}
                    alt='service-theme1'
                  />
                </div>
              )}
            />
          </div>
        </div>

        <div
          className={clsx(
            'row',
            'align-items-center',
            style['cooperate__services__item'],
          )}
        >
          <div className={clsx('col-md-6', 'col-12', 'text-start')}>
            <AnimatiopnOnScrollWrap
              render={(ref, animate) => (
                <div
                  ref={ref}
                  className={clsx({
                    animate__animated: true,
                    animate__fadeInTopLeft: animate,
                  })}
                >
                  <Image
                    src='/images/home-page/service-theme2.png'
                    width={462}
                    height={391}
                    alt='service-theme2'
                  />
                </div>
              )}
            />
          </div>

          <div className={clsx('col-md-6', 'col-12')}>
            <AnimatiopnOnScrollWrap
              render={(ref, animate) => (
                <h2
                  ref={ref}
                  className={clsx('h2', {
                    animate__animated: true,
                    animate__fadeInTopRight: animate,
                  })}
                >
                  We deliver results
                </h2>
              )}
            />

            <AnimatiopnOnScrollWrap
              render={(ref, animate) => (
                <div
                  ref={ref}
                  className={clsx(style['cooperate__services__item__content'], {
                    animate__animated: true,
                    animate__fadeInRight: animate,
                  })}
                >
                  <span>
                    <Image
                      src='/images/home-page/CheckIcon.png'
                      width={15}
                      height={11}
                      alt='check-icon'
                    />
                  </span>

                  <div>
                    <h6 className={style['h6']}>Everything is taken care of</h6>

                    <h6 className={style['subtitle1']}>
                      We eliminate all the administrative tasks and paperwork –
                      simply interview and onboard your chosen candidate!
                    </h6>
                  </div>
                </div>
              )}
            />

            <AnimatiopnOnScrollWrap
              render={(ref, animate) => (
                <div
                  ref={ref}
                  className={clsx(style['cooperate__services__item__content'], {
                    animate__animated: true,
                    animate__fadeInRight: animate,
                  })}
                >
                  <span>
                    <Image
                      src='/images/home-page/CheckIcon.png'
                      width={15}
                      height={11}
                      alt='check-icon'
                    />
                  </span>

                  <div>
                    <h6 className={style['h6']}>100% transparency</h6>

                    <h6 className={style['subtitle1']}>
                      No hidden charges or unpleasant surprises – enjoy
                      competitive rates without compromising on your hires’
                      quality.
                    </h6>
                  </div>
                </div>
              )}
            />
          </div>
        </div>

        <div
          className={clsx(
            'row',
            'align-items-center',
            'flex-md-row flex-column-reverse',
            style['cooperate__services__item'],
          )}
        >
          <div className={clsx('col-md-6', 'col-12')}>
            <AnimatiopnOnScrollWrap
              render={(ref, animate) => (
                <h2
                  ref={ref}
                  className={clsx('h2', {
                    animate__animated: true,
                    animate__fadeInTopLeft: animate,
                  })}
                >
                  We give you unrivalled solutions
                </h2>
              )}
            />

            <AnimatiopnOnScrollWrap
              render={(ref, animate) => (
                <div
                  ref={ref}
                  className={clsx(style['cooperate__services__item__content'], {
                    animate__animated: true,
                    animate__fadeInLeft: animate,
                  })}
                >
                  <span>
                    <Image
                      src='/images/home-page/CheckIcon.png'
                      width={15}
                      height={11}
                      alt='check-icon'
                    />
                  </span>

                  <div>
                    <h6 className={style['h6']}>
                      Unrestricted flexibility and access
                    </h6>

                    <h6 className={style['subtitle1']}>
                      Our team is your team – get full control of your selected
                      talent without constraints and hindering from a middle
                      man.
                    </h6>
                  </div>
                </div>
              )}
            />

            <AnimatiopnOnScrollWrap
              render={(ref, animate) => (
                <div
                  ref={ref}
                  className={clsx(style['cooperate__services__item__content'], {
                    animate__animated: true,
                    animate__fadeInLeft: animate,
                  })}
                >
                  <span>
                    <Image
                      src='/images/home-page/CheckIcon.png'
                      width={15}
                      height={11}
                      alt='check-icon'
                    />
                  </span>

                  <div>
                    <h6 className={style['h6']}>On-site staff management</h6>

                    <h6 className={style['subtitle1']}>
                      We understand the challenges in managing a remote
                      employee. That’s why you only have to focus on the task at
                      hand and leave your HR concerns to us.
                    </h6>
                  </div>
                </div>
              )}
            />
          </div>

          <div
            className={clsx('col-md-6', 'col-12', 'text-md-end', 'text-start')}
          >
            <AnimatiopnOnScrollWrap
              render={(ref, animate) => (
                <div
                  ref={ref}
                  className={clsx({
                    animate__animated: true,
                    animate__fadeInTopRight: animate,
                  })}
                >
                  <Image
                    src='/images/home-page/service-theme3.png'
                    width={466}
                    height={438}
                    alt='service-theme3'
                  />
                </div>
              )}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cooperate
