'use client'

// Import necessary packages and components
import Head from 'next/head'
import { Poppins } from 'next/font/google'
import ClientSideProviders from '@/Context/ClientSideProviders'
import 'bootstrap/dist/css/bootstrap.min.css'
import './globals.scss'
import 'react-phone-number-input/style.css'
import 'react-toastify/dist/ReactToastify.css'
import 'react-loading-skeleton/dist/skeleton.css'

const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  subsets: ['latin'],
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
          name="viewport"
        />
        <meta content="yes" name="apple-mobile-web-app-capable" />
        <meta content="default" name="apple-mobile-web-app-status-bar-style" />
        <meta content="yes" name="mobile-web-app-capable" />
        <meta content="website" name="og:type" property="og:type" />
        <meta content="summary_large_image" name="twitter:card" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Head>
      <body className={poppins.className}>
        <ClientSideProviders>{children}</ClientSideProviders>
      </body>
    </html>
  )
}
