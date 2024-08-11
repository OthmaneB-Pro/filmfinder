import { doc, getDoc } from "firebase/firestore"
import { db } from "./firebase-config"

export const getList = async (idUser : string) => {  
    const docRef = doc(db, "users", idUser)

    const docSnapshot = await getDoc(docRef)

    if(docSnapshot.exists()) {
        const {isFavorite} = docSnapshot.data()
        return isFavorite;
    }
 }