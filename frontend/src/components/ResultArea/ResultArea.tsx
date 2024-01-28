import React, { useEffect } from "react";
import styles from "./ResultArea.module.css";
import MovieCard from "../MovieCard/MovieCard";
import { useMovies } from "../../Context/MovieContext";

export const ResultArea = () => {
  const { fetchedMovies, getPopularMovies } = useMovies();

  useEffect(() => {
    getPopularMovies(1);
  }, []);

  return (
    <div className={styles.layout}>
      {fetchedMovies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};
