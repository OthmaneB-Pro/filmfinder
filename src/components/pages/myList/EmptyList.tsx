import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import ButtonPrimary from "../../reusable-ui/ButtonPrimary";

export default function EmptyList() {
  const { username } = useParams();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/main/${username}`);
  };
  return (
    <EmptyListStyled>
      <span>Votre liste est vide...</span>
      <ButtonPrimary label={"Revenir à l'accueil"} onClick={handleClick} />
    </EmptyListStyled>
  );
}

const EmptyListStyled = styled.div`
  width: 800px;
  padding: 50px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
  border: 1px solid #25a3dd;
  font-size: 24px;
  margin-bottom: 204px;
  position: relative;
  left: 152%;
  span {
    margin-bottom: 10px;
  }
  @media (max-width: 1600px){
    left: 105%;
    margin-bottom: 20px;
  }

`;
