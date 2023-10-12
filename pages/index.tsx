import type { NextPage } from 'next'
import { LocalBusinessJsonLd, NextSeo } from 'next-seo'

import { SCREEN } from '@/config/global'

import Page from '@/components/Page'
import BannerContact from '@/components/banner/contact'

import { PATH_CONFIG } from '@/routes/paths'

import HomeSection from '@/sections/home'

export const getStaticProps = async () => {
  return {
    props: {
      pageName: SCREEN.HOME_PAGE,
    },
  }
}

const HomePage: NextPage = () => {
  return (
    <>
      <LocalBusinessJsonLd
        type='Company'
        id='https://fetch.tech/'
        name='Fetch Technology Vietnam'
        description='Build your own Software Engineers team in Vietnam'
        url='https://fetch.tech/'
        telephone='028 6654 7574'
        address={{
          streetAddress: '1 Ung Văn Khiêm',
          addressLocality: 'Phường 25, Bình Thạnh',
          addressRegion: 'Thành phố Hồ Chí Minh',
          addressPostalCode: '700000',
        }}
        geo={{
          latitude: '15.8344676',
          longitude: '102.1680815,6',
        }}
        images={[
          'https://fetch.tech/_next/image?url=%2Fimages%2Fhome-page%2Fbanner.png&w=1080&q=75',
        ]}
        openingHours={[
          {
            opens: '09:00',
            closes: '18:00',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          },
        ]}
      />

      <Page title=''>
        <NextSeo
          title='Fetch Technology | Build your own Software Engineers team in Vietnam'
          description='Home page'
          canonical={'https://fetch.tech/'}
          themeColor='#ffbf14'
          additionalLinkTags={[
            {
              rel: 'icon',
              href: '/favicon.ico',
            },
            {
              rel: 'apple-touch-icon',
              href: '/apple-touch-icon.png',
              sizes: '192x192',
            },
            {
              rel: 'manifest',
              href: '/manifest.json',
            },
          ]}
          openGraph={{
            url: 'https://fetch.tech/',
            title:
              'Fetch Technology | Build your own Software Engineers team in Vietnam',
            description: 'Home page',
            images: [
              {
                url: 'https://fetch.tech/_next/image?url=%2Fimages%2Fhome-page%2Fbanner.png&w=1080&q=75',
                width: 200,
                height: 100,
                alt: 'home page thumbnail',
                type: 'image/png',
              },
            ],
            siteName: 'Fetch Home Page',
          }}
          twitter={{
            handle: '@handle',
            site: '@site',
            cardType: 'summary_large_image',
          }}
        />

        <HomeSection />

        <BannerContact
          title='Find the perfect fit with Fetch'
          subTitle='Find the perfect fit with Fetch'
          buttonText='Sign Up'
          linkTo={PATH_CONFIG.contact}
        />
      </Page>
    </>
  )
}

export default HomePage
