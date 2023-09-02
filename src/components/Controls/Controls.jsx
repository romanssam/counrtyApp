import React, {useState, useEffect} from 'react';
import Search from "./Search/Search.jsx";


const MyComponent = () => {
    const [value, setValue] = useState('')

    return (
        <div style={{ padding: '2rem' }}>
            <Search placeholder='Поиск по стране' value={value} onChange={(e) => setValue(e.target.value)} />
        </div>
    );
};

export default MyComponent;
