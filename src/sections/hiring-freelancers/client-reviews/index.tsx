import Image, { ImageProps } from 'next/image'

import clsx from 'clsx'

import AnimatiopnOnScrollWrap from '@/components/AnimationOnScrollWrap'
import ReactSlick from '@/components/ReactSlick'

import style from './ClientReviews.module.scss'

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

const ClientReviews = () => {
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
    <div className={clsx(style['client_review'])}>
      <h3 className='h3 text-center'>Testimonials</h3>

      <h6 className='h6 text-center'>What our clients are saying</h6>

      <AnimatiopnOnScrollWrap
        render={(ref, animate) => (
          <div
            ref={ref}
            className={clsx(style['client_review__content'], {
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

              {/* <Card
                imgProps={{
                  src: '/images/home-page/FeedbackPic3.png',
                  width: 224,
                  height: 102,
                }}
                title="“Hiring is costly – a portion goes to recruitment agencies, another to the recruitment process and another to the actual interviews. We haven't got down to other expenses such as office rent as well as operational costs. Fetch eliminates a significant chunk of these expenditures and helps overcome our past hiring difficulties.”"
                name='Qi Yu'
                description='Founder'
              /> */}
            </ReactSlick>
          </div>
        )}
      />
    </div>
  )
}

export default ClientReviews
