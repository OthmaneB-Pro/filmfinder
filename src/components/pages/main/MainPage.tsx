import styled from "styled-components";
import FooterMainPage from "./footer/FooterMainPage";
import HeaderMain from "./header/HeaderMain";
import CatalogMain from "./catalog/CatalogMain";

export default function MainPage() {
  return (
    <MainPageStyled>
      <HeaderMain />
      <CatalogMain/>
      <FooterMainPage />
    </MainPageStyled>
  );
}

const MainPageStyled = styled.div`
  
`;
