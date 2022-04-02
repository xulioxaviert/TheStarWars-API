import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const MoviePage = () => {
    const [movies, setMovies] = useState([]);
    let url = "https://starwars-server.vercel.app/movies";

    useEffect(() => {
      axios(url).then((res) => {
        //console.log(res);
        setMovies(res.data.data.movies);
      });
    }, [url]);

    return (
      <>
        <div className="container-movies">
          {movies &&
            movies.map((movie) => {
              return (
                <div className="movie-card" key={movie.id}>
                  <Link to={`/movies/${movie.name}`}>
                    <img src={movie.poster} alt={movie.name} />
                  </Link>
                  <p> {movie.name}</p>
                </div>
              );
            })}
        </div>
      </>
    );
};
