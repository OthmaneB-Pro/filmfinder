import styled from "styled-components";
import CardCategories from "./CardCategories";
import axios from "axios";
import { useEffect, useState } from "react";
import { apiKey } from "../../../../../api/moviedb";

type GenreType = {
  id: number;
  name : string;
  image: string;
}

export default function Categories() {
  const [movieGenre, setMovieGenre] = useState<GenreType[]>([])

  useEffect(() => {
  axios.get("https://api.themoviedb.org/3/genre/movie/list?language=fr", {
    params: {
      api_key: apiKey,
    }
  })
    .then(res => {
      setMovieGenre(res.data.genres)
    })
    .catch(err => {
      console.error("Erreur dans la recuperation du genre des films", err)
    })
  }, [])
  return (
    <CategoriesStyled>
      {movieGenre.map((genre) => (
        <CardCategories key={genre.id} label={genre.name}/>
      ))}
    </CategoriesStyled>
  );
}

const CategoriesStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  margin-left: 130px;
  margin-top: 50px;
`;
