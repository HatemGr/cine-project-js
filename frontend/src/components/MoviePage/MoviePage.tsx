import React, { useEffect, useState } from 'react';
import styles from './MoviePage.module.css';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { Movie } from '../../models';


const MoviePage = () => {
  const posterUrlPrefix = "https://image.tmdb.org/t/p/original/";

  const { id = "" } = useParams<string>()

  const [movie, setMovie] = useState<Movie>();

  const fetchMovie = async (movieId: string) => {
    const response = await axios.get<Movie>(
      `http://localhost:8000/cine-project/movies/${movieId}`
    );
    return response.data
  }

  useEffect(() => {
    fetchMovie(id).then((fetchedMovie: Movie) => {
      setMovie(fetchedMovie)
    })
  })

  return (
    <div className={styles.moviePage}>
      <div className={styles.imageContainer}>
        <img src={posterUrlPrefix + movie?.poster_path} alt={movie?.title} className={styles.movieImage} />
      </div>
      <div className={styles.summaryContainer}>
        <h2>{movie?.title}</h2>
        <p>{movie?.overview}</p>
        <Link to={`/`}>
        Retour à la page de recherche
      </Link>
      </div>
    </div>
  );
};

export default MoviePage;
