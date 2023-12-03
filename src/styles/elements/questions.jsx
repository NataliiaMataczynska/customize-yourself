import React, { useRef, useState} from 'react';

export default function Questions(props) {
    const contentEl = useRef(null);
    const {handleToggle, active, que} = props;
    const { question, id, text} = que;

    return (
        <div>
            <section  className={active === id ? "active" : ""} onClick={() => handleToggle(id)}>
                <h2>{question}</h2>
                <span> v </span>
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
        </div>
    );
}