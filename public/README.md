# Public Assets

This directory contains static assets served at the root URL.

## Common files to add:

- `favicon.ico` - Site favicon
- `logo.png` - Company logo
- `og-image.png` - Open Graph social sharing image
- `robots.txt` - Search engine crawling rules
- `sitemap.xml` - Site structure for SEO

## Usage

Files in this directory can be referenced as:
```html
<img src="/logo.png" alt="Feecom Logo" />
```

Or in Next.js:
```tsx
import Image from 'next/image';

<Image src="/logo.png" alt="Feecom Logo" width={200} height={50} />
```
