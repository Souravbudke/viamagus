# Task 2: React Posts Application (The Archive)

A robust, "Brutalist" styled React application for browsing and creating posts. This project demonstrates modern React patterns including Context API for state management, client-side caching, and responsive CSS modules.

## Features

### 1. Smart Data Management
- **Context API Store**: Centralized state management using `PostsContext`.
- **Client-Side Caching**: Implements an in-memory cache strategy:
  - **List Cache**: Caches paginated results by page key (e.g., `0-10`, `10-10`) to prevent redundant network requests when navigating back/forth.
  - **Detail Cache**: Caches individual post details by ID to allow instant loading of previously visited posts.

### 2. Post Archive (List View)
- **Pagination**: Zero-indexed offset-based pagination (`_start`, `_limit`).
- **Loading States**: Custom "Skeleton" loaders that mimic the brutalist text layout during data fetching.
- **Responsive Layout**:
  - **Desktop**: Expansive layout with clear hierarchy.
  - **Mobile**: Condensed view with optimized touch targets.

### 3. Creation Terminal (Form)
- **Live Validation**:
  - **Title**: Mandatory field check.
  - **Description**: strict 1000-character limit.
- **Real-time Feedback**: Dynamic character counter (e.g., `542/1000`).
- **Success Feedback**: A custom modal overlay ("TRANSMISSION SUCCESSFUL") handling post-submission navigation flows.

### 4. Design System
- **Theme**: "Brutalist" aesthetic featuring:
  - Monospace fonts (Courier/Consolas stack).
  - High-contrast borders and sharp edges (no border-radius).
  - Uppercase typography for visual impact.
- **CSS Modules**: Scoped styling to prevent class name collisions (`PostList.module.css`, `CreatePost.module.css`).

---

## Architecture

### Folder Structure
```
src/
├── components/      # Reusable UI (SkeletonRow, Layout wrappers)
├── context/         # PostsContext (State & Caching Logic)
├── pages/           # Route Views (PostList, CreatePost, PostDetail)
├── App.jsx          # Route Definitions
└── main.jsx         # Entry Point
```

### Routing
- `/` - **Home**: Displays the paginated list of posts.
- `/create` - **New Entry**: Form to submit a new post.
- `/posts/:id` - **Detail**: View full content of a specific post.

---

## API Integration

Powered by **JSONPlaceholder API**:
- **Get Posts**: `GET /posts?_start={index}&_limit=10`
- **Get Detail**: `GET /posts/{id}`
- **Create Post**: `POST /posts` (Simulated persistence)

---

## Setup & Installation

1. **Navigate to directory**:
   ```bash
   cd apps/task2-posts
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Start Development Server**:
   ```bash
   npm run dev
   ```

4. **Build for Production**:
   ```bash
   npm run build
   ```

## Technologies
- **React 19**: Functional components & Hooks.
- **React Router 7**: Client-side routing.
- **Vite**: Ultra-fast build tool.
- **ESLint**: Code quality enforcement.
