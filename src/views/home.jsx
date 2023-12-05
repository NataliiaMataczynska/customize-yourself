import React from 'react';

import image1 from "../assets/images/home/sabo-bok.jpg";
import image2 from "../assets/images/home/ase-1.jpg";
import image3 from "../assets/images/home/ase-2.jpg";
import image4 from "../assets/images/home/bluza-sabo.jpg";
import image5 from "../assets/images/home/but-dragon-ball1.jpg";
import image6 from "../assets/images/home/but-dragon-ball2.jpg";
import image7 from "../assets/images/home/but-naruto-bok-lewy.jpg";
import image8 from "../assets/images/home/but-naruto-bok-prawy.jpg";
import image9 from "../assets/images/home/but-naruto-przod.jpg";
import image10 from "../assets/images/home/but-naruto-tył.jpg";
import image11 from "../assets/images/home/drunk-in-love.jpg";
import image12 from "../assets/images/home/groot.jpg";
// import image13 from "../assets/images/home/IMG_20230625_200737.jpg";
import image14 from "../assets/images/home/kot1.jpg";
import image15 from "../assets/images/home/kot2.jpg";
import image16 from "../assets/images/home/lol-lewy.jpg";
import image17 from "../assets/images/home/lol-prawy.jpg";
import image18 from "../assets/images/home/lol-tyl-2.jpg";
import image19 from "../assets/images/home/lol-tyl-bok.jpg";
import image20 from "../assets/images/home/luffy.jpg";
// 'src/assets/images/home/luffy-h.jpg',
// 'src/assets/images/home/mulan.jpg',
// 'src/assets/images/home/nami.jpg',
// 'src/assets/images/home/pedały1.jpg',
// 'src/assets/images/home/pedały2.jpg',
// 'src/assets/images/home/ryboludzie.jpg',
// 'src/assets/images/home/sabo-ase1.jpg',
// 'src/assets/images/home/sabo-ase-gora.jpg',
// 'src/assets/images/home/sabo-bok.jpg',
// 'src/assets/images/home/sabo-bok2.jpg',
// 'src/assets/images/home/sabo-pencil.jpg',
// 'src/assets/images/home/sparta.jpg'


export default function Home(){

    const imagesToDisplay = [
        image1,
        image2,
        image3,
        image4,
        image5,
        image6,
        image7,
        image8,
        image9,
        image10,
        image11,
        image12,
        // image13,
        image14,
        image15,
        image16,
        image17,
        image18,
        image19,
        image20,
    ];


    return (
        <div className="text-efect home-container" >
            <div className="home-text">
                <h1>Strona główna</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Architecto debitis saepe sed! Ea, exercitationem similique.
                </p>
            </div>
        {/*    <span style={{ fontWeight: 'bold', color: 'black', fontSize: '2rem' }}>*/}
        {/*{displayText}*/}
        {/*        <span style={{ fontWeight: 'bold', color: '#ff007f', fontSize: '2.4rem'}}>*/}
        {/*            /!*<FontAwesomeIcon icon=" fas fa-solid fa-paintbrush-fine" style={{color: "#40511f",}} />*!/*/}
        {/*            |*/}
        {/*        </span>*/}
        {/*  </span>*/}
            <div className="home">
                <div className="home-images">
                    <ul className="images-group">
                        {
                            imagesToDisplay.map((e, index) => (
                                <li key={index} className="image-group">
                                    <img src={e} className="image" />
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
}