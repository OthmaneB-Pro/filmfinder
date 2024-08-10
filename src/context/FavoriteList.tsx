import { createContext } from "react";
import { MovieAvailableType } from "../components/pages/movies/MoviesAvailable";

type FavoriteListType = {
    isFavorite : MovieAvailableType[];
    setIsFavorite: React.Dispatch<React.SetStateAction<MovieAvailableType[]>>;
    onAddFavorite : (item: MovieAvailableType) => void;

}

export const FavoriteList = createContext<FavoriteListType>({
    isFavorite : [],
    setIsFavorite : () => {},
    onAddFavorite : () => {},
})