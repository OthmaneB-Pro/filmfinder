import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import HeaderForm from "./loginForm/HeaderForm";
import InputText from "../../reusable-ui/inputText";
import ButtonPrimary from "../../reusable-ui/ButtonPrimary";

export default function LoginForm() {
  const [formValues, setFormValues] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    console.log(formValues.username);
    console.log(formValues.password);

    navigate(`/Main/${formValues.username}`);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  return (
    <FormulaireStyled>
      <HeaderForm />

      <form action="submit">
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
        <ButtonPrimary label="Se connecter" onClick={handleClick} />
        <p>Pas encore connecté ? S'inscrire</p>
        <hr />
      </form>
    </FormulaireStyled>
  );
}

const FormulaireStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Open Sans";

  span {
    width: 350px;
    text-align: center;
  }
`;
