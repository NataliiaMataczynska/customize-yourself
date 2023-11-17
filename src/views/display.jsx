import React from "react";
import "../styles/display.scss";

export default function Display({ displayState }) {
    const { colorOfClothes, upperText } = displayState;

    return (
        <div className='card card-content'>
            <div className='imgTshert text-center'>
                <img className="img resposive" src={colorOfClothes} alt="img-jucket"/>
            </div>
            <div className="nameText text-center">
                <div className="upperText">
                    <p>{upperText}</p>
                </div>
                <img src='src/assets/images/choper.png' alt="img-choper" />
            </div>
        </div>
    )
}