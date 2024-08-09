import {createContext}  from "react";

type MoviesPageContextType = {
    page : number;
    setPage : React.Dispatch<React.SetStateAction<number>>;
  }
export const MoviesPageContext =  createContext<MoviesPageContextType>({
    page : 1,
    setPage : () => {},
})