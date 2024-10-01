import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyBYjbf5rR7idI7xjx6GjEReQj1jK4IScMw",
  authDomain: "trading-dojo-ddb74.firebaseapp.com",
  projectId: "trading-dojo-ddb74",
  storageBucket: "trading-dojo-ddb74.appspot.com",
  messagingSenderId: "42974078436",
  appId: "1:42974078436:web:97533c91923f26cb51d3f1"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

const analytics = getAnalytics(app);
