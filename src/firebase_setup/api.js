import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "./firebase";

// wrapper for addDoc function in firestore - for application usecase
export const addDocument = async (classCode, question) => {
    if (!classCode || !question) {
        return false;
    }
    try {
        const res = await addDoc(collection(db, classCode), { question });
        return Boolean(res);
    } catch (err) {
        console.log('ERROR_ADDING_DOCUMENT_TO_FIRESTORE: ', err);
    }
};

export const getDocuments = async (classCode) => {
    if (!classCode) {
        return [];
    }
    try {
        const res = await getDocs(collection(db, classCode));
        return res?.docs || [];
    } catch (err) {
        console.log('ERROR_RETRIEVING_DOCUMENTS_FROM_FIRESTORE: ', err);
    }
};
