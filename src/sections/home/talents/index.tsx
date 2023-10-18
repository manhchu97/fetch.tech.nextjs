import Image from 'next/image'
import Link from 'next/link'

import clsx from 'clsx'

import AnimatiopnOnScrollWrap from '@/components/AnimationOnScrollWrap'
import ReactSlick from '@/components/ReactSlick'

import style from './Talents.module.scss'

type CardItem = {
  srcImg: string
  title: string
  content: string
}

const Card = ({ srcImg, title, content }: CardItem) => (
  <div className={style['card']}>
    <div className={clsx(style['card__top'])}>
      <Image src={srcImg} width={209} height={173} alt='card' />
    </div>

    <div className={style['card__bottom']}>
      <h5 className='h5'>{title}</h5>
      <h6 className='h6'>{content}</h6>
    </div>
  </div>
)

const TalentInfo = () => {
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
    <AnimatiopnOnScrollWrap
      render={(ref, animate) => (
        <div
          ref={ref}
          className={clsx(style['talents__info'], {
            animate__animated: true,
            animate__zoomIn: animate,
          })}
        >
          <ReactSlick settings={settings}>
            <Card
              srcImg='/images/home-page/card1.svg'
              title='Interview Process'
              content='No staff delegation – enjoy absolute control over the entire hiring
      process'
            />

            <Card
              srcImg='/images/home-page/card2.svg'
              title='No staff delegation'
              content='Get absolute control over the entire hiring process'
            />

            <Card
              srcImg='/images/home-page/card3.svg'
              title='Probational term guarantee'
              content='Switch to find your perfect fit (within a trial period)'
            />
          </ReactSlick>
        </div>
      )}
    />
  )
}

const Talents = () => {
  return (
    <div className={style['talents']}>
      <div className={style['talents__background']}>
        <Image
          alt='background'
          src='/images/home-page/Map.png'
          layout='fill'
          objectFit='cover'
        />
      </div>

      <AnimatiopnOnScrollWrap
        render={(ref, animate) => (
          <div
            ref={ref}
            className={clsx(style['talents__logo'], {
              animate__animated: true,
              animate__zoomIn: animate,
            })}
          >
            <Image
              src='/images/home-page/Star.png'
              width={46}
              height={46}
              alt='logo'
            />
          </div>
        )}
      />

      <AnimatiopnOnScrollWrap
        render={(ref, animate) => (
          <h2
            ref={ref}
            className={clsx('h1', {
              animate__animated: true,
              animate__zoomIn: animate,
            })}
          >
            Get the best talents in Vietnam with us
          </h2>
        )}
      />

      <AnimatiopnOnScrollWrap
        render={(ref, animate) => (
          <h6
            ref={ref}
            className={clsx('h6', {
              animate__animated: true,
              animate__zoomIn: animate,
            })}
          >
            Whether you’re looking for a software developer, tester or designer,
            we got you covered.
          </h6>
        )}
      />

      <AnimatiopnOnScrollWrap
        render={(ref, animate) => (
          <Link href='/services/1'>
            <button
              ref={ref}
              className={clsx({
                animate__animated: true,
                animate__zoomIn: animate,
              })}
            >
              Find out more
            </button>
          </Link>
        )}
      />

      <div className={style['talents__image']}>
        <Image
          src='/images/home-page/Mapvietnam.png'
          width={140}
          height={316}
          alt='viet nam map'
        />
      </div>

      <TalentInfo />
    </div>
  )
}

export default Talents
