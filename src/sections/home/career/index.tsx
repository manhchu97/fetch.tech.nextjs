import Image, { ImageProps } from 'next/image'
import Link from 'next/link'

import clsx from 'clsx'

import AnimatiopnOnScrollWrap from '@/components/AnimationOnScrollWrap'
import ReactSlick from '@/components/ReactSlick'

import style from './Career.module.scss'

type CardItem = {
  imgProps: ImageProps
  title: string
  description: string
  name: string
}

const Card = ({ imgProps, title, description, name }: CardItem) => (
  <div className={style['card']}>
    <div className={clsx(style['card__top'])}>
      <Image {...imgProps} alt='card' />
    </div>

    <div className={style['card__bottom']}>
      <h6 className='h6'>{title}</h6>

      <div>
        <h6 className='h6'>{name}</h6>
        <h6 className='h6'>{description}</h6>
      </div>
    </div>
  </div>
)

const CareerReview = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <div className={clsx(style['Career__review'])}>
      <h3 className='h3 text-center'>Client reviews and testimony</h3>

      <h6 className='h6 text-center'>What Fetch partners have to say</h6>

      <AnimatiopnOnScrollWrap
        render={(ref, animate) => (
          <div
            ref={ref}
            className={clsx(style['Career__review__content'], {
              animate__animated: true,
              animate__flipInX: animate,
            })}
          >
            <ReactSlick settings={settings}>
              <Card
                imgProps={{
                  src: '/images/home-page/FeedbackPic1.png',
                  width: 156,
                  height: 62,
                }}
                title="“Their team was incredibly helpful in helping us find the perfect Vietnamese colleague. We couldn't have been happier with the overall experience – excellent communication and stellar work. Best of all, we didn't waste precious time and resources to set up an office in Vietnam. Fetch handled all of that for us.”"
                name='Donald'
                description='Co-founder'
              />

              <Card
                imgProps={{
                  src: '/images/home-page/FeedbackPic2.png',
                  width: 239,
                  height: 31,
                }}
                title='“Fetch is amazing! We were able to recruit talented developers in a matter of weeks instead of months. The quality of their staff is extremely high as these engineers can onboard almost immediately and ramp incredibly fast.”'
                name='Michael'
                description='Co-founder'
              />

              <Card
                imgProps={{
                  src: '/images/home-page/FeedbackPic3.png',
                  width: 224,
                  height: 102,
                }}
                title="“Hiring is costly – a portion goes to recruitment agencies, another to the recruitment process and another to the actual interviews. We haven't got down to other expenses such as office rent as well as operational costs. Fetch eliminates a significant chunk of these expenditures and helps overcome our past hiring difficulties.”"
                name='Qi Yu'
                description='Founder'
              />
            </ReactSlick>
          </div>
        )}
      />
    </div>
  )
}

