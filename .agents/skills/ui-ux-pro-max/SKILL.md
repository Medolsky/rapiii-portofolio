---
name: ui-ux-pro-max
description: Pro-level UI/UX design system, visual polish, modern dark/light mode aesthetics, glassmorphism, dynamic animations, micro-interactions, responsive layouts, accessibility (WCAG), and component design best practices. Activate when designing or building user interfaces, frontends, landing pages, web applications, dashboards, or mobile interfaces.
---

# UI/UX Pro Max - Advanced Design System & Visual Excellence Guidelines

Use this skill whenever designing, building, or refining user interfaces (Web apps, Dashboards, Mobile sites, Landing pages) to ensure world-class aesthetic appeal, seamless user experience, and modern interactive standards.

---

## 1. Core Principles of Visual Polish

1. **First Glance Impact (The WOW Factor)**
   - Use dynamic gradients, glowing ambient background orbs, smooth glassmorphism (backdrop filters), and layered depth.
   - Avoid plain primary colors (solid red, blue, green). Always use curated HSL/HEX color palettes with subtle transparency and neon accents.

2. **Modern Typography Scale**
   - Headings: Use modern display fonts such as `Outfit`, `Inter`, `Plus Jakarta Sans`, or `Space Grotesk`.
   - Code/Mono: `Fira Code`, `JetBrains Mono`, or `Geist Mono`.
   - Hierarchy: Establish clear weight contrast (e.g. font-weight 800 for titles vs font-weight 400 for subtext, with distinct opacity/color scaling like `var(--text-main)` and `var(--text-muted)`).

3. **Spatial System & Layout Grid**
   - Use consistent 8px/4px spatial grid systems for margins, paddings, and component gaps (`8px`, `16px`, `24px`, `32px`, `48px`, `64px`).
   - Use fluid container bounds (`max-width: 1200px` or `1400px`, `width: 90%`) with dynamic responsive padding (`clamp(...)` or tailwind breakpoints).

4. **Depth & Glassmorphism 2.0**
   - Multi-layered translucency: `background: rgba(15, 23, 42, 0.65)`, `backdrop-filter: blur(16px)`, `border: 1px solid rgba(255, 255, 255, 0.08)`.
   - Multi-drop shadows: Combine subtle dark box-shadows with vibrant neon ambient glows (`box-shadow: 0 20px 40px -15px rgba(0,0,0,0.6), 0 0 30px rgba(0, 242, 254, 0.2)`).

---

## 2. Dynamic Micro-Interactions & Animations

1. **Hover & Active Feedback**
   - Every interactive element (buttons, cards, inputs) must respond smoothly to cursor interaction.
   - Use spring/cubic-bezier transitions: `transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1)`.
   - Hover transformations: Lift cards up (`transform: translateY(-4px) scale(1.02)`), enhance border lighting, or trigger radiant background pulses.

2. **Scroll-Driven & Entry Animations**
   - Use `IntersectionObserver` or Framer Motion / CSS keyframes for smooth fade-in-up elements on scroll.
   - Ambient Orbs: Animate glowing background orbs with subtle floating keyframe loops (`@keyframes orbPulse`).

3. **Tactile Feedback**
   - Active state compression (`transform: scale(0.98)` on button click).
   - Clear visual focus rings for accessibility (`outline: 2px solid var(--accent-cyan)`).

---

## 3. Responsive & Mobile-First UX

1. **Touch Targets & Ergonomics**
   - Interactive buttons on mobile must have a minimum touch target size of `44px x 44px`.
   - Avoid content shifting on mobile keyboards (`input` font-size minimum 16px to prevent iOS Safari auto-zoom).

2. **Adaptive Navigation**
   - Desktop: Sleek glass navbar with action buttons and clear active indicators.
   - Mobile: Clean slide-out drawer or full-screen overlay with smooth toggle icon animation (`bars` to `xmark`).

---

## 4. Dark Mode & Color Palette Standards

- **Deep Dark Base**: `#04060A`, `#090D16`, `#0F172A`
- **Surface Elevation**: `#0E1422`, `#162036`
- **Accent Neon Cyber**:
  - Cyan: `#00F2FE`
  - Blue: `#4FACFE`
  - Purple: `#7928CA`
  - Pink: `#FF0080`
  - Emerald: `#10B981`
- **Text Contrast Hierarchy**:
  - Primary Title: `#F8FAFC` (100% opacity)
  - Muted Subtext: `#94A3B8` (70% opacity)
  - Dimmed Label: `#64748B` (50% opacity)

---

## 5. UI Component Checklist

- [ ] **Navbar**: Brand logo with neon accent, floating blur background, active page indicator, CTA button.
- [ ] **Hero Section**: High-impact gradient headline, subtext, badge row with pulse dots, CTA primary + secondary buttons, dynamic stats counter.
- [ ] **Feature / Service Cards**: Icon container with custom glowing background, gradient borders on hover, clear value list.
- [ ] **Interactive Widgets**: Real-time calculators, filter tabs with active highlight, modal popups with backdrop blur.
- [ ] **Form Control**: Custom styled inputs, floating focus ring, instant validation feedback, loading button states.
- [ ] **Footer**: Brand recap, categorized navigation links, social media icon row, copyright tagline.
