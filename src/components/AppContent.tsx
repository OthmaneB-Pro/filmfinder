import { PropsWithChildren, useEffect, useState } from "react";

import { FavoriteList } from "../context/FavoriteList";
import { MovieAvailableType } from "./pages/movies/MoviesAvailable";
import { getList, saveList } from "../api/list";

const AppContent: React.FC<PropsWithChildren<{}>> = ({ children }) => {
const [username, setUsername] = useState("")  
const [isFavorite, setIsFavorite] = useState<MovieAvailableType[]>([]);

  const onAddFavorite = async (item: MovieAvailableType) => {
    const updatedFavorites = [...isFavorite, item];
    setIsFavorite(updatedFavorites);
    if (username) {
      await saveList(username, updatedFavorites);
    }
  };

  

  const FavoriteListValue = {
    isFavorite,
    setIsFavorite,
    onAddFavorite,
    username,
    setUsername,
  };

  return (
    <FavoriteList.Provider value={FavoriteListValue}>
      {children}
    </FavoriteList.Provider>
  );
};

export default AppContent;
