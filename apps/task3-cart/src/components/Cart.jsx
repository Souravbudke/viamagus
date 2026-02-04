import React, { useState, useEffect } from 'react';
import styles from './Cart.module.css';

const INITIAL_PRODUCTS = [
    {
        id: 1,
        name: 'Product A',
        price: 50,
        quantity: 1,
    },
    {
        id: 2,
        name: 'Product B',
        price: 30,
        quantity: 1,
    },
];

const Cart = () => {
    const [cartItems, setCartItems] = useState(INITIAL_PRODUCTS);
    const [discount, setDiscount] = useState('');
    const [discountApplied, setDiscountApplied] = useState(0);

    const handleQuantityChange = (id, newQty) => {
        // Ensure quantity is positive integer
        const qty = parseInt(newQty);
        if (isNaN(qty) || qty < 0) return;

        setCartItems(items =>
            items.map(item =>
                item.id === id ? { ...item, quantity: qty } : item
            )
        );
    };

    const calculateSubtotal = () => {
        return cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    };

    const subtotal = calculateSubtotal();
    const discountAmount = (subtotal * discountApplied) / 100;
    const finalTotal = subtotal - discountAmount;

    const handleDiscountChange = (e) => {
        const val = e.target.value;
        // Allow empty string or numbers
        if (val === '' || /^\d+$/.test(val)) {
            setDiscount(val);
        }
    };

    const applyDiscount = () => {
        const val = parseInt(discount);
        if (val >= 0 && val <= 100) {
            setDiscountApplied(val);
        } else {
            alert("Please enter a valid discount percentage (0-100)");
            setDiscountApplied(0);
        }
    };

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR'
        }).format(amount);
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.header}>Shopping Cart</h1>

            <div className={styles.cartList}>
                <div className={styles.listHeader}>
                    <div className={styles.colName}>Product</div>
                    <div className={styles.colPrice}>Price</div>
                    <div className={styles.colQty}>Quantity</div>
                    <div className={styles.colTotal}>Total</div>
                </div>

                {cartItems.map(item => (
                    <div key={item.id} className={styles.cartItem}>
                        <div className={styles.colName}>{item.name}</div>
                        <div className={styles.colPrice}>{formatCurrency(item.price)}</div>
                        <div className={styles.colQty}>
                            <input
                                type="number"
                                min="0"
                                value={item.quantity}
                                onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                                className={styles.qtyInput}
                            />
                        </div>
                        <div className={styles.colTotal}>{formatCurrency(item.price * item.quantity)}</div>
                    </div>
                ))}
            </div>

            <div className={styles.summary}>
                <div className={styles.discountSection}>
                    <label>Discount (%):</label>
                    <div className={styles.discountInputGroup}>
                        <input
                            type="text"
                            value={discount}
                            onChange={handleDiscountChange}
                            placeholder="0"
                            className={styles.discountInput}
                        />
                        <button onClick={applyDiscount} className={styles.applyBtn}>Apply</button>
                    </div>
                    {discountApplied > 0 && <div className={styles.successMsg}>{discountApplied}% Discount Applied</div>}
                </div>

                <div className={styles.totals}>
                    <div className={styles.row}>
                        <span>Subtotal:</span>
                        <span>{formatCurrency(subtotal)}</span>
                    </div>
                    <div className={styles.row}>
                        <span>Discount:</span>
                        <span className={styles.minus}>- {formatCurrency(discountAmount)}</span>
                    </div>
                    <div className={`${styles.row} ${styles.grandTotal}`}>
                        <span>Total:</span>
                        <span>{formatCurrency(finalTotal)}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
