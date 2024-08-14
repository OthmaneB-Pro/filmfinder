// SearchButtonPage.tsx
import { useState, useEffect } from "react";
import { searchMoviesByTitle } from "../../../../api/moviedb";
import { PopularMovieType } from "../../main/catalog/PopularMovieAndSeries";
import SearchInputButton from "./SearchInputButton";
import SearchResults from "./SearchResults"; // Importez le nouveau composant
import styled from "styled-components";

export default function SearchButtonPage() {
  const [name, setName] = useState<string>("");
  const [results, setResults] = useState<PopularMovieType[]>([]);

  useEffect(() => {
    const fetchResults = async () => {
      if (name.trim() === "") {
        setResults([]);
        return;
      }
      try {
        const searchResults = await searchMoviesByTitle(name);
        setResults(searchResults);
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
    <SearchButtonStyled>
      <SearchInputButton name={name} setName={setName} />
      <SearchResults results={results} />
    </SearchButtonStyled>
  );
}

const SearchButtonStyled = styled.div`
  margin-bottom: 199px;
`