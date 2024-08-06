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
  background: #2996d9;
  height: 100vh;
  background-size: cover;
  overflow-y: hidden;
  

  .container{
    background: white;
    width: 65%;
    height: 70vh;
    position: relative;
    margin-left: 300px;
    margin-top: 150px;
    border-radius: 15px;
    overflow: hidden;

    display: grid;
    grid-template-columns: 2fr 1fr;
  }
`;
