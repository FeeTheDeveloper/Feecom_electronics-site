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

### Option 1: GitHub Integration (Recommended)

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "chore: initialize feecom nextjs foundation"
   git push origin main
   ```

2. **Deploy via Vercel Dashboard**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Select this GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

3. **Environment Variables** (if needed):
   - Add any required env vars in Vercel project settings
   - Redeploy if needed

### Option 2: Vercel CLI

1. **Install Vercel CLI** (if not already installed):
   ```bash
   npm i -g vercel
   ```

2. **Deploy**:
   ```bash
   vercel
   ```

3. **Follow prompts** to link project and deploy

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

### Styling

- All pages use Tailwind CSS classes
- Global styles are in `src/app/globals.css`
- Theme colors defined in `tailwind.config.ts`
- Common color: `text-blue-600`, `bg-gray-50`, etc.

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
- Email: info@feecomelectronics.com
- Documentation: [Next.js Docs](https://nextjs.org/docs)
- Vercel: [Vercel Docs](https://vercel.com/docs)

---

**Last Updated**: January 2026  
**Node Version**: 20.x  
**Next.js Version**: 15.x