const CareerInfo = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  }

  return (
    <div className={clsx(style['Career__info'])}>
      <Image
        alt='background'
        src='/images/home-page/AboutTheme.png'
        layout='fill'
        objectFit='cover'
        objectPosition='top left'
      />

      <div className={clsx(style['Career__info__top'])}>
        <h3 className='h3'>A leader in tech</h3>

        <h6 className='h6'>
          From humble beginnings with just 12 persons in 2014, Fetch is now an
          established name in the tech industry with an enrolment of over 150
          employees today.
        </h6>
      </div>

      <div className={clsx(style['Career__info__bottom'])}>
        <div className='d-md-block d-none'>
          <div className='row mb-5'>
            <div className={clsx('col-3')}></div>

            <div className={clsx('col-3', style['Career__info__bottom__item'])}>
              <AnimatiopnOnScrollWrap
                render={(ref, animate) => (
                  <h2
                    ref={ref}
                    className={clsx('h2', {
                      animate__animated: true,
                      animate__bounceIn: animate,
                    })}
                  >
                    500+
                  </h2>
                )}
              />

              <h6 className='h6'>successful deployments</h6>
            </div>

            <div className={clsx('col-3')}></div>

            <div className={clsx('col-3', style['Career__info__bottom__item'])}>
              <AnimatiopnOnScrollWrap
                render={(ref, animate) => (
                  <h2
                    ref={ref}
                    className={clsx('h2', {
                      animate__animated: true,
                      animate__bounceIn: animate,
                    })}
                  >
                    7+
                  </h2>
                )}
              />

              <h6 className='h6'>years in the business</h6>
            </div>
          </div>

          <div className='row'>
            <div className={clsx('col-3', style['Career__info__bottom__item'])}>
              <AnimatiopnOnScrollWrap
                render={(ref, animate) => (
                  <h2
                    ref={ref}
                    className={clsx('h2', {
                      animate__animated: true,
                      animate__bounceIn: animate,
                    })}
                  >
                    USD 5 million
                  </h2>
                )}
              />

              <h6 className='h6'>remunerated to date</h6>
            </div>

            <div className={clsx('col-3')}></div>

            <div className={clsx('col-3', style['Career__info__bottom__item'])}>
              <AnimatiopnOnScrollWrap
                render={(ref, animate) => (
                  <h2
                    ref={ref}
                    className={clsx('h2', {
                      animate__animated: true,
                      animate__bounceIn: animate,
                    })}
                  >
                    100+
                  </h2>
                )}
              />
              <h6 className='h6'>partnerships and growing</h6>
            </div>

            <div className={clsx('col-3')}></div>
          </div>
        </div>

        <div className='d-block d-md-none'>
          <ReactSlick settings={settings}>
            <div
              className={clsx(
                style['Career__info__bottom__item'],
                style['Career__info__bottom__item--mobile'],
              )}
            >
              <AnimatiopnOnScrollWrap
                render={(ref, animate) => (
                  <h2
                    ref={ref}
                    className={clsx('h2', {
                      animate__animated: true,
                      animate__bounceIn: animate,
                    })}
                  >
                    500+
                  </h2>
                )}
              />

              <h6 className='h6'>successful deployments</h6>
            </div>

            <div
              className={clsx(
                style['Career__info__bottom__item'],
                style['Career__info__bottom__item--mobile'],
              )}
            >
              <AnimatiopnOnScrollWrap
                render={(ref, animate) => (
                  <h2
                    ref={ref}
                    className={clsx('h2', {
                      animate__animated: true,
                      animate__bounceIn: animate,
                    })}
                  >
                    7+
                  </h2>
                )}
              />

              <h6 className='h6'>years in the business</h6>
            </div>

            <div
              className={clsx(
                style['Career__info__bottom__item'],
                style['Career__info__bottom__item--mobile'],
              )}
            >
              <AnimatiopnOnScrollWrap
                render={(ref, animate) => (
                  <h2
                    ref={ref}
                    className={clsx('h2', {
                      animate__animated: true,
                      animate__bounceIn: animate,
                    })}
                  >
                    USD 5 million
                  </h2>
                )}
              />

              <h6 className='h6'>remunerated to date</h6>
            </div>

            <div
              className={clsx(
                style['Career__info__bottom__item'],
                style['Career__info__bottom__item--mobile'],
              )}
            >
              <AnimatiopnOnScrollWrap
                render={(ref, animate) => (
                  <h2
                    ref={ref}
                    className={clsx('h2', {
                      animate__animated: true,
                      animate__bounceIn: animate,
                    })}
                  >
                    100+
                  </h2>
                )}
              />

              <h6 className='h6'>partnerships and growing</h6>
            </div>
          </ReactSlick>
        </div>
      </div>
    </div>
  )
}

const Career = () => {
  return (
    <div className={style['Career']}>
      <AnimatiopnOnScrollWrap
        render={(ref, animate) => (
          <div
            ref={ref}
            className={clsx(style['Career__search'], {
              animate__animated: true,
              animate__flipInX: animate,
            })}
          >
            <div
              className={clsx(
                style['Career__search__img'],
                'd-none',
                'd-lg-block',
              )}
            >
              <Image
                src='/images/home-page/SearchCareer.png'
                alt='Search Career'
                width={277}
                height={184}
              />
            </div>

            <div
              className={clsx(
                style['Career__search__img'],
                'd-lg-none',
                'd-block',
              )}
            >
              <Image
                src='/images/home-page/RoundSearchIcon.png'
                alt='Search Career'
                width={68}
                height={68}
              />
            </div>

            <div className={style['Career__search__content']}>
              <h3 className='h3'>In search of a career instead?</h3>

              <h6 className='h6'>
                We are always looking to expand the Fetch team.
              </h6>
            </div>

            <Link href='/employees'>
              <button>Find now</button>
            </Link>
          </div>
        )}
      />

      <CareerReview />

      <CareerInfo />
    </div>
  )
}
export default Career
