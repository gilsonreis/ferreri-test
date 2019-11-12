import React from 'react';
import './App.css';
import Ideas from './components/Ideas';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Idea Board</h1> 
        <h4>A place to save good ideas</h4>
      </header>
      <main>
        <Ideas />
      </main>
    </div>
  ); 
}

export default App;
