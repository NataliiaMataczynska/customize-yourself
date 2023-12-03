import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function ImageUploader() {
    const [image, setImage] = useState(null);
    const [width, setWidth] = useState(200);
    const [height, setHeight] = useState(200);
    const [positionX, setPositionX] = useState(0);
    const [positionY, setPositionY] = useState(0);
    const [color, setColor] = useState('black');
    const [size, setSize] = useState(14);
    const [text, setText] = useState('');
    const [showModal, setShowModal] = useState(false);

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setImage(reader.result);
        };

        reader.readAsDataURL(file);
    };

    const imageSize = (e) => {
        setWidth(e.target.value);
        setHeight(e.target.value);
    };

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    const sendEmail = () => {
        const data = {
            service_id: 'SERVICE_ID',
            template_id: 'TEMPLATE_ID',
            user_id: 'PUBLIC_KEY',
            template_params: {
                size: size,
                color: color,
                image_data: image,
                image_size: width,
                image_position_x: positionX,
                image_position_y: positionY,
            }
        }

        fetch(`https://api.emailjs.com/api/v1.0/email/send`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(() => {
                console.log('wyslano');
            })
            .catch(() => {
                console.log('cos poszlo nie tak');
            });
    }

    return (
        <div>
            <form>
                <input type="file" onChange={handleImageUpload} />
                <input type="range" min="1" max="40" value={width} onChange={imageSize} />
                <input type="color" onChange={(e) => setColor(e.target.value)} />
                <input type="range" min="1" max="100" value={size} onChange={(e) => setSize(e.target.value)} />
                <input type="text" onChange={(e) => setText(e.target.value)} />
                <button onClick={handleShow}>Zapisz i wyślij</button>
            </form>

            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Twoja kreacja</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={image} alt="User's uploaded image" style={{ width: `${width}px`, height: `${height}px`, position: 'absolute', top: `${positionY}px`, left: `${positionX}px` }} />
                    <input type="text" onChange={(e) => setText(e.target.value)} />
                    <p>{text}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Zamknij
                    </Button>
                    <Button variant="primary" onClick={sendEmail}>
                        Wyślij
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default ImageUploader;