import React, { useEffect, useState } from "react";
import { Card } from "./Card";

export const Characters = () => {
  const [characters, setCharacters] = useState([]);

  const getCharacters = async () => {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const { results } = await response.json();
    setCharacters(results);
  };

  useEffect(() => {
    getCharacters();
  }, []);
  return (
    <div className="cards-container">
      {characters.map((character) => {
        return <Card key={character.id} {...character} />;
      })}
    </div>
  );
};
