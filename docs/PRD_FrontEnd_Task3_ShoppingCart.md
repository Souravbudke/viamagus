# Product Requirement Document (PRD) - Front End Task 3: Shopping Cart

**Version:** 1.0
**Status:** Draft
**Date:** 2026-02-04

## 1. Introduction
This document outlines the requirements for a Shopping Cart interface where users can manage product quantities and apply discount codes to calculate a final total.

## 2. Objective
Create a dynamic shopping cart page in React that handles real-time calculations for line items and grand totals, including discount logic.

## 3. Scope
- **Feature:** Shopping Cart Page
- **Data:** Hardcoded product list (Mock Data).

## 4. Functional Requirements

### 4.1 Product List Display
- **Source:** Hardcoded array (`productList`):
  ```javascript
  const productList = [
    {
      id: 1,
      name: 'Product A',
      price: 50, // Price is in INR
      quantity: 1,
    },
    {
      id: 2,
      name: 'Product B',
      price: 30,
      quantity: 1,
    },
    // Add more products as needed
  ];
  ```
- **Data:** `id`, `name`, `price` (INR), `quantity`.
- **UI:** Render each product with Name, Formatted Price, and a Quantity Input.

### 4.2 Quantity Updates
- **Interaction:** User can change the quantity input for any item.
- **Calculation:**
    - Update the individual product's total price (Price * Quantity).
    - Simultaneously update the Cart Subtotal.

### 4.3 Discount Application
- **Input:** Field for Discount Percentage (0-100%).
- **Calculation:**
    - Apply the percentage to the Cart Subtotal.
    - Display the "Discounted Total" below the subtotal.
- **Validation:** Prevent invalid percentages (e.g., negative numbers or >100).

### 4.4 Totals Display
- **Subtotal:** Total before discount.
- **Final Total:** Total after discount.
- **Formatting:** All currency values must be formatted (e.g., `INR 50.00`).

## 5. Technical Requirements
- **Framework:** React.js.
- **Formatting:** Use localization standards (Internationalization API or libraries) for currency.

## 6. Bonus Features (Optional)
- **Remove Item:** Button to delete a product from the list.
- **Persistence:** Save cart state to `localStorage`.
- **Responsive:** Optimized for mobile/tablet.
- **Testing:** Unit tests for calculation logic.

## 7. Acceptance Criteria
- [ ] All products from the mock list are displayed correctly.
- [ ] Changing quantity updates the item total and cart subtotal immediately.
- [ ] Valid discount percentage reduces the final total correctly.
- [ ] Prices are formatted with currency codes.
- [ ] App is deployed to Netlify.
