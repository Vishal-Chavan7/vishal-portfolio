# Deployment Guide

This guide will help you deploy your portfolio website to various hosting platforms.

## 📋 Pre-Deployment Checklist

Before deploying, make sure you've:

- [ ] Updated all personal information in `src/data/portfolio.js`
- [ ] Added your resume PDF to `public/resume.pdf`
- [ ] Replaced project images with your own
- [ ] Updated social media links
- [ ] Tested the site locally (`npm run dev`)
- [ ] Built the project successfully (`npm run build`)
- [ ] Tested the production build (`npm run preview`)

## 🚀 Deployment Options

### 1. Vercel (Recommended)

Vercel offers the easiest deployment with automatic GitHub integration.

#### Method A: GitHub Integration (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "New Project"
4. Import your GitHub repository
5. Vercel auto-detects Vite settings
6. Click "Deploy"

**Your site will be live at:** `https://your-project.vercel.app`

#### Method B: CLI Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

**Environment Variables (if needed):**
- Go to Project Settings > Environment Variables
- Add any required variables

---

### 2. Netlify

Another excellent option with drag-and-drop deployment.

#### Method A: Drag & Drop

```bash
# Build the project
npm run build

# The build folder will be in 'dist'
```

1. Go to [netlify.com](https://netlify.com)
2. Drag the `dist` folder onto the Netlify dashboard
3. Your site is live!

#### Method B: GitHub Integration

1. Push code to GitHub
2. Go to Netlify and click "New site from Git"
3. Choose your repository
4. Build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Click "Deploy site"

#### Method C: CLI Deployment

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy

# Deploy to production
netlify deploy --prod
```

**Custom Domain:**
- Go to Site Settings > Domain Management
- Add your custom domain

---

### 3. GitHub Pages

Free hosting for GitHub repositories.

#### Setup

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Update `package.json`:
```json
{
  "homepage": "https://yourusername.github.io/repository-name",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. Update `vite.config.js`:
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/repository-name/', // Replace with your repo name
})
```

4. Deploy:
```bash
npm run deploy
```

5. Enable GitHub Pages:
   - Go to repository Settings > Pages
   - Source: Deploy from branch
   - Branch: gh-pages
   - Folder: / (root)

**Your site:** `https://yourusername.github.io/repository-name`

---

### 4. Firebase Hosting

Google's hosting solution with global CDN.

```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login
firebase login

# Initialize
firebase init

# Select:
# - Hosting
# - Use existing project or create new
# - Public directory: dist
# - Single-page app: Yes
# - GitHub integration: Optional

# Build
npm run build

# Deploy
firebase deploy
```

---

### 5. AWS Amplify

```bash
# Install Amplify CLI
npm install -g @aws-amplify/cli

# Configure
amplify configure

# Initialize
amplify init

# Add hosting
amplify add hosting

# Publish
amplify publish
```

---

### 6. Render

1. Push code to GitHub
2. Go to [render.com](https://render.com)
3. Click "New Static Site"
4. Connect your repository
5. Settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
6. Click "Create Static Site"

---

## 🔧 Build Configuration

### Environment Variables

If you need environment variables:

1. Create `.env` file:
```env
VITE_API_URL=your_api_url
VITE_FORM_ID=your_form_id
```

2. Access in code:
```javascript
const apiUrl = import.meta.env.VITE_API_URL;
```

3. Add to your hosting platform's environment variables section

### Custom Domain

#### Vercel
1. Project Settings > Domains
2. Add your domain
3. Update DNS records as instructed

#### Netlify
1. Site Settings > Domain Management
2. Add custom domain
3. Configure DNS

#### GitHub Pages
1. Add `CNAME` file to `public` folder:
```
yourdomain.com
```
2. Configure DNS with your domain provider

---

## 🐛 Troubleshooting

### Build Fails

**Check Node version:**
```bash
node -v  # Should be v16+
```

**Clear cache and reinstall:**
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### 404 on Refresh (SPA routing issue)

**For Netlify:**
Create `public/_redirects`:
```
/*    /index.html   200
```

**For Vercel:**
Create `vercel.json`:
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```

**For GitHub Pages:**
Add this to `vite.config.js`:
```javascript
base: '/repository-name/'
```

### Images Not Loading

Make sure images are in the `public` folder or use full URLs in `portfolio.js`

### Dark Mode Not Working

Check browser console for localStorage errors. Try clearing site data.

---

## 📊 Performance Optimization

### Before Deployment:

1. **Optimize Images:**
   - Compress images (use tinypng.com)
   - Use WebP format
   - Lazy load images

2. **Analyze Bundle:**
```bash
npm run build -- --mode analyze
```

3. **Lighthouse Test:**
   - Run in Chrome DevTools
   - Aim for 90+ scores

---

## 🔒 Security

### Content Security Policy

Add to `index.html`:
```html
<meta http-equiv="Content-Security-Policy" 
      content="default-src 'self'; img-src 'self' https:; script-src 'self'">
```

### HTTPS

All modern hosting platforms (Vercel, Netlify, etc.) provide automatic HTTPS.

---

## 📈 Monitoring

### Analytics

**Google Analytics:**
1. Get tracking ID from analytics.google.com
2. Add to `index.html`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## ✅ Post-Deployment

After deployment:

- [ ] Test all links
- [ ] Verify contact form
- [ ] Check mobile responsiveness
- [ ] Test dark mode
- [ ] Verify resume download
- [ ] Check console for errors
- [ ] Test on different browsers
- [ ] Run Lighthouse audit
- [ ] Set up custom domain (optional)
- [ ] Add to search console

---

## 🎉 Success!

Your portfolio is now live! Share it on:
- LinkedIn
- Twitter
- GitHub README
- Email signature
- Resume

Good luck with your job search! 🚀
