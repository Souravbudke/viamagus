import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { usePosts } from '../context/PostsContext';
import SkeletonDetail from '../components/SkeletonDetail';
import styles from './PostDetail.module.css';

const PostDetail = () => {
    const { id } = useParams();
    const { getPostDetail } = usePosts();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadPost = async () => {
            setLoading(true);
            try {
                const data = await getPostDetail(id);
                setPost(data);
            } catch (error) {
                console.error(error);
                // alert("Failed to load post details.");
            } finally {
                setLoading(false);
            }
        };

        if (id) loadPost();
    }, [id, getPostDetail]);

    if (loading) return (
        <div className={styles.container}>
            <div className={styles.backLink}>&lt; RETURN_TO_ARCHIVE</div>
            <SkeletonDetail />
        </div>
    );

    if (!post) return <div className={styles.container}>Post not found.</div>;

    return (
        <div className={styles.container}>
            <Link to="/" className={styles.backLink}>&lt; RETURN_TO_ARCHIVE</Link>

            <article className={styles.post}>
                <h1 className={styles.title}>{post.title}</h1>

                <div className={styles.metaContainer}>
                    <span className={styles.metaItem}>ID: {String(post.id).padStart(3, '0')}</span>
                    <span className={styles.metaItem}>AUTHOR_ID: {String(post.userId).padStart(3, '0')}</span>
                    <span className={styles.metaItem}>DATE: {new Date().toISOString().split('T')[0]}</span>
                </div>

                <div className={styles.body}>
                    {post.body}
                </div>
            </article>
        </div>
    );
};

export default PostDetail;
