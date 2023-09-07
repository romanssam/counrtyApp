import './App.css'
import HomePage from './pages/HomePage/HomePage.jsx'
import Details from './pages/Details/Details.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


export const App = () => {
    return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/country/:name" element={<Details/>} />
            </Routes>
        </BrowserRouter>
    </>
  )
}