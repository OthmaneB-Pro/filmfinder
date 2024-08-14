import React, { useState, useEffect } from 'react';
import { searchMoviesByTitle } from '../../../api/moviedb'; // Assurez-vous que le chemin est correct
import { PopularMovieType } from '../main/catalog/PopularMovieAndSeries';
import CardPrimary from '../../reusable-ui/CardPrimary';

export default function SearchButtonPage() {
  const [name, setName] = useState<string>('');
  const [results, setResults] = useState<PopularMovieType[]>([]);

  useEffect(() => {
    const fetchResults = async () => {
      if (name.trim() === '') {
        setResults([]); 
        return;
      }

      try {
        const searchResults = await searchMoviesByTitle(name);
        setResults(searchResults);
        console.log(results)
      } catch (error) {
        console.error('Search failed:', error);
      }
    };

    const debounce = setTimeout(() => {
      fetchResults();
    }, 500); // Ajout d'un délai pour éviter de faire trop de requêtes

    return () => clearTimeout(debounce); // Nettoie le timeout si `name` change
  }, [name]);

  return (
    <div>
      <input
        type="text"
        placeholder="Rechercher un film..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

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
}
