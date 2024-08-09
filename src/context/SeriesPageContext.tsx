import {createContext}  from "react";

type SeriesPageContextType = {
    page : number;
    setPage : React.Dispatch<React.SetStateAction<number>>;
  }
export const SeriesPageContext =  createContext<SeriesPageContextType>({
    page : 1,
    setPage : () => {},
})