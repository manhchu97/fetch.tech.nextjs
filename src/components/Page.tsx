import Head from 'next/head'

import Footer from '@/components/footer'
import Header from '@/components/header'

interface PageProps {
  children: React.ReactNode
  title: string
  themeColor?: string
}

const Page = ({
  children,
  title = '',
  themeColor = '',
}: PageProps): React.ReactElement => {
  return (
    <>
      <Head>
        <title>{`Fetch Technology | ${
          title || 'Build your own Software Engineers team in Vietnam'
        }`}</title>
        <meta name='theme-color' content='#000000' />
        <link rel='icon' href='/favicon.ico' />
        <link rel='apple-touch-icon' href='/apple-touch-icon.png' />

        {/*
          manifest.json provides metadata used when your web app is installed on a
          user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
        */}
        <link rel='manifest' href='/manifest.json' />
      </Head>

      <>
        <Header themeColor={themeColor} />
        {children}
        <Footer />
      </>
    </>
  )
}

export default Page
