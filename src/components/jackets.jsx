import React from 'react';

export default function Jackets() {
    const imagesJuckets = [
        'src/assets/images/home/asce2-2.png',
        'src/assets/images/home/asce1-1.png',
        'src/assets/images/home/cat1.png',
        'src/assets/images/home/drunk-in-love.jpg',
        'src/assets/images/home/kot1.jpg',
        'src/assets/images/home/kot2.jpg',
        'src/assets/images/home/luffy.jpg',
        'src/assets/images/home/luffy-h.jpg',
        'src/assets/images/home/sparta.jpg'
    ];

    return (
        <div className="juckets-container" >
            <div className="jucketse-text">
                <h1>Kurtki jeansowe</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Architecto debitis saepe sed! Ea, exercitationem similique.
                </p>
            </div>

            <section className="juckets">
                <div className="juckets-images grid-images">
                    <ul className="images-group">
                        {
                            imagesJuckets.map((e, index) => (
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