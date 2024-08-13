import styled from "styled-components";
import FooterMainPage from "../../reusable-ui/FooterPage";
import HeaderMain from "./header/HeaderMain";
import CatalogMain from "./catalog/CatalogMain";

export default function MainPage() { 

  return (
      <MainPageStyled>
        <HeaderMain />
        <CatalogMain />
        <FooterMainPage />
      </MainPageStyled>
  );
}

const MainPageStyled = styled.div`
  background: #f5f5f7;
`;
