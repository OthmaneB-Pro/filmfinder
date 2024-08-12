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

  useEffect(() => {
    if (username) {
      const fetchFavorites = async () => {
        const listReceived = await getList(username);
        setIsFavorite(listReceived);
        console.log("listReceived", listReceived);
      };
      fetchFavorites();
    }
  }, [username]);

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
