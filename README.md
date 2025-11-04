# Pravin A Mathew - Portfolio Website

A modern, responsive portfolio website showcasing cloud development, DevOps expertise, and full-stack projects. Built with Next.js 16, React 19, Tailwind CSS 4, and Framer Motion for stunning animations.

![Portfolio Preview](https://img.shields.io/badge/Next.js-16.0.1-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)

## ✨ Features

- **🎨 Modern UI/UX**: Sleek gradient designs with smooth animations
- **🌟 Animated Star Background**: Dynamic particle effects that respond to theme changes
- **🌓 Dark/Light Mode**: Seamless theme switching with persistent state
- **📱 Fully Responsive**: Optimized for all devices from mobile to desktop
- **⚡ Performance Optimized**: Fast loading with Next.js 16 and React 19
- **🎭 Smooth Animations**: Powered by Framer Motion for delightful interactions
- **📊 Interactive Sections**: 
  - About with floating profile image
  - Education timeline
  - Professional experience
  - Skills showcase with icons
  - AWS Services explorer with modal descriptions
  - Categorized projects (AWS, DevOps, Development)
  - Contact form
- **🔧 Modular Architecture**: Clean, maintainable code structure

## 🚀 Tech Stack

### Frontend
- **Next.js 16.0.1** - React framework with App Router
- **React 19.2.0** - Latest React with concurrent features
- **Tailwind CSS 4** - Utility-first CSS framework
- **Framer Motion 12** - Production-ready animation library

### Development Tools
- **ESLint** - Code linting and quality
- **Lucide React** - Beautiful icon library (500+ icons)
- **Next.js Image** - Optimized image component

## 📁 Project Structure

```
pravin-portfolio/
├── public/
│   ├── icons/              # Technology & brand icons
│   │   ├── aws/           # AWS service icons (28 services)
│   │   └── *.svg          # Framework icons (Docker, K8s, etc.)
│   ├── images/
│   │   └── profile.png    # Profile picture
│   └── resume.pdf         # Downloadable resume
├── src/
│   ├── app/
│   │   ├── layout.js      # Root layout with fonts
│   │   ├── page.js        # Main entry point
│   │   └── globals.css    # Global styles & animations
│   ├── components/
│   │   └── Portfolio.jsx  # Main portfolio component
│   ├── data/
│   │   ├── education.js   # Education data
│   │   ├── experience.js  # Work experience
│   │   ├── projects.js    # Project showcase
│   │   └── skills.js      # Skills & technologies
│   └── utils/
│       ├── animations.js  # Animation variants
│       ├── docs.js        # Documentation links
│       └── icons.js       # Icon mappings & variants
├── package.json
├── tailwind.config.js     # Tailwind configuration
├── postcss.config.mjs     # PostCSS setup
└── next.config.mjs        # Next.js configuration
```

## 🛠️ Installation & Setup

### Prerequisites
- **Node.js**: v20.9.0 or higher
- **npm** or **yarn** or **pnpm**

### Quick Start

```bash
# 1. Clone the repository
git clone https://github.com/pravindev666/pravin-portfolio.git
cd pravin-portfolio

# 2. Install dependencies
npm install
# or
yarn install
# or
pnpm install

# 3. Run development server
npm run dev
# or
yarn dev
# or
pnpm dev

# 4. Open browser
# Navigate to http://localhost:3000
```

### Build for Production

```bash
# Build optimized production bundle
npm run build

# Start production server
npm start
```

## 🎨 Customization Guide

### 1. Personal Information

Edit your details in the respective data files:

**Profile & Contact** (`src/components/Portfolio.jsx`):
```javascript
// Update hero section (lines 520-570)
const name = "Your Name";
const title = "Your Title";
const description = "Your bio...";
```

**Education** (`src/data/education.js`):
```javascript
export const education = [
  {
    degree: 'Your Degree',
    institution: 'Your University',
    location: 'City, Country',
    period: 'YYYY - YYYY',
    grade: ''
  }
];
```

**Experience** (`src/data/experience.js`):
```javascript
export const experience = [
  {
    title: 'Your Job Title',
    company: 'Company Name',
    period: 'Month YYYY – Month YYYY',
    points: [
      'Achievement 1',
      'Achievement 2'
    ]
  }
];
```

**Projects** (`src/data/projects.js`):
```javascript
export const projectsByCategory = {
  AWS: [...],
  DevOps: [...],
  Development: [...]
};
```

**Skills** (`src/data/skills.js`):
```javascript
export const skills = {
  cloud: [{ name: 'AWS' }],
  devops: [{ name: 'Docker' }],
  development: [{ name: 'React' }]
};
```

### 2. Theme Customization

**Colors** (`tailwind.config.js`):
```javascript
theme: {
  extend: {
    colors: {
      primary: {
        red: '#ef4444',    // Change to your brand color
        yellow: '#eab308'  // Change to your accent color
      }
    }
  }
}
```

**Gradients** (`src/app/globals.css`):
```css
/* Update gradient colors throughout */
.bg-gradient-to-r {
  from: theme('colors.primary.red');
  to: theme('colors.primary.yellow');
}
```

### 3. Add Your Icons

Place technology icons in `/public/icons/`:
```
/public/icons/
├── YourTech.svg
└── aws/
    └── YourService.svg
```

Update icon mappings in `src/utils/icons.js`:
```javascript
export const brandIconMap = {
  'Your Tech': '/icons/YourTech.svg'
};
```

### 4. Update Resume

Replace `/public/resume.pdf` with your resume file.

## 🎭 Animation Customization

All animations use Framer Motion. Customize in `src/utils/animations.js`:

```javascript
export const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};
```

## 📦 Where to Find Similar Templates

### Free Modern UI Templates

#### 1. **Tailwind CSS Ecosystems** (Most Modern)
- **[Tailwind UI Components](https://tailwindui.com/components)** - Official Tailwind components
- **[Flowbite](https://flowbite.com)** - Complete UI kit
- **[HyperUI](https://hyperui.dev)** - Marketing sections
- **[Meraki UI](https://merakiui.com)** - Minimal components
- **[daisyUI](https://daisyui.com)** - Component library

#### 2. **Shadcn/ui Ecosystem** (Copy-Paste Components)
- **[Shadcn/ui](https://ui.shadcn.com)** - Official components
- **[Magic UI](https://magicui.design)** - Animated components
- **[Aceternity UI](https://ui.aceternity.com)** - Modern animations
- **[Cult UI](https://cult-ui.com)** - Beautiful templates

#### 3. **Complete Website Templates**
- **[HTML5 UP](https://html5up.net)** - Static HTML templates
- **[Start Bootstrap](https://startbootstrap.com)** - Bootstrap templates
- **[Cruip](https://cruip.com)** - Landing pages
- **[Colorlib](https://colorlib.com/wp/templates)** - Various templates

#### 4. **React/Next.js Specific**
- **[Next.js Templates by Vercel](https://vercel.com/templates)** - Official starters
- **[Creative Tim React](https://www.creative-tim.com/templates/react)** - Professional dashboards
- **[Chakra Templates](https://chakra-templates.dev)** - Chakra UI components

### Design Inspiration Sites
- **[Dribbble](https://dribbble.com)** - UI/UX designs
- **[Awwwards](https://awwwards.com)** - Award-winning sites
- **[One Page Love](https://onepagelove.com)** - Single-page sites
- **[Behance](https://behance.net)** - Professional portfolios

## 🔗 Live Demo & Repository

- **Live Site**: [Your deployed URL]
- **GitHub**: [https://github.com/pravindev666/pravin-portfolio](https://github.com/pravindev666/pravin-portfolio)

## 📸 Screenshots

### Desktop View - Dark Mode
![Desktop Dark Mode](screenshots/desktop-dark.png)

### Desktop View - Light Mode
![Desktop Light Mode](screenshots/light-mode.png)

### Mobile Responsive
![Mobile View](screenshots/mobile.png)

## 🚀 Deployment

### Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or use the [Vercel Dashboard](https://vercel.com):
1. Import your GitHub repository
2. Configure build settings (auto-detected)
3. Deploy instantly

### Deploy to Netlify

```bash
# Build
npm run build

# Deploy to Netlify
netlify deploy --prod
```

### Environment Variables

No environment variables required for basic setup.

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Pravin A Mathew**
- Website: [Your Website]
- LinkedIn: [linkedin.com/in/pravin-a-mathew-593799327](https://linkedin.com/in/pravin-a-mathew-593799327)
- GitHub: [@pravindev666](https://github.com/pravindev666)
- Email: [Your Email]

## 🙏 Acknowledgments

- **Next.js Team** - Amazing React framework
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Powerful animation library
- **Lucide Icons** - Beautiful icon set
- **Vercel** - Seamless deployment platform

## 📚 Learning Resources

### Next.js & React
- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Next.js Learn Course](https://nextjs.org/learn)

### Tailwind CSS
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Tailwind CSS Course](https://tailwindcss.com/course)

### Framer Motion
- [Framer Motion Docs](https://www.framer.com/motion)
- [Animation Examples](https://www.framer.com/motion/examples)

### DevOps & Cloud
- [AWS Documentation](https://aws.amazon.com/documentation)
- [Docker Documentation](https://docs.docker.com)
- [Kubernetes Documentation](https://kubernetes.io/docs)

## 🐛 Known Issues

- None currently. Report issues on [GitHub Issues](https://github.com/pravindev666/pravin-portfolio/issues)

## 🗺️ Roadmap

- [ ] Add blog section
- [ ] Implement CMS integration
- [ ] Add contact form backend
- [ ] Multi-language support
- [ ] Add more project categories
- [ ] Analytics integration
- [ ] SEO optimization improvements
- [ ] Accessibility audit & improvements

## 💡 Tips for Your Portfolio

1. **Keep It Updated**: Regularly update projects and experience
2. **Show, Don't Tell**: Include live demos and GitHub links
3. **Optimize Images**: Use WebP format, compress images
4. **Mobile First**: Test on real devices
5. **Fast Loading**: Aim for < 3s load time
6. **SEO Friendly**: Add meta tags, structured data
7. **Accessible**: Follow WCAG guidelines
8. **Analytics**: Track visitor behavior
9. **A/B Testing**: Test different content variations
10. **Personal Touch**: Make it unique to you!

---

**Built with ❤️ using Next.js, Tailwind CSS & Framer Motion**

*Star ⭐ this repo if you find it helpful!*
