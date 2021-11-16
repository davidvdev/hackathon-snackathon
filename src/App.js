import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';

function App() {

  const blankRecipe = {
    type: "food",
    meal: "dinner"
  }

  const [recipe, setRecipe] = useState(blankRecipe)
  
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={
              <div className="App">
              <h1>Snack Upon</h1>
                <button>Search Random Recipes</button>
                <button>Search With Filters?</button>
            </div>
        }/>
      </Routes>
    </Router>
  );
}

export default App;