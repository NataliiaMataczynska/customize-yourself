import React, { useState, useEffect } from 'react';

const Home = () => {
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

    return (
        <div className="text-efect" >
            Strona główna
        {/*    <span style={{ fontWeight: 'bold', color: 'black', fontSize: '2rem' }}>*/}
        {/*{displayText}*/}
        {/*        <span style={{ fontWeight: 'bold', color: '#ff007f', fontSize: '2.4rem'}}>*/}
        {/*            /!*<FontAwesomeIcon icon=" fas fa-solid fa-paintbrush-fine" style={{color: "#40511f",}} />*!/*/}
        {/*            |*/}
        {/*        </span>*/}
        {/*  </span>*/}
        </div>
    );
};

export default Home;