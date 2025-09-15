# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
This is "Insist Hair Salon" - a Nuxt 3 website for a hair salon business. The site includes pages for services, pricing, portfolio, reservations, and recruitment.

## Required Node Version
- Node.js 22.x or higher (required for Vercel deployment)

## Development Commands
```bash
# Install dependencies
npm install

# Development server (uses .env.dev)
npm run dev

# Build for production (uses .env.prod)  
npm run build

# Generate static site (uses .env.prod)
npm run generate

# Preview production build
npm run preview

# Start production server
npm start
```

## Architecture

### Core Framework
- **Nuxt 3**: Main framework with TypeScript support
- **Vue 3**: Frontend framework with Composition API
- **Pinia**: State management (configured with @pinia/nuxt)
- **UnoCSS**: Utility-first CSS framework
- **SASS**: CSS preprocessor

### Key Modules
- `nuxt-icon`: Icon library
- `nuxt-aos`: Animation on scroll
- `sweetalert2`: Modal dialogs
- Custom lazy loading directive

### Directory Structure
- `components/`: Reusable Vue components (Header, Footer, Modal, etc.)
- `pages/`: File-based routing (index, price, portfolio, reservation, etc.)
- `layouts/`: Layout components (default, error)
- `composables/`: Composable functions
- `plugins/`: Nuxt plugins (sweetalert2, directive-lazyLoad)
- `assets/css/`: Global styles (reset.css, transition.css)
- `public/`: Static assets

### Configuration
- Environment files: `.env.dev` and `.env.prod`
- Proxy configuration for Google Docs API at `/api`
- Custom page and layout transitions (fade effect)
- Auto-imports enabled for store and composables

### Deployment
- Google Cloud Platform (GCP) deployment
- Uses `gcloud app deploy` with `app.yaml` configuration
- Production build required before deployment

### Development Notes
- Dev server runs on port 8080 (configurable via NUXT_BASE_PORT)
- All components use Vue 3 Composition API
- Custom CSS reset and transition animations
- Responsive design considerations for mobile (PhoneMenu component)