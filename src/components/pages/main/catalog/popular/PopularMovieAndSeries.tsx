import styled from "styled-components";
import CardPrimary from "./CardPrimary";
import { useEffect, useState } from "react";
import { GetPopularMovie } from "../../../../../api/moviedb";

type PopularMovieType = {
  id : number;
  title : string;
  overview : string;
  release : string;

}

export default function PopularMovieAndSeries() {
  const [moviePopular, setMoviePopular] = useState<PopularMovieType[]>([])

  useEffect(() => {
    const loadPopular = async () => {
      try {
        const populars = await GetPopularMovie();
        setMoviePopular(populars);
      } catch (err) {
        console.error("Erreur lors du chargement des films et séries populaires", err);
      }
    };

    loadPopular();
  }, [setMoviePopular]);

  return (
    <PopularStyled>
      {moviePopular.map((popular) => (
        <CardPrimary key={popular.id} title={popular.title} label={popular.overview} date={popular.release} />
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
