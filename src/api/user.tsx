import { doc, getDoc, setDoc } from "firebase/firestore"
import { db } from "./firebase-config"

export const getUser = async (idUser : string) => { 

    const docRef = doc(db, "users", idUser)
    const docSnapshot = await getDoc(docRef)

    if(docSnapshot.exists()) {
        const userReceived = docSnapshot.data()
        return userReceived;
    }
 }

export const createUser = async (idUser : string, password : string) => { 
    const docRef = doc(db, "users", idUser)
    const newDoc = {
        username: idUser,
        password: password,
        myList: [],
    }
    await setDoc(docRef, newDoc)
 }

 export const authenticateUser = async (idUser : string, password: string) => {
    const existingUser = await getUser(idUser)
    if(!existingUser){
        await createUser(idUser, password);
      }
 }