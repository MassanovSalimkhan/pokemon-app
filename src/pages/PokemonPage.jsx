import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const PokemonPage = () => {
  const { id } = useParams(); // Получаем ID покемона из URL
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => response.json())
      .then((data) => setPokemon(data))
      .catch((error) => console.error("Ошибка при загрузке покемона:", error));
  }, [id]);

  if (!pokemon) return <p>Загрузка...</p>;

  return (
    <div>
      <h1>{pokemon.name}</h1>
      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        style={{ width: "150px" }}
      />
      <p>Вес: {pokemon.weight}</p>
      <p>Рост: {pokemon.height}</p>
      <Link to="/">Назад к списку</Link>
    </div>
  );
};

export default PokemonPage;
