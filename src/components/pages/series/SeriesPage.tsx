import HeaderSeries from "./header/HeaderSeries";
import SeriesAvailable from "./SeriesAvailable";
import styled from "styled-components";
import FooterMainPage from "../../reusable-ui/FooterPage";

export default function SeriesPage() {
  return (
      <SeriesPageStyled>
        <HeaderSeries />
        <SeriesAvailable />
        <FooterMainPage />
      </SeriesPageStyled>
  );
}

const SeriesPageStyled = styled.div`
  background: #f5f5f7;
`;
