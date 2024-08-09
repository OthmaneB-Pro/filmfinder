import styled from "styled-components";
import Logo from "../../reusable-ui/Logo";
import Navbar from "../../reusable-ui/Navbar";
import TitleTextWithDivider from "../../reusable-ui/TitleTextWithDivider";
import MoviesAvailable from "./MoviesAvailable";

export default function MoviesPage() {
  return (
    <MoviesPageStyled>
        <Logo className="logo"/>
        <Navbar/>
        <TitleTextWithDivider label="Liste des Films disponibles"/>
        <MoviesAvailable/>
    </MoviesPageStyled>
  )
}

const MoviesPageStyled = styled.div`
  .logo {
    z-index: 2;
    margin-left: 100px;
  }
`
