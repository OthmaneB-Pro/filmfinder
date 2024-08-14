import styled from "styled-components";
import Logo from "../../../reusable-ui/Logo";
import Navbar from "../../../reusable-ui/Navbar";
import TitleTextWithDivider from "../../../reusable-ui/TitleTextWithDivider";

export default function HeaderSeries() {
  return (
    <HeaderSeriesStyled>
      <Logo className="logo" />
      <Navbar />
      <TitleTextWithDivider label="Liste des Series - Pas encore disponible -" />
    </HeaderSeriesStyled>
  );
}

const HeaderSeriesStyled = styled.div`
  .logo {
    z-index: 2;
    margin-left: 100px;
  }
`;