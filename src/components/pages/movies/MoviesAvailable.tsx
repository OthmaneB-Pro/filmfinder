import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CardPrimary from "../../reusable-ui/CardPrimary";
import { GetAvailableMovie } from "../../../api/moviedb";
import ButtonPrimary from "../../reusable-ui/ButtonPrimary";
import { MoviesPageContext } from "../../../context/MoviesPageContext";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import { FavoriteList } from "../../../context/FavoriteList";

export type MovieAvailableType = {
  id: number;
  title: string;
  overview: string;
  release_date: string;
  poster_path: string;
};

export default function MoviesAvailable() {
  const [movieAvailable, setMovieAvailable] = useState<MovieAvailableType[]>(
    []
  );
  const { page, setPage } = useContext(MoviesPageContext);
  const { onAddFavorite } = useContext(FavoriteList);
  const navigate = useNavigate();

  useEffect(() => {
    const loadPopular = async () => {
      const availables = await GetAvailableMovie(page);
      setMovieAvailable(availables);
    };

    loadPopular();
  }, [page]);

  return (
    <AvailableStyled>
      {movieAvailable.map((available) => (
        <CardPrimary
          key={available.id}
          title={available.title}
          image={available.poster_path}
          label={available.overview}
          date={available.release_date}
          onClick={() => {
            navigate(`/${available.id}`);
          }}
          onAddFavorite={() => onAddFavorite(available)}
        />
      ))}
      <ButtonPrimary
        label={<FaArrowCircleLeft />}
        onClick={() => {
          {
            page === 1 ? setPage(page) : setPage(page - 1);
          }
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className="button-next-page"
      />

      <ButtonPrimary
        label={
          <>
            Page Suivante <FaArrowCircleRight />
          </>
        }
        onClick={() => {
          setPage(page + 1);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className="button-next-page"
      />
    </AvailableStyled>
  );
}

const AvailableStyled = styled.div`
  margin-left: 60px;
  margin-right: 50px;
  margin-bottom: 150px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  .button-next-page {
    width: 180px;
    margin-left: 40px;
    margin-top: 20px;
  }
  @media (max-width: 1400px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
