import React from 'react';

export default function Display({ displayState, image, imgState, textState }) {
    const { colorOfClothes, upperText, textColor, textSize, width} = displayState;
    const textStyle = {
        color: textColor,
        fontSize: textSize,
        transform: `rotate(${textState.transform}deg)`,
        top: `${textState.top}px`,
        left: `${textState.left}px`,
        position: 'absolute',
    };

    const imgStyle = {
        width: width,
        transform: `rotate(${imgState.transform}deg)`,
        top: `${imgState.top}px`,
        left: `${imgState.left}px`,
        position: 'absolute',
        background: "transparent",
    };


    return (
        <div className='card card-content' >
            <div className='imgJacket text-center'>
                <img className="img responsive" src={colorOfClothes} alt="img-jacket" style={{ position: 'relative', width: "40rem"}} />
                <img src={image} style={{...imgStyle}} alt="" />
            </div>
            <div className="nameText text-center">
                <div className="upperText" >
                    <p style={textStyle}>{upperText}</p>
                </div>
            </div>
        </div>
    );
}