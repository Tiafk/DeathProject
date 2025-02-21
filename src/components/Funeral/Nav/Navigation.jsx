import React from "react";
import { Link } from "react-router-dom";
import styles from "./_navigation.module.scss";
import NavI from "./navI";

export default function Navigation({navCoffis}) {
    return (
        <div className={styles.nav}>
            {navCoffis?.map((navCoffis, ww) => (
          <NavI navCoffis={navCoffis} key={ww} />
        ))}
        </div>
    )
}