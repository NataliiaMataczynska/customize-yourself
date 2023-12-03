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
import Footer from "./views/footer.jsx";
import Jackets from "./components/jackets.jsx";
import PancilDrowing from "./components/pancilDrowing.jsx";

export default function App() {
    return (
        <>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/project" element={<YourProject />} />
                    <Route element={<Submenu />}>
                        <Route path="/jackets" element={<Jackets />} />
                        <Route path="/pancildrowing" element={<PancilDrowing />} />
                    </Route>
                    <Route path="/contact" element={<Contact />} />
                </Routes>
                <Footer />
            </div>
        </>
    );
}

