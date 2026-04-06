# Application Architecture Overview

This document provides a high-level overview of the Architectural Portfolio's structure, data flow, and key technical decisions.

## 🏗️ High-Level Architecture

The application is a full-stack web application built with a modern React frontend and a serverless Firebase backend.

### 1. Frontend Layer (React + Vite)
- **Single Page Application (SPA)**: Built with React 18+ and Vite for fast development and optimized production builds.
- **State Management**:
  - **React Query (TanStack Query)**: Manages asynchronous data fetching, caching, and synchronization with Firestore.
  - **React Hooks**: Handles local component state and side effects.
- **Styling & UI**:
  - **Tailwind CSS**: Utility-first CSS for rapid and consistent styling.
  - **Lucide React**: A comprehensive icon library for visual elements.
- **Animations**:
  - **Framer Motion (`motion/react`)**: High-performance layout and state animations.
  - **GSAP**: Complex, scroll-triggered animations for a cinematic experience.

### 2. Backend Layer (Firebase)
- **Firestore**: A NoSQL document database for storing project metadata, descriptions, and gallery URLs.
- **Authentication**: Firebase Authentication (Google Login) for secure access to the admin dashboard.
- **Security Rules**: Granular access control to protect project data from unauthorized modifications.

### 3. AI Integration (Google Gemini)
- **Gemini 3 Flash**: Used to generate concise, insightful project summaries based on architectural descriptions.
- **Client-Side Invocation**: The Gemini API is called directly from the frontend using the `@google/genai` SDK.

## 📊 Data Flow

### 1. Project Discovery
- The `useFirebaseProjects` hook fetches project data from Firestore using React Query.
- Data is cached on the client to ensure a fast and responsive user experience.
- Filtering and search logic are implemented using `useMemo` for optimal performance.

### 2. Project Management (Admin)
- Authenticated administrators use the `AdminScreen` to perform CRUD operations.
- Slugs are automatically generated on the client to ensure SEO-friendly URLs.
- Mutations are handled by React Query, which invalidates the cache upon success to trigger real-time UI updates.

### 3. Project Details
- The `DetailScreen` retrieves a specific project based on the URL slug.
- It dynamically updates the page's metadata (Meta Title, Meta Description) for SEO.
- It fetches an AI-generated summary and embeds an interactive Google Map for location context.

## 📁 Key Files & Directories

- `src/App.tsx`: Main routing and application entry point.
- `src/hooks/useFirebaseProjects.ts`: Centralized data fetching and mutation logic.
- `src/screens/`: Contains the primary views (Home, Projects, Detail, Admin).
- `src/components/`: Reusable UI elements (ProjectCard, JournalEntry, etc.).
- `firebase-blueprint.json`: Defines the Firestore data structure and entity schemas.
- `firestore.rules`: Security configuration for the Firebase backend.

## 🚀 Deployment & Build

- **Build Tool**: Vite compiles the application into static assets.
- **Hosting**: The application is designed to be hosted on platforms like Cloud Run or Firebase Hosting.
- **PWA**: A service worker and manifest file are included to enable offline capabilities and home-screen installation.

## 🔒 Security Considerations

- **API Keys**: Stored in environment variables and never committed to source control.
- **Firestore Rules**: Enforce strict data validation and role-based access control.
- **Input Sanitization**: All user-provided data is sanitized before being saved to the database.
