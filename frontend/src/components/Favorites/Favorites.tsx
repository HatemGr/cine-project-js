import React, { useEffect, useState } from "react";
import styles from "./Favorites.module.css";
import MovieCard from "../MovieCard/MovieCard";
import { Link } from "react-router-dom";
import axios from "axios";
import { Movie } from "../../models";

export const Favorites = () => {
  const [favoriteMovies, setFavoriteMoviess] = useState<Movie[]>([]);

  const getFavoriteMovies = async () => {
    const response = await axios.get<Movie[]>(
      `http://localhost:8000/cine-project/favorite-movies`
    );
    setFavoriteMoviess(response.data);
  };

  useEffect(() => {
    getFavoriteMovies();
  }, []);

  return (
    <>
      <div className={styles.layout}>
        {favoriteMovies.map((movie) => (
          <Link to={`/movies/${movie.id}`} style={{ textDecoration: "none" }}>
            <MovieCard
              key={movie.id}
              movie={movie}
              isFavorite={true}
            />
          </Link>
        ))}
      </div>
    </>
  );
};
