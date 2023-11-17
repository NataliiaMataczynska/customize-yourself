import React from "react";
import "../styles/display.scss";
export default function  Settings({color, text, hundleImageClick, handleImageChange, ref, image}){
    return (
        <div className=' container jacket-options'>
            <div className="jacket-option jacket-color ">
                <h4>Wybór produktu</h4>
                <select className="form-control form-control-sm mb-2 ">
                    <option>Kurtka jeansowa</option>
                    <option>Kurtka jeansowa</option>
                    <option>Kurtka jeansowa</option>
                </select>
            </div>
            <div className="jacket-option model ">
                <h4>Wybór produktu</h4>
                <select className="form-control form-control-sm mb-2 ">
                    <option>Damska</option>
                    <option>Męska</option>
                </select>
            </div>
            <div className="jacket-option model ">
                <h4>Rozmiar</h4>
                <select className="form-control form-control-sm mb-2 ">
                    <option>XS</option>
                    <option>S</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                    <option>XXL</option>
                </select>
            </div>
            <div className="jacket-option jacket-color ">
                <h4>color</h4>
                <img onClick={color} src='src/assets/images/front.png' alt="white-jacket" id="white"/>
                <img onClick={color} src='src/assets/images/front%20black.png' alt="black-jacket" id="black"/>
                <img onClick={color} src='src/assets/images/front%20black.png' alt="grey-jacket" id="grey" />
                <img onClick={color} src='src/assets/images/front%20blue.png' alt="blue-jacket" id="blue"/>
                <img onClick={color} src='src/assets/images/front%20black.png' alt="red-jacket" id="red"/>
            </div>
            <div className="jacket-option model ">
                <h4>Dostarczenie produktu</h4>
                <select className="form-control form-control-sm mb-2 ">
                    <option>Klient</option>
                    <option>Firma</option>
                </select>
            </div>
            <div className="jacket-option">
                <h4>napisz swój tekst</h4>
                <input onChange={text} type="text" className='form-control form-control-sm mb-2' placeholder='Twój tekst'/>
            </div>
            <div className="jacket-option">
                <h4 >rozmiar tekstu</h4>
                <input type="range" min="0" max="100"/>
            </div>
            <div className="jacket-option">
                <h4 >color tekstu</h4>
                <select className="form-control form-control-sm mb-2 ">
                    <option>withe</option>
                    <option>withe</option>
                    <option>black</option>
                    <option>red</option>
                    <option>blue</option>
                </select>
            </div>
            <h4 ></h4>
            <button className="btn btn-primary btn-sm mb-2">save</button>
        </div>

    )
}