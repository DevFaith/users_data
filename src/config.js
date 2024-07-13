import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyDi83E15odNW4XNxLRKkplu_UC4VC7epho",
    authDomain: "users500.firebaseapp.com",
    projectId: "users500",
    storageBucket: "users500.appspot.com",
    messagingSenderId: "285047687921",
    appId: "1:285047687921:web:c689d5b5a9b77ee55f3750",
    measurementId: "G-6T8D1HS8D6"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
export { db }