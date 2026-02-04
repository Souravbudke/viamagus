import React, { useState, useEffect } from 'react';
import styles from './Cart.module.css';

const productList = [
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
    // Initialize from localStorage if available, else use productList
    const [cartItems, setCartItems] = useState(() => {
        const savedCart = localStorage.getItem('cartItems');
        return savedCart ? JSON.parse(savedCart) : productList;
    });
    const [discount, setDiscount] = useState('');
    const [discountApplied, setDiscountApplied] = useState(0);

    // Save to localStorage whenever cartItems changes
    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

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

    const handleRemoveItem = (id) => {
        setCartItems(items => items.filter(item => item.id !== id));
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

    const handleAddProduct = () => {
        const missingProducts = productList.filter(p => !cartItems.some(item => item.id === p.id));
        if (missingProducts.length > 0) {
            const productToAdd = missingProducts[0];
            setCartItems([...cartItems, productToAdd]);
        } else {
            alert("All products are already in the cart.");
        }
    };

    return (
        <div className={styles.container}>
            <header className={styles.headerRow}>
                <h1 className={styles.header}>Shopping Cart</h1>
                <button onClick={handleAddProduct} className={styles.addBtn} disabled={cartItems.length === productList.length}>
                    + Add Product
                </button>
            </header>

            <div className={styles.cartList}>
                <div className={styles.listHeader}>
                    <div className={styles.colName}>Product</div>
                    <div className={styles.colPrice}>Price</div>
                    <div className={styles.colQty}>Quantity</div>
                    <div className={styles.colTotal}>Total</div>
                    <div className={styles.colAction}></div>
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
                        <div className={styles.colAction}>
                            <button onClick={() => handleRemoveItem(item.id)} className={styles.removeBtn}>Remove</button>
                        </div>
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
