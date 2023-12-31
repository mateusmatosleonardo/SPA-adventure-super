import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
})


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <main className={montserrat.className}>
        <Component  {...pageProps} />
      </main>
    </>
  )
}