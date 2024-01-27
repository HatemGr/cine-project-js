import React, { Fragment } from 'react';
import './App.css';
import { Navbar } from './components/Navbar';
import { ResultArea } from './components/ResultArea';

function App() {
  return (
    <Fragment>
      <Navbar />
      <ResultArea />
    </Fragment>
  );
}

export default App;
