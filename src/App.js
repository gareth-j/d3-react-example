import React from 'react';
import data from './data/data.json';
import { ForceGraph } from "./components/forceGraph";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        A simple force graph
      </header>
      <section className="Main">
        <ForceGraph linksData={data.links} nodesData={data.nodes}/>
      </section>
    </div>
  );
}

export default App;
