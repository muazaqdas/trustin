# TrustIn - Healthcare Professional Licensing Services

A modern, conversion-optimized lead generation website for healthcare professional licensing services.

## Project Overview

TrustIn is a professional lead generation funnel website designed to attract and convert healthcare professionals seeking licensing assistance. The site features a clean, modern design with glass morphism effects, fluid animations, and a mobile-first responsive approach.

## Features

### Multi-Page Website
- **Home**: Hero section with strong CTAs, value propositions, statistics, testimonials
- **Process**: Step-by-step licensing journey with timeline visualization
- **About Us**: Company mission, values, credentials, and differentiators
- **Contact**: Lead capture form with validation and success states
- **FAQs**: Searchable accordion with 15+ healthcare licensing questions

### Design & UX
- Glass morphism effects for modern aesthetic
- Fluid hover animations for engaging interactions
- Mobile-responsive design (mobile-first approach)
- Rounded buttons and cards for friendly appearance
- Color palette based on brand logo (teal #5ac2a6, blue #6abfd6)

### Technical Implementation
- **React 19.2.0** - Modern component-based architecture
- **React Router DOM** - Multi-page navigation
- **Framer Motion** - Advanced animations (optional, installed but not yet implemented)
- **CSS3** - Custom animations, glass morphism, responsive design
- **Vite** - Fast build tool and development server

## Project Structure

```
trustin/
├── public/
│   ├── logo.png                 # Company logo
│   └── images/                  # Image assets (to be added)
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.jsx       # Sticky navigation with mobile menu
│   │   │   └── Footer.jsx       # Footer with links and contact info
│   │   └── ui/
│   │       ├── Button.jsx       # Reusable button component
│   │       ├── Card.jsx         # Card component with variants
│   │       ├── Input.jsx        # Form input component
│   │       └── Accordion.jsx    # FAQ accordion component
│   ├── pages/
│   │   ├── Home.jsx             # Landing page
│   │   ├── Process.jsx          # Licensing process page
│   │   ├── About.jsx            # About page
│   │   ├── Contact.jsx          # Contact/lead form page
│   │   └── FAQ.jsx              # FAQ page
│   ├── data/
│   │   └── faqData.js           # FAQ content data
│   ├── styles/
│   │   ├── variables.css        # CSS variables (colors, spacing, etc.)
│   │   ├── global.css           # Global styles and utilities
│   │   └── animations.css       # Animation keyframes and utilities
│   ├── App.jsx                  # Main app component with routing
│   └── main.jsx                 # App entry point
├── design-system.md             # Complete design specifications
├── image-requirements.md        # Image and asset requirements
├── project-plan.md              # Detailed project plan and checklist
└── package.json                 # Dependencies and scripts
```

## Installation

### Prerequisites
- **Node.js 20.19+ or 22.12+** (required by Vite 7)
- npm or yarn package manager

### Steps

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview production build:**
   ```bash
   npm run preview
   ```

## Configuration Files

### Design System
See [design-system.md](./design-system.md) for complete design specifications including:
- Color palette
- Typography system
- Spacing and layout
- Component patterns
- Animation guidelines
- CTA strategy
- Accessibility standards

### Image Requirements
See [image-requirements.md](./image-requirements.md) for:
- List of all required images
- Specifications (dimensions, format, style)
- Priority levels
- Recommended stock photo resources
- AI generation prompts

### Project Plan
See [project-plan.md](./project-plan.md) for:
- Development roadmap
- Feature checklist
- Timeline estimates
- Technical stack details

## Key Components

### Button Component
- Variants: primary, secondary, ghost, dark, white
- Sizes: sm, md, lg, xl
- Features: ripple effect, loading state, full-width option

### Card Component
- Variants: default, glass, glass-dark, gradient, bordered
- Hover effects with fluid animations
- Glass morphism support

### Form Components
- Input component with validation and error states
- Textarea support
- Select dropdown styling
- Real-time validation feedback

### Accordion Component
- Smooth expand/collapse animations
- Single-item open (accordion behavior)
- Accessible with ARIA attributes

## Color Palette

Based on the TrustIn logo:

- **Primary Teal**: `#5ac2a6` - Main brand color
- **Primary Blue**: `#6abfd6` - Secondary brand color
- **Primary Dark**: `#2d8b73` - Hover states
- **Primary Light**: `#7dd4bc` - Backgrounds
- **Secondary Green**: `#6fbe44` - Accents
- **Secondary Navy**: `#1e5a7d` - Text/contrast

## Lead Generation Strategy

### Call-to-Action Placement
1. **Above the fold** on every page
2. **After value propositions** (mid-page)
3. **Before footer** (bottom of page)

### CTA Text Examples
- Primary: "Get Licensed in 30 Days", "Start Your Application"
- Secondary: "Learn More", "See How It Works"
- Tertiary: "Contact Us", "Schedule Consultation"

### Conversion Optimization
- Minimal form fields (name, email, phone, profession, state)
- Clear value proposition on every page
- Social proof (testimonials, statistics)
- Trust signals (credentials, success rate)
- Mobile-optimized forms
- Real-time validation feedback

## Mobile Responsiveness

### Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

### Mobile Features
- Hamburger navigation menu
- Touch-friendly buttons (min 44x44px)
- Stacked layouts on small screens
- Simplified forms for mobile
- Optimized image sizes

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)
- Mobile Safari iOS 12+
- Chrome Android (last 2 versions)

## Next Steps

### Required Assets
1. Generate or source images listed in [image-requirements.md](./image-requirements.md)
2. Add images to `public/images/` directory
3. Update image paths in components

### Optional Enhancements
1. Implement Framer Motion animations for page transitions
2. Add multi-language support (Spanish, French)
3. Integrate with email marketing service (for lead capture)
4. Add Google Analytics tracking
5. Implement live chat widget
6. Add blog section for SEO

### Deployment
1. Build production bundle: `npm run build`
2. Deploy `dist/` folder to hosting service (Vercel, Netlify, etc.)
3. Configure environment variables if needed
4. Set up custom domain
5. Configure SSL certificate

## Performance Optimization

- Code splitting by route (already implemented with React Router)
- Lazy loading for images (to be implemented)
- CSS minification in production build
- Responsive images with srcset (to be added)
- Service worker for offline support (optional)

## Accessibility

- Semantic HTML throughout
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus indicators on all interactive elements
- Alt text for all images (to be added)
- Color contrast ratio meets WCAG 2.1 AA standards

## Contact

For questions or support regarding this project, please contact the development team.

---

**Version**: 1.0.0
**Last Updated**: November 2025
**License**: Proprietary
