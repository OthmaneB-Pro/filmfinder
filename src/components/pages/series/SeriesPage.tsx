import { useState } from "react";
import HeaderSeries from "./header/HeaderSeries";
import SeriesAvailable from "./SeriesAvailable";
import { SeriesPageContext } from "../../../context/SeriesPageContext";
import styled from "styled-components";
import FooterMainPage from "../../reusable-ui/FooterPage";

export default function SeriesPage() {
  const [page, setPage] = useState(1);

  const seriesContextValue = {
    page,
    setPage,
  };

  return (
    <SeriesPageContext.Provider value={seriesContextValue}>
      <SeriesPageStyled>
        <HeaderSeries />
        <SeriesAvailable />
        <FooterMainPage />
      </SeriesPageStyled>
    </SeriesPageContext.Provider>
  );
}

const SeriesPageStyled = styled.div`
  background: #f5f5f7;
`;
