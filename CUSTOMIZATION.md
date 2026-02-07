# Customization Guide

This guide will help you personalize your portfolio website.

## 📝 Step-by-Step Customization

### 1. Personal Information

Edit `src/data/portfolio.js`:

```javascript
export const personalInfo = {
  name: "Your Full Name",              // Replace with your name
  role: "Full Stack MERN Developer",   // Your role/title
  tagline: "Your catchy tagline",      // Brief description
  email: "your.email@example.com",     // Your email
  location: "City, Country",           // Your location
  resumeUrl: "/resume.pdf",            // Path to your resume
  social: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://twitter.com/yourusername",
    portfolio: "https://yourwebsite.com"
  }
};
```

### 2. About Section

Update your bio and highlights:

```javascript
export const about = {
  description: "Write 2-3 sentences about yourself...",
  highlights: [
    "Your first highlight",
    "Your second highlight",
    "Your third highlight",
    "Your fourth highlight"
  ]
};
```

### 3. Skills

Adjust skills and proficiency levels (0-100):

```javascript
export const skills = {
  frontend: [
    { name: "React.js", level: 95 },
    { name: "Next.js", level: 90 },
    // Add or remove skills
  ],
  backend: [
    { name: "Node.js", level: 90 },
    // Add or remove skills
  ],
  tools: [
    { name: "Git & GitHub", level: 95 },
    // Add or remove skills
  ]
};
```

### 4. Projects

Add your real projects:

```javascript
{
  id: 1,
  title: "Project Name",
  description: "Short description for card",
  longDescription: "Detailed description",
  category: "fullstack", // or "frontend" or "backend"
  image: "https://example.com/image.jpg", // Project screenshot
  technologies: ["React", "Node.js", "MongoDB"],
  githubUrl: "https://github.com/you/project",
  liveUrl: "https://project-demo.com",
  featured: true // Show in featured section
}
```

**Image Options:**
- Use Unsplash URLs (free stock photos)
- Upload to Imgur and use the link
- Store in `public/images/` folder and use `/images/project.jpg`
- Use your deployed project screenshot

### 5. Experience

Add your work history:

```javascript
{
  id: 1,
  type: "work",
  title: "Job Title",
  company: "Company Name",
  location: "City, State/Country",
  period: "Start Date - End Date", // e.g., "Jan 2023 - Present"
  description: "Brief description of role",
  achievements: [
    "Key achievement 1",
    "Key achievement 2",
    "Key achievement 3"
  ]
}
```

### 6. Education

Add your educational background:

```javascript
{
  id: 1,
  type: "education",
  degree: "Degree Name",
  institution: "University Name",
  location: "City, State/Country",
  period: "2016 - 2020",
  description: "Description of studies",
  achievements: [
    "GPA: 3.8/4.0",
    "Relevant coursework or honors"
  ]
}
```

---

## 🎨 Design Customization

### Change Color Scheme

Edit `tailwind.config.js`:

```javascript
colors: {
  primary: {
    50: '#your-color-50',
    100: '#your-color-100',
    // ... through 900
    500: '#your-main-color', // Main brand color
  },
}
```

