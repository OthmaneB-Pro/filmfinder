import styled from 'styled-components'
import LoginForm from './LoginForm'
import LoginImage from './LoginImage'

export default function LoginPage() {
  return (
    <LoginPageStyle>
        <LoginImage/>
        <LoginForm/>
    </LoginPageStyle>
  )
}

const LoginPageStyle = styled.div`
    background: red;
`