import React, { useState, useEffect } from 'react';

export default function Home(){
    // const [displayText, setDisplayText] = useState('');
    // const text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime non quod totam ullam voluptatum. Consequuntur culpa, cupiditate dolore dolorem eius inventore magnam nam nostrum officia pariatur quibusdam quos reiciendis, repellat sint unde? Aliquam animi, asperiores at delectus dicta doloribus dolorum eaque eos error eveniet iusto laborum nemo nihil nostrum obcaecati, perferendis quae quaerat quam quas quibusdam temporibus ullam veniam vitae";
    //
    // useEffect(() => {
    //     let currentIndex = 0;
    //     const interval = setInterval(() => {
    //         if (currentIndex <= text.length) {
    //             setDisplayText(text.substring(0, currentIndex));
    //             currentIndex++;
    //         } else {
    //             clearInterval(interval);
    //         }
    //     }, 100); // milliseconds delay between each character
    //
    //     return () => clearInterval(interval);
    // }, [text]);

    const imagesToDisplay = [
        'src/assets/images/home/ase-1.jpg',
        'src/assets/images/home/ase-2.jpg',
        'src/assets/images/home/bluza-sabo.jpg',
        'src/assets/images/home/but-dragon-ball1.jpg',
        'src/assets/images/home/but-dragon-ball2.jpg',
        'src/assets/images/home/but-naruto-bok-lewy.jpg',
        'src/assets/images/home/but-naruto-bok-prawy.jpg',
        'src/assets/images/home/but-naruto-przod.jpg',
        'src/assets/images/home/but-naruto-tył.jpg',
        'src/assets/images/home/drunk-in-love.jpg',
        'src/assets/images/home/groot.jpg',
        'src/assets/images/home/IMG_20230625_200737.jpg',
        'src/assets/images/home/kot1.jpg',
        'src/assets/images/home/kot2.jpg',
        'src/assets/images/home/lol-lewy.jpg',
        'src/assets/images/home/lol-prawy.jpg',
        'src/assets/images/home/lol-tyl-2.jpg',
        'src/assets/images/home/lol-tyl-bok.jpg',
        'src/assets/images/home/luffy.jpg',
        'src/assets/images/home/luffy-h.jpg',
        'src/assets/images/home/mulan.jpg',
        'src/assets/images/home/nami.jpg',
        'src/assets/images/home/pedały1.jpg',
        'src/assets/images/home/pedały2.jpg',
        'src/assets/images/home/ryboludzie.jpg',
        'src/assets/images/home/sabo-ase1.jpg',
        'src/assets/images/home/sabo-ase-gora.jpg',
        'src/assets/images/home/sabo-bok.jpg',
        'src/assets/images/home/sabo-bok2.jpg',
        'src/assets/images/home/sabo-pencil.jpg',
        'src/assets/images/home/sparta.jpg'
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