import { PropsWithChildren } from "react";
import { FavoriteList } from "../context/UserContext";
import { useMoviesAndSeries } from "../hooks/useMoviesAndSeries";

const AppContent: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const {
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
  } = useMoviesAndSeries();

  const FavoriteListValue = {
    isFavorite,
    setIsFavorite,
    onAddFavorite,
    username,
    setUsername,
    onDeleteFavorite,
    movieGenre,
    setMovieGenre,
    page,
    setPage,
  };

  return (
    <FavoriteList.Provider value={FavoriteListValue}>
      {children}
    </FavoriteList.Provider>
  );
};

export default AppContent;
