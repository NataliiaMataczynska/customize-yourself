import React, { useRef } from 'react';

export default function Questions(props) {
    const contentEl = useRef(null);
    const {handleToggle, active, que} = props;
    const { question, id, text} = que;

    return (
        <>
            <section  className={active === id ? "active" : ""} onClick={() => handleToggle(id)}>
                <h2>{question}</h2>
                <span><i className="fas fa-arrow-down"></i></span>
            </section >
            <div ref={contentEl}
                 className={`collapse ${active === id ? "show" : ""}`}
                 style={active === id
                     ? {height: contentEl.current.scrollHeight}
                     : {height: "0px"}
                 }
            >
                <p>{text}</p>
            </div>
        </>
    );
}