import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import styles from './PostDetail.module.css';

const PostDetail = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchPost();
    }, [id]);

    const fetchPost = async () => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
            if (!response.ok) {
                throw new Error('Post not found');
            }
            const data = await response.json();
            setPost(data);
        } catch (error) {
            console.error(error);
            alert("Failed to load post details.");
        } finally {
            setLoading(false);
        }
    };

    if (loading) return <div className={styles.container}>Loading...</div>;
    if (!post) return <div className={styles.container}>Post not found.</div>;

    return (
        <div className={styles.container}>
            <Link to="/" className={styles.backLink}>&larr; Back to List</Link>

            <article className={styles.post}>
                <h1 className={styles.title}>{post.title}</h1>
                <div className={styles.meta}>Post ID: {post.id} | User ID: {post.userId}</div>
                <hr className={styles.divider} />
                <p className={styles.body}>{post.body}</p>
            </article>
        </div>
    );
};

export default PostDetail;
