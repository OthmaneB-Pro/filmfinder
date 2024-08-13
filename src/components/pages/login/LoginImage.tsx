import styled from "styled-components";

export default function LoginImage() {
  return (
    <LoginImageStyled>
      <img src="/img/elementaire.webp" alt="Elementaire" />
    </LoginImageStyled>
  );
}

const LoginImageStyled = styled.div`
  img {
    position: absolute;
    width: 832px;
    height: 680px;
  }
  @media (max-width: 1600px){
    img{
      width: 650px;
    }
  }
`;
