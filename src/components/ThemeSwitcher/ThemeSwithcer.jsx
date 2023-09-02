import React from 'react';
import styles from './ThemeSwithcer.module.css'

const ThemeSwitcher = ({children, onClick, ...props}) => {
    return (
        <button className={styles.switcher} onClick={onClick} {...props}>
            {children}
        </button>
    );
};

export default ThemeSwitcher;
