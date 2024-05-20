import Head from 'next/head'

export const SEO = ({ config = {} }) => {

  // Default values or empty strings to ensure safety
  const {
    name = '',
    title = 'Default Title',
    description = 'Default Description',
    themeColor = '#FFFFFF',
    themeColorDark = '#000000',
    image = '',
    favicon = '',
    url = '',
    keywords = '',
  } = config

  return (
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no, viewport-fit=cover" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="//example.com" /> {/* Use actual domains where resources are loaded */}
      <link rel="apple-touch-icon" sizes="180x180" href={image} />
      <link rel="icon" type="image/png" sizes="32x32" href={favicon} />
      <link rel="icon" type="image/png" sizes="16x16" href={favicon} />
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${image}?d=l`} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={name} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <title>{title}</title>
    </Head>
  )
}
