import { useState, useEffect, Suspense } from 'react'
import axios from 'axios';
import Header from "../../components/Header/Header.jsx";
import Main from "../../components/Main/Main.jsx";
import Controls from "../.././components/Controls/Controls";
import Countries from '../../components/Countries/Countries.jsx'

const HomePage = () => {
    return (
        <>
                <Controls/>
                <Suspense fallback={<h2>Lol</h2>}>
                    <Countries />
                </Suspense>
        </>
    );
};

export default HomePage;
