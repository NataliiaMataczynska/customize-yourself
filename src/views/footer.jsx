import React from "react";
import image1 from "../assets/images/home/instagram.jpg";
import image2 from "../assets/images/home/tiktok.jpg";
import {Link} from "react-router-dom";

export default function Footer() {
    return(
        <div className="footer">
            <div className="container footer-container">
                <div className="footer-row">
                    <div className="footer-col">
                        <ul className="list">
                            <li>Metoda płatności</li>
                            <li>Wysyłka</li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <ul className="list">
                            <li className="navbar-item">
                                <Link to="/" className="footer-link">Strona Głowna</Link>
                            </li>
                            <li className="navbar-item">
                                <Link to="/project" className="footer-link">Twój Projekt</Link>
                            </li>
                            <li>Nasze realizację</li>
                            <li className="navbar-item">
                                <Link to="/contact" className="footer-link">Kontakt</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <ul className="list">
                            <li className="navbar-item">
                                <Link to="/contact" className="footer-link">FQA</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <ul className="list">
                            <li>
                                <a href="https://instagram.com/clayonboard?igshid=OGQ5ZDc2ODk2ZA==" style={{ color: "lightgray"}}>
                                    <img src={image1} alt="Instagram" style={{ width: "1.3rem", height: "1.3rem", marginRight: "0.7rem" }} />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.tiktok.com/@clayonboard" style={{ color: "lightgray", cursor: "pointer"}}>
                                    <img src={image2} alt="Instagram" style={{ width: "1.3rem", height: "1.3rem", marginRight: "0.7rem", cursor: "pointer"}} />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}