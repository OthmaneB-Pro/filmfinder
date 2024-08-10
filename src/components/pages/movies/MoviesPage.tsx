import styled from "styled-components";
import MoviesAvailable from "./MoviesAvailable";
import { useState } from "react";
import { MoviesPageContext } from "../../../context/MoviesPageContext";
import HeaderMovies from "./header/HeaderMovies";
import FooterMainPage from "../../reusable-ui/FooterPage";

export default function MoviesPage() {
  const [page, setPage] = useState(1);

  const moviesContextValue = {
    page,
    setPage,
  };

  return (
    <MoviesPageContext.Provider value={moviesContextValue}>
      <MoviesPageStyled>
        <HeaderMovies />
        <MoviesAvailable />
        <FooterMainPage/>
      </MoviesPageStyled>
    </MoviesPageContext.Provider>
  );
}

const MoviesPageStyled = styled.div`
  background: #f5f5f7;
`;
