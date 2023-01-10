import { ReactElement } from 'react-markdown/lib/react-markdown'

import Image from 'next/image'
import Link from 'next/link'

import clsx from 'clsx'

import Career from '@/sections/home/career'
import Cooperate from '@/sections/home/cooperate'
import Talents from '@/sections/home/talents'

import style from './Home.module.scss'

const Home = (): ReactElement => {
  return (
    <div
      id='homePage--content'
      style={{
        width: '100%',
        overflowX: 'hidden',
      }}
    >
      <div className={style['banner']}>
        <div className='row flex-lg-row flex-column-reverse'>
          <div className={clsx('col-lg-6', 'col-12', style['banner__left'])}>
            <h1 className='h1'>Smoother recruiting begins with Fetch</h1>

            <h6 className='h6-grey-color'>
              Hiring and managing your offshore staff need not be complicated.
              Build your remote dream team effortlessly and let Fetch take care
              of the HR side of business.
            </h6>

            <Link href='/services/1'>
              <button type='button'>Learn more</button>
            </Link>
          </div>

          <div
            className={clsx(
              'col-lg-6',
              'col-12',
              'text-start',
              'text-lg-end',
              style['banner__right'],
            )}
          >
            <Image
              src='/images/home-page/banner.png'
              alt='Picture of the author'
              width={540}
              height={432}
              priority
            />
          </div>
        </div>
      </div>

      <Cooperate />

      <Talents />

      <Career />
    </div>
  )
}

export default Home
