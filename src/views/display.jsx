import React from "react";
import { useDrop } from 'react-dnd';


export default function Display({ displayState, image }) {
    const { colorOfClothes, upperText, textColor } = displayState;
    const textStyle = {
        color: textColor,
    };

    //obsługa przerzucania obrazka

    const [{ isOver }, drop] = useDrop({
        accept: 'image',
        drop: (item) => {
            return { image: item.image };
        },
        collect: (monitor) => ({
            isOver: monitor.isOver(),
        }),
    });


    return (
        <div className='card card-content' ref={drop}>
            <div className='imgJacket text-center'>
                <img className="img resposive" src={colorOfClothes} alt="img-jacket"/>
                {image && <img src={image} alt="droped-img" />}
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