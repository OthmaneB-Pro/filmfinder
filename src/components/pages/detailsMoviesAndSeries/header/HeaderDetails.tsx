import styled from "styled-components";
import Logo from "../../../reusable-ui/Logo";
import Navbar from "../../../reusable-ui/Navbar";
import TitleTextWithDivider from "../../../reusable-ui/TitleTextWithDivider";

export default function HeaderDetails() {
  return (
    <HeaderStyled>
      <Logo className="logo" />
      <Navbar />
      <TitleTextWithDivider label={"- -"} />
    </HeaderStyled>
  );
}

const HeaderStyled = styled.div`
  .logo {
    z-index: 2;
    margin-left: 100px;
  }
`;
