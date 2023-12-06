import React from 'react';
import {
    Routes,
    Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './views/home';
import Contact from './views/contact';
import YourProject from './views/yourProject';
import './styles/main.scss';
import Footer from "./views/footer.jsx";
import Jackets from "./components/jackets.jsx";
import PancilDrowing from "./components/pancilDrowing.jsx";
import Shoes from "./components/shoes.jsx";

export default function App() {
    return (
        <>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/project" element={<YourProject />} />
                    <Route path="/jackets" element={<Jackets />} />
                    <Route path="/shoes" element={<Shoes />} />
                    <Route path="/pancildrowing" element={<PancilDrowing />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
                <Footer />
            </div>
        </>
    );
}

