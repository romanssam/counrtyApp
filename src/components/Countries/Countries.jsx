import { useState, useEffect } from 'react'
import axios from 'axios';
import List from '../Card/List.jsx'
import Card from '../Card/Card.jsx'
import { ALL_COUNTRIES } from '../../config.js';

const Countries = () => {
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
        </>
    );
};

export default Countries;
