# Salvation Church of God Website

## Overview

A church website for Salvation Church of God in Brooklyn, NY, led by Pastor Malory Laurent. The site serves as the primary online presence for the congregation, featuring information about services, ministries, events, and contact functionality. Built as a full-stack TypeScript application with a React frontend and Express backend.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight client-side routing)
- **Styling**: Tailwind CSS with CSS variables for theming (Royal Blue, Gold, White color scheme)
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **State Management**: TanStack React Query for server state
- **Forms**: React Hook Form with Zod validation
- **Build Tool**: Vite with path aliases (@/, @shared/, @assets/)

### Backend Architecture
- **Framework**: Express 5 on Node.js
- **Language**: TypeScript (ESM modules)
- **API Pattern**: REST endpoints under /api prefix
- **Development**: Vite dev server integration with HMR

### Data Storage
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema Location**: shared/schema.ts (shared between client and server)
- **Current Storage**: In-memory storage (MemStorage class) as fallback
- **Database Ready**: PostgreSQL schema defined, requires DATABASE_URL environment variable
- **Migrations**: Drizzle Kit with migrations output to ./migrations

### Key Design Patterns
- **Monorepo Structure**: Single repo with client/, server/, and shared/ directories
- **Shared Types**: Schema definitions and types shared between frontend and backend via @shared alias
- **Component-Based UI**: Modular section components (HeroSection, AboutSection, ServicesSection, etc.)
- **Single Page Application**: One main route with smooth scroll navigation between sections

### Project Structure
```
client/src/          # React frontend
  components/        # UI components and page sections
  pages/            # Route pages (Home, NotFound)
  hooks/            # Custom React hooks
  lib/              # Utilities and query client
server/             # Express backend
  routes.ts         # API route definitions
  storage.ts        # Data storage interface
shared/             # Shared code between client/server
  schema.ts         # Drizzle schema and types
```

## External Dependencies

### Database
- **PostgreSQL**: Primary database (configured via DATABASE_URL env var)
- **Drizzle ORM**: Database toolkit for TypeScript
- **connect-pg-simple**: Session storage for PostgreSQL

### UI Framework
- **Radix UI**: Headless UI primitives (dialog, dropdown, tabs, etc.)
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library
- **class-variance-authority**: Component variant management

### Build & Development
- **Vite**: Frontend build tool and dev server
- **esbuild**: Server bundling for production
- **tsx**: TypeScript execution for development

### Form & Validation
- **Zod**: Schema validation
- **React Hook Form**: Form state management
- **drizzle-zod**: Zod schema generation from Drizzle tables