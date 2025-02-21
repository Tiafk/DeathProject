import React from "react";
import styles from './_coffins.module.scss';
import CoffinsItem from "./CoffinsItem";

export default function Coffins({coffins1}) {
    return (
        <div className={styles.coffinsContainer}>
            {coffins1?.map((el, ww) => (
                <CoffinsItem coffins1={el} key={ww} />
            ))}
        </div>
    )
}