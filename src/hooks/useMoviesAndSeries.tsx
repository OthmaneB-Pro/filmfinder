import { useState } from "react";
import { MovieAvailableType } from "../components/pages/movies/MoviesAvailable";
import { GenreType } from "../components/pages/main/catalog/categories/Categories";
import { deleteList, saveList } from "../api/list";

export const useMoviesAndSeries = () => {
  const [username, setUsername] = useState("");
  const [isFavorite, setIsFavorite] = useState<MovieAvailableType[]>([]);
  const [movieGenre, setMovieGenre] = useState<GenreType[]>([]);
  const [page, setPage] = useState(1);

  const onAddFavorite = async (item: MovieAvailableType) => {
    const updatedFavorites = [...isFavorite, item];
    setIsFavorite(updatedFavorites);
    if (username) {
      await saveList(username, updatedFavorites);
    }
  };
  const onDeleteFavorite = async (idProduct: number) => {
    const deleteFavorites = isFavorite.filter(
      (product) => product.id !== idProduct
    );
    setIsFavorite(deleteFavorites);

    if (username) {
      await deleteList(username, deleteFavorites);
    }
  };
  return {
    username,
    setUsername,
    isFavorite,
    setIsFavorite,
    movieGenre,
    setMovieGenre,
    page,
    setPage,
    onAddFavorite,
    onDeleteFavorite,
  };
};
