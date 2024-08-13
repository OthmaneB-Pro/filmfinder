import { PropsWithChildren, useState } from "react";

import { FavoriteList } from "../context/FavoriteList";
import { MovieAvailableType } from "./pages/movies/MoviesAvailable";
import { deleteList, saveList } from "../api/list";

const AppContent: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const [username, setUsername] = useState("");
  const [isFavorite, setIsFavorite] = useState<MovieAvailableType[]>([]);

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

  const FavoriteListValue = {
    isFavorite,
    setIsFavorite,
    onAddFavorite,
    username,
    setUsername,
    onDeleteFavorite,
  };

  return (
    <FavoriteList.Provider value={FavoriteListValue}>
      {children}
    </FavoriteList.Provider>
  );
};

export default AppContent;
