import { doc, getDoc, setDoc } from "firebase/firestore"
import { db } from "./firebase-config"

export const getUser = async (idUser : string) => { 

    const docRef = doc(db, "users", idUser)
    const docSnapshot = await getDoc(docRef)

    if(docSnapshot.exists()) {
        const userReceived = docSnapshot.data()
    }
 }

export const createUser = async (idUser : string, password : string) => { 
    const docRef = doc(db, "users", idUser)
    const newDoc = {
        username: idUser,
        password: password,
        myList: null,
    }
    await setDoc(docRef, newDoc)
 }