# 🧪 Ultimate Backend Testing Guide

Follow this guide to perfectly demo your NestJS + MongoDB application using Postman.

## Phase 1: Preparation

1.  **Start the Server**
    Open your terminal in `apps/backend-task` and run:
    ```bash
    npm run start:dev
    ```
    *Keep this terminal open.*

2.  **Seed the Database (Critically Important)**
    Open a **second terminal** in `apps/backend-task` and run:
    ```bash
    npm run seed
    ```
    **👁️ WATCH THE OUTPUT!** You will see something like this:
    ```text
    ✅ Created Users:
       - admin: 65cf...a1b2
       - dev1: 65cf...c3d4  <-- Copy this ID!
    ✅ Created Team: Alpha Team (ID: 65cf...e5f6) <-- Copy this ID!
    ```
    *Keep these IDs handy in a text file for the next steps.*

## Phase 2: Postman Setup

1.  **Import Collection**
    - Open Postman.
    - Click **Import** (top left).
    - Drag and drop the `apps/backend-task/postman_collection.json` file.
    - You will see a collection named **"Task 4 Backend Demo"**.

2.  **Verify Environment**
    - Click on the collection name **"Task 4 Backend Demo"**.
    - Go to the **Variables** tab.
    - Ensure `base_url` is set to `http://localhost:3000`.
    - `access_token` should be empty (it will auto-fill later).

## Phase 3: The Demo Flow

Perform these requests in exact order to show a full workflow.

### 1. Authentication
- **Request**: `Auth > Login (Admin)`
- **Action**: Click **Send**.
- **Result**: You should get a `201 Created` response with an `access_token`.
- **Magic**: The "Tests" script in this request automatically saves this token. You are now logged in!

### 2. Team Management
- **Request**: `Teams > List Teams`
- **Action**: Click **Send**.
- **Result**: You should see the "Alpha Team" created by the seed script.

- **Request**: `Teams > Add Member to Team`
- **Action**:
    - Go to the **Body** tab.
    - Replace `"REPLACE_WITH_USER_ID"` with the **dev1 ID** you copied earlier.
    - In the URL bar, replace `REPLACE_WITH_TEAM_ID` with the **Team ID** you copied.
- **Action**: Click **Send**.
- **Result**: Returns the team object with the new member added.

### 3. Task Management
- **Request**: `Tasks > Create Task`
- **Action**:
    - Go to the **Body** tab.
    - Replace `"REPLACE_WITH_USER_ID"` with the **dev1 ID**.
- **Result**: A new task is created, assigned to Dev1.

- **Request**: `Tasks > List All Tasks`
- **Action**: Click **Send**.
- **Result**: Shows all tasks. Notice the `assignee` field is populated.

- **Request**: `Tasks > Update Task`
- **Action**:
    - Pick a Task ID from the previous list.
    - Put it in the URL (replace `REPLACE_WITH_TASK_ID`).
    - Click **Send**.
- **Result**: Status changes to "DONE".

## 🎉 Success!
You have demonstrated Auth, Database Relationships, Logic, and Persistence.
