// SearchResultsCarousel.tsx
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import CardPrimary from "../../../reusable-ui/CardPrimary";
import {
  CarouselStyled,
  ScrollableContainer,
} from "../../../reusable-styles/CardPrimaryStyles";
import { PopularMovieType } from "../../main/catalog/PopularMovieAndSeries";
import { FavoriteList } from "../../../../context/UserContext";

type SearchResultsCarouselProps = {
  results: PopularMovieType[];
};

export default function SearchResults({ results }: SearchResultsCarouselProps) {
  const { username } = useParams();
  const navigate = useNavigate();
  const { onAddFavorite } = React.useContext(FavoriteList);

  return (
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
  );
}
