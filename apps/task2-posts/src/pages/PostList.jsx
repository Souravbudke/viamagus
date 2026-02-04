import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './PostList.module.css';

const PostList = () => {
    const [posts, setPosts] = useState([]);
    const [start, setStart] = useState(0);
    const limit = 10;
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchPosts();
    }, [start]);

    const fetchPosts = async () => {
        setLoading(true);
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=${limit}`);
            const data = await response.json();
            setPosts(data);
        } catch (error) {
            console.error("Error fetching posts:", error);
            alert("Failed to fetch posts. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const handleNext = () => {
        setStart(prev => prev + limit);
    };

    const handlePrev = () => {
        if (start >= limit) {
            setStart(prev => prev - limit);
        }
    };

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1>Posts</h1>
                <Link to="/create" className={styles.createBtn}>+ Create New Post</Link>
            </header>

            {loading ? (
                <div className={styles.loader}>Loading posts...</div>
            ) : (
                <ul className={styles.list}>
                    {posts.map(post => (
                        <li key={post.id} className={styles.listItem}>
                            <Link to={`/posts/${post.id}`} className={styles.link}>
                                <h2 className={styles.title}>{post.id}. {post.title}</h2>
                                <p className={styles.description}>{post.body.substring(0, 100)}...</p>
                            </Link>
                        </li>
                    ))}
                </ul>
            )}

            <div className={styles.pagination}>
                <button onClick={handlePrev} disabled={start === 0} className={styles.pageBtn}>Previous</button>
                <span className={styles.pageInfo}>Showing {start + 1} - {start + posts.length}</span>
                <button onClick={handleNext} disabled={posts.length < limit} className={styles.pageBtn}>Next</button>
            </div>
        </div>
    );
};

export default PostList;
