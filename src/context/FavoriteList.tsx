import { createContext } from "react";
import { MovieAvailableType } from "../components/pages/movies/MoviesAvailable";

type FavoriteListType = {
    isFavorite : MovieAvailableType[];
    setIsFavorite: React.Dispatch<React.SetStateAction<MovieAvailableType[]>>;
    onAddFavorite : (item: MovieAvailableType) => void;
    username : string;
    setUsername : React.Dispatch<React.SetStateAction<string>>;
    onDeleteFavorite : (idProduct: number) => void;

}

export const FavoriteList = createContext<FavoriteListType>({
    isFavorite : [],
    setIsFavorite : () => {},
    onAddFavorite : () => {},
    username : "",
    setUsername: () => {},
    onDeleteFavorite : () => {},
    
})