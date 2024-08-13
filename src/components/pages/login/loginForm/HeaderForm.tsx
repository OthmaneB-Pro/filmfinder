import styled from "styled-components";
import Logo from "../../../reusable-ui/Logo";

export default function HeaderForm() {
  return (
    <HeaderFormStyled>
      <Logo className="logo" />
      <br />
      <h1>Se connecter</h1>
    </HeaderFormStyled>
  );
}

const HeaderFormStyled = styled.div`
  h1 {
    padding: 10px;
    border-radius: 5px;
    margin-top: 150px;
    display: flex;
    justify-content: center;
  }
  
  .logo{
    margin-top: 20px;
    margin-left: -15px;
  }
`;
