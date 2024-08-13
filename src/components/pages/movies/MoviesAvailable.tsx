import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CardPrimary from "../../reusable-ui/CardPrimary";
import { GetAvailableMovie } from "../../../api/moviedb";
import { MoviesPageContext } from "../../../context/MoviesPageContext";
import { FavoriteList } from "../../../context/FavoriteList";
import ButtonNextAndPrevious from "./ButtonNextAndPrevious";

export type MovieAvailableType = {
  id: number;
  title: string;
  overview: string;
  release_date: string;
  poster_path: string;
};

export default function MoviesAvailable() {
  const [movieAvailable, setMovieAvailable] = useState<MovieAvailableType[]>(
    []
  );
  const { page } = useContext(MoviesPageContext);
  const { onAddFavorite } = useContext(FavoriteList);
  const navigate = useNavigate();

  useEffect(() => {
    const loadPopular = async () => {
      const availables = await GetAvailableMovie(page);
      setMovieAvailable(availables);
    };

    loadPopular();
  }, [page]);

  return (
    <AvailableStyled>
      {movieAvailable.map((available) => (
        <CardPrimary
          key={available.id}
          title={available.title}
          image={available.poster_path}
          label={available.overview}
          date={available.release_date}
          onClick={() => {
            navigate(`/${available.id}`);
          }}
          onFavorite={() => onAddFavorite(available)}
        />
      ))}
      <ButtonNextAndPrevious />
    </AvailableStyled>
  );
}

const AvailableStyled = styled.div`
  margin-left: 60px;
  margin-right: 50px;
  margin-bottom: 150px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 1400px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
