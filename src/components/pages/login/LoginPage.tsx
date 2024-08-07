import styled from "styled-components";
import LoginForm from "./LoginForm";
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
  

  .container{
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
`;
