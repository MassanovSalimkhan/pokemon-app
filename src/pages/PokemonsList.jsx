import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const PokemonsList = () => {
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=500'); // Загружаем 300 покемонов
        if (!response.ok) throw new Error('Failed to fetch pokemons');
        const data = await response.json();
        setPokemons(data.results);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPokemons();
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div style={{ padding: '16px' }}>
      <h1 style={{ textAlign: 'center' }}>Pokemons List</h1>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '16px',
        }}
      >
        {pokemons.map((pokemon, index) => (
          <div
            key={index}
            style={{
              width: '150px',
              textAlign: 'center',
              border: '1px solid #ddd',
              borderRadius: '8px',
              padding: '8px',
              backgroundColor: '#f9f9f9',
            }}
          >
            <Link
              to={`/pokemon/${index + 1}`}
              style={{ textDecoration: 'none', color: 'black' }}
            >
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`}
                alt={pokemon.name}
                style={{ width: '100px', height: '100px' }}
              />
              <p>{pokemon.name}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PokemonsList;
