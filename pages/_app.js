import '../css/style.scss'
import '../css/background.scss'
import Head from 'next/head'
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Agnieszka Firla</title>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700&display=swap');
        </style>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
