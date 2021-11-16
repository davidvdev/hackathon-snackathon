import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css';
import Filters from './pages/Filters';

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
                <Link to="/filters">
                  <button>Search With Filters?</button>
                </Link>
            </div>
        }/>
        <Route path="/filters/*" element={<Filters />} />
      </Routes>
    </Router>
  );
}

export default App;