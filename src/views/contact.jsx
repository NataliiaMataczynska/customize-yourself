import React, { useRef, useState} from 'react';
import Questions from "../styles/elements/questions.jsx";
import emailjs from '@emailjs/browser';
import image1 from "../assets/images/home/instagram.jpg";
import image2 from "../assets/images/home/tiktok.jpg";

const quest = [
    {
        question: "Ile to kosztuje?",
        text: "I tutaj od początku się nie polubimy. Bo odpowiemy zgodnie z prawdą: NIE WIEMY. \n" +
            "Nie mamy cennika. \n" +
            "Wszystko zależy od typu realizacji, od tego jak pilnie potrzebujecie wykonania, od tego, ile materiału zużyjemy i czy mamy materiał do waszej „customizacji”, czy chociażby od tego czy mamy wam sami zamówić buty/kurtkę etc. czy wyślecie je z własnych zasobów.\n" +
            "Jest wiele innych powodów, przez które nie możemy odpowiedzieć na to pytanie, ale nie sposób je wszystkie tutaj wypisać (zresztą kto by to czytał?)\n" +
            "Dlatego piszcie do nas, pytajcie, podawajcie szczegóły, a my wycenimy wszystko w 24h (chyba całkiem nieźle, nie?)!",
        id: 1
    },
    {
        question: "Co jest niezbędne by wycenić koszt realizacji?",
        text: "Im więcej szczegółów tym lepiej.\n" +
            "Tutaj posłużymy się przykładem. Ktoś chce zamówić pomalowane buty wtedy niezbędne będą: \n" +
            "- Kolor buta;\n" +
            "- Model butów; \n" +
            "- Informacja czy buty dostarczacie wy, czy my je mamy zakupić;\n" +
            "- Jak najdokładniejszy opis tego czego oczekujecie tzn. czy oba buty mają być takie same, a może dwa różne. Czy grafiki mają znajdować się na całej powierzchni czy może tylko od strony zewnętrznej. Czy strona wewnętrzna i zewnętrzna buta mają wyglądać tak samo etc.;\n" +
            "- Przesłanie grafiki, która ma znaleźć się na bucie. Jeśli na każdym ma być inna, to każda z nich, jeśli na zewnątrz buta ma być inna niż po jego wewnętrznej stronie to także należy je przesłać;\n" +
            "I jeśli wam się mocno śpieszy to koniecznie napiszcie oczekiwany przez was termin realizacji. \n" +
            "My standardowo proponujemy swój termin przy takich zapytaniach, jednak wiemy, jak działa wszechświat, dlatego jeśli masz swoje oczekiwania co do czasu realizacji to poinformuj nas na wstępie. \n\n" +
            "A na koniec najważniejsze. \n" +
            "Jeśli nie wiesz do końca co chciałbyś mieć na swoim bucie/kurtce/bluzie etc. to też nas o tym poinformuj, a my POMOŻEMY (ale wtedy nie gwarantujemy wyceny w 24h)😉",
        id: 2
    },
    {
        question: "Jak pielęgnować pomalowane produkty?",
        text: "Wszystko zależy od tego co zamówiliście. Ale ogólnie mokra szmatka, zimna woda, pranie ręczne bez użycia środków chemicznych jest zawsze ok. \n" +
            "Wszystkie nasze realizacja na odzieży pokrywamy warstwą impregnatu, który chroni przed oddziaływaniem zewnętrznym. \n" +
            "Jednak dobrze wszyscy wiemy, że w życiu nic nie jest wieczne, dlatego do każdego zamówionego produktu dołączamy nasze zalecenia dotyczące pielęgnacji. \n" +
            "Bez obaw, nikt nie będzie chodził w śmierdzącej kurtce czy brudnych butach. \n" +
            "Na wszystko jest metoda pielęgnacji jednak wymaga ona więcej czasu i dokładności niż standardowo.  ",
        id: 3
    },
    {
        question: "Czy można prać w pralce?",
        text: "I tutaj odpowiedź jest jednoznaczna: NIE. \n" +
            "To znaczy, każdy z was bierze odpowiedzialność za waszą własność i może robić z nią co chce, a my jedynie stanowczo odradzamy korzystania z pralki w przypadku malowanych przez nas produktów. \n" +
            "To nie oznacza, że nie ma sposoby by je pielęgnować, ale na to pytanie odpowiadamy powyżej. ",
        id: 4
    },
    {
        question: "Ile trwa realizacja zamówienia?",
        text: "I tutaj odpowiemy w sposób pasujący do prawnika: „To zależy”. \n" +
            "Od czego?\n" +
            "Od typu realizacji, wielkości realizacji, liczby sztuk, od tego co na danym „customizowanym” elemencie miałoby się znaleźć i co dla nas także jest istotne tzn. od naszego aktualnego obłożenia. \n" +
            "Ale jeśli zależy wam na czasie to napiszcie do nas (zakładka „Kontakt”) indywidualnie podając jak najwięcej szczegółów oraz zaznaczając w wiadomości termin, na który chcielibyście coś mieć, a my dołożymy wszelkich starań by pomóc wam w realizacji tego projektu w jak najszybszym czasie. ",
        id: 5
    },
    {
        question: "Masz inne pytanie?",
        text: "Odezwij się do nas. \n" +
            "Napisz na naszych mediach społecznościowych, pod podany adres e-mail lub używając formularza kontaktowego na stronie.\n" +
            "Odpowiemy w przeciągu 24h.",
        id: 6
    },
]

