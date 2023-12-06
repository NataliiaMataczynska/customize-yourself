import React, { useRef, useState} from 'react';
import Questions from "../styles/elements/questions.jsx";
import emailjs from '@emailjs/browser';

const quest = [
    {
        question: "loremLorem ipsum dolor sit amet, consectetur adipisicing elit",
        text: "Architecto debitis saepe sed! Ea, exercitationem similique.",
        id: 1
    },
    {
        question: "loremLorem ipsum dolor sit amet, consectetur adipisicing elit",
        text: "Architecto debitis saepe sed! Ea, exercitationem similique.",
        id: 2
    },
    {
        question: "loremLorem ipsum dolor sit amet, consectetur adipisicing elit",
        text: "Architecto debitis saepe sed! Ea, exercitationem similique.",
        id: 3
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
                                  <span style={{paddingRight: "6rem", marginLeft: "0.7rem"}}> Adres:</span> 58-160 Świebodzice
                                </p>
                            </div>
                        </div>
                        <div>
                            <div style={{display: "flex", justifyContent: "", flexDirection: "row", alignItems: "flex-end", lineHeight: "2rem"}}>
                                <p style={{fontSize: "1rem", color: "white"}}>
                                    <span className="material-symbols-outlined">call</span>
                                    <span style={{width: "5rem", marginRight: "0.8rem", marginLeft: "0.7rem"}}>Telefon kontaktowy: </span>+48 600 800 ***
                                </p>
                            </div>
                        </div>
                        <div>
                            <div style={{display: "flex", justifyContent: "", flexDirection: "row", alignItems: "flex-end"}}>
                                <p style={{fontSize: "1rem", color: "white"}}>
                                  <span className="material-symbols-outlined">mail</span>
                                  <span style={{width: "5rem", marginRight: "1rem", marginLeft: "0.7rem"}}>Email: </span><a href="#" style={{textDecoration: "none", color: "white"}}>clayonboard@gmail.com</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div style={{display: "flex", justifyContent: "space-around", flexDirection: "column", alignItems: "center", lineHeight: "2rem", color: "white"}}>
                        <div  style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                            <div>
                                <img src="src/assets/images/home/instagram.jpg" alt="Instagram" style={{ width: "1.3rem", height: "1.3rem", marginRight: "0.7rem" }} />
                                <a href="https://instagram.com/clayonboard?igshid=OGQ5ZDc2ODk2ZA==" style={{ color: "lightgray"}}>instagram.com</a>
                            </div>
                            <div>
                                <img src="src/assets/images/home/tiktok.jpg" alt="Instagram" style={{ width: "1.3rem", height: "1.3rem", marginRight: "0.7rem", cursor: "pointer"}} />
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
