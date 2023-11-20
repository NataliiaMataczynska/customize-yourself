import React, { useState, useEffect } from 'react';
import Display from './Display.jsx';
import Settings from './Settings.jsx';
import ImgUpload from './ImgUpload.jsx';

export default function Dashboard() {
    const [displayState, setDisplayState] = useState({
        colorOfClothes: 'src/assets/images/front.png',
        upperText: 'this is text',
        nameTmg: '',
        url: '',
        textColor: 'black',
    });

    const handleColorOfClothes = (e) => {
        const newColor = e.target.id;
        let imageSrc = '';

        switch (newColor) {
            case 'white':
                imageSrc = 'src/assets/images/front.png';
                break;
            case 'black':
                imageSrc = 'src/assets/images/front%20black.png';
                break;
            case 'blue':
                imageSrc = 'src/assets/images/front%20blue.png';
                break;
            default:
                imageSrc = 'src/assets/images/front.png';
                break;
        }

        setDisplayState({ ...displayState, colorOfClothes: imageSrc });
    };

    const handleUpperText = (e) => {
        const newUpperText = e.target.value;
        setDisplayState({ ...displayState, upperText: newUpperText });
    };

    const handleImageUpload = (e) => {
        setDisplayState({ ...displayState, url: URL.createObjectURL(e.target.files[0]) });
    };

    const handleTextColor = (e) => {
        const newTextColor = e.target.value;
        setDisplayState({ ...displayState, textColor: newTextColor });
    };

    const [position, setPosition] = useState({
        top: 500,
        left: 1000,
    });

    useEffect(() => {
        console.log(position);
    }, [position]);

    function onDragStart(e) {
        console.log(e);
    }

    function onDrop(e) {
        console.log(e);
        setDisplayState(e.dataTransfer.getData("text"));
    }

    function onDragOver(e) {
        e.preventDefault();

        setPosition({
            top: `${e.clientY}px`,
            left: `${e.clientX}px`,
        });
    }
    const box = {
        width: "200px",
        height: "200px",
        background: "transparent",
        position: "absolute",
        top: position.top,
        left: position.left,
    };

    return (
        <section className="container">
            <div className="row row-up">
                <div className="settings column">
                    <Settings
                        color={handleColorOfClothes}
                        text={handleUpperText}
                        textColor={handleTextColor}
                    />
                </div>
            </div>
            <div className="row row-down">
                <div className="display column">
                    <Display
                        displayState={displayState}
                        onDrop={onDrop} onDragOver={onDragOver}
                        position={position}
                    />
                </div>
                <div className="file-upload">
                    <form>
                        <input type="file" onChange={handleImageUpload} />
                    </form>
                    <ImgUpload
                        onDragStart={onDragStart} boxStyle={box}
                        image={displayState.url}
                    />
                </div>
            </div>
        </section>
    );
}