import CardPrimary from "../../../reusable-ui/CardPrimary";
import { useContext, useEffect, useState } from "react";
import { GetPopularMovie } from "../../../../api/moviedb";
import { useNavigate, useParams } from "react-router-dom";
import { FavoriteList } from "../../../../context/UserContext";
import {
  CarouselStyled,
  ScrollableContainer,
} from "../../../reusable-styles/CardPrimaryStyles";

export type PopularMovieType = {
  id: number;
  title: string;
  overview: string;
  release_date: string;
  poster_path: string;
  status: string;
  vote_average: number;
  vote_count: number;
  genres : string;
};

export default function PopularMovieAndSeries() {
  const [moviePopular, setMoviePopular] = useState<PopularMovieType[]>([]);
  const navigate = useNavigate();
  const {username} = useParams()
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
      <CarouselStyled>
        {moviePopular.map((popular) => (
          <CardPrimary
            key={popular.id}
            title={popular.title}
            image={popular.poster_path}
            label={popular.overview}
            date={popular.release_date}
            onClick={() => {
              navigate(`/details/${username}/${popular.id}`);
            }}
            onFavorite={() => onAddFavorite(popular)}
          />
        ))}
      </CarouselStyled>
    </ScrollableContainer>
  );
}
