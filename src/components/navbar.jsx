import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Submenu from './Submenu';

export default function Navbar() {
    const [dropdown, setDropdown] = useState(false);

    const handleDropdown = () => {
        setDropdown(!dropdown);
    };

    return (
        <div>
            <nav className="navbar">
                <div className="navbar-logo">Clay on board</div>
                <ul className="navbar-items">
                    <li className="navbar-item">
                        <Link to="/" className="navbar-link">STRONA GŁOWNA</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/project" className="navbar-link">TWÓJ PROJEKT</Link>
                    </li>
                    <li className="navbar-item" onClick={handleDropdown}>
                        <Link to="/realizacion" className="navbar-link">NASZE REALIZACJE</Link>
                        {dropdown && <Submenu />}
                    </li>
                    <li className="navbar-item">
                        <Link to="/kontact" className="navbar-link">KONTAKT</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </div>
    );
}