import { doc, getDoc, setDoc } from "firebase/firestore"
import { db } from "./firebase-config"
import { MovieAvailableType } from "../components/pages/movies/MoviesAvailable"

export const getList = async (idUser : string) => {  
    const docRef = doc(db, "users", idUser)

    const docSnapshot = await getDoc(docRef)

    if(docSnapshot.exists()) {
        return docSnapshot.data().favorites || [];
    }
 }
  
  // Fonction pour sauvegarder la liste des favoris dans Firestore
  export const saveList = async (idUser : string, newFavorites: MovieAvailableType[]) => {
    const docRef = doc(db, "users", idUser);
    const docSnapshot = await getDoc(docRef);
    let existingFavorites: MovieAvailableType[] = [];

    if (docSnapshot.exists()) {
        existingFavorites = docSnapshot.data().favorites || [];
    }
    const updatedFavorites = [...existingFavorites, ...newFavorites];
    await setDoc(docRef, { favorites: updatedFavorites }, { merge: true });
  };