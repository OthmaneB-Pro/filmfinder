import { createContext } from "react";
import { MovieAvailableType } from "../components/pages/movies/MoviesAvailable";
import { GenreType } from "../components/pages/main/catalog/Categories";

type FavoriteListType = {
  isFavorite: MovieAvailableType[];
  setIsFavorite: React.Dispatch<React.SetStateAction<MovieAvailableType[]>>;
  onAddFavorite: (item: MovieAvailableType) => void;
  username: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  onDeleteFavorite: (idProduct: number) => void;
  movieGenre: GenreType[];
  setMovieGenre: React.Dispatch<React.SetStateAction<GenreType[]>>;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
};

export const FavoriteList = createContext<FavoriteListType>({
  isFavorite: [],
  setIsFavorite: () => {},
  onAddFavorite: () => {},
  username: "",
  setUsername: () => {},
  onDeleteFavorite: () => {},
  movieGenre: [],
  setMovieGenre: () => {},
  page: 1,
  setPage: () => {},
});
