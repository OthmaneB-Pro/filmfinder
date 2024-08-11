import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import HeaderForm from "./HeaderForm";
import InputText from "../../../reusable-ui/inputText";
import ButtonPrimary from "../../../reusable-ui/ButtonPrimary";
import FooterForm from "./FooterForm";
import { authenticateUser } from "../../../../api/user";

export default function LoginForm() {
  const [formValues, setFormValues] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleClick = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    await authenticateUser(formValues.username, formValues.password)
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
`;
