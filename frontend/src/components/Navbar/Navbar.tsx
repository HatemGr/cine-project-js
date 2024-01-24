import React, { useState } from 'react';
import styles from "./Navbar.module.css"

export const Navbar = () => {
  const [searchText, setSearchText] = useState<string>('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Ce qui sera recherché:', searchText);
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
        <button type="submit" className={styles.searchBarButton}>Rechercher</button>
      </form>
    </nav>
  );
};
