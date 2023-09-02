import React, {useState, useEffect} from 'react';
import styles from './Header.module.css'
import styled from 'styled-components';
import { IoMoon, IoMoonOutline } from 'react-icons/io5';
import Container from "../Container/Container.jsx";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwithcer";
import HeaderWrapper from "../HeaderWrapper/HeaderWrapper.jsx";

/*const Container = styled.div `
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 2rem;
`

const HeaderInst = styled.header``;

const Wrapper = styled.div``;

const Title = styled.a.attrs({
    href: '/'
});

const Switcher = styled.div``*/
 const Header = () => {
     const [theme, setTheme] = useState('light');

     const changeTheme = () => {
         setTheme(theme === 'light' ? 'dark' : 'light');
     }

     useEffect(() => {
         document.body.setAttribute('data-theme', theme);
     }, [theme])

    return (
        <HeaderWrapper>
            <Container>
                <header className={styles.header}>
                    <span className={styles.title}>Что за страна?</span>
                    <ThemeSwitcher onClick={changeTheme}>
                        <IoMoon/>
                        Сменить тему
                    </ThemeSwitcher>
                </header>
            </Container>
        </HeaderWrapper>
    );
};

 export default Header;