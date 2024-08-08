import styled from "styled-components";
import Categories from "./Categories";
import PopularMovieAndSeries from "./PopularMovieAndSeries";
import FooterMainPage from "./FooterMainPage";
import TitleTextWithDivider from "../../reusable-ui/TitleTextWithDivider";
import HeaderMain from "./header/HeaderMain";

export default function MainPage() {
  return (
    <MainPageStyled>
      <HeaderMain />
      <TitleTextWithDivider label="- Catégories de Films -" />
      <Categories />
      <TitleTextWithDivider
        className="popular-movies-and-series"
        label="- Films et Séries Populaire -"
      />
      <PopularMovieAndSeries />
      <FooterMainPage />
    </MainPageStyled>
  );
}

const MainPageStyled = styled.div`
  .popular-movies-and-series {
    margin-top: 150px;
  }
`;
