import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GetMoviesByGenre } from "../../../api/moviedb";
import { PopularMovieType } from "../main/catalog/PopularMovieAndSeries";
import CardPrimary from "../../reusable-ui/CardPrimary";
import {
  CarouselStyled,
  ScrollableContainer,
} from "../../reusable-styles/CardPrimaryStyles";
import { FavoriteList } from "../../../context/UserContext";

export default function GenresCards() {
  const { genre, username } = useParams();
  const {onAddFavorite} = useContext(FavoriteList)
  const navigate = useNavigate()
  const [genreMovie, setGenreMovie] = useState<PopularMovieType[]>([]);

  useEffect(() => {
    const loadGenre = async () => {
      const genres = await GetMoviesByGenre(genre as string);
      setGenreMovie(genres);
    };

    loadGenre();
  }, [setGenreMovie]);

  return (
    <ScrollableContainer>
      <CarouselStyled>
        {genreMovie.map((genre) => (
          <CardPrimary
            key={genre.id}
            title={genre.title}
            image={genre.poster_path}
            label={genre.overview}
            date={genre.release_date}
            onClick={() => {navigate(`/details/${username}/${genre.id}`)}}
            onFavorite={() => {onAddFavorite(genre)}}
          />
        ))}
      </CarouselStyled>
    </ScrollableContainer>
  );
}
