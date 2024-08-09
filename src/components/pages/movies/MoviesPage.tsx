import styled from "styled-components";
import Logo from "../../reusable-ui/Logo";
import Navbar from "../../reusable-ui/Navbar";

export default function MoviesPage() {
  return (
    <MoviesPageStyled>
        <Logo className="logo"/>
        <Navbar/>
    </MoviesPageStyled>
  )
}

const MoviesPageStyled = styled.div`
  .logo {
    z-index: 2;
    margin-left: 100px;
  }
`
