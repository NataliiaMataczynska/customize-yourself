import React, {useState }from 'react';
import { img1, img2, img3 } from 'src/assets/images/pancil_drowing/'

document.getElementById('pancil-1').src = img1
document.getElementById('pancil-2').src = img2
document.getElementById('pancil-3').src = img3
export default function PancilDrowing() {
    const imagesPancilDrowing = [
        'src/assets/images/pancil_drowing/pancil-1.jpg',
        'src/assets/images/pancil_drowing/pancil-2.jpg',
        'src/assets/images/pancil_drowing/pancil-3.jpg',
        'src/assets/images/pancil_drowing/pancil-4.jpg',
        'src/assets/images/pancil_drowing/pancil-6.jpg',
        'src/assets/images/pancil_drowing/pancil-7.jpg',
        'src/assets/images/pancil_drowing/pancil-9.jpg',
        'src/assets/images/pancil_drowing/pancil-10.jpg',
        'src/assets/images/pancil_drowing/pancil-5.jpg',
        'src/assets/images/pancil_drowing/pancil-8.jpg',
    ];

    const [pancilImages, setPancilImages] = useState([]);

    useEffect(() => {
        setPancilImages(imagesPancilDrowing);
    }, []);


    return (
        <div className="juckets-container" >
            <div className="jucketse-text">
                <h1>Rysunek ołówkiem</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Architecto debitis saepe sed! Ea, exercitationem similique.
                </p>
            </div>

            <section className="juckets">
                <div className="juckets-images grid-images">
                    <ul className="images-group">
                        {
                            pancilImages.map((e, index) => (
                                <li key={index} className="image-group">
                                    <img src={e} className="image-realizations" />
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </section>
        </div>
    );
}