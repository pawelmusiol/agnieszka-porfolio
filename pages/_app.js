import '../css/style.scss'
import '../css/background.scss'
import '../css/admin.scss'
import Head from 'next/head'
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Agnieszka Firla</title>
        <style>
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@500;600&display=swap');
        </style>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
