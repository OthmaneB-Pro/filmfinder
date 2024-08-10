import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CardPrimary from "../../reusable-ui/CardPrimary";
import { GetAvailableSerie } from "../../../api/moviedb";
import ButtonPrimary from "../../reusable-ui/ButtonPrimary";
import { SeriesPageContext } from "../../../context/SeriesPageContext";
import { FavoriteList } from "../../../context/FavoriteList";

type SerieAvailableType = {
  id: number;
  original_name: string;
  overview: string;
  first_air_date: string;
  poster_path: string;
};

export default function SeriesAvailable() {
  const [serieAvailable, setSerieAvailable] = useState<SerieAvailableType[]>(
    []
  );
  const { page, setPage } = useContext(SeriesPageContext);
  const navigate = useNavigate();

  useEffect(() => {
    const loadPopular = async () => {
      const availables = await GetAvailableSerie(page);
      setSerieAvailable(availables);
    };

    loadPopular();
  }, [page]);

  return (
    <AvailableStyled>
      {serieAvailable.map((available) => (
        <CardPrimary
          key={available.id}
          title={available.original_name}
          image={available.poster_path}
          label={available.overview}
          date={available.first_air_date}
          onClick={() => {
            navigate(`/film/${available.id}`);
          }}
          onAddFavorite={() => {}}
        />
      ))}

      <ButtonPrimary
        label="Page Suivante ->"
        onClick={() => {
          setPage(page + 1);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className="button-page"
      />
    </AvailableStyled>
  );
}

const AvailableStyled = styled.div`
  margin-left: 60px;
  margin-right: 50px;
  margin-bottom: 150px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  .button-page {
    width: 180px;
    margin-left: 40px;
    margin-top: 20px;
  }
  @media (max-width: 1400px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
