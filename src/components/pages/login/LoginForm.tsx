import { useState } from "react";

export default function LoginForm() {
const [formValues, setFormValues] = useState({
  username: '',
  password: '',
})

  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    console.log(formValues.username)
    console.log(formValues.password)
  }
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const {name, value} = event.target

      setFormValues((prevValues) => ({...prevValues, [name]: value}))
  }


  return (
    <div>
      <h2>Bienvenue chez FilmFinder</h2>
      <h3>Se connecter</h3>
      <form action="submit">
        <input type="text" value={formValues.username} name="username" placeholder="Nom" onChange={handleChange}/>
        <input type="password" value={formValues.password} name="password" placeholder="Mot de passe" onChange={handleChange}/>
        <button onClick={handleClick}>Se Connecter</button>
        <p>Pas encore connecter ? S'inscrire</p>
      </form>
    </div>
  );
}
