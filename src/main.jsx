import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
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

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
