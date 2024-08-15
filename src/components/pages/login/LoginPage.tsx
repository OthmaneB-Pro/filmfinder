import styled from "styled-components";
import LoginForm from "./loginForm/LoginForm";
import LoginImage from "./LoginImage";

export default function LoginPage() {
  return (
    <LoginPageStyle>
      <div className="container">
        <LoginImage />
        <LoginForm />
      </div>
    </LoginPageStyle>
  );
}

const LoginPageStyle = styled.div`
  height: 100vh;
  background-size: cover;
  overflow-y: hidden;
  background: linear-gradient(rgba(45, 44, 44, 0.2), rgba(45, 44, 44, 0.2)), #25a3dd;
  background-blend-mode: darken;
  background-color: #25a3dd;

  .container {
    background: white;
    width: 65%;
    height: 70vh;
    position: relative;
    margin-left: 320px;
    margin-top: 150px;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    border: 1px solid black;
    overflow: hidden;

    display: grid;
    grid-template-columns: 2fr 1fr;
  }
  @media (max-width: 1600px) {
    .container {
      margin-left: 265px;
      margin-top: 120px;
      height: 75vh;
      width: 66%;
    }
  }
`;
