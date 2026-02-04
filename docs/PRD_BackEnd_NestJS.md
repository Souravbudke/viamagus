# Product Requirement Document (PRD) - Back End Task: NestJS Task Management

**Version:** 1.0
**Status:** Draft
**Date:** 2026-02-04

## 1. Introduction
This document defines the requirements for a backend Task Management service built with NestJS. The service will support task creation, team management, and assignment functionalities, secured by JWT authentication.

## 2. Objective
Build a robust RESTful API using NestJS and TypeORM that handles relational data (Tasks, Teams, Users) and enforces authentication.

## 3. Scope
- **Framework:** NestJS
- **ORM:** TypeORM
- **Database:** MySQL, MSSQL, or MongoDB.
- **Security:** Bearer Token Authentication.

## 4. Functional Requirements

### 4.1 Data Entities
- **Task:** `id`, `description`, `due_date`, `status` (e.g., OPEN, IN_PROGRESS, DONE), `assignee` (User/Member).
- **Team:** `id`, `name`, `members` (List of Users).
- **User/Member:** Basic identity for assignment.

### 4.2 API Features
1.  **Task Management:**
    - Create Task (with properties).
    - Update Task (Status, Properties).
    - List Tasks (Filter by Assignee).
2.  **Team Management:**
    - Create Team.
    - Add Members to Team.
    - Assign Task to Team Member.
3.  **Authentication:**
    - All endpoints must be protected.
    - Validate Bearer Token (JWT).
    - *Note:* Hardcoded credentials can be used to generate the initial token.

## 5. Technical Requirements
- **Language:** TypeScript (Strict type-checking is mandatory).
- **Database:** Relational (MySQL/MSSQL) or NoSQL (Mongo) - TypeORM required.
- **Config:** Use `.env` for credentials and secrets.
- **Documentation:** Postman Collection required for demo.

## 6. Acceptance Criteria
- [ ] API is built with NestJS and TypeORM.
- [ ] Users can create tasks and teams via API.
- [ ] Tasks can be assigned to specific team members.
- [ ] Tasks can be retrieved by assignee.
- [ ] Task status and details can be updated.
- [ ] endpoints are secured with JWT; unauthenticated requests are rejected.
- [ ] Code is strictly typed (TypeScript).
- [ ] Postman collection is provided for verification.
