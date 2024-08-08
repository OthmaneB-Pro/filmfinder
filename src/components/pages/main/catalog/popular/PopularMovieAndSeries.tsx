import styled from "styled-components";
import CardPrimary from "./CardPrimary";
import { useEffect, useState } from "react";
import { GetPopularMovie } from "../../../../../api/moviedb";

type PopularMovieType = {
  id: number;
  title: string;
  overview: string;
  release_date: string;
  poster_path: string;
};

export default function PopularMovieAndSeries() {
  const [moviePopular, setMoviePopular] = useState<PopularMovieType[]>([]);

  useEffect(() => {
    const loadPopular = async () => {
      try {
        const populars = await GetPopularMovie();
        setMoviePopular(populars);
      } catch (err) {
        console.error(
          "Erreur lors du chargement des films et séries populaires",
          err
        );
      }
    };

    loadPopular();
  }, [setMoviePopular]);

  return (
    <PopularStyled>
      {moviePopular.map((popular) => (
        <CardPrimary
          key={popular.id}
          title={popular.title}
          image={popular.poster_path}
          label={popular.overview}
          date={popular.release_date}
        />
      ))}
    </PopularStyled>
  );
}

const PopularStyled = styled.div`
  margin-left: 60px;
  margin-right: 50px;
  margin-bottom: 150px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: -10px;
`;
