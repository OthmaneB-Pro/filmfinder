import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetMovieById } from "../../../../api/moviedb";
import { PopularMovieType } from "../../main/catalog/PopularMovieAndSeries";
import LoadingPage from "./LoadingPage";
import MovieDetails from "./MovieDetails";

export default function DetailsPage() {
  const { id, username } = useParams();
  const [movie, setMovie] = useState<PopularMovieType | null>(null);

  useEffect(() => {
    const loader = async () => {
      const isGood = await GetMovieById(id as string);
      setMovie(isGood);
    };
    loader();
  }, [id]);

  return (
    <div>
      {movie ? (
        <MovieDetails movie={movie} username={username} />
      ) : (
        <LoadingPage />
      )}
    </div>
  );
}
