import '../styles/globals.css'
import '../styles/index.css'
import {Head} from 'next/document'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Component {...pageProps} />
    </>
  )
}

export default MyApp
