// import firebase from "firebase/app";
// import "firebase/storage";
//
// // Konfiguracja Firebase dla Twojej aplikacji internetowej
// const config = {
//     apiKey: "AIzaSyDYMNQmcQ2-LUJjD_KmIY_pYknfQDGsxXA",
//     authDomain: "customize-yourself.firebaseapp.com",
//     projectId: "customize-yourself",
//     storageBucket: "customize-yourself.appspot.com",
//     messagingSenderId: "187155138405",
//     appId: "1:187155138405:web:5f20b16372be19d887438c",
//     measurementId: "G-FN9S7WT7LL",
// };
// firebase.initializeApp(config);
//
// const storage = firebase.storage();
//
//
// export {storage};


import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDYMNQmcQ2-LUJjD_KmIY_pYknfQDGsxXA",
    authDomain: "customize-yourself.firebaseapp.com",
    projectId: "customize-yourself",
    storageBucket: "customize-yourself.appspot.com",
    messagingSenderId: "187155138405",
    appId: "1:187155138405:web:5f20b16372be19d887438c",
    measurementId: "G-FN9S7WT7LL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const imageDb = getStorage(app);
//
