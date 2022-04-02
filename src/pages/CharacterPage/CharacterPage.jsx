import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
//import { CharacterDetailPage } from "../CharacterDetailPage/CharacterDetailPage";

export const CharacterPage = () => {
  const [characters, setCharacters] = useState([]);
  let url = "https://starwars-server.vercel.app/characters";

  useEffect(() => {
    axios(url).then((res) => {
      //console.log(res);
      setCharacters(res.data.data.characters);
    });
  }, [url]);

  return (
    <>
      <div className="container-character">
        {characters &&
          characters.map((character, index) => {
            return (
              <div key={index}>
                {/* <CharacterDetailPage
                  key={character.id}
                  id={character.id}
                  name={character.name}
                  origin={character.origin}
                  role={character.role}
                  description={character.description}
                /> */}
                <div className="characters-card">
                  <Link to={`/characters/${character.name}`}>
                    <img src={character.image} alt={character.name} />
                  </Link>
                  <p> {character.name}</p>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};
