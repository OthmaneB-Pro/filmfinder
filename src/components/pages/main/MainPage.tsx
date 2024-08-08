import styled from "styled-components";
import FooterMainPage from "./footer/FooterMainPage";
import HeaderMain from "./header/HeaderMain";
import CatalogMain from "./catalog/CatalogMain";
import { useState } from "react";
import { GenreType } from "./catalog/categories/Categories";
import {MoviesContext} from "../../../context/MoviesContext";

export default function MainPage() {
const [movieGenre, setMovieGenre] = useState<GenreType[]>([]);

  const moviesContextValue = {
    movieGenre,
    setMovieGenre,
  }

  return (
    <MoviesContext.Provider value={moviesContextValue}>
    <MainPageStyled>
      <HeaderMain />
      <CatalogMain/>
      <FooterMainPage />
    </MainPageStyled>
    </MoviesContext.Provider>
  );
}

const MainPageStyled = styled.div`
  
`;
