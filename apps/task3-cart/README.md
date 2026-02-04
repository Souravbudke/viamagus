# Task 3: Shopping Cart Application

A production-grade, responsive Shopping Cart application built with React. This project focuses on complex state management, real-time recalculations, and a premium "Clean Flat" user interface.

## Key Features

### 1. Dynamic Cart Management
- **State Logic**: A central `cartItems` state array drives the entire UI.
- **Quantity Updates**:
  - Dynamically recalculates line totals (`Price * Qty`).
  - Instantly updates the global subtotal.
  - Validates inputs (prevents negative values or non-integer characters).
- **Product Restoration**:
  - **Remove**: Deletes items from the active state.
  - **Restore**: The "+ Add Product" feature intelligently detects which items from the `productList` are missing and restores them sequentially.

### 2. Financial Calculations
- **Real-Time Math**:
  - `Subtotal`: Sum of all line totals.
  - `Discount`: Precise percentage calculation based on user input (0-100%).
  - `Grand Total`: Final amount after deductions.
- **Currency Formatting**: Uses `Intl.NumberFormat` to strictly enforce INR (`₹`) currency standards across the application.

### 3. Data Persistence
- **LocalStorage Sync**:
  - Uses a `useEffect` hook to serialize and save `cartItems` to `localStorage` on every change.
  - Initializes state lazily (`useState(() => ...)`) to prevent hydration mismatches and ensure data survives page reloads.

### 4. Premium UI/UX
- **Design System**:
  - **Font**: Inter (Sans-serif) for clean readability.
  - **Palette**: Slate (`#101828`) for text, Indigo (`#4338ca`) for primary actions, and White/Gray surfaces.
- **Mobile Optimization**:
  - **Desktop**: Traditional table layout for high data density.
  - **Mobile**: Transforms into a card-based "stacked" layout using CSS Grid and Flexbox media queries (`max-width: 768px`).
  - **Touch Targets**: Enhanced padding on buttons and inputs for easier interaction on touch devices.

---

## Technical Implementation

### File Structure
```
src/components/
├── Cart.jsx         # Business Logic & View Controller
├── Cart.module.css  # Scoped Styles (Grid/Flex/Media Queries)
└── Cart.test.jsx    # Component Integration Tests
```

### Testing Strategy
Built with **Vitest** and **React Testing Library** (>90% Coverage).
- **Rendering**: Verifies all products from `productList` appear initially.
- **Interaction**: Simulates exact user clicks on "Remove" and "Add Product".
- **Logic**: asserts that `50 * 2 = 100` and `Total - Discount = Final`.
- **Persistence**: Mounts/Unmounts the component to verify `localStorage` rehydration.

---

## Setup & Commands

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run Dev Server**:
   ```bash
   npm run dev
   ```

3. **Execute Test Suite**:
   ```bash
   npm test
   ```

4. **Production Build**:
   ```bash
   npm run build
   ```

## Tech Stack
- **React 19**: Core framework.
- **Vite**: Build pipeline.
- **CSS Modules**: For style encapsulation and theming.
- **Vitest**: For unit and integration testing.
