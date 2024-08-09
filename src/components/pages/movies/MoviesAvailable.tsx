import styled from "styled-components";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CardPrimary from "../../reusable-ui/CardPrimary";
import { GetAvailableMovie } from "../../../api/moviedb";
import ButtonPrimary from "../../reusable-ui/ButtonPrimary";

type MovieAvailableType = {
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
  const navigate = useNavigate();

  useEffect(() => {
    const loadPopular = async () => {
      const availables = await GetAvailableMovie();
      setMovieAvailable(availables);
    };

    loadPopular();
  }, [setMovieAvailable]);

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
            navigate(`/film/${available.id}`);
          }}
        />
      ))}
      <ButtonPrimary label="Page Suivante ->" onClick={() => {}} className="" / >
    </AvailableStyled>
  );
}

const AvailableStyled = styled.div`
  margin-left: 60px;
  margin-right: 50px;
  margin-bottom: 150px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: -10px;
`;
