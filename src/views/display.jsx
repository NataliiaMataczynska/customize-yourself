import React from 'react';

export default function Display({ displayState, onDrop, onDragOver, position }) {
    const { colorOfClothes, upperText, textColor } = displayState;
    const textStyle = {
        color: textColor,
    };


    return (
        <div className='card card-content' >
            <div className='imgJacket text-center'>
                <img className="img responsive" src={colorOfClothes} alt="img-jacket" />
            </div>
            <div className="nameText text-center">
                <div className="upperText" >
                    <p style={textStyle}>{upperText}</p>
                </div>
            </div>
            <div onDrop={onDrop} onDragOver={onDragOver} className="drop-zone" style={{ ...position, width: '100px', height: '100px' }}></div>
        </div>
    );
}