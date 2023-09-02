import React, {useState, useEffect} from 'react';
import Search from "./Search/Search.jsx";
import {CustomSelect} from './CustomSelect/CustomSelect.jsx'


const MyComponent = () => {
    const [value, setValue] = useState('')

    return (
        <div style={{ padding: '2rem', display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <Search placeholder='Поиск по стране' value={value} onChange={(e) => setValue(e.target.value)} />
            <CustomSelect/>
        </div>
    );
};

export default MyComponent;
