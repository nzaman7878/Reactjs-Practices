import { useState } from 'react';
import CoreConcepts from './components/CoreConcepts.jsx';
import Header from './components/Header/Header.jsx';
import Examples from './components/Examples.jsx';
import { EXAMPLES } from './data.js';

function App() {

  return (
    <div>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
        
      </main>
    </div>
  );
}

export default App;
