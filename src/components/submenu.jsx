

import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Submenu(props) {
    const { handleDropdown } = props;
    const closeDropdown = () => {
        handleDropdown(false);
    };

    return (
        <div>
            <ul className="submenu-items">
                <li className="submenu-item">
                    <Link to="/jackets" className="submenu-link" onClick={closeDropdown}>
                        Kurtki jeansowe
                    </Link>
                </li>
                <li className="submenu-item">
                    <Link to="/realizacion/shoes" className="submenu-link">Buty</Link>
                </li>
                <li className="submenu-item">
                    <Link to="/realizacion/figuries" className="submenu-link">Figurki</Link>
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

Submenu.propTypes = {
    handleDropdown: PropTypes.func.isRequired,
};