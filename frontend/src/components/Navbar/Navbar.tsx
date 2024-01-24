import React, { useState } from 'react';
import styles from "./Navbar.module.css"
import axios from 'axios';


export const Navbar = () => {
  const [searchText, setSearchText] = useState<string>('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const handleSearchSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Ce qui sera recherché:', searchText);
    const response = await axios.get(`http://localhost:8000/cine-project/search`, {
      params: {
        pageNumber: 1,
        searchText: searchText
      }
    });
    console.log(response.data); 
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
