import React, { Fragment } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { Navbar } from './components/Navbar';
import { ResultArea } from './components/ResultArea';
import { MovieProvider } from './Context/MovieContext';
import MoviePage from './components/MoviePage/MoviePage';
import { Favorites } from './components/Favorites/Favorites';

function App() {
  return (
    <Fragment>
      <MovieProvider>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<ResultArea />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/movies/:id" element={<MoviePage />} />
        </Routes>
      </BrowserRouter>
      </MovieProvider>
    </Fragment>
  );
}

export default App;
