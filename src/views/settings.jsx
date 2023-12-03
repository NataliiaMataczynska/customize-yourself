import PropTypes from 'prop-types';

export default function Settings({
                                     handleChangeOptions,
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
                                     moveUpImg,
                                     moveLeftImg,
                                     moveRightImg
                                 }) {
    return (
        <div className=' container jacket-options'>
            <div className="row-options">
                <div className="jacket-option jacket-color ">
                    <h4>Wybór produktu</h4>
                    <select className="form-control ">
                        <option>Kurtka jeansowa</option>
                    </select>
                </div>
                <div className="jacket-option model ">
                    <h4>Model</h4>
                    <select className="form-control " value={displayState.model} name="model" onChange={handleChangeOptions}>
                        <option>Damska</option>
                        <option>Męska</option>
                    </select>
                </div>
                <div className="jacket-option model ">
                    <h4>Rozmiar</h4>
                    <select className="form-control " value={displayState.size} name="size" onChange={handleChangeOptions}>
                        <option>XS</option>
                        <option>S</option>
                        <option>M</option>
                        <option>L</option>
                        <option>XL</option>
                        <option>XXL</option>
                    </select>
                </div>
                <div className="jacket-option jacket-color">
                    <h4>color</h4>
                    <div className="color-choose">
                        <button onClick={color} style={{width: "2rem", height: "2rem", background: "#D6E8EE", borderRadius: "50%"}} id="D6E8EE"></button>
                        <button onClick={color} style={{width: "2rem", height: "2rem", background: "#97CADB", borderRadius: "50%"}} id="97CADB"></button>
                        <button onClick={color} style={{width: "2rem", height: "2rem", background: "#018ABE", borderRadius: "50%"}} id="018ABE"></button>
                        <button onClick={color} style={{width: "2rem", height: "2rem", background: "#02457A", borderRadius: "50%"}} id="02457A"></button>
                        <button onClick={color} style={{width: "2rem", height: "2rem", background: "#001B48", borderRadius: "50%"}} id="001B48"></button>
                        <button onClick={color} style={{width: "2rem", height: "2rem", background: "black", borderRadius: "50%"}} id="black"></button>
                    </div>
                </div>
                <div className="jacket-option model ">
                    <h4>Dostarczenie produktu</h4>
                    <select className="form-control form-control " value={displayState.size} name="delivery" onChange={handleChangeOptions}>
                        <option>Klient</option>
                        <option>Firma</option>
                    </select>
                </div>
                <div className="jacket-option jacket-color">
                    <h4>Twoje zdjęcie</h4>
                    <form>
                        <input type="file" onChange={handleImageUpload} />
                    </form>
                </div>
                <div className="jacket-option jacket-color">
                    <h4>Rozmiar zdjęcia</h4>
                    <input
                        type="range"
                        min="1"
                        max="40"
                        value={parseInt(displayState.width)}
                        onChange={imageSize}
                    />
                </div>
                <div className="jacket-option jacket-color">
                    <h4>Obróć zdjęcie</h4>
                    <div>
                        <button onClick={rotateLeftImg} style={{
                            background: `url("src/assets/images/rotate-left.png") no-repeat`,
                            backgroundSize: 'cover', width: '2rem', height: '2rem' }}></button>
                        <button onClick={rotateRightImg} style={{
                            background: `url("src/assets/images/rotate-right.png") no-repeat`,
                            backgroundSize: 'cover',width: '2rem', height: '2rem' }}></button>
                    </div>
                </div>
                <div className="jacket-option">
                    <h4>Przesuń zdjęcie</h4>
                    <div className="button-grid">
                        <span></span>
                        <button onClick={moveUpImg}><i
                            className="fas arrows fa-arrow-alt-circle-up"></i></button>
                        <span></span>
                        <button onClick={moveLeftImg}><i
                            className="fas arrows fa-arrow-alt-circle-left"></i></button>
                        <span></span>
                        <button onClick={moveRightImg} ><i
                            className="fas arrows fa-arrow-alt-circle-right"></i></button>
                        <span></span>
                        <button onClick={moveDownImg}><i
                            className="fas arrows fa-arrow-alt-circle-down"></i>
                        </button>
                        <span></span>
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
                    <div className="button-grid">
                        <span></span>
                        <button onClick={moveUp}><i
                            className="fas arrows fa-arrow-alt-circle-up"></i></button>
                        <span></span>
                        <button onClick={moveLeft}><i
                            className="fas arrows fa-arrow-alt-circle-left"></i></button>
                        <span></span>
                        <button onClick={moveRight} ><i
                            className="fas arrows fa-arrow-alt-circle-right"></i></button>
                        <span></span>
                        <button onClick={moveDown}><i
                            className="fas arrows fa-arrow-alt-circle-down"></i>
                        </button>
                        <span></span>
                    </div>
                </div>
                <button className="btn btn-primary">Zapisz i wyślij</button>
            </div>
        </div>

    )
}

Settings.propTypes = {
    handleChangeOptions: PropTypes.func.isRequired,
    color: PropTypes.func.isRequired,
    text: PropTypes.func.isRequired,
    textColor: PropTypes.func.isRequired,
    textSize: PropTypes.func.isRequired,
    imageSize: PropTypes.func.isRequired,
    displayState: PropTypes.object.isRequired,
    handleImageUpload: PropTypes.func.isRequired,
    rotateLeft: PropTypes.func.isRequired,
    rotateRight: PropTypes.func.isRequired,
    rotateLeftImg: PropTypes.func.isRequired,
    rotateRightImg: PropTypes.func.isRequired,
    moveLeft: PropTypes.func.isRequired,
    moveRight: PropTypes.func.isRequired,
    moveUp: PropTypes.func.isRequired,
    moveDown: PropTypes.func.isRequired,
    moveDownImg: PropTypes.func.isRequired,
    moveUpImg: PropTypes.func.isRequired,
    moveLeftImg: PropTypes.func.isRequired,
    moveRightImg: PropTypes.func.isRequired
};