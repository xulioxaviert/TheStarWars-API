import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export const CharacterDetailPage = () => {
  const [characters, setCharacters] = useState([]);
  const url = "https://starwars-server.vercel.app/characters";

  useEffect(() => {
    axios(url).then((res) => {
      setCharacters(res.data.data.characters);
      //console.log(res.data.data.characters);
    });
  }, [url]);

  const { name } = useParams();

  const character = characters.filter((character) => {
    return character.name === name;
  })[0];

  //console.log("un character", character);
  return (
    <>
      {character && (
        <div className="character-card">
          <div className="card">
            <h2>{character.name}</h2>
            <img src={character.image} alt={character.name} />
            <p>{character.description}</p>
            {character.family.map((family, index) => {
              return (
                <div key={index}>
                  <h4>Name: {family.name}</h4>
                  <h4>Member: {family.member}</h4>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};
