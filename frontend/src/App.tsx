import React, { Fragment } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { Navbar } from './components/Navbar';
import { ResultArea } from './components/ResultArea';
import { MovieProvider } from './Context/MovieContext';
import MoviePage from './components/MoviePage/MoviePage';

function App() {
  return (
    <Fragment>
      <MovieProvider>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ResultArea />} />
          <Route path="/movies/:id" element={<MoviePage />} />
        </Routes>
      </BrowserRouter>
      </MovieProvider>
    </Fragment>
  );
}

export default App;
