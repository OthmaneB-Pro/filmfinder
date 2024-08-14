import { useNavigate } from "react-router-dom";
import ButtonPrimary from "../../reusable-ui/ButtonPrimary";
import styled from "styled-components";

export default function Error() {
  const navigate = useNavigate();

  return (
    <BackgroundStyled>
      <div className="filmFinder">FilmFinder</div>
      <ErrorStyled>
        <span>404 Erreur</span>
        <span> La page que vous recherchez est indisponible...</span>
        <ButtonPrimary label={"Retourner à l'accueil"} onClick={() => navigate("/")} />
      </ErrorStyled>
    </BackgroundStyled>
  );
}

const ErrorStyled = styled.div`
  width: 800px;
  padding: 50px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
  border: 1px solid black;
  font-size: 24px;
  margin-bottom: 85px;
  position: absolute;
  left: 27%;
  top: 40%;

  span {
    margin-bottom: 20px;
  }
  @media (max-width: 1600px) {
    left: 20%;
  }
`;

const BackgroundStyled = styled.div`
  background: #25a3dd;
  height: 100vh;
  background-size: cover;

  .filmFinder {
    font-size: 80px;
    color: white;
    display: flex;
    justify-content: center;
    font-family: "Arial AC";
    text-decoration: underline;
    position: relative;
    top: 150px;
  }
`;
