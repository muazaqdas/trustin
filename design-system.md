# TrustIn Design System

## Brand Identity

### Logo Analysis
The TrustIn logo features a tree with leaves in shades of teal and blue, symbolizing growth, trust, and stability - perfect for healthcare professionals seeking licensing support.

**Tagline**: "Your search ends here."

---

## Color Palette

### Primary Colors
```css
--primary-teal: #5ac2a6;        /* Main brand color - vibrant, trustworthy */
--primary-blue: #6abfd6;        /* Secondary brand color - calm, professional */
--primary-dark: #2d8b73;        /* Darker teal for hover states */
--primary-light: #7dd4bc;       /* Lighter teal for backgrounds */
```

### Secondary Colors
```css
--secondary-green: #6fbe44;     /* Accent green from logo */
--secondary-navy: #1e5a7d;      /* Deep blue for text/contrast */
--secondary-sky: #a8dce8;       /* Light blue for accents */
```

### Neutral Colors
```css
--white: #ffffff;
--gray-50: #f9fafb;
--gray-100: #f3f4f6;
--gray-200: #e5e7eb;
--gray-300: #d1d5db;
--gray-400: #9ca3af;
--gray-500: #6b7280;
--gray-600: #4b5563;
--gray-700: #374151;
--gray-800: #1f2937;
--gray-900: #111827;
--black: #000000;
```

### Semantic Colors
```css
--success: #10b981;
--warning: #f59e0b;
--error: #ef4444;
--info: #3b82f6;
```

### Gradient Colors
```css
--gradient-primary: linear-gradient(135deg, #5ac2a6 0%, #6abfd6 100%);
--gradient-hero: linear-gradient(135deg, #2d8b73 0%, #1e5a7d 100%);
--gradient-glass: linear-gradient(135deg, rgba(90, 194, 166, 0.1) 0%, rgba(106, 191, 214, 0.1) 100%);
```

---

## Typography

### Font Families
```css
--font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
--font-heading: 'Poppins', 'Inter', sans-serif;
--font-mono: 'JetBrains Mono', 'Courier New', monospace;
```

### Font Sizes
```css
--text-xs: 0.75rem;      /* 12px */
--text-sm: 0.875rem;     /* 14px */
--text-base: 1rem;       /* 16px */
--text-lg: 1.125rem;     /* 18px */
--text-xl: 1.25rem;      /* 20px */
--text-2xl: 1.5rem;      /* 24px */
--text-3xl: 1.875rem;    /* 30px */
--text-4xl: 2.25rem;     /* 36px */
--text-5xl: 3rem;        /* 48px */
--text-6xl: 3.75rem;     /* 60px */
```

### Font Weights
```css
--font-light: 300;
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
--font-extrabold: 800;
```

### Line Heights
```css
--leading-tight: 1.2;
--leading-normal: 1.5;
--leading-relaxed: 1.75;
--leading-loose: 2;
```

---

## Spacing System

### Base Unit: 0.25rem (4px)

```css
--space-0: 0;
--space-1: 0.25rem;    /* 4px */
--space-2: 0.5rem;     /* 8px */
--space-3: 0.75rem;    /* 12px */
--space-4: 1rem;       /* 16px */
--space-5: 1.25rem;    /* 20px */
--space-6: 1.5rem;     /* 24px */
--space-8: 2rem;       /* 32px */
--space-10: 2.5rem;    /* 40px */
--space-12: 3rem;      /* 48px */
--space-16: 4rem;      /* 64px */
--space-20: 5rem;      /* 80px */
--space-24: 6rem;      /* 96px */
--space-32: 8rem;      /* 128px */
```

---

## Border Radius

```css
--radius-sm: 0.375rem;    /* 6px - small elements */
--radius-md: 0.5rem;      /* 8px - buttons, inputs */
--radius-lg: 0.75rem;     /* 12px - cards */
--radius-xl: 1rem;        /* 16px - large cards */
--radius-2xl: 1.5rem;     /* 24px - hero sections */
--radius-full: 9999px;    /* Fully rounded */
```

---

## Shadows

```css
--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
--shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);

/* Glass morphism shadows */
--shadow-glass: 0 8px 32px 0 rgba(90, 194, 166, 0.15);
--shadow-glass-hover: 0 12px 48px 0 rgba(90, 194, 166, 0.25);
```

---

## Glass Morphism Effect

### Standard Glass Card
```css
background: rgba(255, 255, 255, 0.7);
backdrop-filter: blur(10px);
-webkit-backdrop-filter: blur(10px);
border: 1px solid rgba(255, 255, 255, 0.3);
box-shadow: var(--shadow-glass);
border-radius: var(--radius-xl);
```

