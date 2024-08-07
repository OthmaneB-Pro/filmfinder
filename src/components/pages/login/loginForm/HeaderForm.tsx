import styled from "styled-components";
import Logo from "../../../reusable-ui/Logo";

export default function HeaderForm() {
  return (
    <HeaderFormStyled>
      <h1>
        Bienvenue chez <Logo />
      </h1>
      <hr/>
      <br/>
      <h1>Se connecter</h1>
    </HeaderFormStyled>
  );
}

const HeaderFormStyled = styled.div`
  h1 {
    padding: 10px;
    border-radius: 5px;
  }
  hr {
    width: 250px;
    margin-bottom: 30px;
  }
`;
