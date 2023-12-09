

import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Submenu(props) {
    const { handleDropdown } = props;

    return (
        <div>
            <ul className="submenu-items">
                <li className="submenu-item">
                    <Link to="/jackets" className="submenu-link" onClick={handleDropdown}>
                        Kurtki jeansowe
                    </Link>
                </li>
                <li className="submenu-item">
                    <Link to="/shoes" className="submenu-link">Buty</Link>
                </li>
                <li className="submenu-item">
                    <Link to="/figuries" className="submenu-link">Figurki</Link>
                </li>
                <li className="submenu-item">
                    <Link to="/pancildrowing" className="submenu-link">Rysunek ołówkiem</Link>
                </li>
                <li className="submenu-item">
                    <Link to="/other" className="submenu-link">Inne</Link>
                </li>
            </ul>
            <Outlet />
        </div>
    );
}

Submenu.propTypes = {
    handleDropdown: PropTypes.func.isRequired,
};