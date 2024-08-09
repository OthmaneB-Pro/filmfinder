import { useState } from "react";
import HeaderSeries from "./header/HeaderSeries";
import SeriesAvailable from "./SeriesAvailable";
import { SeriesPageContext } from "../../../context/SeriesPageContext";

export default function SeriesPage() {
  const [page, setPage] = useState(1);

  const seriesContextValue = {
    page,
    setPage,
  };

  return (
    <SeriesPageContext.Provider value={seriesContextValue}>
      <div>
        <HeaderSeries />
        <SeriesAvailable />
      </div>
    </SeriesPageContext.Provider>
  );
}
