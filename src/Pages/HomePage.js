import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=1"
      )
      .then((response) => setMovies(response.data.results));
  }, []);

  return (
    <div className="container mt-4">
      <div className="row">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="col-lg-3 col-md-4 col-sm-6 mb-4 gray-black-bg"
          >
            <div className="card">
              <Link to={`/movie/${movie.id}`} className="text-decoration-none">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  className="card-img-top"
                  alt={movie.title}
                />
                <div className="card-body gray-black-bg">
                  <h5 className="card-title text-center text-light">
                    {movie.title}
                  </h5>
                  <p className="card-text text-center text-light">
                    Rating: {movie.vote_average}
                  </p>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
