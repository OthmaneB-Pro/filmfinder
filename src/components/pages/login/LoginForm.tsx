import { useState } from "react";
import styled from "styled-components";

export default function LoginForm() {
  const [formValues, setFormValues] = useState({
    username: "",
    password: "",
  });

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    console.log(formValues.username);
    console.log(formValues.password);
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  return (
    <FormulaireStyled>
      <h1>Bienvenue chez FilmFinder</h1>
      <hr />
      <h1>Se connecter</h1>
      <hr />
      <form action="submit">
        <input
          type="text"
          value={formValues.username}
          name="username"
          placeholder="Nom"
          onChange={handleChange}
          required
        ></input>

        <input
          type="password"
          value={formValues.password}
          name="password"
          placeholder="Mot de passe"
          onChange={handleChange}
          required
        />
        <button onClick={handleClick}>Se Connecter</button>
        <p>Pas encore connecté ? S'inscrire</p>
        <hr/>
      </form>

      <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel
          arcu venenatis, ultrices libero eget, tincidunt erat. Quisque
          scelerisque dui at magna volutpat, in sollicitudin mi vehicula. Nullam
          vehicula lectus at lacus venenatis, et venenatis est accumsan.
        </span>
    </FormulaireStyled>
  );
}

const FormulaireStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Open Sans";
  h1 {
    padding: 10px;
    border-radius: 5px;
  }
  hr {
    width: 250px;
    margin-bottom: 30px;
  }
  input {
    display: flex;
    margin-bottom: 30px;
    padding: 10px;
    width: 310px;
    border-radius: 5px;
  }
  button {
    padding: 10px;
    width: 335px;
    border-radius: 5px;
    background: #2996d9;
    border-color: #2996d9;
    color: white;
    cursor: pointer;

    &:hover {
      background-color: white;
      color: #2996d9;
      transition: 0.5s;
    }
    
  }
  span{
      width: 350px;
      text-align: center;
    }
`;
