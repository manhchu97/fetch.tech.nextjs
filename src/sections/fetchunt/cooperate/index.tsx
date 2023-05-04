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
    <div className={clsx(style['cooperate'], 'overflow-hidden')}>
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
              <h3 className='h3'>
                + 1000 doanh nghiệp lớn trên thế giới tin tưởng
              </h3>

              <h6 className='h6'>
                Sự hài lòng của bạn là niềm tự hào và thành công lớn nhất của
                chúng tôi
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
              <Link href='https://fetch.tech/'>
                <a target='_blank' rel='noopener noreferrer'>
                  <button type='button'>Tìm hiểu thêm</button>
                </a>
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
    </div>
  )
}

export default Cooperate
