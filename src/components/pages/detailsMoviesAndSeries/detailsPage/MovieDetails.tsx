import styled from "styled-components";
import { PopularMovieType } from "../../main/catalog/PopularMovieAndSeries";
import { NumberFloat } from "../../../../utils/math";
import ButtonPrimary from "../../../reusable-ui/ButtonPrimary";
import { useNavigate } from "react-router-dom";

type MovieDetailsProps = {
  movie: PopularMovieType;
  username?: string;
};

export default function MovieDetails({ movie, username }: MovieDetailsProps) {
  const navigate = useNavigate();

  return (
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
        <h4>
          Status :
          {movie.status === "Released" ? "Disponible" : "Pas encore disponible"}
        </h4>
        <p>
          <strong>Résumé :</strong>
          <br />
          {movie.overview}
        </p>
        <h4>Note : {NumberFloat(movie.vote_average)}/10</h4>
        <h4>Nombre de vote : {movie.vote_count}</h4>
        <ButtonPrimary
          label={"Revenir à l'accueil"}
          onClick={() => navigate(`/main/${username}`)}
        />
      </div>
    </DetailsStyled>
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
  p {
    width: 750px;
    text-align: justify;
  }
`;
