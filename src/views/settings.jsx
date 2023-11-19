import React from "react";

export default function  Settings({color, text, textColor, hundleImageClick, handleImageChange, ref, image}){
    return (
        <div className=' container jacket-options'>
            <div className="jacket-option jacket-color ">
                <h4>Wybór produktu</h4>
                <select className="form-control ">
                    <option>Kurtka jeansowa</option>
                    <option>Kurtka jeansowa</option>
                    <option>Kurtka jeansowa</option>
                </select>
            </div>
            <div className="jacket-option model ">
                <h4>Model</h4>
                <select className="form-control ">
                    <option>Damska</option>
                    <option>Męska</option>
                </select>
            </div>
            <div className="jacket-option model ">
                <h4>Rozmiar</h4>
                <select className="form-control ">
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
                <div className="color-choose">
                    <img onClick={color} src='src/assets/images/front.png' alt="white-jacket" id="white"/>
                    <img onClick={color} src='src/assets/images/front%20black.png' alt="black-jacket" id="black"/>
                    <img onClick={color} src='src/assets/images/front%20blue.png' alt="blue-jacket" id="blue"/>
                </div>
            </div>
            <div className="jacket-option model ">
                <h4>Dostarczenie produktu</h4>
                <select className="form-control form-control ">
                    <option>Klient</option>
                    <option>Firma</option>
                </select>
            </div>
            <div className="jacket-option">
                <h4>Napisz swój tekst</h4>
                <input onChange={text} type="text" className='form-control' placeholder='Twój tekst'/>
            </div>
            <div className="jacket-option">
                <h4 >Rozmiar tekstu</h4>
                <input type="range" min="0" max="100"/>
            </div>
            <div className="jacket-option">
                <h4 >Color tekstu</h4>
                <select onChange={textColor} className="form-control ">
                    <option value="white">withe</option>
                    <option value="black">black</option>
                    <option value="red">red</option>
                    <option value="blue">blue</option>
                </select>
            </div>
            <h4 ></h4>
            <button className="btn btn-primary">save</button>
        </div>

    )
}