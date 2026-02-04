import React, { createContext, useState, useContext } from 'react';

const PostsContext = createContext();

export const usePosts = () => useContext(PostsContext);

export const PostsProvider = ({ children }) => {
    // Cache structure: { [pageIndex]: [posts] }
    const [listCache, setListCache] = useState({});
    // Cache structure: { [postId]: postData }
    const [detailCache, setDetailCache] = useState({});

    // Keep track of total posts count if API provided it, but JSONPlaceholder doesn't sending standard pagination meta in body headers usually.
    // We will assume infinite scroll logic or max 100 for now.

    const getPosts = async (start, limit) => {
        const pageKey = `${start}-${limit}`;

        // Return cached data if available
        if (listCache[pageKey]) {
            return listCache[pageKey];
        }

        // Fetch new data
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=${limit}`);
            if (!response.ok) throw new Error('Network response was not ok');
            const data = await response.json();

            // Update cache
            setListCache(prev => ({
                ...prev,
                [pageKey]: data
            }));

            return data;
        } catch (error) {
            console.error("Fetch error:", error);
            throw error;
        }
    };

    const getPostDetail = async (id) => {
        // Return cached data if available
        if (detailCache[id]) {
            return detailCache[id];
        }

        // Check if we already have it in listCache (optional optimization)
        // But list data might be partial, so typically better to fetch fresh detail or use list data as placeholder.
        // For this task, we'll fetch fresh to be safe or cache specifically for details.

        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
            if (!response.ok) throw new Error('Post not found');
            const data = await response.json();

            // Update cache
            setDetailCache(prev => ({
                ...prev,
                [id]: data
            }));

            return data;
        } catch (error) {
            console.error("Fetch error:", error);
            throw error;
        }
    };

    // Clear cache helper if needed (e.g. after create post)
    const clearCache = () => {
        setListCache({});
        setDetailCache({});
    };

    return (
        <PostsContext.Provider value={{ getPosts, getPostDetail, clearCache }}>
            {children}
        </PostsContext.Provider>
    );
};
