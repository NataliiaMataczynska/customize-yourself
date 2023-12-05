import { useRef, useState} from 'react';
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
        <div className="contact-container">
            <div>
                <div style={{color: "withe"}}>
                    <div>
                        <div>
                            <div>
                                <span> Adres:</span>
                            </div>
                            <div>
                                <p>
                                    <span> Adres:</span> 58-160 Świebodzice
                                </p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <span> Telefon kontaktowy:</span>
                            </div>
                            <div>
                                <p>
                                    <span> Telefon kontaktowy:</span> +48 600 800 ***
                                </p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <span> Email:</span>
                                <a href="#">clayonboard@gmail.com</a>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h4>Nas znajdziesz równiez na: </h4>
                        <div>
                            <div>
                                <span></span>
                                <a href="https://instagram.com/clayonboard?igshid=OGQ5ZDc2ODk2ZA==">instagram.com</a>
                            </div>
                            <div>
                                <span></span>
                                <a href="https://www.tiktok.com/@clayonboard">@clayonboard</a>
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
