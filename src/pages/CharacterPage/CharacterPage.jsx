import React, { useEffect, useState } from "react";
import axios from "axios";

export const CharacterPage = () => {
  const [characters, setCharacters] = useState([]);
  let url = "https://starwars-server.vercel.app/characters";

  useEffect(() => {
    axios(url).then((res) => {
      console.log(res);
      setCharacters(res.data.data.characters);
    });
  }, [url]);

  return (
    <>
      <div className="container-character">
        {characters &&
          characters.map((character) => {
            return (
              <div className="characters-card" key={character.id}>
                <img src={character.image} alt={character.name} />
                <p> {character.name}</p>
              </div>
            );
          })}
      </div>
    </>
  );
};
