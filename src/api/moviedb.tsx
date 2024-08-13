import axios from "axios";
import { genreImages } from "../data/genreImages";
import { GenreType } from "../components/pages/main/catalog/Categories";

const apiKey = "e2dbd2d92f4b2fcba7949c8debe60f64";

export const GetGenreMovie = async () => {
  try {
    const res = await axios.get(
      "https://api.themoviedb.org/3/genre/movie/list?language=fr",
      {
        params: {
          api_key: apiKey,
        },
      }
    );
    return res.data.genres.map((genre: GenreType) => ({
      ...genre,
      image: genreImages[genre.name],
    }));
  } catch (err) {
    console.error("Erreur dans la recuperation du genre des films", err);
  }
};

export const GetPopularMovie = async () => {
  try {
    const res = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?language=fr-US&page=1",
      {
        params: {
          api_key: apiKey,
        },
      }
    );
    return res.data.results;
  } catch (err) {
    console.error("Erreur dans la recuperation du popular des films", err);
    throw err;
  }
};

export const GetAvailableMovie = async (page: number) => {
  try {
    const res = await axios.get(
      "https://api.themoviedb.org/3/movie/now_playing",
      {
        params: {
          api_key: apiKey,
          language: "fr-FR",
          page: page,
        },
      }
    );
    return res.data.results;
  } catch (err) {
    console.error("Erreur dans la recuperation des films disponibles", err);
    throw err;
  }
};

export const GetAvailableSerie = async (page: number) => {
  try {
    const res = await axios.get("https://api.themoviedb.org/3/tv/top_rated", {
      params: {
        api_key: apiKey,
        language: "fr-FR",
        page: page,
      },
    });
    return res.data.results;
  } catch (err) {
    console.error("Erreur dans la recuperation des films disponibles", err);
    throw err;
  }
};

export { apiKey };
