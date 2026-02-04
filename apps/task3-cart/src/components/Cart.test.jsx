import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';

import Cart from './Cart';

// Mock styles
vi.mock('./Cart.module.css', () => ({
    default: {
        container: 'container',
        header: 'header',
        cartList: 'cartList',
        listHeader: 'listHeader',
        cartItem: 'cartItem',
        colName: 'colName',
        colPrice: 'colPrice',
        colQty: 'colQty',
        colTotal: 'colTotal',
        colAction: 'colAction',
        qtyInput: 'qtyInput',
        removeBtn: 'removeBtn',
        summary: 'summary',
        discountSection: 'discountSection',
        totals: 'totals',
        row: 'row',
        title: 'title'
    }
}));

describe('Cart Component', () => {
    beforeEach(() => {
        localStorage.clear();
        vi.restoreAllMocks();
    });

    it('renders initial products', () => {
        render(<Cart />);
        expect(screen.getByText('Product A')).toBeInTheDocument();
        expect(screen.getByText('Product B')).toBeInTheDocument();
    });

    it('updates quantity and totals', () => {
        render(<Cart />);
        const input = screen.getAllByRole('spinbutton')[0]; // First product quantity input

        // Initial total: (50*1) + (30*1) = 80
        // Initial total: (50*1) + (30*1) = 80
        // Multiple elements might match (subtotal, total), so checking if any exist is enough, 
        // or check for specific counts.
        expect(screen.getAllByText(/₹80.00/).length).toBeGreaterThan(0);

        // Change quantity of Product A to 2
        fireEvent.change(input, { target: { value: '2' } });

        // New total: (50*2) + (30*1) = 130
        // New total: (50*2) + (30*1) = 130
        expect(screen.getAllByText(/₹130.00/).length).toBeGreaterThan(0);
    });

    it('restores product when Add Product is clicked', () => {
        render(<Cart />);

        // Remove all items first
        const removeButtons = screen.getAllByText('Remove');
        removeButtons.forEach(btn => fireEvent.click(btn));

        expect(screen.queryByText('Product A')).not.toBeInTheDocument();

        // Click Add Product
        const addBtn = screen.getByText('+ Add Product');
        fireEvent.click(addBtn);

        // Should see at least one product back
        expect(screen.getByText('Product A')).toBeInTheDocument();
    });

    it('removes an item', () => {
        render(<Cart />);
        const removeBtns = screen.getAllByText('Remove');
        fireEvent.click(removeBtns[0]); // Remove Product A

        expect(screen.queryByText('Product A')).not.toBeInTheDocument();
        // Only Product B remaining: 30
        // Only Product B remaining: 30
        expect(screen.getAllByText(/₹30.00/).length).toBeGreaterThan(0);
    });

    it('persists changes to localStorage', () => {
        const { unmount } = render(<Cart />);
        const removeBtns = screen.getAllByText('Remove');
        fireEvent.click(removeBtns[0]); // Remove Product A

        unmount();

        // Re-render
        render(<Cart />);
        expect(screen.queryByText('Product A')).not.toBeInTheDocument();
        expect(screen.getByText('Product B')).toBeInTheDocument();
    });

    it('applies discount correctly', () => {
        render(<Cart />);
        // Subtotal 80
        const discountInput = screen.getByPlaceholderText('0');
        const applyBtn = screen.getByText('Apply');

        fireEvent.change(discountInput, { target: { value: '10' } });
        fireEvent.click(applyBtn);

        // 10% of 80 is 8. Final: 72
        expect(screen.getByText('10% Discount Applied')).toBeInTheDocument();
        expect(screen.getByText(/₹72.00/)).toBeInTheDocument();
    });
});
