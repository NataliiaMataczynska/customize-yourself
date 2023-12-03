import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function Submenu() {
    return (
        <div >
            <ul className="submenu-items">
                <li className="submenu-item">
                    <Link to="/jackets" className="submenu-link">Kurtki jeansowe</Link>
                </li>
                <li className="submenu-item">
                    <Link to="/realizacion/shoes" className="submenu-link">Buty</Link>
                </li>
                <li className="submenu-item">
                    <Link to="/realizacion/figuries" className="submenu-link">Figórki</Link>
                </li>
                <li className="submenu-item">
                    <Link to="/realizacion/painting" className="submenu-link">Malowanie</Link>
                </li>
                <li className="submenu-item">
                    <Link to="/pancildrowing" className="submenu-link">Rysunek ołówkiem</Link>
                </li>
                <li className="submenu-item">
                    <Link to="/realizacion/other" className="submenu-link">Inne</Link>
                </li>
            </ul>
            <Outlet />
        </div>
    );
}