**Quick Color Tools:**
- [Coolors.co](https://coolors.co) - Color palette generator
- [TailwindColor.com](https://tailwindcolor.com) - Generate Tailwind color scales

### Change Fonts

**Step 1:** Update Google Fonts in `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&family=Open+Sans:wght@300;400;600&display=swap" rel="stylesheet">
```

**Step 2:** Update `tailwind.config.js`:

```javascript
fontFamily: {
  display: ['Poppins', 'sans-serif'],
  body: ['Open Sans', 'sans-serif'],
}
```

**Font Recommendations:**
- **Modern:** Inter, Montserrat, Poppins
- **Professional:** Roboto, Lato, Open Sans
- **Creative:** Playfair Display, Raleway
- **Developer:** Fira Code, JetBrains Mono

### Adjust Spacing

In `src/index.css`, modify:

```css
.section-container {
  @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20;
  /* Change py-20 to adjust section spacing */
}
```

---

## 🖼️ Adding Images

### Profile Picture

Add to Hero section in `src/components/Hero.jsx`:

```jsx
<img 
  src="/profile.jpg" 
  alt="Your Name"
  className="w-48 h-48 rounded-full"
/>
```

Put `profile.jpg` in the `public` folder.

### Project Screenshots

**Best Practices:**
- Use 16:9 aspect ratio (1200x675px)
- Optimize images (< 200KB)
- Use consistent image sizes

**Where to get images:**
1. Screenshots of your projects
2. Unsplash.com (free stock photos)
3. Generated mockups from Figma

---

## 🔧 Feature Customization

### Add New Section

1. Create component in `src/components/`:

```jsx
// NewSection.jsx
import { motion } from 'framer-motion';

const NewSection = () => {
  return (
    <section id="new-section" className="section-container">
      <h2 className="section-title">New Section</h2>
      {/* Your content */}
    </section>
  );
};

export default NewSection;
```

2. Add to `src/App.jsx`:

```jsx
import NewSection from './components/NewSection';

// In return statement:
<NewSection />
```

3. Add to navbar in `src/components/Navbar.jsx`:

```javascript
const navItems = [
  // ... existing items
  { name: 'New Section', href: '#new-section' },
];
```

### Modify Contact Form

To integrate with a real backend:

**Option 1: Formspree**
```jsx
<form action="https://formspree.io/f/YOUR_ID" method="POST">
```

**Option 2: EmailJS**
```bash
npm install @emailjs/browser
```

```jsx
import emailjs from '@emailjs/browser';

const handleSubmit = (e) => {
  e.preventDefault();
  
  emailjs.sendForm(
    'YOUR_SERVICE_ID',
    'YOUR_TEMPLATE_ID',
    e.target,
    'YOUR_PUBLIC_KEY'
  ).then(
    () => console.log('Success!'),
    (error) => console.log('Failed...', error)
  );
};
```

### Add Blog Section

Create `src/data/blog.js`:

```javascript
export const blogPosts = [
  {
    id: 1,
    title: "Blog Post Title",
    excerpt: "Short description",
    date: "2024-01-15",
    url: "https://medium.com/@you/post"
  }
];
```

---

## 🎯 Advanced Customization

### Add Animations

Using Framer Motion:

```jsx
<motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Your content
</motion.div>
```

### Add Particles Background

```bash
npm install react-tsparticles
```

### Add 3D Elements

```bash
npm install @react-three/fiber @react-three/drei
```

### Add Typing Effect

```bash
npm install react-type-animation
```

```jsx
import { TypeAnimation } from 'react-type-animation';

<TypeAnimation
  sequence={[
    'Full Stack Developer',
    2000,
    'MERN Specialist',
    2000,
  ]}
  repeat={Infinity}
/>
```

---

## 📱 Mobile Optimization

### Adjust Breakpoints

In `tailwind.config.js`:

```javascript
theme: {
  screens: {
    'sm': '640px',
    'md': '768px',
    'lg': '1024px',
    'xl': '1280px',
    '2xl': '1536px',
  }
}
```

### Test Responsiveness

Use Chrome DevTools:
- Toggle device toolbar (Cmd/Ctrl + Shift + M)
- Test on different device sizes
- Check touch interactions

---

## 🔍 SEO Optimization

### Update Meta Tags

In `index.html`:

```html
<title>Your Name - Full Stack MERN Developer</title>
<meta name="description" content="Your custom description">
<meta name="keywords" content="your, keywords, here">

<!-- Open Graph -->
<meta property="og:title" content="Your Name Portfolio">
<meta property="og:description" content="Your description">
<meta property="og:image" content="URL to preview image">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Your Name Portfolio">
<meta name="twitter:description" content="Your description">
```

### Add Favicon

Create favicons using [favicon.io](https://favicon.io):

Place in `public/` folder:
- `favicon.ico`
- `favicon-16x16.png`
- `favicon-32x32.png`
- `apple-touch-icon.png`

Update `index.html`:
```html
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
```

---

## 💡 Pro Tips

1. **Keep It Simple**: Don't overcomplicate - clean design wins
2. **Show Real Work**: Use actual project screenshots
3. **Be Honest**: Accurate skill levels build trust
4. **Update Regularly**: Keep content fresh
5. **Get Feedback**: Ask friends/colleagues to review
6. **Test Everything**: Links, forms, responsiveness
7. **Performance Matters**: Optimize images and code
8. **Accessibility**: Use semantic HTML and ARIA labels

---

## 🆘 Need Help?

- Check README.md for setup issues
- See DEPLOYMENT.md for deployment help
- Review React/Tailwind docs for component help
- Search Stack Overflow for specific errors

---

Happy customizing! Make it yours! 🎨
