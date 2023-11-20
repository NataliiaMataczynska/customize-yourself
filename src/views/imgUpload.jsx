import React from 'react';

export default function ImgUpload({ image, onDragStart, boxStyle }) {
    return (
        <div className='card upload-content container' draggable onDragStart={onDragStart} style={boxStyle}>
            <h4>Upload Image</h4>
            {image && <img src={image} style={{ width: '20rem', position: 'absolute' }} alt="" />}
            {!image && <img src="src/assets/images/upload-image.png" alt="" />}
        </div>
    );
}