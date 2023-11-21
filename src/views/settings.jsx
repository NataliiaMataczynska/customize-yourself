import React from "react";

export default function Settings({
                                     color,
                                     text,
                                     textColor,
                                     textSize,
                                     imageSize,
                                     displayState,
                                     handleImageUpload,
                                     rotateLeft,
                                     rotateRight,
                                     rotateLeftImg,
                                     rotateRightImg,
                                     moveLeft,
                                     moveRight,
                                     moveUp,
                                     moveDown,
                                     moveDownImg,
                                     moveUpImg
                                 }) {
    return (
        <div className=' container jacket-options'>
            <div className="jacket-option jacket-color ">
                <h4>Wybór produktu</h4>
                <select className="form-control ">
                    <option>Kurtka jeansowa</option>
                    <option>Kurtka jeansowa</option>
                    <option>Kurtka jeansowa</option>
                </select>
            </div>
            <div className="jacket-option model ">
                <h4>Model</h4>
                <select className="form-control ">
                    <option>Damska</option>
                    <option>Męska</option>
                </select>
            </div>
            <div className="jacket-option model ">
                <h4>Rozmiar</h4>
                <select className="form-control ">
                    <option>XS</option>
                    <option>S</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                    <option>XXL</option>
                </select>
            </div>
            <div className="jacket-option jacket-color ">
                <h4>color</h4>
                <div className="color-choose">
                    <img onClick={color} src='src/assets/images/front.png' alt="white-jacket" id="white"/>
                    <img onClick={color} src='src/assets/images/front%20black.png' alt="black-jacket" id="black"/>
                    <img onClick={color} src='src/assets/images/front%20blue.png' alt="blue-jacket" id="blue"/>
                </div>
            </div>
            <div className="jacket-option model ">
                <h4>Dostarczenie produktu</h4>
                <select className="form-control form-control ">
                    <option>Klient</option>
                    <option>Firma</option>
                </select>
            </div>
            <div className="jacket-option">
                <h4>Twoje zdjęcie</h4>
                <form>
                    <input type="file" onChange={handleImageUpload} />
                </form>
            </div>
            <div className="jacket-option">
                <h4>Rozmiar zdjęcia</h4>
                <input
                    type="range"
                    min="1"
                    max="40"
                    value={parseInt(displayState.width)}
                    onChange={imageSize}
                />
            </div>
            <div className="jacket-option">
                <h4>Obróć zdjęcie</h4>
                <div>
                    <button onClick={rotateLeftImg} style={{
                        background: `url("src/assets/images/rotate-left.png") no-repeat`,
                        backgroundSize: 'cover', width: '2rem', height: '2rem' }}>Left</button>
                    <button onClick={rotateRightImg} style={{
                        background: `url("src/assets/images/rotate-right.png") no-repeat`,
                        backgroundSize: 'cover',width: '2rem', height: '2rem' }}>Right</button>
                </div>
            </div>
            <div className="jacket-option">
                <h4>Przesuń zdjęcie</h4>
                <div>
                    <button onClick={moveUpImg}>Up</button>
                    <button >Left</button>
                    <button >Right</button>
                    <button onClick={moveDownImg}>Down</button>
                </div>
            </div>
            <div className="jacket-option">
                <h4>Twój tekst</h4>
                <input
                    onChange={text}
                    type="text"
                    className="form-control"
                    placeholder="Twój tekst"
                />
            </div>
            <div className="jacket-option">
                <h4>Rozmiar tekstu</h4>
                <input
                    type="range"
                    min="10"
                    max="100"
                    value={parseInt(displayState.textSize)}
                    onChange={textSize}
                />
            </div>
            <div className="jacket-option">
                <h4 >Color tekstu</h4>
                <select onChange={textColor} className="form-control ">
                    <option value="white">withe</option>
                    <option value="black">black</option>
                    <option value="red">red</option>
                    <option value="blue">blue</option>
                </select>
            </div>
            <div className="jacket-option">
                <h4>Obróć tekst</h4>
                <div>
                    <button onClick={rotateLeft} style={{
                        background: `url("src/assets/images/rotate-left.png") no-repeat`,
                        backgroundSize: 'cover', width: '2rem', height: '2rem' }}></button>
                    <button onClick={rotateRight} style={{
                        background: `url("src/assets/images/rotate-right.png") no-repeat`,
                        backgroundSize: 'cover',width: '2rem', height: '2rem' }}></button>
                </div>
            </div>
            <div className="jacket-option">
                <h4>Przesuń tekst</h4>
                <div>
                    <button onClick={moveUp}>Up</button>
                    <button onClick={moveLeft}>Left</button>
                    <button onClick={moveRight}>Right</button>
                    <button onClick={moveDown}>Down</button>
                </div>
            </div>
            <h4 ></h4>
            <button className="btn btn-primary">Zapisz i wyślij</button>
        </div>

    )
}