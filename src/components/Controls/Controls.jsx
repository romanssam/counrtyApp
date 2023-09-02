import React, {useState, useEffect} from 'react';
import Search from "./Search/Search.jsx";
import {CustomSelect} from './CustomSelect/CustomSelect.jsx'

const options = [
    {value: 'Africa', label: 'Africa'}
]


const Controls = () => {
    const [value, setValue] = useState('')
    const [region, setRegion] = useState('')
    return (
        <div style={{ padding: '2rem', display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <Search placeholder='Поиск по стране' value={value} onChange={(e) => setValue(e.target.value)} />
            <CustomSelect
                options={options}
                placeholder='Фильтр по странам'
                isClearable
                isSearchable={false}
                value={region}
                onChange={setRegion}
            />
        </div>
    );
};

export default Controls;
