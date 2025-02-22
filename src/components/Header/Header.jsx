import React from 'react';
import { Link } from 'react-router-dom';
import styles from './_header.module.scss';
import classNames from 'classnames';

export default function Header() {
    return (
        <header className={styles.header}>
            <ul className={styles.linkContainer}>
                <Link className={styles.link} to="">Главная</Link>
                <Link className={styles.link} to="/Funeral">Похороны</Link>
                <Link className={classNames(styles.link, styles.monum)} to="Monument"><p>Памятники</p><p>Плитка</p></Link>
                <Link className={styles.link} to="Сremation">Кремация</Link>
                <Link className={styles.link} to="Stock">Ассортимент</Link>
                <Link className={styles.link} to="/#Контакты">Контакты</Link>
            </ul>
        </header>
    );
};