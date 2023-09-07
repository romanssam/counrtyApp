import { useState, useEffect, Suspense } from 'react'
import axios from 'axios';
import './App.css'
import Header from "./components/Header/Header.jsx";
import Main from "./components/Main/Main.jsx";
import Controls from "./components/Controls/Controls";
import List from './components/Card/List.jsx'
import Card from './components/Card/Card.jsx'
import { ALL_COUNTRIES } from './config.js';


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
            <Suspense fallback={'loading...'}>
                <List>
                    {country.map((c) => {
                        const info = {
                            img: c.flags.png,
                            name: c.name,
                            info: [
                                {
                                    title: 'Population',
                                    description: c.population.toLocaleString(),
                                },
                                {
                                    title: 'Region',
                                    description: c.region,
                                },
                                {
                                    title: 'Capital',
                                    description: c.capital,
                                }
                            ]
                        }
                        return (
                            <Card key={c.name} {...info} />
                        )
                    })}
                </List>
            </Suspense>
        </Main>
    </>
  )
}