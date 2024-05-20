
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA6yYQ86o_aTCN4R-sefcZCow-6OVCAku8",
    authDomain: "ema-john-shopping-8c556.firebaseapp.com",
    projectId: "ema-john-shopping-8c556",
    storageBucket: "ema-john-shopping-8c556.appspot.com",
    messagingSenderId: "654724978812",
    appId: "1:654724978812:web:072e162cee88863ef791f9"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;