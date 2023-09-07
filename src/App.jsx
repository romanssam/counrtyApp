import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import Header from "./components/Header/Header.jsx";
import Main from "./components/Main/Main.jsx";
import Controls from "./components/Controls/Controls";
import { ALL_COUNTRIES } from './config.js'


export const App = () => {
    const [country, setCountry] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        const getCountries = async () => {
            try {
                const {data} = await axios.get(ALL_COUNTRIES);
                setCountry(data);
            } catch (e) {
                setError(true)
                console.error('failed to fetch countries ' + e)
            }
        }
        getCountries();
    }, [])

    return (
    <>
      <Header/>
        <Main>
            <Controls/>
        </Main>
    </>
  )
}