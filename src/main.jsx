import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './styles/main.scss';
// import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
//
// // Konfiguracja Firebase dla Twojej aplikacji internetowej
// const firebaseConfig = {
//     apiKey: 'Twój klucz API',
//     authDomain: 'customize-yourself.firebaseapp.com',
//     projectId: 'customize-yourself',
//     storageBucket: 'customize-yourself.appspot.com',
//     messagingSenderId: 'Twój ID do wiadomości',
//     appId: 'Twój ID aplikacji',
//     measurementId: 'Twój ID pomiaru (opcjonalne)',
// };
//
// // Zainicjalizuj Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
