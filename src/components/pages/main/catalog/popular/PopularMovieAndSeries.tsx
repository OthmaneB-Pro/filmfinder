import styled from "styled-components";
import CardPrimary from "../../../../reusable-ui/CardPrimary";
import { useContext, useEffect, useState } from "react";
import { GetPopularMovie } from "../../../../../api/moviedb";
import { useNavigate } from "react-router-dom";
import { FavoriteList } from "../../../../../context/FavoriteList";

type PopularMovieType = {
  id: number;
  title: string;
  overview: string;
  release_date: string;
  poster_path: string;
};

export default function PopularMovieAndSeries() {
  const [moviePopular, setMoviePopular] = useState<PopularMovieType[]>([]);
  const navigate = useNavigate();
  const { onAddFavorite } = useContext(FavoriteList);

  useEffect(() => {
    const loadPopular = async () => {
      const populars = await GetPopularMovie();
      setMoviePopular(populars);
    };

    loadPopular();
  }, [setMoviePopular]);

  return (
    <ScrollableContainer>
      <PopularStyled>
        {moviePopular.map((popular) => (
          <CardPrimary
            key={popular.id}
            title={popular.title}
            image={popular.poster_path}
            label={popular.overview}
            date={popular.release_date}
            onClick={() => {
              navigate(`/film/${popular.id}`);
            }}
            onAddFavorite={() => onAddFavorite(popular)}
          />
        ))}
      </PopularStyled>
    </ScrollableContainer>
  );
}

const ScrollableContainer = styled.div`
  overflow-x: auto;
  scrollbar-width: none;
  display: flex;
  padding-left: 130px;
  margin-top: 50px;
  width: calc(93% - 130px);
`;

const PopularStyled = styled.div`
  margin-right: 50px;
  margin-bottom: 150px;
  display: grid;
  grid-template-columns: repeat(20, 1fr);
  grid-column-gap: -10px;
  & > div {
    flex: 0 0 calc(100% / 6);
    max-width: 300px;
  }
`;
