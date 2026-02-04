import React from 'react';
import styles from './SkeletonDetail.module.css';

const SkeletonDetail = () => {
    return (
        <div className={styles.container}>
            <div className={styles.titleBlock}></div>
            <div className={styles.metaStrip}></div>

            {/* Simulate Paragraphs */}
            <div className={styles.bodyBlock} style={{ width: '100%' }}></div>
            <div className={styles.bodyBlock} style={{ width: '90%' }}></div>
            <div className={styles.bodyBlock} style={{ width: '95%' }}></div>
            <div className={styles.bodyBlock} style={{ width: '80%' }}></div>
        </div>
    );
};

export default SkeletonDetail;
