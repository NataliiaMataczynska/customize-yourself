import React, { useRef, useState} from 'react';
import Questions from "../styles/elements/questions.jsx";
import emailjs from '@emailjs/browser';

const quest = [
    {
        question: "loremLorem ipsum dolor sit amet, consectetur adipisicing elit",
        text: "Architecto debitis saepe sed! Ea, exercitationem similique.",
    },
    {
        question: "loremLorem ipsum dolor sit amet, consectetur adipisicing elit",
        text: "Architecto debitis saepe sed! Ea, exercitationem similique.",
    },
    {
        question: "loremLorem ipsum dolor sit amet, consectetur adipisicing elit",
        text: "Architecto debitis saepe sed! Ea, exercitationem similique.",
    },
]

export default function Contact() {
    const [active, setActive] = useState(null);

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
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className="contact-container">
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
            <div className="container-cotact">
                <form ref={form} onSubmit={sendEmail}>
                    <label>Name</label>
                    <input type="text" name="user_name" />
                    <label>Email</label>
                    <input type="email" name="user_email" />
                    <label>Message</label>
                    <textarea name="message" />
                    <input type="submit" value="Send" />
                </form>
            </div>
        </div>
    )
}
