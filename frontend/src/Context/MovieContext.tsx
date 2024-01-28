import React, { createContext, useState, useContext, ReactNode } from "react";
import axios from "axios";
import { Movie } from "../models";

interface MovieContextType {
  fetchedMovies: Movie[];
  getPopularMovies: (pageNumber: number) => Promise<void>;
  getSearchedMovies: (searchText: string, pageNumber: number) => Promise<void>;
}

export const MovieContext = createContext<MovieContextType>({
  fetchedMovies: [],
  getPopularMovies: async (pageNumber: number) => {},
  getSearchedMovies: async (searchText: string, pageNumber: number) => {},
});

interface MovieProviderProps {
  children: React.ReactNode;
}

export const MovieProvider: React.FC<MovieProviderProps> = ({ children }) => {
  const [fetchedMovies, setFetchedMovies] = useState<Movie[]>([]);

  const getPopularMovies = async (pageNumber: number) => {
    try {
      const response = await axios.get<Movie[]>(
        `http://localhost:8000/cine-project/movies/popular?pageNumber=${pageNumber}`
      );
      setFetchedMovies(response.data);
    } catch (error) {
      console.error("Error fetching popular movies:", error);
    }
  };

  const getSearchedMovies = async (searchText: string, pageNumber: number) => {
    try {
      const response = await axios.get<Movie[]>(
        `http://localhost:8000/cine-project/search`,
        {
          params: {
            pageNumber: pageNumber,
            searchText: searchText,
          },
        }
      );
      setFetchedMovies(response.data);
    } catch (error) {
      console.error("Error fetching searched movies:", error);
    }
  };

  return (
    <MovieContext.Provider
      value={{ fetchedMovies, getPopularMovies, getSearchedMovies }}
    >
      {children}
    </MovieContext.Provider>
  );
};

// Custom hook for consuming context
export const useMovies = () => useContext(MovieContext);
