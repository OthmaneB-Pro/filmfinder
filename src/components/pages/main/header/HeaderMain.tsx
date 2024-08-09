import Logo from "../../../reusable-ui/Logo";
import Navbar from "../../../reusable-ui/Navbar";
import TitleTextWithDivider from "../../../reusable-ui/TitleTextWithDivider";
import Banner from "./Banner";
import styled from "styled-components";

export default function HeaderMain() {
  return (
    <HeaderStyled>
      <Logo className="logo" />
      <Navbar />
      <TitleTextWithDivider label="- Découvrez vos films et series préférées -" />
      <Banner />
    </HeaderStyled>
  );
}

const HeaderStyled = styled.div`
  .logo {
    z-index: 2;
    margin-left: 100px;
  }
`;
