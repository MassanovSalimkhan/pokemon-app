import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PokemonsList = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=20") // Загружаем 20 покемонов
      .then((response) => response.json())
      .then((data) => setPokemons(data.results))
      .catch((error) => console.error("Ошибка при загрузке покемонов:", error));
  }, []);

  return (
    <div>
      <h1>Список покемонов</h1>
      <ul>
        {pokemons.map((pokemon, index) => (
          <li key={index}>
            <Link to={`/pokemon/${index + 1}`}>{pokemon.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonsList;
