import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* Theme color */}
        <meta name="theme-color" content="#4f46e5" />
        
        {/* Canonical tag will be added per page */}
        <meta name="google-site-verification" content="YOUR_GOOGLE_VERIFICATION_CODE" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
