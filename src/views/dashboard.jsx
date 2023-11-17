import React, { useState } from 'react';
import Display from "./display.jsx";
import Settings from "./settings.jsx";
import ImgUpload from "./imgUpload.jsx"
import "../styles/dashboard.scss";


export default function Dashboard() {
    const [displayState, setDisplayState] = useState({
        colorOfClothes: 'src/assets/images/front.png',
        upperText: 'this is upper text',
        nameTmg: '',
        url: ""
    });
    const [selectedFile, setSelectedFile] = useState(null);

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
            case 'grey':
                imageSrc = 'src/assets/images/front%20black.png';
                break;
            case 'blue':
                imageSrc = 'src/assets/images/front%20blue.png';
                break;
            case 'red':
                imageSrc = 'src/assets/images/front%20black.png';
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
            //nie mam pojęcia co ma być
        }
    };

    return (
        <section className="container">
            <div className="row row-up">
                <div className="setings column">
                    <Settings
                        color={handlecolorOfClothes}
                        text={handleUpperText}
                    />
                </div>
            </div>
            <div className="row row-down">
                <div className="display column">
                    <Display displayState={displayState} />
                </div>
                <div className="file-upload">
                    <ImgUpload
                        fileUpload={handleImageUpload}
                    />
                </div>
            </div>

        </section>
    );
}
