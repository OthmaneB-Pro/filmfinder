import styled from "styled-components";
import TitleTextWithDivider from "../../../reusable-ui/TitleTextWithDivider";
import Categories from "./Categories";
import PopularMovieAndSeries from "./PopularMovieAndSeries";

export default function CatalogMain() {
  return (
    <CatalogStyled>
      <TitleTextWithDivider label="- Catégories de Films -" />
      <Categories />
      <TitleTextWithDivider
        className="popular-movies-and-series"
        label="- Films et Séries Populaires -"
      />
      <PopularMovieAndSeries />
    </CatalogStyled>
  );
}

const CatalogStyled = styled.div`
  .popular-movies-and-series {
    margin-top: 150px;
  }
`;
