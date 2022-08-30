import React from 'react'

export default {
  github: 'https://github.com/withmeed/aikido',
  docsRepositoryBase: 'https://github.com/withmeed/aikido-docs/blob/master',
  titleSuffix: '- Aikido Documentation',
  floatTOC: true,
  logo: (
    <>
      <span className="mr-2 font-extrabold hidden md:inline">Aikido</span>
      <span className="text-gray-600 font-normal hidden md:inline">
        Product and Protocol Documentation
      </span>
    </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content="Aikido: Product and Protocol Documentation" />
      <meta name="og:description" content="Aikido: Product and Protocol Documentation" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="https://docs.aikido.work/og.png" />
      <meta name="twitter:site:domain" content="docs.aikido.work" />
      <meta name="twitter:url" content="https://docs.aikido.work" />
      <meta name="og:title" content="Aikido: Product and Protocol Documentation" />
      <meta name="og:image" content="https://docs.aikido.work/og.png" />
      <meta name="apple-mobile-web-app-title" content="Aikido Documentation" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"  
        sizes="192x192"
        href="/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
    </>
  ),
  search: true,
  floatTOC: true,
  prevLinks: false,
  nextLinks: true,
  footer: false,
  defaultMenuCollapsed: false,
  footerEditLink: 'Edit this page on GitHub',
  footerText: <>MIT {new Date().getFullYear()} © Lab0324, Inc..</>,
  unstable_faviconGlyph: '🥷',
  darkMode: false,
}
