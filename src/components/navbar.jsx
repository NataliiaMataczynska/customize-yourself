import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Submenu from './Submenu';

export default function Navbar() {
    const [dropdown, setDropdown] = useState(false);

    const handleDropdown = () => {
        setDropdown(!dropdown);

        setTimeout(() => {
            setDropdown(false);
        }, 4000);
    };

    return (
        <div>
            <nav className="navbar">
                <img className="logo-img" src="src/assets/images/logo1.png" alt="" />
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
                        <Link to="/contact" className="navbar-link">KONTAKT</Link>
                    </li>
                </ul>
                {/*<ul className="navbar-items" style={{flexDirection: "column", width: "15rem"}}>*/}
                {/*    <li className="navbar-item">*/}
                {/*        <Link to="/signin" className="navbar-link"> <button className="navbar-link" style={{background: "transparent", border: "none", fontSize: "0.7rem", lineHeight: "2rem"}}>ZALOGÓJ SIĘ</button></Link>*/}
                {/*    </li>*/}
                {/*    <li className="navbar-item">*/}
                {/*        <Link to="/signup" className="navbar-link"><button className="navbar-link" style={{background: "transparent", border: "none", fontSize: "0.7rem", lineHeight: "2rem"}}>ZAREJESTRUJ SIĘ</button></Link>*/}
                {/*    </li>*/}
                {/*</ul>*/}

            </nav>
            <Outlet />
        </div>
    );
}