// MovieCard.tsx
import React from "react";
import styles from "./MovieCard.module.css";
import { Movie } from "../../models";

interface MovieCardProps {
  movie: Movie;
}

const MovieCard = ({ movie }: MovieCardProps) => {
  const posterUrlPrefix = "https://image.tmdb.org/t/p/original/";
  const maxPopularity = 10;
  const fullStars = Math.floor((movie.vote_average / maxPopularity) * 5);

  return (
    <div className={styles.movieCard}>
      <div
        className={styles.moviePoster}
        style={{
          backgroundImage: `url(${posterUrlPrefix + movie.poster_path})`,
        }}
      >
        <div className={styles.gradientOverlay}></div>
      </div>
      <div className={styles.starRating}>
        {[...Array(5)].map((_, index) => {
          const fill =
            index <= fullStars 
              ? styles.orange
              : styles.white;
          return (
            <span key={index} className={`${styles.star} ${fill}`}>
              ★
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default MovieCard;
