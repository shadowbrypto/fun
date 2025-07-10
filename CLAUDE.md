# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static website project that displays a "Domain Not For Sale" protection page. The site features a cybersecurity-themed design with a custom SVG trojan horse illustration, neon green color scheme, and animated visual effects.

## Architecture

- **Static Site**: Pure HTML/CSS/JavaScript with no build process required
- **Deployment**: Configured for Netlify with security headers and SPA redirects
- **Styling**: CSS3 with animations, grid patterns, and neon effects
- **Interactivity**: Vanilla JavaScript for scroll effects and intersection observers

## File Structure

- `index.html` - Main page with trojan horse SVG and protection message
- `styles.css` - Complete styling with cybersecurity theme, animations, and responsive design
- `script.js` - JavaScript for mobile menu, smooth scrolling, form handling, and scroll animations
- `netlify.toml` - Deployment configuration with security headers

## Common Development Tasks

### Development
- `npm install` - Install dependencies
- `npm run dev` - Start development server on http://localhost:3000
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### Deployment
- `npm run build` creates optimized production build in `dist/` folder
- Netlify automatically deploys from git pushes
- All routes redirect to `/index.html` for SPA behavior

### Testing
- Development server runs on http://localhost:3000
- Hot reload enabled for development

### Styling Changes
- All styles are in `styles.css` using CSS custom properties
- Main color scheme uses `#00ff88` (neon green) and `#0f1419` (dark background)
- Responsive breakpoints at 768px and 480px

### Security Features
- CSP headers configured in `netlify.toml`
- X-Frame-Options, XSS-Protection, and Content-Type-Options headers set
- Referrer policy configured for cross-origin protection

## Design System

- **Primary Color**: `#00ff88` (neon green)
- **Background**: `#0f1419` (dark blue-black)
- **Typography**: Inter font family with multiple weights
- **Animations**: Floating particles, neon pulse effects, and smooth transitions
- **Theme**: Cybersecurity/hacker aesthetic with glowing borders and shadow effects