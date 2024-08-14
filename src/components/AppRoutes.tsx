import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login/LoginPage";
import Error from "./pages/error/error";
import MainPage from "./pages/main/MainPage";
import MoviesPage from "./pages/movies/MoviesPage";
import SeriesPage from "./pages/series/SeriesPage";
import MyList from "./pages/myList/MyList";
import DetailsMain from "./pages/detailsMoviesAndSeries/DetailsMain";
import GenresMoviesPage from "./pages/genresMovies/GenresMoviesPage";
import SearchMain from "./pages/searchButton/SearchMain";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="*" element={<Error />} />
      <Route path="/main/:username" element={<MainPage />} />
      <Route path="/movies/:username" element={<MoviesPage />} />
      <Route path="/series/:username" element={<SeriesPage />} />
      <Route path="/myList/:username" element={<MyList />} />
      <Route path="/details/:username/:id" element={<DetailsMain/>} />
      <Route path="/genres/:genre/:username" element={<GenresMoviesPage/>} />
      <Route path="/search/:username" element={<SearchMain/>} />
    </Routes>
  );
}
