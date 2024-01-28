import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { useMovies } from "../../Context/MovieContext";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [searchText, setSearchText] = useState<string>("");
  const { getPopularMovies, getSearchedMovies } = useMovies();

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const handleSearchSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    if (searchText === "") {
      return getPopularMovies();
    }
    return getSearchedMovies(searchText);
  };

  return (
    <nav className={styles.navbar}>
      <Link to={`/`} style={{ textDecoration: "none" }}>
        <div className={styles.logo} style={{ color: "white" }}>
          Cine-Project
        </div>
      </Link>
      <Link
        to={`/favorites`}
        style={{ textDecoration: "none", color: "white" }}
      >
        Mes films
      </Link>

      <form onSubmit={handleSearchSubmit} className={styles.searchBar}>
        <input
          className={styles.searchBarInput}
          type="text"
          placeholder="Recherche ton film préféré..."
          value={searchText}
          onChange={handleSearchChange}
        />
        <button type="submit" className={styles.searchBarButton}>
          Rechercher
        </button>
      </form>
    </nav>
  );
};
