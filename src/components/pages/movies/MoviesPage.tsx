import styled from "styled-components";
import MoviesAvailable from "./MoviesAvailable";
import HeaderMovies from "./header/HeaderMovies";
import FooterMainPage from "../../reusable-ui/FooterPage";

export default function MoviesPage() {
  return (
      <MoviesPageStyled>
        <HeaderMovies />
        <MoviesAvailable />
        <FooterMainPage/>
      </MoviesPageStyled>
  );
}

const MoviesPageStyled = styled.div`
  background: #f5f5f7;
`;
