import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./components/pages/login/LoginPage";
import Error from "./components/pages/error/error";
import MainPage from "./components/pages/main/MainPage";
import MoviesPage from "./components/pages/movies/MoviesPage";
import SeriesPage from "./components/pages/series/SeriesPage";
import MyList from "./components/pages/myList/MyList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="*" element={<Error />} />
        <Route path="/main/:username" element={<MainPage/>} />
        <Route path="/movies" element={<MoviesPage/>} />
        <Route path="/series" element={<SeriesPage/>} />
        <Route path="/myList" element={<MyList/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
