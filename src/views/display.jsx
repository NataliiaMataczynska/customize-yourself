import React from "react";


export default function Display({ displayState }) {
    const { colorOfClothes, upperText, textColor } = displayState;
    const textStyle = {
        color: textColor,
    };



    return (
        <div className='card card-content'>
            <div className='imgJacket text-center'>
                <img className="img resposive" src={colorOfClothes} alt="img-jacket"/>
            </div>
            <div className="nameText text-center">
                <div className="upperText">
                    <p style={textStyle}>{upperText}</p>
                </div>
                {/*<img src='src/assets/images/choper.png' alt="img-choper" />*/}
            </div>
        </div>
    )
}