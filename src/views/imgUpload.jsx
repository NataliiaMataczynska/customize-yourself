import imageUpload from "../assets/images/upload-image.png";

export default function ImgUpload({ image}) {
    return (
        <div className='card upload-content container'>
            <h4>Upload Image</h4>
            {image && <img src={image} style={{ width: '20rem', position: 'absolute' }} alt="" />}
            {!image && <img src={imageUpload} alt="" />}
        </div>
    );
}