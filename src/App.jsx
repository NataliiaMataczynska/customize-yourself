import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './views/home';
import Contact from './views/contact';
import YourProject from './views/yourProject';
import './styles/main.scss';
import Submenu from "./components/submenu.jsx";

export default function App() {
    return (
        <>
            <div className="App">

                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/project" element={<YourProject />} />
                    <Route path="/realizacion"
                           element={<Home >
                               <Route path="/project" element={<Submenu />
                               } /> </Home>} />
                    <Route path="/kontakt" element={<Contact />} />
                </Routes>
            </div>
        </>
    );
}

