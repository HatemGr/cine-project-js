import React, { useEffect, useState } from "react";
import styles from "./ResultArea.module.css";
import MovieCard from "../MovieCard/MovieCard";
import { useMovies } from "../../Context/MovieContext";
import { Link } from "react-router-dom";
import axios from "axios";

export const ResultArea = () => {
  const { fetchedMovies, getPopularMovies, getNextPage } = useMovies();

  const [favoriteMoviesIds, setFavoriteMoviesIds] = useState<number[]>([])

  const getFavoriteMoviesIds = async () => {
    const response = await axios.get<number[]>(
      `http://localhost:8000/cine-project/favorites-movies-id`
    );    
    setFavoriteMoviesIds(response.data)
  }

  const handleScroll = () => {
    const isBottom = window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight;
    if (isBottom) {
      getNextPage()
    }
  };

  useEffect(() => {
    getFavoriteMoviesIds()
    if(fetchedMovies.length === 0) {      
      getPopularMovies();
    }
    window.addEventListener('scroll', handleScroll);
  }, []);
  

  return (
    <div className={styles.layout}>
      {fetchedMovies.map((movie) => (
        <Link to={`/movies/${movie.id}`} style={{ textDecoration: 'none' }}>
          <MovieCard key={movie.id} movie={movie} isFavorite={favoriteMoviesIds.includes(movie.id)}/>
        </Link>
      ))}
    </div>
  );
};
