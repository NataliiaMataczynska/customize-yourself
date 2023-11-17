import React from "react";

export default function ImgUpload({ hundleImageClick, handleImageChange, ref, image}){
    return (
        <div className='card bg-light container'>
            <h4>Upload Image</h4>
            <div className="form-group"></div>
            <input type="file" className="form-control-file mb-2" />
            {image ? <img src={URL.createObjectURL(image)} style={{width: "200px", height:"200px" }} alt="" /> : <img src="src/assets/images/upload-image.png" alt="" />}
            <input type="file" onChange={handleImageChange} ref={ref} style={{ display: "none"}} className="form-control-file mb-2" />
            <button onClick={hundleImageClick}>Upload</button>

        </div>

    )
}