# Task 1: Login Page Implementation

## 📖 Introduction
This project involves creating a high-fidelity, pixel-perfect "Login" page based on a provided Adobe XD design. The implementation focuses on precise UI replication, full responsiveness across devices, and essential form validation logic using React and detailed CSS.

## ✨ Features
- **Pixel-Perfect UI**: Meticulous implementation of the design specifications (colors, fonts, spacing).
- **Responsive Design**: Fluid layout adapting seamlessly from desktop to mobile screens.
- **Form Validation**:
  - Email format verification.
  - Required field checks for both email and password.
- **Interactive Elements**: Hover states and error feedback.

## 🛠️ Tech Stack
- **Framework**: [React](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: CSP / CSS Modules
- **Package Manager**: NPM

## 🚀 Getting Started

### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (Version 16 or higher recommended)
- npm (comes with Node.js)

### Installation
1. Navigate to the project directory:
   ```bash
   cd apps/task1-login
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application
To start the development server:
```bash
npm run dev
```
Open [http://localhost:5173/](http://localhost:5173/) (or the port shown in your terminal) to view the app.

### Building for Production
To build the app for production:
```bash
npm run build
```

### Linting
To check for code quality issues:
```bash
npm run lint
```

## 📂 Project Structure
```
apps/task1-login/
├── src/
│   ├── assets/       # Static assets (images, icons)
│   ├── App.jsx       # Main application component
│   ├── Login.jsx     # Login form component (if applicable)
│   ├── App.css       # App-wide styles
│   ├── index.css     # Global styles and resets
│   └── main.jsx      # Entry point
├── public/           # Public static files
├── package.json      # Dependencies and scripts
└── README.md         # Project documentation
```

---

# 📄 Product Requirement Document (PRD)

> **Note**: The following is the original PRD used to guide the development of this task.

## 1. Introduction
This document outlines the requirements for creating a high-fidelity "Login" page based on a provided Adobe XD design. The goal is to demonstrate precision in UI implementation, responsiveness, and basic form validation.

## 2. Objective
Develop a pixel-perfect "Login" page that matches the provided design specifications and is fully responsive across desktop and mobile devices.

## 3. Scope
- **Page:** Login Page
- **Design Source:** [Adobe XD Link](https://xd.adobe.com/view/9ede06e3-b742-4d60-8dcb-49b6e3e9fc85-cb8d/)
- **Target Devices:** Desktop and Mobile.

## 4. Functional Requirements

### 4.1 Login Form
- **Inputs:**
    - Email Address
    - Password
- **Actions:**
    - "Login" Button: Submits the form.

### 4.2 Validation
- **Email Validation:**
    - Must detect and reject invalid email formats (e.g., missing "@", missing domain).
    - Error message should be displayed for invalid emails.
- **Required Fields:**
    - Both Email and Password are mandatory.

## 5. Non-Functional Requirements (UI/UX)

### 5.1 Design Fidelity
- **Pixel Perfection:** Dimensions, spacing, padding, margins, fonts, and colors must strictly adhere to the Adobe XD design reference.
- **Alignment:** Elements must be perfectly aligned as per the mockup.

### 5.1.1 Design System
**Color Palette:**
- Primary Green: `#20B716`
- Primary Pink/Red: `#EE2D6E`, `#D9185F`
- Text Colors: `#000000`, `#FFFFFF`
- Backgrounds/Overlays: `#E2E8F0`, `#00000029` (Shadow/Overlay)
- Social Brand Colors: `#4285F4` (Google), `#1877F2` (Facebook)

**Typography:**
- **Primary Font:** Josefin Sans (Google Fonts)
  - Headings: Regular 29px (`#20B716`)
  - Subheadings: Regular 19px (`#FFFFFF`)
  - Body Text: Regular 16px (`#20B716`, `#000000`)
  - Small Text: Regular 14px (Line Spacing: 18)
    - Black: `#000000`
    - Pink: `#D9185F`
  - Buttons: SemiBold 14px (`#FFFFFF`, Line Spacing: 18)
- **Secondary Font:** Myriad Pro
  - Helper Text: Regular 13px (`#EE2D6E`)

### 5.2 Responsiveness
- **Desktop:** The layout should match the desktop view in the design.
- **Mobile:** The layout must adapt fluidly to smaller screens (100% responsive). Elements should stack or resize appropriate to ensure usability on mobile devices.

### 5.3 Tech Stack & Deployment
- **Framework:** React or HTML/CSS/JS (Standard web technologies).
- **Deployment:** Must be hosted on Netlify.
- **Codebase:** Source code must be available via a Git repository.

## 6. Acceptance Criteria
- [ ] Page matches the Adobe XD design visually (pixel-perfect).
- [ ] Page is fully responsive on mobile and desktop.
- [ ] Email field verifies input format and displays error if invalid.
- [ ] Form cannot be submitted with empty fields.
- [ ] Code is deployed to Netlify with a working link.
- [ ] Source code is clean and provided via Git.
