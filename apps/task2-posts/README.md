# Task 2: React Posts Application

This project is a React-based application that displays a list of posts fetched from an external API and allows users to simulate creating new posts. It features a responsive design, pagination, and form validation.

## Features

### Post List (Archive)
- **Data Fetching**: Retrieves posts asynchronously from the JSONPlaceholder API.
- **Pagination**: Navigate through posts with Previous and Next controls, displaying 10 items per page.
- **Responsive Layout**: Adapts gracefully to mobile and desktop screens.
- **Navigation**: Click on any post to view details (if implemented) or use the "New Entry" button to navigate to the creation form.

### Create Post (Terminal)
- **Form Validation**:
  - Title is mandatory.
  - Description is limited to 1000 characters.
  - Real-time character count display.
- **Mock Submission**: Simulates a POST request to the API.
- **Feedback**: Displays a success modal upon successful submission with options to return to the archive or continue.
- **Error Handling**: Displays user-friendly error messages if validation fails or the API request errors.

### Design
- **Styling**: Built using CSS Modules for scoped styling.
- **Theme**: Features a "Brutalist" aesthetic with sharp borders, uppercase typography, and high-contrast colors.
- **Responsiveness**: The header and form elements adjust layout and text density for smaller screens (e.g., "New Entry" becomes "NEW").

## strict Project Structure

- `src/pages/PostList.jsx`: Main view displaying the list of posts.
- `src/pages/CreatePost.jsx`: Form view for adding new content.
- `src/context/PostsContext.jsx`: Manages global state for posts (if applicable).
- `src/components/`: Reusable UI components.

## Setup and Installation

1. Navigate to the project directory:
   ```bash
   cd apps/task2-posts
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

## Technologies Used
- React
- React Router DOM
- Vite
- CSS Modules
