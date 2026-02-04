import React from 'react';
import styles from './SkeletonRow.module.css';

const SkeletonRow = () => {
    return (
        <div className={styles.container}>
            <div className={`${styles.block} ${styles.meta}`}></div>
            <div className={`${styles.block} ${styles.title}`}></div>
        </div>
    );
};

export default SkeletonRow;
