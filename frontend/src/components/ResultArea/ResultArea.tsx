import React, { useEffect } from "react";
import styles from "./ResultArea.module.css";
import MovieCard from "../MovieCard/MovieCard";
import { useMovies } from "../../Context/MovieContext";

export const ResultArea = () => {
  const { fetchedMovies, getPopularMovies, getNextPage } = useMovies();

  const handleScroll = () => {
    const isBottom = window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight;
    if (isBottom) {
      getNextPage()
    }
  };

  useEffect(() => {
    if(fetchedMovies.length === 0) {      
      getPopularMovies();
    }
    window.addEventListener('scroll', handleScroll);
  }, []);
  

  return (
    <div className={styles.layout}>
      {fetchedMovies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};
