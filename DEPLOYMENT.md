# Deployment Guide - Batang Shipyard

## Deploy to Vercel

### Prerequisites
- [Vercel Account](https://vercel.com) (free tier available)
- GitHub repository with your code
- Node.js 18+ installed locally

### Method 1: Deploy via Vercel Dashboard (Recommended)

1. **Connect Repository**
   - Go to [vercel.com](https://vercel.com) and sign in
   - Click "New Project"
   - Import your GitHub repository
   - Select the `batangshipyard` folder as the root directory

2. **Configure Project Settings**
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `batangshipyard`
   - **Build Command**: `npm run build` (auto-detected)
   - **Output Directory**: `.next` (auto-detected)
   - **Install Command**: `npm install` (auto-detected)

3. **Environment Variables** (Optional)
   - Add any environment variables from `.env.example` if needed
   - Most settings are already configured in the code

4. **Deploy**
   - Click "Deploy"
   - Wait for the build to complete
   - Your site will be available at `https://your-project.vercel.app`

### Method 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy from Project Directory**
   ```bash
   cd batangshipyard
   vercel
   ```

4. **Follow Prompts**
   - Link to existing project or create new one
   - Confirm settings
   - Deploy

### Custom Domain Setup

1. **In Vercel Dashboard**
   - Go to your project settings
   - Navigate to "Domains"
   - Add your custom domain (e.g., `batangshipyard.com`)

2. **DNS Configuration**
   - Add the following DNS records:
     ```
     Type: CNAME
     Name: www
     Value: cname.vercel-dns.com
     
     Type: A
     Name: @
     Value: 76.76.19.61
     ```

### Performance Optimizations Applied

✅ **Image Optimization**
- WebP and AVIF format support
- Responsive image sizing
- Automatic compression

✅ **Caching**
- Static assets cached for 1 year
- Proper cache headers configured

✅ **Security Headers**
- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- X-XSS-Protection: 1; mode=block

✅ **Compression**
- Gzip compression enabled
- SWC minification enabled

### Monitoring & Analytics

1. **Vercel Analytics** (Optional)
   - Enable in project settings
   - Provides performance insights

2. **Google Analytics** (Optional)
   - Add `NEXT_PUBLIC_GOOGLE_ANALYTICS_ID` environment variable
   - Update the analytics code in your components

### Troubleshooting

**Build Failures**
- Check Node.js version (18+ required)
- Verify all dependencies are in `package.json`
- Check for TypeScript errors: `npm run lint`

**Image Loading Issues**
- Ensure images are in the `public` folder
- Use relative paths starting with `/`
- Check file permissions

**Performance Issues**
- Enable Vercel Analytics for insights
- Optimize images using Next.js Image component
- Check bundle size with `npm run build`

### Environment Variables Reference

| Variable | Required | Description |
|----------|----------|-------------|
| `NEXT_PUBLIC_SITE_URL` | No | Your site's URL |
| `NEXT_PUBLIC_SITE_NAME` | No | Site name for SEO |
| `NEXT_PUBLIC_GOOGLE_ANALYTICS_ID` | No | Google Analytics ID |

### Support

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Vercel Support](https://vercel.com/support)

---

**Note**: This application is optimized for Vercel deployment with automatic optimizations for performance, security, and SEO.
