import React, {useState, useEffect} from 'react';
import styles from './Header.module.css'
import { IoMoon, IoMoonOutline } from 'react-icons/io5';
import Container from "../Container/Container.jsx";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwithcer";
import HeaderWrapper from "../HeaderWrapper/HeaderWrapper.jsx";

const ThemeIcon = ({state}) => {
    return (
        <>
            {state === 'light' ? (
                <IoMoonOutline/>
            ) : (
                <IoMoon/>
            )}
        </>
    )
}

const Title = ({text}) => {
    return (
        <span className={styles.title}>{text}</span>
    )
}

 const Header = () => {
     const [theme, setTheme] = useState(() => {
         const initialTheme = localStorage.getItem('theme');
         return initialTheme ? initialTheme : 'light';
     });

     const changeTheme = () => {
         setTheme((prevTheme => {
             const newTheme = prevTheme === 'light' ? 'dark' : 'light';
             localStorage.setItem('theme', newTheme);
             return newTheme;
         }))
     }

     const currentTheme = () => {
         return theme === "light" ? "светлую" : "темную"
     }

     useEffect(() => {
         document.body.setAttribute('data-theme', theme);
     }, [theme])

    return (
        <HeaderWrapper>
            <Container>
                <header className={styles.header}>
                    <Title text='Что за страна?' />
                    <ThemeSwitcher onClick={changeTheme} title={`Сменить на ${currentTheme()} тему`}>
                        <ThemeIcon state={theme} />
                        Сменить тему
                    </ThemeSwitcher>
                </header>
            </Container>
        </HeaderWrapper>
    );
};

 export default Header;