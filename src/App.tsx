import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./components/pages/login/LoginPage";
import Error from "./components/pages/error/error";
import MainPage from "./components/pages/main/MainPage";
import MoviesPage from "./components/pages/movies/MoviesPage";
import SeriesPage from "./components/pages/series/SeriesPage";
import MyList from "./components/pages/myList/MyList";
import { useState } from "react";
import { FavoriteList } from "./context/FavoriteList";
import { MovieAvailableType } from "./components/pages/movies/MoviesAvailable";

function App() {
  const [isFavorite, setIsFavorite] = useState<MovieAvailableType[]>([]);

  const onAddFavorite = (item: MovieAvailableType) => {
    setIsFavorite((prevFavorites) => [...prevFavorites, item]);
  }


  
  const FavoriteListValue = {
    isFavorite,
    setIsFavorite,
    onAddFavorite,
  };
  

  return (
    <FavoriteList.Provider value={FavoriteListValue}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="*" element={<Error />} />
          <Route path="/main/:username" element={<MainPage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/series" element={<SeriesPage />} />
          <Route path="/myList" element={<MyList />} />
        </Routes>
      </BrowserRouter>
    </FavoriteList.Provider>
  );
}

export default App;
