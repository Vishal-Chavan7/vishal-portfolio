# Quick Start Guide

Get your portfolio up and running in 5 minutes!

## ⚡ Super Quick Setup

### 1. Install Dependencies (30 seconds)
```bash
cd portfolio-website
npm install
```

### 2. Start Development Server (10 seconds)
```bash
npm run dev
```

Open http://localhost:3000 in your browser ✨

---

## 🎯 Essential Customization (5 minutes)

### Update `src/data/portfolio.js`

Replace these placeholders with your info:

```javascript
// 1. Personal Info
name: "Your Name Here"
email: "your.email@example.com"
location: "Your City, Country"

// 2. Social Links
social: {
  github: "https://github.com/YOUR_USERNAME",
  linkedin: "https://linkedin.com/in/YOUR_USERNAME",
  // ...
}

// 3. About Section
description: "Write 2-3 sentences about yourself"

// 4. Add Your Projects
// Replace the dummy projects with your real ones
```

### Add Your Resume
```bash
# Put your resume in the public folder
cp /path/to/your/resume.pdf public/resume.pdf
```

That's it! Your portfolio is ready! 🎉

---

## 🚀 Deploy in 2 Minutes

### Option 1: Vercel (Easiest)
1. Push to GitHub
2. Go to vercel.com
3. Click "Import Project"
4. Select your repo
5. Click "Deploy"

Done! Your site is live! 🌐

### Option 2: Netlify
```bash
npm run build
```
Drag the `dist` folder to netlify.com

---

## 📋 Common Commands

```bash
# Development
npm run dev          # Start dev server

# Production
npm run build        # Build for production
npm run preview      # Preview production build

# Deployment
vercel              # Deploy to Vercel
netlify deploy      # Deploy to Netlify
```

---

## 🎨 Quick Customization Tips

### Change Colors
Edit `tailwind.config.js` → Look for `colors.primary`

### Change Fonts
Edit `index.html` → Update Google Fonts link
Edit `tailwind.config.js` → Update `fontFamily`

### Add/Remove Sections
Edit `src/App.jsx` → Comment out components you don't need

---

## ❓ Troubleshooting

### Port 3000 already in use?
Change port in `vite.config.js`:
```javascript
server: { port: 3001 }
```

### Build failing?
```bash
rm -rf node_modules package-lock.json
npm install
```

### Dark mode not working?
Clear browser cache and localStorage

---

## 📚 Full Documentation

- **Detailed Customization:** See CUSTOMIZATION.md
- **Deployment Guide:** See DEPLOYMENT.md
- **Full README:** See README.md

---

## 🎯 Next Steps

1. ✅ Customize your content
2. ✅ Add your projects
3. ✅ Upload your resume
4. ✅ Test on mobile
5. ✅ Deploy to Vercel/Netlify
6. ✅ Share on LinkedIn!

Good luck with your job search! 💪
