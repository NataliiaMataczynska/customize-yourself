import { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Submenu from "./submenu.jsx";
import logo from "../assets/images/logo1.png";

export default function Navbar() {
    const [dropdown, setDropdown] = useState(false);

    useEffect(() => {
        let timer;
        if (dropdown) {
            timer = setTimeout(() => {
                setDropdown(false);
            }, 4000);
        }

        return () => clearTimeout(timer);
    }, [dropdown]);

    const handleDropdown = () => {
        setDropdown(!dropdown);
    };


    return (
        <div>
            <nav className="navbar">
                <img className="logo-img" src={logo} alt="" />
                <ul className="navbar-items">
                    <li className="navbar-item">
                        <Link to="/" className="navbar-link">STRONA GŁOWNA</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/project" className="navbar-link">TWÓJ PROJEKT</Link>
                    </li>
                    <li className="navbar-item" onClick={handleDropdown}>
                        <div className="navbar-link">NASZE REALIZACJE</div>
                        {dropdown && <Submenu
                            dropdown={dropdown}
                            handleDropdown={handleDropdown}

                        />}
                    </li>
                    <li className="navbar-item">
                        <Link to="/contact" className="navbar-link">KONTAKT</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </div>
    );
}