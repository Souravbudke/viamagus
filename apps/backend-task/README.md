# Backend Task: NestJS Task Management API

This is a NestJS-based REST API for managing Teams and Tasks, integrated with MongoDB via TypeORM.

## Features

- **Tech Stack**: NestJS, TypeORM, MongoDB, TypeScript.
- **Authentication**: JWT Bearer Token (Stateless).
- **Database**: Connects to MongoDB Atlas (Url pre-configured).
- **Entities**:
  - `User` (Authentication & Team Membership)
  - `Team` (Groups of Users)
  - `Task` (Assignments, Status, Due Dates)

## Prerequisites

- Node.js (v18+)
- Internet connection (to connect to MongoDB Atlas)

## Setup & Installation

1. Navigate to the directory:
   ```bash
   cd apps/backend-task
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. **Configure Environment**:
   Create a `.env` file in the `apps/backend-task` directory:
   ```env
   MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/db_name
   ```

## Running the Application

1. **Start the server**:
   ```bash
   npm run start:dev
   ```
   Server runs at `http://localhost:3000`.

2. **Seed Initial Data** (Recommended for Demo):
   To populate the database with a Team, Admin User (`admin`/`password`), and Developers (`dev1`/`password`), run:
   ```bash
   npm run seed
   ```
   **Copy the IDs output in the console** to use in your Postman requests.

## API Documentation (Postman)

A Postman Collection is included in this repository: `postman_collection.json`.

1. Import `postman_collection.json` into Postman.
2. **Login**: Run the `Auth > Login` request to get an access token. The test script automatically sets the `access_token` environment variable.
3. **Manage Teams**: Create teams and add members using the User IDs from the seed output.
4. **Manage Tasks**: Create and update tasks.

## Architecture

- **AuthModule**: Handles Login and JWT Strategy.
- **UsersModule**: Data access for User validation.
- **TeamsModule**: Logic for proper Team & Membership management.
- **TasksModule**: Logic for assignment and status updates.

## Technical Notes

- **Database**: MongoDB (via `TypeOrmModule` with `type: 'mongodb'`).
- **IDs**: All IDs are MongoDB ObjectIds (Strings in API, ObjectIds in DB).
- **Strict Typing**: TypeScript interfaces and DTOs used throughout.
