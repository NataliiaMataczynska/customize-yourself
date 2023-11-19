import React from "react";
import { useDrag } from 'react-dnd';

export default function ImgUpload({ handleImageChange, image }) {

    const [{ isDragging }, drag] = useDrag({
        type: 'image',
        item: { type: 'image', image: 'src/assets/images/upload-image.png' },
        end: (item, monitor) => {
            const dropResult = monitor.getDropResult();
            if (item && dropResult) {
                setImage(item.image);
            }
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    return (
        <div className='card upload-content container' ref={drag} >
            <h4>Upload Image</h4>

            { image && <img src={image} ref={drag} style={{width: "20rem", opacity: isDragging ? 0.5 : 1}} alt="" />}
            {!image && <img src="src/assets/images/upload-image.png" alt="" />}

        </div>
    );
}
