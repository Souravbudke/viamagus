# Changelog

All notable changes to the backend-task project will be documented in this file.

## [1.1.0] - 2026-02-06

### Added

#### Global Validation
- Enabled `ValidationPipe` globally in `main.ts` with:
  - `whitelist: true` - Strips unknown properties from requests
  - `transform: true` - Transforms payloads to DTO class instances

#### Auth DTOs
- **`LoginDto`** (`src/auth/dto/login.dto.ts`)
  - `username`: string, required, not empty
  - `password`: string, required, not empty

#### User DTOs
- **`CreateUserDto`** (`src/users/dto/create-user.dto.ts`)
  - `username`: string, required, min 3 characters
  - `password`: string, required, min 6 characters
  - `teamId`: string, optional

#### Task DTOs
- **`CreateTaskDto`** (`src/tasks/dto/create-task.dto.ts`)
  - `description`: string, required, not empty
  - `due_date`: string, required, ISO 8601 format
  - `status`: enum, required (`OPEN`, `IN_PROGRESS`, `DONE`)
  - `assigneeId`: string, optional

- **`UpdateTaskDto`** (`src/tasks/dto/update-task.dto.ts`)
  - Extends `CreateTaskDto` as partial (all fields optional)

#### Team DTOs
- **`CreateTeamDto`** (`src/teams/dto/create-team.dto.ts`)
  - `name`: string, required, not empty

- **`AddMemberDto`** (`src/teams/dto/add-member.dto.ts`)
  - `userId`: string, required, not empty

### Changed
- **`AuthController`**: Updated to use `LoginDto` and `CreateUserDto`
- **`TasksController`**: Updated to use `CreateTaskDto` and `UpdateTaskDto`
- **`TeamsController`**: Updated to use `CreateTeamDto` and `AddMemberDto`

### Dependencies
- Added `@nestjs/mapped-types` for DTO inheritance support

---

## [1.0.0] - Initial Release

### Features
- User authentication with JWT
- Task management (CRUD)
- Team management with member assignment
- MongoDB integration with TypeORM
