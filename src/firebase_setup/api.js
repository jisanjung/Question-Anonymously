import { collection, addDoc, getDocs, doc, getDoc } from "firebase/firestore";
import { db } from "./firebase";

// wrapper for addDoc function in firestore - for application usecase
export const addDocument = async (classCode, payload) => {
    if (!classCode || !payload) {
        return false;
    }
    try {
        const res = await addDoc(collection(db, classCode), { ...payload });
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

export const getDocumentById = async (classCode, id) => {
    if (!classCode || !id) {
        return null;
    }
    try {
        const docRef = doc(db, classCode, id);
        const docSnap = await getDoc(docRef);
        return docSnap.data();
    } catch (err) {
        console.log('ERROR_RETRIEVING_SINGLE_DOCUMENT_FROM_FIRESTORE: ', err);
    }
};
