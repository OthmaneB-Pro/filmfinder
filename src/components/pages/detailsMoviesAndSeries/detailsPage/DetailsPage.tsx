import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiKey } from "../../../../api/moviedb";
import { PopularMovieType } from "../../main/catalog/PopularMovieAndSeries";

export default function DetailsPage() {
  const { id } = useParams();
  const [movie, setMovie] = useState<PopularMovieType | null>(null);

  useEffect(() => {
    const fetchMovieById = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}`,
          {
            params: {
              api_key: apiKey,
              language: "fr-FR",
            },
          }
        );
        setMovie(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMovieById();
  }, [id]);

  return (
    <div> 
      {movie ? (
      <div>
        <h1>{movie.title}</h1>
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
        <p>{movie.overview}</p>
        <h4>{movie.release_date}</h4>
        
      </div>
      ) : "Chargement... Faire un Composant après"}</div>
  );
}
