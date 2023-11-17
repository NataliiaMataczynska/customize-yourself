import React, {useState} from "react";
import {imageDb} from "./firebaseConfirg.jsx";
import { ref, uploadBytes } from "firebase/storage"
import {v4} from "uuid";


export default function FirebaseImageUpload(){
    const [img, setImg] = useState("")

    const handleClick = () => {
        const imgRef = ref(imageDb,`files/${v4()}`)
        uploadBytes(imgRef, img)
    }
    return (
        <div className="storage-app">
            <input type="file" onChange={(e) => setImg(e.target.files[0])}/>
            <button onClick={handleClick}></button>

        </div>

    )
}