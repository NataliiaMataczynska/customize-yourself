import { getStorage, ref, uploadBytes } from "firebase/storage";
import { imageDb } from "./FirebaseConfig";

export const uploadImage = async (image) => {
    const storage = getStorage(imageDb);
    const storageRef = ref(storage, `images/${image.name}`);

    try {
        await uploadBytes(storageRef, image);
        const imageUrl = await getDownloadURL(storageRef);
        return imageUrl;
    } catch (error) {
        console.error("Błąd podczas przesyłania obrazu do Firebase:", error);
        return null;
    }
};
