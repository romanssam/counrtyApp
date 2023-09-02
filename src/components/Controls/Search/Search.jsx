import React, {useEffect} from 'react';
import styles from './Search.module.css'
import { IoSearch, IoSearchOutline } from 'react-icons/io5'

const ThemeSearch = ({state}) => {
    return (
        <>
            {state === 'light' ? (
                <IoSearchOutline/>
            ) : (
                <IoSearch/>
            )}
        </>
    )
}

const Search = ({value, onChange, placeholder}) => {
    const theme = document.body.getAttribute('data-theme');

    useEffect(() => {

    }, [theme])

    return (
        <div className={styles.searchContainer}>
            <ThemeSearch state={theme} />
            <input className={styles.searchInput} placeholder={placeholder} type="search" value={value} onChange={onChange} />
        </div>
    );
};

export default Search;
