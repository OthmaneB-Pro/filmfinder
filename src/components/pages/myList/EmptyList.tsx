import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import ButtonPrimary from "../../reusable-ui/ButtonPrimary";

export default function EmptyList() {
  const { username } = useParams();
  const navigate = useNavigate();

  return (
    <EmptyListStyled>
      <span>Votre liste est vide...</span>
      <ButtonPrimary label={"Revenir à l'accueil"} onClick={() =>  navigate(`/main/${username}`)} />
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
  margin-bottom: 85px;
  position: relative;
  left: 152%;
  span {
    margin-bottom: 10px;
  }
  @media (max-width: 1600px) {
    left: 105%;
    margin-bottom: 20px;
  }
`;
