import React, { useState } from 'react';
import { searchMoviesByTitle } from '../../../api/moviedb'; // Assurez-vous que le chemin est correct
import { PopularMovieType } from '../main/catalog/PopularMovieAndSeries';
import CardPrimary from '../../reusable-ui/CardPrimary';

export default function SearchButtonPage() {
  const [name, setName] = useState<string>('');
  const [results, setResults] = useState<PopularMovieType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSearch = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (name.trim() === '') return;

    setLoading(true);
    try {
      const searchResults = await searchMoviesByTitle(name);
      setResults(searchResults);
    } catch (error) {
      console.error('Search failed:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Rechercher un film..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Rechercher</button>
      </form>
      {loading && <p>Chargement...</p>}
      <div>
        {results.map((movie) => (
          <CardPrimary
            key={movie.id}
            title={movie.title}
            image={movie.poster_path}
            label={movie.overview}
            date={movie.release_date}
            onClick={() => {}}
            onFavorite={() => {}}
          />
        ))}
      </div>
    </div>
  );
};


