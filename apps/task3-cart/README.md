# Task 3: Shopping Cart Application

This project is a fully functional Shopping Cart application built with React. It demonstrates complex state management, real-time calculations, and a premium responsive UI.

## Features

### Core Functionality
- **Product List**: Displays a list of available products with details (Name, Price, Quantity).
- **Quantity Management**: Users can increase or decrease product quantities using number inputs.
- **Real-time Totals**: Automatically updates line item totals and the cart subtotal instantly upon interaction.
- **Remove Items**: Allows users to remove formatted products from the cart.
- **Add Product**: A feature to restore products to the cart if they were previously removed.

### Discount System
- **Percentage Discount**: Accepts a numeric value (0-100) to apply a percentage discount to the subtotal.
- **Validation**: Prevents invalid inputs strings or out-of-range numbers.
- **Calculation**: Displays the exact discount amount deducted from the total.

### Data Persistence
- **Local Storage**: Persists the state of the cart (items and quantities) across browser refreshes, ensuring users do not lose their progress.

### UI/UX
- **Premium Design**: Features a modern, clean interface with card-based layouts, soft shadows, and the Inter typeface.
- **Responsive Layout**:
  - **Desktop**: Table-like layout with aligned columns.
  - **Mobile**: Stacked card layout for each product, ensuring readability on small screens.
- **Mobile Optimization**: Specific adjustments for mobile inputs, buttons, and summary cards to prevent overflow and ensure touch targets are accessible.

## Project Structure

- `src/components/Cart.jsx`: The core component handling all cart logic (state, calculations, rendering).
- `src/components/Cart.module.css`: formatting styles containing strict grid layouts, media queries, and utility classes.
- `src/components/Cart.test.jsx`: Comprehensive unit test suite covering rendering, updates, and persistence.

## Setup and Installation

1. Navigate to the project directory:
   ```bash
   cd apps/task3-cart
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Run Unit Tests:
   ```bash
   npm test
   ```

5. Build for production:
   ```bash
   npm run build
   ```

## Technologies Used
- React
- Vite
- Vitest (Testing)
- CSS Modules
- LocalStorage API
