import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export const MovieDetailPage = () => {
  const [movies, setMovies] = useState([]);
  const url = "https://starwars-server.vercel.app/movies";

  useEffect(() => {
    axios(url).then((res) => {
      setMovies(res.data.data.movies);
      //console.log(res.data.data.movies);
    });
  }, [url]);

  const { name } = useParams();

  const movie = movies.filter((movie) => {
    return movie.name === name;
  })[0];

  return (
    <>
      {movie && (
        <div className="container-filMakers">
          <h2>{movie.name}</h2>
          <img src={movie.poster} alt={movie.name} />
          <p>{movie.crawl}</p>
          {movie.filmMakers.map((filmMaker, index) => {
            //console.log(movie);
            return (
              <div key= {index}>
                <h4>Name: {filmMaker.name}</h4>
                <h4>Role: {filmMaker.role}</h4>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};
