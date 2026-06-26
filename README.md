# Ismail Group AI — Professional Landing Website

A modern, responsive website promoting Ismail Group AI's digital products available on Payhip.

## 🚀 Stack

- **Next.js 13** — React framework for production
- **TypeScript** — Type-safe development
- **Tailwind CSS** — Utility-first styling
- **Responsive Design** — Mobile-first approach
- **SEO Optimized** — Full SEO implementation with structured data

## 🎯 Features

✓ Home page with hero section and CTAs  
✓ Products showcase page  
✓ About page  
✓ Contact form  
✓ Privacy & Terms pages  
✓ Responsive mobile menu  
✓ **Full SEO optimization** — Meta tags, Open Graph, Schema.org structured data  
✓ **Sitemap & Robots.txt** — Search engine discovery  
✓ **Security headers** — X-Frame-Options, CSP, etc.  
✓ **PWA ready** — Manifest.json for progressive web app  
✓ Direct integration with Payhip store  
✓ Global audience support (EN & multilingual ready)  

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 📦 Deployment

### Deploy on Vercel (Recommended)

The easiest way to deploy is with [Vercel](https://vercel.com):

1. Push code to GitHub
2. Connect repo to Vercel
3. Auto-deploy on each push
4. Vercel will automatically use `vercel.json` configuration

### Custom Domain

Add a custom domain in Vercel settings for professional branding.

## 📝 Configuration

Update these values in the code:

- **Payhip Store URL** — https://payhip.com/IsmailgroupAI (replace with your store)
- **Contact Email** — support@ismailgroupai.com
- **Metadata** — Update OG tags and descriptions
- **Google Verification** — Replace verification code in `pages/_document.tsx`

## 📊 SEO & Analytics

The site includes:

- ✅ Meta tags and Open Graph tags
- ✅ Twitter Card optimization
- ✅ JSON-LD structured data (Schema.org)
- ✅ Canonical URLs on all pages
- ✅ Sitemap.xml for search engines
- ✅ Robots.txt for crawling guidance
- ✅ Mobile-friendly design
- ✅ Fast loading with optimized images & code splitting
- ✅ Security headers (X-Frame-Options, X-Content-Type-Options, etc.)

### Next Steps for SEO:

1. **Submit to Google Search Console**
   - Go to [Google Search Console](https://search.google.com/search-console/)
   - Add your domain
   - Submit sitemap: `/sitemap.xml`
   - Verify domain ownership

2. **Create OG Image**
   - Add a high-quality image at `public/og-image.png`
   - Size: 1200x630 pixels

3. **Set up Analytics**
   - Add Google Analytics ID to environment variables

4. **Submit to Bing Webmaster**
   - Go to [Bing Webmaster Tools](https://www.bing.com/webmasters/)
   - Submit your sitemap

## 📄 Pages

- `/` — Home page
- `/products` — Product listing
- `/about` — About page
- `/contact` — Contact form
- `/privacy` — Privacy policy
- `/terms` — Terms of service
- `/sitemap.xml` — XML Sitemap
- `/robots.txt` — Robots file

## 📂 Project Structure

```
├── pages/              # Next.js pages
│   ├── _app.tsx       # App wrapper
│   ├── _document.tsx  # Document wrapper with head configuration
│   ├── index.tsx      # Home page
│   ├── products.tsx   # Products page
│   ├── about.tsx      # About page
│   ├── contact.tsx    # Contact page
│   ├── privacy.tsx    # Privacy policy
│   └── terms.tsx      # Terms of service
├── components/        # Reusable components
│   ├── Header.tsx     # Navigation header
│   └── Footer.tsx     # Footer component
├── styles/            # Global styles
├── public/            # Static assets
│   ├── robots.txt     # SEO robots file
│   ├── sitemap.xml    # XML sitemap
│   ├── manifest.json  # PWA manifest
│   └── og-image.png   # Open Graph image
├── next.config.js     # Next.js configuration
├── vercel.json        # Vercel deployment config
└── tsconfig.json      # TypeScript configuration
```

## 🤝 Support

For questions or issues, visit: https://payhip.com/IsmailgroupAI

## 📄 License

All rights reserved © 2024 Ismail Group AI
