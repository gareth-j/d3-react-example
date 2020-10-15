import React from 'react';

import { ForceGraph } from "./components/forceGraph";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        A simple force graph
      </header>
      <section className="Main">
        <ForceGraph/>
      </section>
    </div>
  );
}

export default App;
