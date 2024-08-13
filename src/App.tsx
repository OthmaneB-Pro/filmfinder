import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./components/pages/login/LoginPage";
import Error from "./components/pages/error/error";
import MainPage from "./components/pages/main/MainPage";
import MoviesPage from "./components/pages/movies/MoviesPage";
import SeriesPage from "./components/pages/series/SeriesPage";
import MyList from "./components/pages/myList/MyList";
import AppContent from "./components/AppContent"; 
import DetailsMain from "./components/pages/detailsMoviesAndSeries/DetailsMain";

function App() {
  return (
    <BrowserRouter>
      <AppContent>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="*" element={<Error />} />
          <Route path="/main/:username" element={<MainPage />} />
          <Route path="/movies/:username" element={<MoviesPage />} />
          <Route path="/series/:username" element={<SeriesPage />} />
          <Route path="/myList/:username" element={<MyList />} />
          <Route path="/details/:id" element={<DetailsMain/>} />
        </Routes>
      </AppContent>
    </BrowserRouter>
  );
}

export default App;
