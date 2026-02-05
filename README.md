# Vigamus Coding Assignments

**Author**: Sourav
**Submission Date**: February 2026

Welcome to the complete submission repository for the Vigamus Coding Assignments. This monorepo contains high-quality, production-ready implementations for all three Front End challenges and the Back End NestJS challenge.

Each project is isolated in the `apps/` directory and is built with a focus on clean architecture, component reusability, and pixel-perfect design.

---

## 📂 Repository Structure

```
vigamus/
├── apps/
│   ├── task1-login/      # Challenge 1: Pixel-Perfect Login UI
│   ├── task2-posts/      # Challenge 2: Posts App with API Integration
│   ├── task3-cart/       # Challenge 3: Shopping Cart Logic
│   └── backend-task/     # Back End: NestJS Task Management API
├── docs/                 # Documentation & Assets
└── README.md             # This guide
```

---

## 🚀 Quick Start: How to Run Everything

### Prerequisites
- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/)

---

## 🎨 Front End Challenges

### 1. Login UI (Pixel Perfect)
**Path**: `apps/task1-login`

A high-fidelity implementation of the provided Adobe XD design.
- **Key Features**:
  - **Responsive**: Adapts fluidly from desktop to mobile (320px+).
  - **Validation**: Strict email format checking and required field validation.
  - **Assets**: Custom exported assets (Tree, Facebook/Google icons) matching the design exactly.
  - **Styling**: Uses CSS Modules for scoped, maintainable styling.

**Run Locally**:
```bash
cd apps/task1-login
npm install
npm run dev
# Opens at http://localhost:5173
```

### 2. Posts Application (React + API)
**Path**: `apps/task2-posts`

A multi-page React application consuming the JSONPlaceholder API.
- **Key Features**:
  - **Pagination**: Browse posts efficiently with Next/Previous controls (`_start` & `_limit`).
  - **Detail View**: Full dynamic routing to view individual post details.
  - **Create Post**: A functional form to POST new data to the API.
  - **UX Enhancements**: Loading skeletons and error handling states.
  - **Architecture**: Context API for state management and React Router v6 for navigation.

**Run Locally**:
```bash
cd apps/task2-posts
npm install
npm run dev
# Opens at http://localhost:5173
```

### 3. Shopping Cart (Logic & State)
**Path**: `apps/task3-cart`

A dynamic shopping cart interface.
- **Key Features**:
  - **Real-time Totals**: Updates instantly as you change quantities.
  - **Discount System**: Apply percentage-based discounts (e.g., enter "10" for 10% off).
  - **Currency Formatting**: Localized INR (₹) formatting.
  - **Clean Code**: Separated logic for cart calculations and UI presentation.

**Run Locally**:
```bash
cd apps/task3-cart
npm install
npm run dev
# Opens at http://localhost:5173
```

---

## ⚙️ Back End Challenge: NestJS API

**Path**: `apps/backend-task`

A comprehensive REST API built with **NestJS**, **TypeORM**, and **MongoDB**.

### Features
- **Authentication**: Stateless JWT (JSON Web Token) authentication.
- **Role-Based Access**: Secure endpoints protected by Guards.
- **Database**: Full MongoDB integration via TypeORM entities.
- **Task Management**: Create, assign, update, and list tasks.
- **Team Management**: Manage team members and assignments.

### Setup & Installation

1. **Navigate & Install**:
   ```bash
   cd apps/backend-task
   npm install
   ```

2. **Configuration**:
   Create a `.env` file in the `apps/backend-task` folder:
   ```env
   # Example Configuration
   MONGODB_URI=mongodb+srv://<user>:<password>@cluster.mongodb.net/vigamus_db
   JWT_SECRET=super_secret_key_123
   ```

3. **Database Seeding (Optional but Recommended)**:
   Populate the DB with a default admin, developers, and a team to test quickly.
   ```bash
   npm run seed
   ```
   *Note: This will output IDs for the created users in the console. Copy them!*

4. **Run Server**:
   ```bash
   npm run start:dev
   ```
   The API will be available at `http://localhost:3000`.

### API Documentation
A complete **Postman Collection** is included in the project:
📄 Location: [`apps/backend-task/postman_collection.json`](./apps/backend-task/postman_collection.json)

**Testing Steps**:
1. Import the collection into Postman.
2. Run `Auth > Login` to get a Token (automatically saved to environment).
3. Use the Token to access protected routes like `GET /tasks` or `POST /teams`.

---

## 🛠 Tech Stack Summary

| Component | Technologies Used |
| :--- | :--- |
| **Front End** | React 18, Vite, CSS Modules, React Router 6, Context API |
| **Back End** | NestJS, TypeScript, TypeORM, MongoDB, Passport-JWT |
| **Tools** | Postman, Git, NPM |

---

Thank you for reviewing my submission!
