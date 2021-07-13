import '../css/style.css'
import Head from 'next/head'
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Agnieszka Firla</title>
      </Head>
        <Component {...pageProps} />
    </>
  )
}

export default MyApp
