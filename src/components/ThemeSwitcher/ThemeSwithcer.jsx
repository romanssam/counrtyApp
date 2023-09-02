import React from 'react';
import styles from './ThemeSwithcer.module.css'

const ThemeSwitcher = ({children, onClick}) => {
    return (
        <button className={styles.switcher} onClick={onClick}>
            {children}
        </button>
    );
};

export default ThemeSwitcher;
