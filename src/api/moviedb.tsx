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

export const GetMovieById = async (id : string) => {
  try {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}`,
      {
        params: {
          api_key: apiKey,
          language: "fr-FR",
        },
      }
    );
    return res.data ;
    
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const GetMoviesByGenre = async (genreId: string) => {
  try {
    const res = await axios.get(
      `https://api.themoviedb.org/3/discover/movie`,
      {
        params: {
          api_key: apiKey,
          language: 'fr-FR',
          with_genres: genreId,  
        },
      }
    );
    return res.data.results;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const searchMoviesByTitle = async (name: string) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie`,
      {
        params: {
          api_key: apiKey,
          query: name,  
          language: 'fr-FR',
        },
      }
    );
    return response.data.results;  
  } catch (error) {
    console.error('Error fetching movie search results:', error);
    throw error;
  }
};
export { apiKey };
