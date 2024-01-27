import React, { useEffect, useState } from 'react';
import styles from "./ResultArea.module.css"
import { Movie } from '../../models';
import axios from 'axios';


export const ResultArea = () => {
  const [movies, setMovies] = useState<Movie[]>([])

  useEffect(() => {
    axios.get(`http://localhost:8000/cine-project/movies/popular?pageNumber=1`)
    .then(response => {
      setMovies(response.data)
      console.log(response.data)}
    )
  }, [])

    return (
      <div className={styles.background}>
      </div>
    );
  };