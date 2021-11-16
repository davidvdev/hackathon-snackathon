import React, { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Snack Upon</h1>
        <button>Search Random Recipes</button>
        <button>Search With Filters?</button>
    </div>
  );
}

export default App;
