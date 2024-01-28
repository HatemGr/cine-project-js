import React, { useEffect, useState } from "react";
import styles from "./MoviePage.module.css";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { Movie } from "../../models";

const MoviePage = () => {
  const posterUrlPrefix = "https://image.tmdb.org/t/p/original/";

  const { id = "" } = useParams<string>();

  const [movie, setMovie] = useState<Movie>();
  const [isFavorite, setIsFavorite] = useState(false)

  const getFavoriteMoviesIds = async () => {
    const response = await axios.get<number[]>(
      `http://localhost:8000/cine-project/favorite-movies-id`
    );    
    return response.data
  }

  const fetchMovie = async (movieId: string) => {
    const response = await axios.get<Movie>(
      `http://localhost:8000/cine-project/movies/${movieId}`
    );
    return response.data;
  };

  useEffect(() => {
    getFavoriteMoviesIds()
    fetchMovie(id)
    .then((fetchedMovie: Movie) => {
      setMovie(fetchedMovie);
      return fetchedMovie
    })
    .then((fetchedMovie: Movie) => {
      getFavoriteMoviesIds().then((favoriteMoviesIds: number[]) => {
        setIsFavorite(favoriteMoviesIds.includes(fetchedMovie.id))
      })
    });
  }, [isFavorite]);

  const toggleFavorites = async () => {
    await axios.post(
      `http://localhost:8000/cine-project/toggle-favorite/${id}`
    );
    setIsFavorite(preValue => !preValue)
  };

  return (
    <div className={styles.moviePage}>
      <div className={styles.imageContainer}>
        <img
          src={posterUrlPrefix + movie?.poster_path}
          alt={movie?.title}
          className={styles.movieImage}
        />
      </div>
      <div className={styles.summaryContainer}>
        <h2>{movie?.title}</h2>
        <p>{movie?.overview}</p>
        <button className={`${styles.toogleButton} ${isFavorite ? styles.remove : styles.add }`} onClick={toggleFavorites}> {isFavorite ? 'Retirer des favoris':'Ajouter aux favoris'} </button>
        <Link to={`/`} className={styles.return}>Retour à la page de recherche</Link>
      </div>
    </div>
  );
};

export default MoviePage;
