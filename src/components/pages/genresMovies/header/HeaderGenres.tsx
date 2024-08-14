import { useParams } from "react-router-dom";
import Logo from "../../../reusable-ui/Logo";
import Navbar from "../../../reusable-ui/Navbar";
import TitleTextWithDivider from "../../../reusable-ui/TitleTextWithDivider";
import styled from "styled-components";

export default function HeaderGenres() {
  const {genre} = useParams()

  return (
    <HeaderGenresStyled>
      <Logo className="logo" />
      <Navbar />
      <TitleTextWithDivider label={`- Liste des Films dans la catégorie : ${genre} -`} />
    </HeaderGenresStyled>
  );
}

const HeaderGenresStyled = styled.div`
  .logo {
    z-index: 2;
    margin-left: 100px;
  }
`;
