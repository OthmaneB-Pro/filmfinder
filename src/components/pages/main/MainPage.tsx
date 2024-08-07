import styled from "styled-components"
import Logo from "../../reusable-ui/Logo"
import Navbar from "./Navbar"

export default function MainPage() {
   
  return (
    <MainPageStyled>
        <Logo className="logo"/>
        <Navbar/>
        
    </MainPageStyled>
  )
}

const MainPageStyled = styled.div`
    .logo{
        z-index: 2;
        margin-left: 100px;
    }

`
