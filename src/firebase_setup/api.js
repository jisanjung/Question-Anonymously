import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase";

// wrapper for addDoc function in firestore - for application usecase
export const addDocument = async (classCode, question) => {
    const docRef = await addDoc(collection(db, classCode), { question });
    return Boolean(docRef);
};
