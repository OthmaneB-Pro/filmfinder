import styled from "styled-components"
import Logo from "../../reusable-ui/Logo"
import Navbar from "./Navbar"
import Banner from "./Banner"
import CardCategories from "./CardCategories"

export default function MainPage() {
   
  return (
    <MainPageStyled>
        <Logo className="logo"/>
        <Navbar/>
        <p>- Découvrez vos films et series préférées -</p>
        <Banner/>
        <p>- Catégories de Films -</p>
        <CardCategories/>
    </MainPageStyled>
  )
}

const MainPageStyled = styled.div`
    .logo{
        z-index: 2;
        margin-left: 100px;
    }
    p{
        font-size: 30px;
        color: #25a3dd;
        font-family: 'Arial AC';
        display: flex;
        justify-content: center;
    }

`
