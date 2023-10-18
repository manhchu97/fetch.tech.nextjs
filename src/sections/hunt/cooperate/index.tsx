import Image from 'next/image'

import clsx from 'clsx'

import AnimatiopnOnScrollWrap from '@/components/AnimationOnScrollWrap'
import ReactSlick from '@/components/ReactSlick'

import useTranslation from '@/hooks/useTranslation'

import style from './Coopereate.module.scss'

const Cooperate = () => {
  const { translate } = useTranslation()

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
        breakpoint: 1400,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 2,
          dots: true,
          autoplay: true,
          centerMode: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          dots: false,
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
    <div className={style['cooperate-wrapper']}>
      <div className={clsx(style['cooperate'], 'overflow-hidden')}>
        <h2 className={style['cooperate__header']}>
          {translate('hunt.cooperate.title')}
        </h2>

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
      </div>
    </div>
  )
}

export default Cooperate