### Glass Card Dark Variant
```css
background: rgba(90, 194, 166, 0.05);
backdrop-filter: blur(12px);
-webkit-backdrop-filter: blur(12px);
border: 1px solid rgba(90, 194, 166, 0.2);
box-shadow: var(--shadow-glass);
border-radius: var(--radius-xl);
```

### Glass Card Hover State
```css
background: rgba(255, 255, 255, 0.85);
backdrop-filter: blur(16px);
-webkit-backdrop-filter: blur(16px);
border: 1px solid rgba(90, 194, 166, 0.4);
box-shadow: var(--shadow-glass-hover);
transform: translateY(-4px);
transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
```

---

## Component Patterns

### Buttons

#### Primary Button
```css
Background: var(--gradient-primary)
Color: white
Padding: 0.75rem 2rem
Border-radius: var(--radius-md)
Font-weight: var(--font-semibold)
Shadow: var(--shadow-md)
Hover: transform: translateY(-2px), shadow: var(--shadow-lg)
```

#### Secondary Button
```css
Background: transparent
Border: 2px solid var(--primary-teal)
Color: var(--primary-teal)
Padding: 0.75rem 2rem
Border-radius: var(--radius-md)
Font-weight: var(--font-semibold)
Hover: background: var(--primary-teal), color: white
```

#### Ghost Button
```css
Background: rgba(90, 194, 166, 0.1)
Color: var(--primary-teal)
Padding: 0.75rem 2rem
Border-radius: var(--radius-md)
Hover: background: rgba(90, 194, 166, 0.2)
```

### Cards

#### Standard Card
```css
Background: white
Padding: var(--space-6)
Border-radius: var(--radius-lg)
Shadow: var(--shadow-md)
Border: 1px solid var(--gray-200)
Hover: shadow: var(--shadow-xl), transform: translateY(-4px)
```

#### Glass Card
```css
Glass morphism effect (see above)
Padding: var(--space-6)
```

### Form Inputs

```css
Background: white
Border: 2px solid var(--gray-300)
Border-radius: var(--radius-md)
Padding: 0.75rem 1rem
Font-size: var(--text-base)
Focus: border-color: var(--primary-teal), shadow: 0 0 0 3px rgba(90, 194, 166, 0.1)
```

---

## Animation & Transitions

### Standard Transitions
```css
--transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);
--transition-base: 300ms cubic-bezier(0.4, 0, 0.2, 1);
--transition-slow: 500ms cubic-bezier(0.4, 0, 0.2, 1);
```

### Fluid Hover Animation
```css
.fluid-hover {
  position: relative;
  overflow: hidden;
}

.fluid-hover::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(90, 194, 166, 0.2) 0%, transparent 70%);
  transform: translate(-50%, -50%);
  transition: width 0.6s ease, height 0.6s ease;
}

.fluid-hover:hover::before {
  width: 300%;
  height: 300%;
}
```

### Scale Hover
```css
.scale-hover {
  transition: transform var(--transition-base);
}

.scale-hover:hover {
  transform: scale(1.05);
}
```

### Slide Up Animation
```css
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.slide-up {
  animation: slideUp 0.6s ease-out;
}
```

### Fade In Animation
```css
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.fade-in {
  animation: fadeIn 0.8s ease-in;
}
```

---

## Layout & Grid

### Container
```css
max-width: 1280px (xl)
padding: 0 var(--space-6)
margin: 0 auto
```

### Breakpoints
```css
--screen-sm: 640px
--screen-md: 768px
--screen-lg: 1024px
--screen-xl: 1280px
--screen-2xl: 1536px
```

### Grid
```css
display: grid
gap: var(--space-6)
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr))
```

---

## Call-to-Action (CTA) Strategy

### Primary CTA Guidelines
- **Position**: Above the fold on every page
- **Color**: Primary gradient (teal to blue)
- **Text**: Action-oriented, benefit-focused
- **Size**: Large, impossible to miss
- **Examples**:
  - "Get Licensed in 30 Days"
  - "Start Your Application"
  - "Schedule Free Consultation"

### Secondary CTA
- **Position**: Mid-page, after value explanation
- **Style**: Outlined or ghost button
- **Text**: Lower commitment
- **Examples**:
  - "Learn More"
  - "View Process"
  - "See How It Works"

### CTA Placement Strategy

#### Home Page
1. Hero section: Primary CTA
2. After benefits: Secondary CTA
3. Before footer: Tertiary CTA

#### Process Page
1. After step explanation: "Start Your Journey"
2. Bottom of page: "Ready to Begin?"

#### About Us
1. After credibility section: "Work With Us"

#### Contact Page
1. Form submission: "Get Your Free Consultation"

