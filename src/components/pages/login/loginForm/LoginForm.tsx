import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import HeaderForm from "./HeaderForm";
import InputText from "../../../reusable-ui/InputText";
import ButtonPrimary from "../../../reusable-ui/ButtonPrimary";
import FooterForm from "./FooterForm";
import { authenticateUser } from "../../../../api/user";
import { FavoriteList } from "../../../../context/UserContext";

export default function LoginForm() {
  const [formValues, setFormValues] = useState({
    username: "",
    password: "",
  });
  const { setUsername } = useContext(FavoriteList);
  const navigate = useNavigate();

  const handleClick = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    await authenticateUser(formValues.username, formValues.password);
    setUsername(formValues.username);
    navigate(`/main/${formValues.username}`);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  return (
    <FormulaireStyled>
      <HeaderForm />

      <form onSubmit={handleClick}>
        <InputText
          type="text"
          value={formValues.username}
          name="username"
          placeholder="Nom"
          onChange={handleChange}
          required
        />
        <InputText
          type="password"
          value={formValues.password}
          name="password"
          placeholder="Mot de passe"
          onChange={handleChange}
          required
        />
        <ButtonPrimary label="Se connecter" onClick={() => {}} />
        <FooterForm />
      </form>
    </FormulaireStyled>
  );
}

const FormulaireStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Open Sans";
  @media (max-width: 1600px) {
    margin-right: 15px;
  }
`;
