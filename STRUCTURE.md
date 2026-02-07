# Project Structure

Complete folder and file structure of the portfolio website.

```
portfolio-website/
│
├── public/                          # Static assets
│   └── resume.pdf                  # Your resume (add this file)
│
├── src/                            # Source code
│   ├── components/                 # React components
│   │   ├── Navbar.jsx             # Navigation bar with dark mode
│   │   ├── Hero.jsx               # Hero/landing section
│   │   ├── About.jsx              # About me section
│   │   ├── Skills.jsx             # Skills with progress bars
│   │   ├── Projects.jsx           # Projects grid with filter
│   │   ├── Experience.jsx         # Experience timeline
│   │   ├── Contact.jsx            # Contact form
│   │   └── Footer.jsx             # Footer component
│   │
│   ├── data/                       # Data files
│   │   └── portfolio.js           # All portfolio data (EDIT THIS!)
│   │
│   ├── App.jsx                     # Main app component
│   ├── main.jsx                    # App entry point
│   └── index.css                   # Global styles + Tailwind
│
├── index.html                      # HTML template
├── package.json                    # Dependencies & scripts
├── vite.config.js                  # Vite configuration
├── tailwind.config.js              # Tailwind configuration
├── postcss.config.js               # PostCSS configuration
│
├── .gitignore                      # Git ignore rules
├── README.md                       # Main documentation
├── QUICKSTART.md                   # Quick start guide
├── CUSTOMIZATION.md                # Customization guide
├── DEPLOYMENT.md                   # Deployment guide
└── STRUCTURE.md                    # This file
```

## 📁 Detailed File Descriptions

### Root Files

| File | Purpose | Edit? |
|------|---------|-------|
| `package.json` | NPM dependencies and scripts | ❌ No |
| `vite.config.js` | Vite build configuration | ⚠️ Rarely |
| `tailwind.config.js` | Tailwind CSS customization | ✅ Yes - for colors/fonts |
| `postcss.config.js` | PostCSS configuration | ❌ No |
| `index.html` | HTML entry point | ⚠️ For meta tags only |
| `.gitignore` | Git ignore patterns | ❌ No |

### Source Files (`src/`)

#### Components (`src/components/`)

All React components for different sections:

```
components/
├── Navbar.jsx        # 🧭 Top navigation
│   ├── Smooth scroll links
│   ├── Dark mode toggle
│   ├── Mobile menu
│   └── Resume download button
│
├── Hero.jsx          # 🎯 Landing section
│   ├── Name & role display
│   ├── Animated background
│   ├── CTA buttons
│   └── Social links
│
├── About.jsx         # 👤 About section
│   ├── Personal description
│   ├── Highlights/stats
│   └── Visual code snippet
│
├── Skills.jsx        # 💻 Skills section
│   ├── Tab navigation (Frontend/Backend/Tools)
│   ├── Skill cards
│   └── Progress bars
│
├── Projects.jsx      # 🚀 Projects showcase
│   ├── Category filter
│   ├── Project cards
│   ├── GitHub & live links
│   └── Technology badges
│
├── Experience.jsx    # 📚 Experience timeline
│   ├── Work history
│   ├── Education
│   ├── Timeline visualization
│   └── Achievements
│
├── Contact.jsx       # 📧 Contact section
│   ├── Contact form
│   ├── Contact details
│   └── Social links
│
└── Footer.jsx        # 🔽 Site footer
    ├── Quick links
    ├── Social icons
    └── Copyright
```

#### Data (`src/data/`)

```
data/
└── portfolio.js      # ⭐ YOUR MAIN FILE TO EDIT
    ├── personalInfo     # Name, email, social links
    ├── about            # Bio and highlights
    ├── skills           # Frontend, backend, tools
    ├── projects         # Your projects array
    ├── experience       # Work history
    ├── education        # Educational background
    └── certifications   # Optional certifications
```

#### Main Files

