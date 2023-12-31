import { useState, useEffect } from 'react'
import axios from 'axios';
import List from '../Card/List.jsx'
import Card from '../Card/Card.jsx'
import SkeletonLoader from '../SkeletonLoader/SkeletonLoader.jsx'
import { ALL_COUNTRIES } from '../../config.js';
import { useNavigate } from 'react-router-dom'

const Countries = () => {
    const navigate = useNavigate();

    const [country, setCountry] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getCountries = async () => {
            try {
                const {data} = await axios.get(ALL_COUNTRIES);
                setCountry(data);
                setLoading(false)
            } catch (e) {
                setError(true)
                setLoading(false)
                console.error('failed to fetch countries ' + e)
            }
        }
        getCountries();
    }, [])

    if (loading) return <SkeletonLoader/>

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
                        <Card key={c.name} onClick={() => navigate(`/country/${c.name}`)}  {...info} />
                    )
                })}
            </List>
        </>
    );
};

export default Countries;
