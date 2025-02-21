import React from 'react';
import styles from './_coffins.module.scss';

export default function CoffinsItem({coffins1}) {
    return (
        <div className={styles.item}>
            <div className={styles.sliderImg}></div>
            <div className={styles.title}>{coffins1.text}</div>
            <div className={styles.price}>{coffins1.price}</div>
        </div>
    )
}