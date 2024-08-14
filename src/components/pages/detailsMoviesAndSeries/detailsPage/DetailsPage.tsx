import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiKey } from "../../../../api/moviedb";
import { PopularMovieType } from "../../main/catalog/PopularMovieAndSeries";
import styled from "styled-components";
import { NumberFloat } from "../../../../utils/math";
import LoadingPage from "./LoadingPage";

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
        console.log(movie)
      } catch (error) {
        console.error(error);
      }
    };
    fetchMovieById();
  }, [id]);

  return (
    <div>
      {movie ? (
        <DetailsStyled>
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={`Affiche du film : ${movie.title}`}
            />
          </div>
          <div>
            <h1>{movie.title}</h1>
            <h4>Date de sortie : {movie.release_date}</h4>
            <h4>Status : {movie.status}</h4>
            <p><strong>Résumé :</strong><br/>{movie.overview}</p>
            <h4>Note : {NumberFloat(movie.vote_average)}/10</h4>
            <h4>Nombre de vote : {movie.vote_count}</h4>
          </div>
        </DetailsStyled>
      ) : (
        <LoadingPage/>
      )}
    </div>
  );
}

const DetailsStyled = styled.div`
  margin-left: 30px;
  margin-bottom: 50px;
  display: grid;
  grid-template-columns: 1fr 3fr;
  img {
    width: 300px;
  }
  p{
    width: 750px;
    text-align: justify;
  }
`;
