import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./components/pages/login/LoginPage";
import Error from "./components/pages/error/error";
import MainPage from "./components/pages/main/MainPage";
import MoviesPage from "./components/pages/movies/MoviesPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="*" element={<Error />} />
        <Route path="/main/:username" element={<MainPage/>} />
        <Route path="/movies" element={<MoviesPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
