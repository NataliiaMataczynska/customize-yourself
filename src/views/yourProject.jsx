import React, { useState, useEffect } from 'react';
import Display from './display.jsx';
import Settings from './settings.jsx';
import ImgUpload from "./imgUpload.jsx";

export default function YourProject() {
    const [displayState, setDisplayState] = useState({
        model: 'Damska',
        size: 'XS',
        delivery: 'Klient',
        colorOfClothes: 'src/assets/images/front.png',
        upperText: '',
        url: '',
        textColor: 'black',
        textSize: "16px",
        width: "20rem",
    });

    const [imgState, setImgState] = useState({
        transform: 0,
        top: 10,
        left: 0,
    });
    console.log(imgState);

    const [textState, setTextState] = useState({
        transform: 0,
        top: 40,
        left: 25,
    });

    // const handleChangeModel = (e) => {
    //     setDisplayState({ ...displayState, model: e.target.value });
    //     console.log(displayState.model);
    // };
    //
    // useEffect(() => {
    //     console.log(displayState.model);
    // }, [displayState.model]);

    const handleChangeOptions = (e) => {
        const {name, value} = e.target;
        setDisplayState({ ...displayState, [name]: value });
    };

    useEffect(() => {
        console.log(displayState.model);
        console.log(displayState.size);
        console.log(displayState.delivery);
    }, [displayState.model, displayState.size, displayState.delivery]);

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

    const handleTextSize = (e) => {
        const newSize = `${e.target.value}px`;
        setDisplayState({ ...displayState, textSize: newSize });
    };
    const handleTextColor = (e) => {
        const newTextColor = e.target.value;
        setDisplayState({ ...displayState, textColor: newTextColor });
    };

    const handleImageUpload = (e) => {
        setDisplayState({ ...displayState, url: URL.createObjectURL(e.target.files[0]) });
    };

    const handleImageSize = (e) => {
        const newSizeImage = `${e.target.value}rem`;
        setDisplayState({ ...displayState, width: newSizeImage });
    };

    const rotateLeft = () => {
        setTextState(prevState => ({
            ...prevState,
            transform: (prevState.transform - 10) % 360
        }));
    };

    const rotateRight = () => {
        setTextState(prevState => ({
            ...prevState,
            transform: (prevState.transform + 10) % 360
        }));
    };

    const rotateLeftImg = () => {
        setImgState(prevState => ({
            ...prevState,
            transform: (prevState.transform - 10) % 360
        }));

    };

    const rotateRightImg = () => {
        setImgState(prevState => ({
            ...prevState,
            transform: (prevState.transform + 10) % 360
        }));
    };
    const moveUp = () => {
        setTextState(prevState => ({ ...prevState, top: parseInt(prevState.top) - 10 }));
    };

    const moveDown = () => {
        setTextState(prevState => ({ ...prevState, top: parseInt(prevState.top) + 10 }));
    };

    const moveLeft = () => {
        setTextState(prevState => ({ ...prevState, left: parseInt(prevState.left) - 10 }));
    };
    const moveRight = () => {
        setTextState(prevState => ({ ...prevState, left: parseInt(prevState.left) - 10 }));
    };

    const moveUpImg = () => {
        setImgState(prevState => ({ ...prevState, top: parseInt(prevState.top) - 10 }));
    };

    const moveDownImg = () => {
        setImgState(prevState => ({ ...prevState, top: parseInt(prevState.top) + 10 }));
    };

    const moveLeftImg = () => {
        setImgState(prevState => ({ ...prevState, left: parseInt(prevState.left) - 10 }));
    };

    const moveRightImg = () => {
        setImgState(prevState => ({ ...prevState, left: parseInt(prevState.left) + 10 }));
    };

    return (
        <section className="container" >
            <div className="row row-up">
                <div className="settings column">
                    <Settings
                        handleChangeOptions={handleChangeOptions}
                        color={handleColorOfClothes}
                        text={handleUpperText}
                        textColor={handleTextColor}
                        textSize={handleTextSize}
                        imageSize={handleImageSize}
                        displayState={displayState}
                        handleImageUpload={handleImageUpload}
                        rotateLeft={rotateLeft}
                        rotateRight={rotateRight}
                        rotateLeftImg={rotateLeftImg}
                        rotateRightImg={rotateRightImg}
                        moveUp={moveUp}
                        moveDown={moveDown}
                        moveLeft={moveLeft}
                        moveRight={moveRight}
                        moveUpImg={moveUpImg}
                        moveDownImg={moveDownImg}
                        moveLeftImg={moveLeftImg}
                        moveRightImg={moveRightImg}
                    />
                </div>
            </div>
            <div className="row row-down">
                <div className="display column">
                    <Display
                        displayState={displayState}
                        imgState={imgState}
                        textState={textState}
                        image={displayState.url}
                    />
                </div>
                <div className="file-upload">
                    <ImgUpload
                        image={displayState.url}
                    />
                </div>
            </div>
        </section>
    );
}
