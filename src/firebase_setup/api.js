import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase";

// wrapper for addDoc function in firestore - for application usecase
export const addDocument = async (classCode, question) => {
    if (!classCode || !question) {
        return false;
    }
    try {
        const docRef = await addDoc(collection(db, classCode), { question });
        return Boolean(docRef);
    } catch (err) {
        console.log('ERROR_ADDING_DOCUMENT_TO_FIRESTORE: ', err);
    }
};
