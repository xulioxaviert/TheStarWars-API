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
          <p>{movie.name}</p>
          <img src={movie.poster} alt={movie.name} />
          <p>{movie.crawl}</p>
          {movie.filmMakers.map((filmMaker, index) => {
            //console.log(movie);
            return (
              <div key= {index}>
                <p>Name: {filmMaker.name}</p>
                <p>Role: {filmMaker.role}</p>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};
