import styled from "styled-components";
import CardCategories from "./CardCategories";
import axios from "axios";
import { useEffect, useState } from "react";
import { apiKey } from "../../../../../api/moviedb";
import { genreImages } from "../../../../../data/genreImages";

type GenreType = {
  id: number;
  name: string;
  image: string;
};

export default function Categories() {
  const [movieGenre, setMovieGenre] = useState<GenreType[]>([]);

  useEffect(() => {
    axios
      .get("https://api.themoviedb.org/3/genre/movie/list?language=fr", {
        params: {
          api_key: apiKey,
        },
      })
      .then((res) => {
        const genresWithImages = res.data.genres.map((genre: GenreType) => ({
          ...genre,
          image: genreImages[genre.name],
        }));
        setMovieGenre(genresWithImages);
      })
      .catch((err) => {
        console.error("Erreur dans la recuperation du genre des films", err);
      });
  }, []);
  return (
    <ScrollableContainer>
      <CategoriesStyled>
        {movieGenre.map((genre) => (
          <CardCategories
            key={genre.id}
            label={genre.name}
            image={genre.image}
            href={`/genre/${genre.name}`}
          />
        ))}
      </CategoriesStyled>
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

const CategoriesStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(19, 1fr);
  grid-gap: 10px;
  min-width: 600px; 
  
  & > div {
    flex: 0 0 calc(100% / 6); 
    max-width: 200px; 
  }
`;