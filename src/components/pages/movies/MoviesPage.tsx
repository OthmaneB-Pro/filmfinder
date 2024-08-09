import styled from "styled-components";
import Logo from "../../reusable-ui/Logo";
import Navbar from "../../reusable-ui/Navbar";
import TitleTextWithDivider from "../../reusable-ui/TitleTextWithDivider";
import MoviesAvailable from "./MoviesAvailable";
import { useState } from "react";
import { MoviesPageContext } from "../../../context/MoviesPageContext";

export default function MoviesPage() {
  const [page, setPage] = useState(1);

  const moviesContextValue = {
    page,
    setPage,
  };

  return (
    <MoviesPageContext.Provider value={moviesContextValue}>
      <MoviesPageStyled>
        <Logo className="logo" />
        <Navbar />
        <TitleTextWithDivider label="Liste des Films disponibles" />
        <MoviesAvailable />
      </MoviesPageStyled>
    </MoviesPageContext.Provider>
  );
}

const MoviesPageStyled = styled.div`
  .logo {
    z-index: 2;
    margin-left: 100px;
  }
`;
