// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB4OUmYlD3fljzqd8mYEmutFd-BUeOWaEE",
    authDomain: "auto-werke.firebaseapp.com",
    projectId: "auto-werke",
    storageBucket: "auto-werke.appspot.com",
    messagingSenderId: "536077759135",
    appId: "1:536077759135:web:6bf46427272acc589c28aa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;