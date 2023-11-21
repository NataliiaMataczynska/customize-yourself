import React from 'react';

export default function Display({ displayState, image, imgState, textState }) {
    const { colorOfClothes, upperText, textColor, textSize, width} = displayState;
    const textStyle = {
        color: textColor,
        fontSize: textSize,
        transform: `rotate(${textState.transform}deg)`,
        top: `${textState.top}px`,
        left: `${textState.left}px`
    };

    const imgStyle = {
        width: width,
        transform: `rotate(${imgState.transform}deg)`,
        top: `${textState.top}rem`,
    };


    return (
        <div className='card card-content' >
            <div className='imgJacket text-center'>
                <img className="img responsive" src={colorOfClothes} alt="img-jacket" style={{ position: 'relative'}} />
                <img src={image} style={{...imgStyle, position: 'absolute', background: "transparent",
                    left: "10rem" }} alt="" />
            </div>
            <div className="nameText text-center">
                <div className="upperText" >
                    <p style={textStyle}>{upperText}</p>
                </div>
            </div>
        </div>
    );
}