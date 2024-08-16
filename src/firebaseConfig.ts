import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyCjKThhjfzr8N-TlHcYcYJdg1hRJHoP55Y",
    authDomain: "trading-dojo.firebaseapp.com",
    projectId: "trading-dojo",
    storageBucket: "trading-dojo.appspot.com",
    messagingSenderId: "1054138391403",
    appId: "1:1054138391403:web:37c690ca9598330aecca2e",
    measurementId: "G-FD6T57PW5M"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

const analytics = getAnalytics(app);
