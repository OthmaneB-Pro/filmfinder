import {createContext}  from "react";
import { GenreType } from "../components/pages/main/catalog/categories/Categories";

type MoviesContextType = {
    movieGenre: GenreType[];
    setMovieGenre: React.Dispatch<React.SetStateAction<GenreType[]>>;
  }
export const MoviesContext =  createContext<MoviesContextType>({
    movieGenre : [],
    setMovieGenre : () => {},
})