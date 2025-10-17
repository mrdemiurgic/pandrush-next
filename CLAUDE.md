# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 application for Pandrush LLC, a professional video production company. The application is a single-page portfolio website with sections for home, about, recent work, booking, and contact. It uses styled-components for styling and is built with TypeScript.

## Development Commands

- **Development server**: `npm run dev` - Runs Next.js with Turbopack enabled
- **Build**: `npm build` - Creates production build with Turbopack
- **Production server**: `npm start` - Runs the production build
- **Lint**: `npm run lint` - Runs ESLint to check code quality

The development server runs on http://localhost:3000.

## Architecture

### Technology Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: styled-components with SSR support
- **TypeScript**: Strict mode enabled
- **Fonts**: Google Fonts (Montserrat, Oswald) loaded via next/font
- **Icons**: FontAwesome (SVG core)
- **Email**: Resend API for contact form submissions

### Directory Structure

```
src/
├── app/                    # Next.js App Router
│   ├── api/email/         # API route for email submissions
│   ├── layout.tsx         # Root layout with font config and Google Analytics
│   └── page.tsx           # Main page (single-page app structure)
├── components/            # Reusable UI components
│   ├── ContactForm/       # Contact form with email submission
│   ├── Examples/          # Video gallery/examples
│   ├── FixedNav/          # Desktop sticky navigation
│   ├── Footer/            # Site footer
│   ├── Modal/             # Modal wrapper component
│   ├── Nav/               # Navigation component
│   ├── NumberPicker/      # Custom number input
│   ├── Pricing/           # Pricing packages and booking modal
│   ├── Selfie/            # Profile/selfie component
│   ├── SocialMedia/       # Social media links
│   ├── Tidbits/           # Info tidbits component
│   └── VideoBackground/   # Background video component
├── sections/              # Page sections (for single-page layout)
│   ├── About/             # About section
│   ├── Book/              # Booking section
│   ├── Contact/           # Contact section
│   ├── Home/              # Hero/home section (dynamically imported, no SSR)
│   └── RecentWork/        # Recent work/portfolio section
├── contexts/              # React Context providers
│   ├── Modal.tsx          # Modal state management
│   └── NavDropdown.tsx    # Navigation dropdown state
├── hooks/                 # Custom React hooks
│   └── useWindowDimensions.ts
├── lib/                   # Library integrations
│   ├── email-client.ts    # Email client utilities
│   ├── email.ts           # Resend API integration
│   ├── fontawesome-config.ts  # FontAwesome configuration
│   └── registry.tsx       # styled-components SSR setup
├── styles/                # Design tokens
│   ├── breakpoints.ts     # Responsive breakpoints
│   ├── colors.ts          # Color palette
│   └── spacing.ts         # Spacing scale
└── utils/                 # Utility functions
    ├── layout.ts          # Layout utilities
    ├── pricing.ts         # Pricing calculations
    └── youtube.ts         # YouTube integration helpers
```

### Key Architectural Patterns

**Single-Page Application Structure**: Despite using App Router, this is structured as a single-page app. The main page (`src/app/page.tsx`) imports and renders all sections sequentially. The Home section is dynamically imported with `ssr: false` to avoid SSR issues.

**Styled Components SSR**: The app uses a custom `StyledComponentsRegistry` (`src/lib/registry.tsx`) to enable styled-components with Next.js App Router. This is wrapped around children in the root layout and handles server-side style injection.

**Context Providers**: Two main contexts wrap the application:
- `ModalProvider`: Manages modal visibility state across the app
- `NavDropdownProvider`: Controls navigation dropdown state

**Component Structure**: Each component typically has:
- `index.tsx`: Component logic
- `styles.ts`: styled-components definitions
- `types.ts` (if needed): TypeScript types

**Path Aliases**: The `@/*` alias maps to `src/*` (configured in tsconfig.json)

### Styling System

All styling uses styled-components. Design tokens are centralized in `src/styles/`:
- `colors.ts`: Color palette (babyBlue, sonicSilver, yellowGreen, etc.)
- `breakpoints.ts`: Responsive breakpoints
- `spacing.ts`: Spacing scale

### API Integration

**Email API**: `src/app/api/email/route.ts` provides a POST endpoint that accepts `{ subject, body }` and sends emails via Resend. The contact form and booking form use this endpoint.

**Resend Configuration**: Located in `src/lib/email.ts`. Uses environment variables for secure configuration (see Environment Variables section below).

### Device Detection

The app uses `react-device-detect` to conditionally render components. For example, `FixedNav` only renders on desktop (`<BrowserView>`).

### Environment Variables

The project uses environment variables for secure configuration. Create a `.env.local` file in the root directory with the following variables:

- `RESEND_API_KEY`: Your Resend API key (get from https://resend.com/api-keys)
- `EMAIL_FROM`: Verified sender email address (must be verified in Resend, or use `onboarding@resend.dev` for testing)
- `EMAIL_TO`: Recipient email address (e.g., `pandrushllc@gmail.com`)

See `.env.example` for the template. The `.env.local` file is gitignored and should never be committed.

## Important Notes

- **Turbopack**: The project uses Turbopack for both dev and build. Keep this flag in package.json scripts.
- **Client Components**: The main page and most components use `'use client'` directive due to interactivity requirements.
- **Google Analytics**: Configured in the root layout with a placeholder ID (`adsfasdfaefaew`). Update with real tracking ID when available.
- **Environment Variables**: Make sure to configure `.env.local` with valid Resend credentials before testing email functionality.
- **No Testing Setup**: There are no test files or testing framework configured in the project yet.
