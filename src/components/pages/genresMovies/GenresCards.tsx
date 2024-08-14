import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetMoviesByGenre } from "../../../api/moviedb";
import { PopularMovieType } from "../main/catalog/PopularMovieAndSeries";
import CardPrimary from "../../reusable-ui/CardPrimary";

export default function GenresCards() {
  const { genre } = useParams();
  const [genreMovie, setGenreMovie] = useState<PopularMovieType[]>([]);

  useEffect(() => {
    const loadPopular = async () => {
      const populars = await GetMoviesByGenre(genre as string);
      setGenreMovie(populars);
    };

    loadPopular();
  }, [setGenreMovie]);
  return (
    <div>
      {genreMovie.map((genre) => (
        <CardPrimary
          key={genre.id}
          title={genre.title}
          image={genre.poster_path}
          label={genre.overview}
          date={genre.release_date}
          onClick={() => {}}
          onFavorite={() => {}}
        />
      ))}
    </div>
  );
}
