# Salvation Church of God Website

## Overview
A beautiful, responsive single-page website for Salvation Church of God, located at 456 Ave N, Brooklyn, NY. The website showcases the church's mission, services, ministries, events, and provides a contact form for visitors.

## Project Structure

### Frontend (client/)
- **Pages**: `client/src/pages/Home.tsx` - Single-page layout with all sections
- **Components**: 
  - `Navigation.tsx` - Fixed header with smooth scroll navigation
  - `HeroSection.tsx` - Welcome hero with pastor image
  - `AboutSection.tsx` - Vision, mission, and core values
  - `ServicesSection.tsx` - Weekly service schedule and Radio Salvation info
  - `MinistriesSection.tsx` - 8 ministry departments
  - `EventsSection.tsx` - 2026 church calendar with 10 events
  - `ContactSection.tsx` - Contact form with validation
  - `Footer.tsx` - Church info and copyright

### Backend (server/)
- **API Routes**: `server/routes.ts`
  - `POST /api/contact` - Submit contact form
  - `GET /api/contact` - Retrieve messages (admin)
- **Storage**: `server/storage.ts` - In-memory storage for contact messages

### Shared (shared/)
- **Schema**: `shared/schema.ts` - TypeScript interfaces and Zod validation schemas

## Design System

### Color Scheme
Based on church branding (royal blue, gold/yellow, white):
- **Primary**: Royal Blue (`224 71% 32%`) - Main brand color
- **Accent/Secondary**: Gold (`43 74% 49%`) - Highlights and CTAs
- **Background**: White - Clean, welcoming feel
- **Dark mode**: Fully supported with inverted color scheme

### Typography
- **Font**: Poppins (sans-serif) for modern, friendly feel
- **Headings**: Bold with accent color highlights

## Key Features
1. **Smooth Scroll Navigation** - Fixed header with section links
2. **Responsive Design** - Mobile-first with hamburger menu
3. **Contact Form** - Validated with react-hook-form and Zod
4. **Church Calendar** - 10 events for 2026 including anniversary
5. **Service Schedule** - 5 weekly services with Radio Salvation info

## Church Information
- **Church Name**: Salvation Church of God
- **Pastor**: Malory Laurent
- **Address**: 456 Ave N, Brooklyn, NY
- **Radio**: Radio Salvation (6:00 AM - 12:00 PM for Prayer)

## Running the Project
```bash
npm run dev
```
The server runs on port 5000 and serves both the Express API and the Vite frontend.
