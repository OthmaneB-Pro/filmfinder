import styled from "styled-components";
import Logo from "../../../reusable-ui/Logo";
import Navbar from "../../../reusable-ui/Navbar";
import TitleTextWithDivider from "../../../reusable-ui/TitleTextWithDivider";
import { useParams } from "react-router-dom";

export default function HeaderList() {
    const {username} = useParams()
  return (
    <HeaderListStyled>
      <Logo className="logo" />
      <Navbar />
      <TitleTextWithDivider label={`Votre Liste ${username}`} />
    </HeaderListStyled>
  );
}

const HeaderListStyled = styled.div`
  .logo {
    z-index: 2;
    margin-left: 100px;
  }
`;
