import { useState, useEffect, useContext } from "react";
import { searchMoviesByTitle } from "../../../../api/moviedb"; // Assurez-vous que le chemin est correct
import { PopularMovieType } from "../../main/catalog/PopularMovieAndSeries";
import CardPrimary from "../../../reusable-ui/CardPrimary";
import {
  CarouselStyled,
  ScrollableContainer,
} from "../../../reusable-styles/CardPrimaryStyles";
import { useNavigate, useParams } from "react-router-dom";
import { FavoriteList } from "../../../../context/UserContext";
import SearchInputButton from "./SearchInputButton";

export default function SearchButtonPage() {
  const { username } = useParams();
  const { onAddFavorite } = useContext(FavoriteList);
  const [name, setName] = useState<string>("");
  const [results, setResults] = useState<PopularMovieType[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchResults = async () => {
      if (name.trim() === "") {
        setResults([]);
        return;
      }

      try {
        const searchResults = await searchMoviesByTitle(name);
        setResults(searchResults);
        console.log(results);
      } catch (error) {
        console.error("Search failed:", error);
      }
    };

    const debounce = setTimeout(() => {
      fetchResults();
    }, 500);

    return () => clearTimeout(debounce);
  }, [name]);

  return (
    <div>
      <SearchInputButton name={name} setName={setName} /> 

      <ScrollableContainer>
        <CarouselStyled>
          {results.map((movie) => (
            <CardPrimary
              key={movie.id}
              title={movie.title}
              image={movie.poster_path}
              label={movie.overview}
              date={movie.release_date}
              onClick={() => {
                navigate(`/details/${username}/${movie.id}`);
              }}
              onFavorite={() => {
                onAddFavorite(movie);
              }}
            />
          ))}
        </CarouselStyled>
      </ScrollableContainer>
    </div>
  );
}
