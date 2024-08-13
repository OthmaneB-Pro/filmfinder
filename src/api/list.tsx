import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "./firebase-config";
import { MovieAvailableType } from "../components/pages/movies/MoviesAvailable";

export const getList = async (idUser: string) => {
  const docRef = doc(db, "users", idUser);

  const docSnapshot = await getDoc(docRef);

  if (docSnapshot.exists()) {
    return docSnapshot.data().favorites || [];
  }
};

export const saveList = async (
  idUser: string,
  newFavorites: MovieAvailableType[]
) => {
  const docRef = doc(db, "users", idUser);
  const docSnapshot = await getDoc(docRef);
  let existingFavorites: MovieAvailableType[] = [];

  if (docSnapshot.exists()) {
    existingFavorites = docSnapshot.data().favorites || [];
  }
  const filteredNewFavorites = newFavorites.filter(
    (newFav) =>
      !existingFavorites.some((existingFav) => existingFav.id === newFav.id)
  );

  const updatedFavorites = [...existingFavorites, ...filteredNewFavorites];
  await setDoc(docRef, { favorites: updatedFavorites }, { merge: true });
};

export const deleteList = async (
  idUser: string,
  newFavorites: MovieAvailableType[]
) => {
  const docRef = doc(db, "users", idUser);
  await setDoc(docRef, { favorites: newFavorites }, { merge: true });
};
