export const SEO_CONFIG = {
  titleTemplate: '%s | Ismail Group AI',
  defaultTitle: 'Ismail Group AI — Premium Digital Products & AI Tools',
  description: 'High-quality digital products and AI tools by Ismail Group. Premium templates, prompts, and resources. Buy on Payhip with instant access.',
  canonical: 'https://ismail-groupe-7t6g3zjoq-ismail-group.vercel.app',
  
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ismail-groupe-7t6g3zjoq-ismail-group.vercel.app',
    siteName: 'Ismail Group AI',
    images: [
      {
        url: 'https://ismail-groupe-7t6g3zjoq-ismail-group.vercel.app/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Ismail Group AI Digital Products',
        type: 'image/png',
      },
    ],
  },

  twitter: {
    handle: '@IsmailGroupAI',
    site: '@IsmailGroupAI',
    cardType: 'summary_large_image',
  },

  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large',
    'max-video-preview': -1,
  },

  additionalMetaTags: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
    {
      name: 'keywords',
      content: 'AI tools, digital products, templates, prompts, Payhip store, digital assets',
    },
    {
      name: 'author',
      content: 'Ismail Group',
    },
    {
      name: 'theme-color',
      content: '#4f46e5',
    },
    {
      httpEquiv: 'x-ua-compatible',
      content: 'IE=edge',
    },
  ],

  languageAlternates: [
    {
      hrefLang: 'en',
      href: 'https://ismail-groupe-7t6g3zjoq-ismail-group.vercel.app',
    },
    {
      hrefLang: 'ar',
      href: 'https://ismail-groupe-7t6g3zjoq-ismail-group.vercel.app/ar',
    },
  ],
};

export const COMPANY_DATA = {
  name: 'Ismail Group AI',
  description: 'Premium digital products and AI tools provider',
  url: 'https://ismail-groupe-7t6g3zjoq-ismail-group.vercel.app',
  email: 'support@ismailgroupai.com',
  phone: '+1-234-567-8900',
  sameAs: [
    'https://payhip.com/IsmailgroupAI',
    'https://twitter.com/IsmailGroupAI',
  ],
  address: {
    streetAddress: '123 Digital Street',
    addressLocality: 'Tech City',
    addressRegion: 'TC',
    postalCode: '12345',
    addressCountry: 'US',
  },
};
