import React, { Fragment } from 'react';
import './App.css';
import { Navbar } from './components/Navbar';
import { ResultArea } from './components/ResultArea';
import { MovieProvider } from './Context/MovieContext';

function App() {
  return (
    <Fragment>
      <MovieProvider>
      <Navbar />
      <ResultArea />
      </MovieProvider>
    </Fragment>
  );
}

export default App;
