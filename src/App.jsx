import React from 'react';

import Airline from './components/airline/Airline';
import Filter from './components/filter/Filter';
import './App.scss';
import Header from './components/header/Header';

function App() {
  return (
    <div className="container">
      <Header />
      <div className="airline-genereal">
        <Filter />
        <Airline />
      </div>
    </div>
  );
}

export default App;
