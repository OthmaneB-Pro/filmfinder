// hooks/useFavorites.ts
import { useState, useEffect } from "react";
import { MovieAvailableType } from "../components/pages/movies/MoviesAvailable";
import { saveList, getList } from "../api/list";

export function useFavorites(username: string) {
  const [isFavorite, setIsFavorite] = useState<MovieAvailableType[]>([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      if (username) {
        const listReceived = await getList(username);
        setIsFavorite(listReceived);
      }
    };
    fetchFavorites();
  }, [username]);

  const onAddFavorite = async (item: MovieAvailableType) => {
    const updatedFavorites = [...isFavorite, item];
    setIsFavorite(updatedFavorites);
    await saveList(username, updatedFavorites);
  };

  return {
    isFavorite,
    onAddFavorite,
    setIsFavorite,
  };
}
