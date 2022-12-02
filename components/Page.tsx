import Head from 'next/head'

import Header from '@components/header'
import Footer from '@components/footer'

interface PageProps {
  children: React.ReactNode
  title: string
}

const Page = ({ children, title = '' }: PageProps): React.ReactElement => {
  return (
    <>
      <Head>
        <title>{`Fetch Technology | ${
          title || 'Build your own Software Engineers team in Vietnam'
        }`}</title>
      </Head>

      <>
        <Header />
        {children}
        <Footer />
      </>
    </>
  )
}

export default Page
