# Clothing Store E-Commerce Website - Tokyo Talkies

## Summary

This is a modern, high-performance e-commerce website for **Tokyo Talkies** that showcases full-stack e-commerce engineering using component-based architecture (React.js / Next.js 14 App Router) for the front end and Shopify in headless mode for the back end. All prices and transactions are configured in Indian Rupees (**INR - ₹**).

## Key Features

- **Headless Shopify Integration**: Configured to run headlessly with product catalog, inventory, variants, collections, and cart handled securely via the Shopify Storefront GraphQL API.
- **Indian Rupee (INR ₹) Support**: Clean currency formatting localized with standard Indian numbering and symbols (`₹`).
- **Responsive & Modern Design**: Clean mobile-first and desktop layouts crafted with TypeScript, React.js, Next.js 14, and Tailwind CSS.
- **Interactive UI & Animations**: Smooth reveal and scroll animations powered by Framer Motion and customizable Swiper carousels.
- **SEO & Metadata Optimization**: Dynamic metadata generation, OpenGraph tags, JSON-LD structured data for products, sitemaps, and robots configuration.
- **Fast Performance & Asset Optimization**: Next.js image optimization, edge rendering, font self-hosting, and compressed media streaming.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **UI Library**: React 18, Tailwind CSS, Headless UI
- **Animations**: Framer Motion, React Scroll Parallax, React Fast Marquee
- **Carousels**: Swiper
- **E-Commerce**: Headless Shopify Storefront GraphQL API

## Environment Setup

Create a `.env.local` file in the root directory and add your Shopify Storefront credentials:

```bash
SHOPIFY_STORE_DOMAIN="your-shopify-store.myshopify.com"
SHOPIFY_STOREFRONT_ACCESS_TOKEN="your-storefront-access-token"
SITE_NAME="Tokyo Talkies"
NEXT_PUBLIC_SITE_URL="http://localhost:3000"
```

## Getting Started

Install the dependencies:

```bash
npm install
# or
pnpm install
```

Run the development server:

```bash
npm run dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Author

**Harshit Raj** — Shopify Merchant & Full-Stack Developer

- **GitHub**: [github.com/hrajsoni](https://github.com/hrajsoni)
- **LinkedIn**: [linkedin.com/in/harshitrajsoni](https://www.linkedin.com/in/harshitrajsoni/)
- **Instagram**: [@hraj.soni](https://www.instagram.com/hraj.soni/)
- **Email**: [hraj491@gmail.com](mailto:hraj491@gmail.com)

## License

This project is licensed under the terms of the GNU General Public License v3.0.
