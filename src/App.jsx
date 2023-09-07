import { useState, useEffect, Suspense } from 'react'
import axios from 'axios';
import './App.css'
import Header from "./components/Header/Header.jsx";
import Main from "./components/Main/Main.jsx";
import Controls from "./components/Controls/Controls";
import Countries from './components/Countries/Countries.jsx'

export const App = () => {

    return (
    <>
      <Header/>
        <Main>
            <Controls/>
            <Suspense fallback={<h2>Lol</h2>}>
                <Countries />
            </Suspense>
        </Main>
    </>
  )
}