#### FAQ Page
1. After FAQs: "Still Have Questions? Contact Us"

### CTA Best Practices
- Use contrasting colors
- Add hover animations
- Include micro-interactions
- Make buttons large enough for touch (min 44x44px)
- Use white space around CTAs
- Test button text for clarity
- Add urgency when appropriate ("Limited Spots", "Quick Process")

---

## Design Patterns for Lead Generation

### Trust Signals
1. Professional credentials badges
2. Number of licenses processed
3. Success rate statistics
4. Client testimonials with photos
5. Industry associations logos
6. Security/privacy badges

### Value Proposition Elements
1. Clear headline (what you do)
2. Subheadline (how you help)
3. 3-5 key benefits with icons
4. Social proof
5. Clear CTA

### Form Design Best Practices
1. Minimal fields (name, email, phone, license type)
2. Clear labels above inputs
3. Helpful placeholder text
4. Real-time validation
5. Progress indicators for multi-step
6. Privacy reassurance text
7. Large submit button
8. Success confirmation

### Conversion Optimization Tactics
1. Reduce friction (fewer form fields)
2. Add urgency (limited time offers)
3. Use social proof (testimonials)
4. Clear value proposition
5. Risk reversal (guarantees)
6. Visual hierarchy (guide eye to CTA)
7. Mobile-optimized forms
8. Fast page loads

---

## Page Structure

### Home Page Structure
1. Navigation (sticky)
2. Hero Section
   - Headline
   - Subheadline
   - Primary CTA
   - Hero image/illustration
3. Logo Trust Bar (clients/partners)
4. Value Proposition Section
   - 3-4 key benefits with icons
5. How It Works (3 steps)
6. Social Proof/Testimonials
7. Statistics Section (glass cards)
8. Final CTA Section
9. Footer

### Process Page Structure
1. Navigation
2. Page Header
3. Step-by-step Timeline
   - Visual progression
   - Each step explained
   - Time estimates
4. What You Need Section
5. CTA: "Start Your Application"
6. Footer

### About Us Page Structure
1. Navigation
2. Company Story Hero
3. Mission & Vision
4. Why Choose Us (differentiators)
5. Credentials & Certifications
6. Team Section (optional)
7. CTA: "Work With Us"
8. Footer

### Contact Page Structure
1. Navigation
2. Page Header
3. Lead Capture Form (primary focus)
4. Contact Information Cards
   - Phone
   - Email
   - Address
   - Hours
5. Map (optional)
6. Footer

### FAQ Page Structure
1. Navigation
2. Page Header
3. Search/Filter Bar
4. FAQ Categories (tabs/pills)
5. Accordion Items
   - Question (expandable)
   - Answer (with formatting)
6. "Didn't find your answer?" CTA
7. Footer

---

## Content Strategy

### Tone of Voice
- Professional yet approachable
- Confident and reassuring
- Clear and jargon-free
- Helpful and supportive
- Action-oriented

### Key Messaging
- **Promise**: Streamlined, stress-free licensing
- **Differentiation**: Expert guidance, proven process
- **Benefit**: Save time, ensure success, peace of mind
- **Proof**: Success stories, statistics, credentials

### Microcopy Guidelines
- Buttons: Use verbs ("Get Started", "Download Guide")
- Form labels: Be specific ("Work Email", "Mobile Number")
- Error messages: Be helpful ("Please enter a valid email")
- Success messages: Be encouraging ("Great! We'll contact you soon")

---

## Accessibility Standards

### WCAG 2.1 AA Compliance
- Color contrast ratio: minimum 4.5:1 for text
- Interactive elements: minimum 44x44px touch target
- Focus indicators: visible on all interactive elements
- Alt text: descriptive for all images
- Semantic HTML: proper heading hierarchy
- Keyboard navigation: full site accessible without mouse
- ARIA labels: for screen readers

---

## Performance Guidelines

### Image Optimization
- Use WebP format with fallbacks
- Lazy load below-fold images
- Responsive images with srcset
- Compress all images (max 200KB)
- SVG for icons and logos

### Code Optimization
- Code splitting by route
- Minify CSS and JS
- Use CSS variables for theming
- Avoid inline styles
- Defer non-critical CSS

### Loading Strategy
- Critical CSS inline
- Preload fonts
- Prefetch next pages
- Optimize bundle size
- Use production build

---

## Browser Support

### Target Browsers
- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)
- Mobile Safari iOS 12+
- Chrome Android (last 2 versions)

### Fallbacks
- Provide fallbacks for backdrop-filter (glass morphism)
- Test without JavaScript enabled
- Provide alternative text for images
- Ensure form works without CSS

---

This design system ensures consistency, professionalism, and high conversion rates across the TrustIn lead generation website.
