import styled from "styled-components";
import Logo from "../../../reusable-ui/Logo";
import Navbar from "../../../reusable-ui/Navbar";
import TitleTextWithDivider from "../../../reusable-ui/TitleTextWithDivider";

export default function HeaderSearch() {
  return (
    <HeaderSearchStyled>
      <Logo className="logo" />
      <Navbar />
      <TitleTextWithDivider label={`- Faite votre recherche -`} />
    </HeaderSearchStyled>
  )
}
const HeaderSearchStyled = styled.div`
  .logo {
    z-index: 2;
    margin-left: 100px;
  }
`;