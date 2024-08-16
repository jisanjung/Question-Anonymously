import {initializeApp} from "firebase/app";
import { getFirestore} from "@firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCXZcLvqxe0ECOwFMI3U09wL90ClmuIWU8",
    authDomain: "owlhacks-2023-5148e.firebaseapp.com",
    projectId: "owlhacks-2023-5148e",
    storageBucket: "owlhacks-2023-5148e.appspot.com",
    messagingSenderId: "549950348223",
    appId: "1:549950348223:web:773d71cd01abbdd0b29f0a",
    measurementId: "G-W168Q5MK0C"
  };

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);