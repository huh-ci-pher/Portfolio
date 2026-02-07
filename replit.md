# Portfolio Application

## Overview

This is a full-stack portfolio application built with Express.js backend and React frontend. The application showcases a Java Backend Developer's portfolio with a contact form functionality. It features a modern, responsive design using shadcn/ui components and Tailwind CSS, with a dark theme optimized for displaying technical content.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight client-side routing)
- **State Management**: TanStack Query (React Query) for server state
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Build Tool**: Vite with React plugin
- **Animations**: Framer Motion for smooth page transitions and interactions

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Runtime**: Node.js with ES modules
- **API Style**: RESTful API design
- **Request Handling**: Express middleware for JSON parsing and logging
- **Error Handling**: Centralized error middleware with proper status codes

### Data Storage Solutions
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Database**: PostgreSQL (configured via DATABASE_URL environment variable)
- **Migration**: Drizzle Kit for schema migrations
- **Development Storage**: In-memory storage implementation for development/testing
- **Production Storage**: PostgreSQL with Neon Database serverless driver

## Key Components

### Database Schema
- **Users Table**: Basic user authentication structure (id, username, password)
- **Contacts Table**: Contact form submissions (id, name, email, subject, message, createdAt)
- **Validation**: Zod schemas for runtime type checking and API validation

### API Endpoints
- `POST /api/contact`: Submit contact form with validation
- `GET /api/contacts`: Retrieve all contact submissions (admin endpoint)
- `GET /api/resume/download`: Serve resume file download

### Frontend Pages
- **Portfolio Page**: Single-page application with sections for hero, about, skills, projects, and contact
- **404 Page**: Custom not found page with helpful messaging

### UI Components
- **Navigation**: Sticky navigation with smooth scrolling and active section highlighting
- **Hero Section**: Animated typing effect displaying different roles/titles
- **Skills Section**: Animated progress bars showing proficiency levels
- **Projects Section**: Showcase of backend development projects with code snippets
- **Contact Section**: Form with real-time validation and submission handling

## Data Flow

### Contact Form Submission
1. User fills out contact form on frontend
2. Frontend validates data using Zod schema
3. Form data sent to `/api/contact` endpoint
4. Backend validates data again using shared schema
5. Data stored in database via Drizzle ORM
6. Success/error response sent back to frontend
7. User sees confirmation toast message

### Development vs Production
- **Development**: Uses in-memory storage for quick iteration
- **Production**: Connects to PostgreSQL database via environment variables
- **Shared Schema**: Database schema and validation logic shared between frontend and backend

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL serverless driver
- **drizzle-orm**: Type-safe ORM for database operations
- **@tanstack/react-query**: Server state management
- **@radix-ui/***: Headless UI primitives for accessibility
- **framer-motion**: Animation library for smooth interactions
- **wouter**: Lightweight React routing
- **zod**: Runtime type validation

### Development Tools
- **drizzle-kit**: Database schema management and migrations
- **vite**: Fast build tool and development server
- **tsx**: TypeScript execution for development
- **esbuild**: Fast bundling for production builds

### Styling
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Utility for managing component variants
- **clsx**: Conditional className utility

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite compiles React application to static assets in `dist/public`
2. **Backend Build**: esbuild bundles server code to `dist/index.js`
3. **Database Setup**: Drizzle migrations applied via `db:push` command

### Environment Configuration
- **DATABASE_URL**: PostgreSQL connection string (required for production)
- **NODE_ENV**: Environment setting (development/production)
- **Port Configuration**: Server listens on environment-specified port

### Development Workflow
- **Hot Reload**: Vite provides instant frontend updates
- **API Logging**: Request/response logging for debugging
- **Error Overlay**: Runtime error modal for development

### Production Considerations
- **Static File Serving**: Express serves built React application
- **Database Migrations**: Schema changes managed via Drizzle migrations
- **Error Handling**: Production-safe error responses without stack traces
- **Asset Optimization**: Vite optimizes bundles for production deployment

The application follows a monorepo structure with shared TypeScript types and validation schemas between frontend and backend, ensuring type safety across the entire stack.