```
src/
├── App.jsx           # Main app component
│   ├── Dark mode state
│   ├── Component imports
│   └── Layout structure
│
├── main.jsx          # React entry point
│   └── Renders App component
│
└── index.css         # Global styles
    ├── Tailwind imports
    ├── Custom utilities
    └── Component styles
```

## 🎯 Files You MUST Edit

### Priority 1: Content
1. **`src/data/portfolio.js`** - All your personal data
2. **`public/resume.pdf`** - Your resume file

### Priority 2: Branding
3. **`index.html`** - Page title and meta tags
4. **`tailwind.config.js`** - Colors and fonts (optional)

### Priority 3: SEO
5. **`index.html`** - Meta descriptions and Open Graph tags

## 📦 Dependencies

### Core
- `react` - UI library
- `react-dom` - React DOM renderer
- `vite` - Build tool

### Styling
- `tailwindcss` - CSS framework
- `postcss` - CSS processing
- `autoprefixer` - CSS vendor prefixes

### Animations
- `framer-motion` - Animation library

### Icons
- `lucide-react` - Icon components

## 🔧 Configuration Files Explained

### `package.json`
```json
{
  "scripts": {
    "dev": "Start development server",
    "build": "Build for production",
    "preview": "Preview production build"
  }
}
```

### `vite.config.js`
```javascript
{
  plugins: [react()],        // React plugin
  server: { port: 3000 }     // Dev server port
}
```

### `tailwind.config.js`
```javascript
{
  content: ["src/**/*.jsx"],  // Where to look for classes
  theme: {
    extend: {
      colors: {},              // Custom colors
      fontFamily: {}          // Custom fonts
    }
  }
}
```

## 🎨 Styling Architecture

```
Styling Hierarchy:
├── Tailwind Base         (index.css @tailwind base)
├── Tailwind Components   (index.css @tailwind components)
├── Custom Components     (index.css @layer components)
├── Tailwind Utilities    (index.css @tailwind utilities)
└── Inline Classes        (In JSX className="...")
```

## 🚀 Build Output

When you run `npm run build`:

```
dist/                    # Production build
├── assets/
│   ├── index-[hash].js
│   ├── index-[hash].css
│   └── [images]
└── index.html
```

This `dist/` folder is what you deploy!

## 📝 Adding New Components

To add a new section:

1. Create component in `src/components/NewSection.jsx`
2. Import in `src/App.jsx`
3. Add to render in `src/App.jsx`
4. Add navigation link in `src/components/Navbar.jsx`
5. Add data to `src/data/portfolio.js` (if needed)

## 🗂️ Recommended Organization

As your portfolio grows:

```
src/
├── components/
│   ├── common/          # Reusable components
│   │   ├── Button.jsx
│   │   └── Card.jsx
│   ├── sections/        # Page sections
│   │   ├── Hero.jsx
│   │   └── About.jsx
│   └── layout/          # Layout components
│       ├── Navbar.jsx
│       └── Footer.jsx
├── data/                # Data files
├── hooks/               # Custom hooks
├── utils/               # Utility functions
└── assets/              # Images, etc.
```

## 💡 Best Practices

1. **Keep data separate** - All content in `portfolio.js`
2. **Component per section** - One file per section
3. **Reusable components** - Extract common patterns
4. **Consistent naming** - PascalCase for components
5. **Clear file names** - Descriptive and obvious

## 📊 File Sizes (Typical)

```
Component Files:    50-200 lines
Data Files:         100-300 lines
Config Files:       10-50 lines
Main App:           50-100 lines
CSS File:           100-200 lines
```

---

**Navigation:**
- 📖 [README](README.md) - Main documentation
- ⚡ [Quick Start](QUICKSTART.md) - Get started fast
- 🎨 [Customization](CUSTOMIZATION.md) - Customize your site
- 🚀 [Deployment](DEPLOYMENT.md) - Deploy your site
