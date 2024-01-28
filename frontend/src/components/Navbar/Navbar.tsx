import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { useMovies } from "../../Context/MovieContext";

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
      <div className={styles.logo}>Cine-Project</div>
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
