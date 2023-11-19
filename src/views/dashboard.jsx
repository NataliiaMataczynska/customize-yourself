import React, { useState } from 'react';
import Display from "./display.jsx";
import Settings from "./settings.jsx";
import ImgUpload from "./imgUpload.jsx";

export default function Dashboard() {
    const [displayState, setDisplayState] = useState({
        colorOfClothes: 'src/assets/images/front.png',
        upperText: 'this is text',
        nameTmg: '',
        url: "",
        textColor: 'black'
    });

    const handlecolorOfClothes = (e) => {
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

        setDisplayState({ ...displayState, upperText: newUpperText })
    }

    const handleImageUpload = (e) => {
        if (e.target.files[0]){
            const image = (e.target.files[0]);
            const imageUrl = URL.createObjectURL(image);
            setDisplayState({ ...displayState, url: imageUrl });
        }
    };

    const handleTextColor = (e) => {
        const newTextColor = e.target.value;
        setDisplayState({ ...displayState, textColor: newTextColor });
    };
    const handleDrop = (e) => {
        e.preventDefault();
        const draggedImage = e.dataTransfer.getData("text");
        setDisplayState({ ...displayState, url: draggedImage });
    };

    const allowDrop = (e) => {
        e.preventDefault();
    };

    const [image, setImage] = useState(null);
    function handleInput(e) {
        setImage(URL.createObjectURL(e.target.files[0]));
    }

    return (
        <section className="container">
            <div className="row row-up">
                <div className="setings column"
                     onDrop={handleDrop}
                     onDragOver={allowDrop}>
                    <Settings
                        color={handlecolorOfClothes}
                        text={handleUpperText}
                        textColor={handleTextColor}
                    />
                </div>
            </div>
            <div className="row row-down">
                <div className="display column">
                    <Display displayState={displayState} />
                </div>
                <div className="file-upload">
                    <form>
                        <input type="file" onChange={handleInput} />
                    </form>
                    <ImgUpload
                        handleImageChange={handleImageUpload}
                        image={image}
                    />
                </div>
            </div>
        </section>
    );
}
