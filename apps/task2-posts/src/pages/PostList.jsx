import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './PostList.module.css';

import { usePosts } from '../context/PostsContext';
import SkeletonRow from '../components/SkeletonRow';

const PostList = () => {
    const { getPosts } = usePosts();
    const [posts, setPosts] = useState([]);
    const [start, setStart] = useState(0);
    const limit = 10;
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const loadPosts = async () => {
            setLoading(true);
            try {
                const data = await getPosts(start, limit);
                setPosts(data);
            } catch (error) {
                console.error("Error fetching posts:", error);
                // alert("Failed to fetch posts. Please try again.");
            } finally {
                setLoading(false);
            }
        };

        loadPosts();
    }, [start, getPosts]);

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
                <h1 className={styles.headerTitle}>THE ARCHIVE</h1>
                <Link to="/create" className={styles.createBtn}>
                    <span className={styles.desktopText}>[ + New Entry ]</span>
                    <span className={styles.mobileText}>[ NEW ]</span>
                </Link>
            </header>

            {loading ? (
                <div className={styles.list}>
                    {[...Array(5)].map((_, i) => <SkeletonRow key={i} />)}
                </div>
            ) : (
                <ul className={styles.list}>
                    {posts.map(post => (
                        <li key={post.id} className={styles.listItem}>
                            <Link to={`/posts/${post.id}`} className={styles.link}>
                                <div className={styles.meta}>ID: {String(post.id).padStart(3, '0')} // USER: {String(post.userId).padStart(3, '0')}</div>
                                <h2 className={styles.title}>{post.title}</h2>
                                <p className={styles.description}>{post.body.substring(0, 100)}...</p>
                            </Link>
                        </li>
                    ))}
                </ul>
            )}

            <div className={styles.pagination}>
                <button onClick={handlePrev} disabled={start === 0} className={styles.pageBtn}>&lt; PREV</button>
                <span className={styles.pageInfo}>{start + 1} — {start + posts.length}</span>
                <button onClick={handleNext} disabled={posts.length < limit} className={styles.pageBtn}>NEXT &gt;</button>
            </div>
        </div>
    );
};

export default PostList;
