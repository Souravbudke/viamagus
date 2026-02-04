import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styles from './CreatePost.module.css';

const CreatePost = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: '',
        body: ''
    });
    const [error, setError] = useState('');
    const [submitting, setSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (!formData.title.trim()) {
            setError('Title is mandatory.');
            return;
        }

        if (formData.body.length > 1000) {
            setError('Description cannot exceed 1000 characters.');
            return;
        }

        setSubmitting(true);

        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify({
                    title: formData.title,
                    body: formData.body,
                    userId: 1, // Hardcoded for demo
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            });

            if (response.ok) {
                // Show Success Modal instead of alert
                setSuccess(true);
            } else {
                throw new Error('Failed to create post');
            }
        } catch (err) {
            console.error(err);
            setError('Failed to submit post. Please try again.');
        } finally {
            setSubmitting(false);
        }
    };

    const handleSuccessClose = () => {
        setSuccess(false);
        navigate('/');
    };

    return (
        <div className={styles.container}>
            <Link to="/" className={styles.backLink}>&lt; RETURN_TO_ARCHIVE</Link>
            <h1 className={styles.headerTitle}>NEW_ENTRY_TERMINAL</h1>

            {error && <div className={styles.error}>{error}</div>}

            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formGroup}>
                    <label htmlFor="title">Title *</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        className={styles.input}
                        placeholder="Enter post title"
                    />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="body">Description (Max 1000 chars)</label>
                    <textarea
                        id="body"
                        name="body"
                        value={formData.body}
                        onChange={handleChange}
                        className={styles.textarea}
                        placeholder="Enter description..."
                        maxLength={1000}
                        rows={6}
                    />
                    <div className={styles.charCount}>{formData.body.length}/1000</div>
                </div>

                <button type="submit" className={styles.submitBtn} disabled={submitting}>
                    {submitting ? 'TRANSMITTING...' : 'INITIATE_UPLOAD'}
                </button>
            </form>

            {success && (
                <div className={styles.modalOverlay}>
                    <div className={styles.modalContent}>
                        <h2 className={styles.modalTitle}>TRANSMISSION<br />SUCCESSFUL</h2>
                        <button onClick={handleSuccessClose} className={styles.modalBtn}>
                            <span className={styles.desktopText}>[ RETURN_TO_ARCHIVE ]</span>
                            <span className={styles.mobileText}>[ continue ]</span>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CreatePost;
