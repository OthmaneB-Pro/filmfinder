import styled from "styled-components";
import CardCategories from "../../../reusable-ui/CardCategories";
import { useContext, useEffect } from "react";
import { GetGenreMovie } from "../../../../api/moviedb";
import { FavoriteList } from "../../../../context/UserContext";
import { useParams } from "react-router-dom";

export type GenreType = {
  id: number;
  name: string;
  image: string;
};

export default function Categories() {
  const { movieGenre, setMovieGenre } = useContext(FavoriteList);
  const {username} = useParams()

  useEffect(() => {
    const loadGenres = async () => {
      try {
        const genres = await GetGenreMovie();
        setMovieGenre(genres);
      } catch (err) {
        console.error("Erreur lors du chargement des genres", err);
      }
    };

    loadGenres();
  }, [setMovieGenre]);
  return (
    <ScrollableContainer>
      <CategoriesStyled>
        {movieGenre.map((genre) => (
          <CardCategories
            key={genre.id}
            label={genre.name}
            image={genre.image}
            href={`/genres/${genre.id}/${username}`}
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
