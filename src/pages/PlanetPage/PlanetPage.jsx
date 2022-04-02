import React, { useEffect, useState } from "react";
import axios from "axios";

export const PlanetPage = () => {
  const [planets, setPlanets] = useState([]);
  let url = "https://starwars-server.vercel.app/planets";

  useEffect(() => {
    axios(url).then((res) => {
      //console.log(res);
      setPlanets(res.data.data.planets);
    });
  }, [url]);

  return (
    <>
      <div className="container-planets">
        {planets &&
          planets.map((planet) => {
            return (
              <div className="planet-card" key={planet.id}>
                <img src={planet.image} alt={planet.name} />
                <p> {planet.name}</p>
              </div>
            );
          })}
      </div>
    </>
  );
};
