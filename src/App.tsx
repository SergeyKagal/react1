import React from 'react';

import { CardWrapper } from './components/card-wrapper';
import { Navbar } from './components/navbar';
import { SearchBar } from './components/searchbar';

function App() {
  return (
    <div className="main-wrapper grey lighten-2">
      <Navbar />
      <SearchBar />
      <CardWrapper />
    </div>
  );
}

export default App;
