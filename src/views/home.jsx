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
        <div className="text-efect home-container" style={{margin: "10 rem"}} >
            <div className="home-text" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                <p style={{width: "80%", fontSize: "1.5rem", lineHeight: "2rem"}}>
                    Customizacja - dostosowanie czegoś do własnych potrzeb. A przynajmniej taką definicję podaję Słownik Języka Polskiego.<br />
                    I tym właśnie się tutaj zajmujemy, z małą zmianą, że dostosowujemy „coś” do waszych potrzeb. <br />
                    A czym jest to „coś”? Jest to szeroko pojęty zbiór rzeczy, które pod potrzeby klienta da się „customizować”. <br />
                    A konkretniej, to malujemy głównie odzież i obuwie zgodnie z pomysłem i potrzebami danej osoby. <br />
                    Najpopularniejsze realizacje to malowanie po butach, koszulkach, bluzach i kurtkach jeansowych. <br />
                    Jednak nie zamykamy się na inne realizacje. Możemy także ulepić coś z gliny, malować po elementach stalowych, personalizować powierzchnie użytkowe, malować po ścianach, pomalować figurki z gier planszowych (i nie tylko), wykonać obraz farbami czy też ołówkiem. <br />
                    Wszystko zależy od potrzeb.
                </p>
                <p style={{width: "80%", fontSize: "1.5rem", lineHeight: "2rem"}}>
                    Jak to działa? <br />
                    Jeśli chodzi o kurtki to uruchomiliśmy możliwość stworzenia własnego projektu na naszej stronie. Mamy nadzieję, że kreator jest dość łatwy w obsłudze i intuicyjny. <br />
                    Po stworzeniu swojego projektu i naciśnięciu przycisku „zapisz i wyślij” zapytanie trafia do nas, a my indywidualnie wyceniamy projekt oraz w przeciągu 24h wysyłamy odpowiedź na takie zapytanie. <br />
                    Dlaczego tylko kurtki? Bo ilość zapytań o nie była największa i od tego zaczęliśmy. Ale spokojnie, w kolejnych krokach planujemy dodać podobny kreator na buty, a ostatecznie także możliwość wgrania swojego produktu do „customizacji”. <br />
                    A póki nie rozwiniemy się bardziej w kwestii kreatora, to wszystkie pozostałe zapytania można kierować przez formularz kontaktowy, pod adres e-mail lub bezpośrednio pisać do nas na naszych mediach społecznościowych. <br />
                    Wszystko jest podane w zakładce „Kontakt”.
                </p>
                <p>
                    Dziękujemy, że jesteście tutaj z nami! <br />
                    Miłego „Customizowania”!
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