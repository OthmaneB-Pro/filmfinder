import { createContext } from "react";
import { MovieAvailableType } from "../components/pages/movies/MoviesAvailable";
import { GenreType } from "../components/pages/main/catalog/categories/Categories";

type FavoriteListType = {
  isFavorite: MovieAvailableType[];
  setIsFavorite: React.Dispatch<React.SetStateAction<MovieAvailableType[]>>;
  onAddFavorite: (item: MovieAvailableType) => void;
  username: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  onDeleteFavorite: (idProduct: number) => void;
 movieGenre: GenreType[];
    setMovieGenre: React.Dispatch<React.SetStateAction<GenreType[]>>;
};

export const FavoriteList = createContext<FavoriteListType>({
  isFavorite: [],
  setIsFavorite: () => {},
  onAddFavorite: () => {},
  username: "",
  setUsername: () => {},
  onDeleteFavorite: () => {},
 movieGenre : [],
    setMovieGenre : () => {},
});
