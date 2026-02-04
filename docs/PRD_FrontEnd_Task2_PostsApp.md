# Product Requirement Document (PRD) - Front End Task 2: React Posts App

**Version:** 1.0
**Status:** Draft
**Date:** 2026-02-04

## 1. Introduction
This document defines the requirements for a multi-page React application that interacts with `jsonplaceholder.typicode.com`. The app will allow users to view a list of posts, create new posts, and view detailed post information.

## 2. Objective
Build a functional React application demonstrating API integration, routing, state management, form handling, and pagination.

## 3. Scope
- **Pages:**
    1.  Post List (Home)
    2.  Create New Post
    3.  Post Detail View
- **External API:** `https://jsonplaceholder.typicode.com`

## 4. Functional Requirements

### 4.1 Page 1: List of Posts
- **Display:** Show a list of posts (title and description).
- **Data Source:** `GET https://jsonplaceholder.typicode.com/posts`
- **Pagination:**
    - Implement "Next" and "Previous" buttons.
    - Logic: Use `_start` and `_limit` query parameters (e.g., `?_start=0&_limit=10`).
- **Navigation:** Clicking a post triggers navigation to the Post Detail View (Page 3).

### 4.2 Page 2: Create New Post
- **Form Fields:**
    - **Title:** Mandatory.
    - **Description:** Text area, max 1000 characters.
- **Submission:**
    - Action: `POST https://jsonplaceholder.typicode.com/posts`
    - Behavior: On success, display a success message and redirect to the Post List (Page 1).

### 4.3 Page 3: Post Detail View
- **Display:** Detailed view of a specific post (Title + Description).
- **Data Source:** `GET https://jsonplaceholder.typicode.com/posts/{postId}`
- **Routing:** URL should reflect the post ID (e.g., `/posts/1`).

## 5. Technical Requirements
- **Framework:** React.js.
- **Routing:** React Router.
- **State Management:** Redux, Context API, or local state (developer's choice).
- **Error Handling:** Graceful handling of API errors (alerts or UI feedback).
- **Validation:**
    - Title: Required.
    - Description: Max 1000 chars.
- **Responsiveness:** Mobile-friendly design.

## 6. Bonus Features (Optional)
- **Caching:** Cache list data to minimize API calls on navigation.
- **UX:** Loading indicators (spinners/skeletons) and CSS transitions/animations.

## 7. Acceptance Criteria
- [ ] User can view a paginated list of posts.
- [ ] User can navigate to next/previous pages of posts.
- [ ] User can click a post to view its details on a separate route.
- [ ] User can create a new post with validation (Title required, Desc length limit).
- [ ] Successful post creation redirects to list view.
- [ ] Application handles API errors gracefully.
- [ ] App is deployed to Netlify.
