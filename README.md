# Feecom Electronics & Exchange LLC

Production-ready Next.js App Router website for Feecom Electronics & Exchange LLC.

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Linting**: [ESLint](https://eslint.org/)
- **Node**: 20.x

## Project Structure

```
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── layout.tsx       # Root layout with Navbar & Footer
│   │   ├── page.tsx         # Home page
│   │   ├── globals.css      # Global styles
│   │   ├── products-services/
│   │   ├── how-it-works/
│   │   ├── trust-compliance/
│   │   └── contact/
│   ├── components/          # React components
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   └── lib/                 # Utility functions (to be expanded)
├── public/                  # Static assets
├── package.json
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── postcss.config.js
└── .eslintrc.js
```

## Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm or yarn package manager

### Local Development

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd Feecom_electronics-site
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

4. **Make changes** - The page will auto-update as you edit files.

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Building for Production

### Local Build

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Start the production server**:
   ```bash
   npm start
   ```

3. **Verify** - Open [http://localhost:3000](http://localhost:3000) to test the production build

### Production Build Checklist

- ✅ All TypeScript types are correct
- ✅ ESLint passes with zero errors
- ✅ No console warnings or errors
- ✅ All routes are accessible
- ✅ Images and assets load correctly
- ✅ Responsive design works on mobile/tablet/desktop

## Deploying to Vercel

### Step 1: Import Project

1. Go to [vercel.com](https://vercel.com) and sign in (or create an account)
2. Click **"Add New..."** → **"Project"**
3. Select **"Import Git Repository"**
4. Choose this repository: `FeeTheDeveloper/Feecom_electronics-site`
5. Vercel will auto-detect Next.js settings:
   - Framework Preset: `Next.js`
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`
6. Click **"Deploy"**
7. Wait for the build to complete (typically 1-2 minutes)

### Step 2: Attach Custom Domain

1. After deployment, go to your project dashboard
2. Click **"Settings"** → **"Domains"**
3. Enter your domain: `feecomelectronics.com`
4. Click **"Add"**
5. Vercel will provide DNS records to configure:
   - **Option A (Recommended)**: Add an `A` record pointing to `76.76.21.21`
   - **Option B**: Add a `CNAME` record pointing to `cname.vercel-dns.com`
6. For `www` subdomain, add another entry for `www.feecomelectronics.com`
7. Wait for DNS propagation (can take up to 48 hours, usually much faster)
8. Vercel will automatically provision an SSL certificate

### Step 3: Enable Automatic Deployments

- Any push to `main` branch will trigger a new deployment automatically
- Preview deployments are created for pull requests

### Vercel CLI (Alternative)

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy (from project root)
vercel

# Deploy to production
vercel --prod
```

## Content Updates

### Adding New Pages

1. Create a new folder in `src/app/`:
   ```
   src/app/new-page/
   ```

2. Create `page.tsx`:
   ```typescript
   export default function NewPage() {
     return (
       <div className="w-full">
         <section className="py-20 px-4">
           <div className="max-w-4xl mx-auto">
             <h1 className="text-4xl font-bold">Page Title</h1>
             {/* Content here */}
           </div>
         </section>
       </div>
     );
   }
   ```

3. Update `src/components/Navbar.tsx` to add the link if needed

### Updating Existing Content

- **Home Page**: Edit `src/app/page.tsx`
- **Products & Services**: Edit `src/app/products-services/page.tsx`
- **How It Works**: Edit `src/app/how-it-works/page.tsx`
- **Trust & Compliance**: Edit `src/app/trust-compliance/page.tsx`
- **Contact**: Edit `src/app/contact/page.tsx`
- **Navbar**: Edit `src/components/Navbar.tsx`
- **Footer**: Edit `src/components/Footer.tsx`

### Updating Contact Information

Contact details appear in multiple locations. Update these files when contact info changes:

| Information | File Location |
|-------------|---------------|
| Website, Email, Phone | `src/app/contact/page.tsx` - `contactInfo` array |
| Footer contact links | `src/components/Footer.tsx` - Contact section |
| SEO metadata | `src/app/contact/layout.tsx` - metadata description |

**Current Contact Info:**
- Website: `feecomelectronics.com`
- Email: `contact@feecomelectronics.com`
- Phone: `469-547-7428`

### Updating Logo

Replace the logo file at:
```
public/assets/feecom-logo.svg
```

The logo is used in:
- Homepage hero: `src/app/page.tsx`
- Navbar: `src/components/Navbar.tsx`
- Footer: `src/components/Footer.tsx`

### Styling

- All pages use Tailwind CSS classes
- Global styles are in `src/app/globals.css`
- Brand colors defined in `tailwind.config.ts`:
  - `bg`: #141519 (background)
  - `primary`: #3C89C3 (accent blue)
  - `deep`: #244964 (dark blue)
  - `steel`: #36688E (medium blue)
- Use `text-white/70` for muted text, `border-white/10` for subtle borders

### Adding Components

1. Create new file in `src/components/`:
   ```
   src/components/MyComponent.tsx
   ```

2. Import and use in pages:
   ```typescript
   import MyComponent from "@/components/MyComponent";
   ```

## Environment Variables

Create a `.env.local` file for local development (if needed):

```
# Example environment variables
# NEXT_PUBLIC_API_URL=https://api.example.com
```

- Variables prefixed with `NEXT_PUBLIC_` are exposed to the browser
- Other variables are server-only

## Performance & Best Practices

- ✅ Zero unnecessary dependencies
- ✅ Optimized images with Next.js Image component (to be added if needed)
- ✅ Server Components by default (App Router)
- ✅ CSS-in-JS via Tailwind (no runtime overhead)
- ✅ Vercel deployment ready

## Troubleshooting

### Build Fails

1. Clear cache and rebuild:
   ```bash
   rm -rf .next node_modules
   npm install
   npm run build
   ```

2. Check for TypeScript errors:
   ```bash
   npx tsc --noEmit
   ```

3. Check ESLint:
   ```bash
   npm run lint
   ```

### Port Already in Use

If port 3000 is already in use:
```bash
npm run dev -- -p 3001
```

### Module Not Found Errors

- Ensure path aliases in `tsconfig.json` match imports
- Use `@/` prefix for absolute imports from `src/`

## Support & Maintenance

For questions or issues:
- Email: contact@feecomelectronics.com
- Documentation: [Next.js Docs](https://nextjs.org/docs)
- Vercel: [Vercel Docs](https://vercel.com/docs)

---

**Last Updated**: January 2026  
**Node Version**: 20.x  
**Next.js Version**: 15.x  
**Dependencies**: Minimal (react, react-dom, next only)