export default function Contact() {
    const [active, setActive] = useState(null);
    const [messageSent, setMessageSent] = useState(false);

    const handleToggle = (index) => {
        if (active === index) {
            setActive(null);
        } else {
            setActive(index);
        }
    }

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_zcsbom5', 'template_pj9ko0o', form.current, 'OWYgQDAI8Z2MyobMb')
            .then((result) => {
                console.log(result.text);
                setMessageSent(true);
            }, (error) => {
                console.log(error.text);
            });
    };

    const showMessageSent = () => {
        if (messageSent) {
            setTimeout(() => {
                alert('Wiadomość została pomyślnie wysłana!');
                setMessageSent(false);
            }, 100);
        }
    };

    showMessageSent();

    return (
        <div className="contact-container" style={{display: "flex", justifyContent: "space-around", flexDirection: "row", alignItems: "flex-end"}}>
            <div style={{marginTop: "5rem"}}>
                <div style={{color: "withe", display: "flex", justifyContent: "space-between", flexDirection: "row", alignItems: "center", marginBottom: "5rem"}}>
                    <div>
                        <div>
                            <div style={{display: "flex", justifyContent: "", flexDirection: "row", alignItems: "flex-end"}}>
                                <p style={{fontSize: "1rem", color: "white"}}>
                                  <span className="material-symbols-outlined">location_on</span>
                                  <span style={{ marginLeft: "0.7rem"}}> Adres:</span> 58-160 Świebodzice
                                </p>
                            </div>
                        </div>
                        <div>
                            <div style={{display: "flex", justifyContent: "", flexDirection: "row", alignItems: "flex-end", lineHeight: "2rem"}}>
                                <p style={{fontSize: "1rem", color: "white"}}>
                                    <span className="material-symbols-outlined">call</span>
                                    <span style={{width: "5rem", marginLeft: "0.7rem"}}>Telefon kontaktowy: </span>+48 600 800 ***
                                </p>
                            </div>
                        </div>
                        <div>
                            <div style={{display: "flex", justifyContent: "", flexDirection: "row", alignItems: "flex-end"}}>
                                <p style={{fontSize: "1rem", color: "white"}}>
                                  <span className="material-symbols-outlined">mail</span>
                                  <span style={{width: "5rem", marginLeft: "0.7rem"}}>Email: </span><a href="#" style={{textDecoration: "none", color: "white"}}>clayonboard@gmail.com</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div style={{display: "flex", justifyContent: "space-around", flexDirection: "column", alignItems: "center", lineHeight: "2rem", color: "white"}}>
                        <div  style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                            <div>
                                <img src={image1} alt="Instagram" style={{ width: "1.3rem", height: "1.3rem", marginRight: "0.7rem" }} />
                                <a href="https://instagram.com/clayonboard?igshid=OGQ5ZDc2ODk2ZA==" style={{ color: "lightgray"}}>instagram.com</a>
                            </div>
                            <div>
                                <img src={image2} alt="Instagram" style={{ width: "1.3rem", height: "1.3rem", marginRight: "0.7rem", cursor: "pointer"}} />
                                <a href="https://www.tiktok.com/@clayonboard" style={{ color: "lightgray", cursor: "pointer"}}>@clayonboard</a>
                            </div>
                        </div>
                    </div>
                </div>
                <article>
                    {quest.map((que, index) => {
                        return (
                            <Questions
                                key={index}
                                active={active}
                                handleToggle={handleToggle}
                                que={que}
                            />
                        );
                    })}
                </article>
            </div>
            <div className="container-cotact">
                <form ref={form} onSubmit={sendEmail}>
                    <label>Imię</label>
                    <input type="text" name="user_name" />
                    <label>Email</label>
                    <input type="email" name="user_email" />
                    <label>Wiadomość</label>
                    <textarea name="message" />
                    <input type="submit" value="Wyślij" />
                </form>
            </div>
        </div>
    )
}
